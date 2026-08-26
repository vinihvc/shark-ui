"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@registry/react/components/toast";
import { Controller, useForm } from "react-hook-form";
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
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">
            Files: {data.resume.map((f) => f.name).join(", ")}
          </p>
          <pre>
            <code>
              {JSON.stringify(
                {
                  resume: data.resume.map((f) => ({
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Application materials</CardTitle>
          <CardDescription>Upload your résumé or CV.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="resume"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>Résumé</FieldLabel>
                  <FileUpload
                    accept=".pdf,.doc,.docx"
                    name={field.name}
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
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
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
