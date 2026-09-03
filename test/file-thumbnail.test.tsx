import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, render } from "@testing-library/react";
import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

afterEach(cleanup);

const infoBackground = /bg-info/;
const destructiveBackground = /bg-destructive/;
const successBackground = /bg-success/;
const primaryBackground = /bg-primary/;
const secondaryBackground = /bg-secondary/;
const warningBackground = /bg-warning/;
const whiteBackground = /bg-white/;
const whiteText = /text-white/;

const getThumbnail = (container: HTMLElement) => {
  const thumbnail = container.querySelector<HTMLElement>(
    '[data-slot="file-thumbnail"]'
  );
  assert.ok(thumbnail, "Expected a file thumbnail.");

  const sheet = thumbnail.querySelector<HTMLElement>(
    '[data-slot="file-thumbnail-sheet"]'
  );
  assert.ok(sheet, "Expected a file sheet.");

  return { sheet, thumbnail };
};

const getBadge = (thumbnail: HTMLElement) => {
  const badge = thumbnail.querySelector<HTMLElement>(
    '[data-slot="file-thumbnail-badge"]'
  );
  assert.ok(badge, "Expected an extension badge.");
  return badge;
};

describe("FileThumbnail", () => {
  it("maps supported and unsupported formats to their tone classes", () => {
    const { container, rerender } = render(<FileThumbnail format=" .PnG " />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      primaryBackground
    );

    rerender(<FileThumbnail format="docx" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      infoBackground
    );

    rerender(<FileThumbnail format="mp3" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      destructiveBackground
    );

    rerender(<FileThumbnail format="mp4" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      destructiveBackground
    );

    rerender(<FileThumbnail format="js" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      warningBackground
    );

    rerender(<FileThumbnail format="ts" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      infoBackground
    );

    rerender(<FileThumbnail format="py" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      successBackground
    );

    rerender(<FileThumbnail format="xps" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      destructiveBackground
    );

    rerender(<FileThumbnail format="xlsx" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      successBackground
    );

    rerender(<FileThumbnail format="rar" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      successBackground
    );

    rerender(<FileThumbnail format="exe" />);
    assert.match(
      getBadge(getThumbnail(container).thumbnail).className,
      secondaryBackground
    );
  });

  it("prefers an explicit tone and keeps the file sheet white", () => {
    const { container } = render(<FileThumbnail format="png" tone="warning" />);
    const { sheet, thumbnail } = getThumbnail(container);

    assert.match(getBadge(thumbnail).className, warningBackground);
    assert.match(getBadge(thumbnail).className, whiteText);
    assert.match(sheet.className, whiteBackground);
  });

  it("renders a neutral FILE badge when no format is supplied", () => {
    const { container } = render(<FileThumbnail />);
    const { sheet, thumbnail } = getThumbnail(container);

    const badge = getBadge(thumbnail);
    assert.equal(badge.textContent, "FILE");
    assert.match(badge.className, secondaryBackground);
    assert.match(sheet.className, whiteBackground);
  });
});
