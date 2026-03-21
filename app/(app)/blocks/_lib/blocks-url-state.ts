"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const SEARCH_DEBOUNCE_MS = 250;

export const useBlocksCategoryState = (validCategories: Set<string>) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryRaw = searchParams.get("category");

  const selectedCategory = useMemo(() => {
    if (!categoryRaw) {
      return "all";
    }

    if (!validCategories.has(categoryRaw)) {
      return "all";
    }

    return categoryRaw;
  }, [categoryRaw, validCategories]);

  const setCategory = useCallback(
    (next: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (next === "all") {
        params.delete("category");
      } else {
        params.set("category", next);
      }

      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    },
    [pathname, router, searchParams]
  );

  return { selectedCategory, setCategory };
};

/**
 * Draft value for the search input + debounced sync to `?q=`.
 * Catalog filtering should read `q` from `useSearchParams()` so it tracks the URL.
 */
export const useBlocksSearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const qFromUrl = searchParams.get("q") ?? "";

  const [draft, setDraft] = useState(qFromUrl);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => {
    setDraft(qFromUrl);
  }, [qFromUrl]);

  const commit = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }

      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    },
    [pathname, router, searchParams]
  );

  const setQ = useCallback(
    (value: string | null) => {
      const next = value ?? "";
      setDraft(next);

      if (debounceRef.current !== undefined) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        commit(next);
      }, SEARCH_DEBOUNCE_MS);
    },
    [commit]
  );

  useEffect(
    () => () => {
      if (debounceRef.current !== undefined) {
        clearTimeout(debounceRef.current);
      }
    },
    []
  );

  return [draft, setQ] as const;
};
