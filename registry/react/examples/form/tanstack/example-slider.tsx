"use client";

import { toast } from "@registry/react/components/toast";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
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

const formSchema = z.object({
  priceRange: z
    .array(z.number())
    .length(2)
    .refine(([low, high]) => low < high, {
      message: "The minimum price must be less than the maximum.",
    })
    .refine(([low, high]) => low >= PRICE_MIN && high <= PRICE_MAX, {
      message: `Keep both values between $${PRICE_MIN.toLocaleString()} and $${PRICE_MAX.toLocaleString()}.`,
    }),
});

const defaultRange = [0, PRICE_MAX];

const Example = () => {
  const form = useForm({
    defaultValues: { priceRange: defaultRange },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "price-range-submitted",
        title: "Price filter saved",
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Listings filter</CardTitle>
          <CardDescription>
            Set a price range so we only show results in your budget.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <Slider
                    max={PRICE_MAX}
                    min={0}
                    onValueChange={({ value }) => field.handleChange(value)}
                    step={50}
                    value={field.state.value ?? defaultRange}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <SliderLabel>Price range</SliderLabel>
                      <SliderValue>
                        {`$${field.state.value?.[0]}`} -{" "}
                        {`$${field.state.value?.[1]}`}
                      </SliderValue>
                    </div>
                  </Slider>
                  <FieldDescription>
                    Drag each thumb to set the lower and upper bound.
                  </FieldDescription>
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="priceRange"
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => form.reset()} variant="outline">
            Reset
          </Button>
          <Button type="submit">Apply</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
