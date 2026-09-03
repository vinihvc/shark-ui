import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";

afterEach(cleanup);

const getChoiceField = (container: HTMLElement, value: string) => {
  const input = container.querySelector<HTMLInputElement>(
    `input[value="${value}"]`
  );
  assert.ok(input, `Expected a choice input with value "${value}".`);

  const field = input.closest<HTMLElement>('[data-slot="field"]');
  assert.ok(field, `Expected "${value}" to be contained by a Field.`);

  return { field, input };
};

const preventChoiceToggle: React.MouseEventHandler<HTMLDivElement> = (event) =>
  event.preventDefault();

const MultipleQuestionnaire = (props: {
  disabled?: boolean;
  onChoiceClick?: React.MouseEventHandler<HTMLDivElement>;
}) => (
  <Questionnaire items={[{ multiple: true, name: "interests" }]}>
    <QuestionnaireItem name="interests">
      <QuestionnaireTitle>What would you like to learn?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice
          disabled={props.disabled}
          onClick={props.onChoiceClick}
          value="design"
        >
          Interface design
        </QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
  </Questionnaire>
);

const SingleQuestionnaire = (props: {
  onChoiceClick?: React.MouseEventHandler<HTMLDivElement>;
}) => (
  <Questionnaire items={[{ name: "delivery" }]}>
    <QuestionnaireItem name="delivery">
      <QuestionnaireTitle>How should we send your order?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice onClick={props.onChoiceClick} value="standard">
          Standard delivery
        </QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
  </Questionnaire>
);

const MultiStepQuestionnaire = () => (
  <Questionnaire
    items={[
      { name: "delivery" },
      { name: "installation" },
      { name: "confirmation" },
    ]}
  >
    <QuestionnaireProgress />
    <QuestionnaireItem name="delivery">
      <QuestionnaireTitle>How should we send your order?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice value="standard">
          Standard delivery
        </QuestionnaireChoice>
        <QuestionnaireChoice value="express">
          Express delivery
        </QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
    <QuestionnaireItem name="installation">
      <QuestionnaireTitle>Would you like installation?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice value="yes">Yes</QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
    <QuestionnaireItem name="confirmation">
      <QuestionnaireTitle>Confirm your order</QuestionnaireTitle>
    </QuestionnaireItem>
    <QuestionnaireActions>
      <QuestionnaireNext />
    </QuestionnaireActions>
  </Questionnaire>
);

describe("Questionnaire choices", () => {
  it("toggles a multiple choice when its Field padding is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<MultipleQuestionnaire />);
    const { field, input } = getChoiceField(container, "design");

    await user.click(field);
    assert.equal(input.checked, true);

    await user.click(field);
    assert.equal(input.checked, false);
  });

  it("does not toggle a disabled multiple choice from its Field padding", async () => {
    const user = userEvent.setup();
    const { container } = render(<MultipleQuestionnaire disabled />);
    const { field, input } = getChoiceField(container, "design");

    await user.click(field);
    assert.equal(input.checked, false);
  });

  it("does not toggle a multiple choice when its public click handler cancels", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MultipleQuestionnaire onChoiceClick={preventChoiceToggle} />
    );
    const { field, input } = getChoiceField(container, "design");

    await user.click(field);
    assert.equal(input.checked, false);
  });

  it("uses the choice root as the public click handler currentTarget", async () => {
    const user = userEvent.setup();
    const currentTargets: EventTarget[] = [];
    const onChoiceClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
      currentTargets.push(event.currentTarget);
    };
    const { container: multipleContainer } = render(
      <MultipleQuestionnaire onChoiceClick={onChoiceClick} />
    );
    const { field } = getChoiceField(multipleContainer, "design");

    await user.click(field);

    assert.equal(currentTargets.length, 1);

    const { container: singleContainer } = render(
      <SingleQuestionnaire onChoiceClick={onChoiceClick} />
    );
    const radio = singleContainer.querySelector<HTMLElement>(
      '[data-questionnaire-answer="choice"]'
    );
    assert.ok(radio, "Expected the standard radio choice.");

    await user.click(radio);

    assert.equal(currentTargets.length, 2);

    assert.deepEqual(currentTargets, [
      multipleContainer.querySelector('[data-slot="questionnaire-choice"]'),
      singleContainer.querySelector('[data-slot="questionnaire-choice"]'),
    ]);
  });

  it("submits the selected single-choice value through FormData", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Questionnaire items={[{ name: "delivery" }]}>
        <QuestionnaireItem name="delivery">
          <QuestionnaireTitle>
            How should we send your order?
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="standard">
              Standard delivery
            </QuestionnaireChoice>
            <QuestionnaireChoice value="express">
              Express delivery
            </QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
      </Questionnaire>
    );
    const radio = container.querySelector<HTMLElement>(
      '[data-questionnaire-answer="choice"][data-value="express"]'
    );
    const form = container.querySelector("form");
    assert.ok(radio, "Expected the express radio choice.");
    assert.ok(form, "Expected Questionnaire to render a form.");

    await user.click(radio);

    assert.deepEqual(new FormData(form).getAll("delivery"), ["express"]);
  });

  it("keeps horizontal radio navigation with the radio group", async () => {
    const user = userEvent.setup();
    const { container, getByRole } = render(<MultiStepQuestionnaire />);
    const standard = container.querySelector<HTMLInputElement>(
      'input[value="standard"]'
    );
    assert.ok(standard, "Expected the standard delivery radio input.");

    await user.click(standard);
    await user.keyboard("{ArrowRight}");

    assert.equal(getByRole("progressbar").textContent, "1 of 3");

    await user.keyboard("{Enter}");

    assert.equal(getByRole("progressbar").textContent, "2 of 3");

    const next = getByRole("button", { name: "Next" });
    assert.equal(next.getAttribute("aria-keyshortcuts"), "Enter");

    const yes = container.querySelector<HTMLElement>(
      '[data-questionnaire-answer="choice"][data-value="yes"]'
    );
    assert.ok(yes, "Expected the installation choice.");

    await user.click(yes);
    await user.click(next);

    assert.equal(getByRole("progressbar").textContent, "3 of 3");
  });
});
