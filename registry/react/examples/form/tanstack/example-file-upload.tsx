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
  FieldLabel,
} from "@/registry/react/components/field";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
} from "@/registry/react/components/file-upload";

const formSchema = z.object({
  resume: z
    .array(z.instanceof(File))
    .min(1, "Please upload at least one PDF or Word document."),
});

const Example = () => {
  const form = useForm({
    defaultValues: { resume: [] as File[] },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <div className="mt-2 flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">
              Files: {value.resume.map((f) => f.name).join(", ")}
            </p>
            <pre>
              <code>
                {JSON.stringify(
                  {
                    resume: value.resume.map((f) => ({
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
          <CardTitle>Application materials</CardTitle>
          <CardDescription>Upload your résumé or CV.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldLabel>Résumé</FieldLabel>
                  <FileUpload
                    accept=".pdf,.doc,.docx"
                    name={field.name}
                    onFileAccept={(e) => field.handleChange(e.files)}
                  >
                    <FileUploadDropzone>
                      <FileUploadDropzoneIcon />
                    </FileUploadDropzone>
                    <FileUploadList />
                  </FileUpload>
                  <FieldDescription>
                    Accepted formats: PDF and Word documents.
                  </FieldDescription>
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="resume"
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => form.reset()} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
