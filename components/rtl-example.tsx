"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const translations = {
  en: {
    dir: "ltr",
    label: "English",
    values: {
      title: "Login to your account",
      description: "Enter your email below to login to your account",
      signUp: "Sign Up",
      email: "Email",
      emailPlaceholder: "m@example.com",
      password: "Password",
      forgotPassword: "Forgot your password?",
      login: "Login",
      loginWithGoogle: "Login with Google",
    },
  },
  ar: {
    dir: "rtl",
    label: "Arabic (عربي)",
    values: {
      title: "تسجيل الدخول إلى حسابك",
      description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك",
      signUp: "إنشاء حساب",
      email: "البريد الإلكتروني",
      emailPlaceholder: "m@example.com",
      password: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      login: "تسجيل الدخول",
      loginWithGoogle: "تسجيل الدخول باستخدام Google",
    },
  },
  he: {
    dir: "rtl",
    label: "Hebrew (עברית)",
    values: {
      title: "התחבר לחשבון שלך",
      description: "הזן את האימייל שלך למטה כדי להתחבר לחשבון שלך",
      signUp: "הירשם",
      email: "אימייל",
      emailPlaceholder: "m@example.com",
      password: "סיסמה",
      forgotPassword: "שכחת את הסיסמה?",
      login: "התחבר",
      loginWithGoogle: "התחבר עם Google",
    },
  },
};

export const RTLExample = () => {
  const [selectedLocale, setSelectedLocale] =
    React.useState<keyof typeof translations>("ar");

  const t = translations[selectedLocale ?? "en"];

  return (
    <div className="h-[500px] rounded-xl border">
      <div className="flex justify-between border-b p-4">
        <NativeSelect
          onChange={(e) =>
            setSelectedLocale(e.target.value as keyof typeof translations)
          }
          value={selectedLocale}
        >
          {Object.entries(translations).map(([lang, t]) => (
            <NativeSelectOption key={lang} value={lang}>
              {t?.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>

      <div className="flex w-full justify-center p-4">
        <Card className="mx-auto w-full max-w-sm" dir={t.dir}>
          <CardHeader>
            <CardTitle>{t.values.title}</CardTitle>
            <CardDescription>{t.values.description}</CardDescription>
            <CardAction>
              <Button variant="link">{t.values.signUp}</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel>{t.values.email}</FieldLabel>
                  <Input
                    placeholder={t.values.emailPlaceholder}
                    required
                    type="email"
                  />
                </Field>
                <Field className="grid gap-2">
                  <div className="flex items-center">
                    <FieldLabel>{t.values.password}</FieldLabel>
                    <a
                      className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                      href="#"
                    >
                      {t.values.forgotPassword}
                    </a>
                  </div>
                  <Input required type="password" />
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full" type="submit">
              {t.values.login}
            </Button>
            <Button className="w-full" variant="outline">
              {t.values.loginWithGoogle}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
