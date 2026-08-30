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
  FieldLabel,
} from "@/registry/react/components/field";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
} from "@/registry/react/components/file-upload";

const Example = () => {
  const form = useForm({
    initialInput: { resume: [] as File[] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">
            Files: {output.resume.map((f) => f.name).join(", ")}
          </p>
          <pre>
            <code>
              {JSON.stringify(
                {
                  resume: output.resume.map((f) => ({
                    name: f.name,
                    size: f.size,
                  })),
                },
                null,
                2
              )}
            </code>
          </pre>
        </div>
      ),
      id: "resume-submitted",
      title: "Resume uploaded",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Application materials</CardTitle>
          <CardDescription>Upload your résumé or CV.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["resume"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Résumé</FieldLabel>
                  <FileUpload
                    accept=".pdf,.doc,.docx"
                    name={field.props.name}
                    onFileAccept={(e) => field.onChange(e.files)}
                  >
                    <FileUploadDropzone>
                      <FileUploadDropzoneIcon />
                    </FileUploadDropzone>
                    <FileUploadList />
                  </FileUpload>
                  <FieldDescription>
                    Accepted formats: PDF and Word documents.
                  </FieldDescription>
                  <FieldError>{field.errors?.[0]}</FieldError>
                </Field>
              )}
            </FormischField>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => reset(form)} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

const formSchema = v.object({
  resume: v.pipe(
    v.array(v.custom<File>((i) => i instanceof File)),
    v.minLength(1, "Please upload at least one PDF or Word document.")
  ),
});

export default Example;
