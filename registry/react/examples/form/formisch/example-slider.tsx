"use client";

import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { toast } from "@registry/react/components/toast";
import * as v from "valibot";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/registry/react/components/field";
import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

const PRICE_MIN = 200;
const PRICE_MAX = 10_000;

const formSchema = v.object({
  priceRange: v.pipe(
    v.array(v.number()),
    v.minLength(2, "Select a lower and upper price."),
    v.maxLength(2, "Select a lower and upper price."),
    v.check(
      ([low, high]) => low < high,
      "The minimum price must be less than the maximum."
    ),
    v.check(
      ([low, high]) => low >= PRICE_MIN && high <= PRICE_MAX,
      `Keep both values between $${PRICE_MIN.toLocaleString()} and $${PRICE_MAX.toLocaleString()}.`
    )
  ),
});

const defaultRange = [0, PRICE_MAX];

const Example = () => {
  const form = useForm({
    initialInput: { priceRange: defaultRange },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "price-range-submitted",
      title: "Price filter saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Listings filter</CardTitle>
          <CardDescription>
            Set a price range so we only show results in your budget.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["priceRange"]}>
              {(field) => {
                const value = (field.input as number[]) ?? defaultRange;

                return (
                  <Field invalid={Boolean(field.errors?.length)}>
                    <Slider
                      max={PRICE_MAX}
                      min={0}
                      onValueChange={({ value: next }) => field.onChange(next)}
                      step={50}
                      value={value}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <SliderLabel>Price range</SliderLabel>
                        <SliderValue>
                          {`$${value[0]}`} - {`$${value[1]}`}
                        </SliderValue>
                      </div>
                    </Slider>
                    <FieldDescription>
                      Drag each thumb to set the lower and upper bound.
                    </FieldDescription>
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </Field>
                );
              }}
            </FormischField>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => reset(form)} variant="outline">
            Reset
          </Button>
          <Button type="submit">Apply</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default Example;
