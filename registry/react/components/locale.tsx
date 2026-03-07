"use client";

import {
  LocaleProvider as ArkLocaleProvider,
  useLocaleContext as useArkLocaleContext,
} from "@ark-ui/react/locale";

export const LocaleProvider = ArkLocaleProvider;

export const useLocale = useArkLocaleContext;
