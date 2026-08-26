"use client";

import {
  LocaleProvider as ArkLocaleProvider,
  useDateFormatter as useArkDateFormatter,
  useLocaleContext as useArkLocaleContext,
} from "@ark-ui/react/locale";

export const LocaleProvider = ArkLocaleProvider;

export const useLocale = useArkLocaleContext;

export const useDateFormatter = useArkDateFormatter;
