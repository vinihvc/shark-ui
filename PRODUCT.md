# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

React and Next.js developers evaluating or using Shark UI who need composed,
production-oriented interfaces they can inspect, install, and own in their
projects.

## Product Purpose

Shark UI is a shadcn-style component registry built on Ark UI and Tailwind CSS
v4. It provides accessible primitives, examples, themes, templates, and blocks
that developers copy into their own codebases. Success means a developer can
quickly understand a composition, preview it responsively, inspect every file,
and install it with the shadcn CLI.

## Positioning

Shark UI brings the copy-and-own registry workflow to Ark UI, with compositions
and documentation that follow Ark's APIs instead of porting Radix assumptions.

## Operating Context

Developers browse the documentation and catalog, customize the site's current
theme, inspect live examples, choose a package manager, and install registry
items through the `@shark` namespace.

## Capabilities and Constraints

- Next.js App Router with a fully static `output: "export"` deployment.
- React, Ark UI, Tailwind CSS v4, and the shadcn registry schema.
- Registry-facing source remains copyable and installable without a runtime
  Shark UI package.
- Block previews must remain interactive inside same-origin iframes.
- The interface and public documentation are written in English.

## Brand Commitments

Preserve the existing Shark UI visual system, semantic tokens, typography,
header, customization controls, and concise technical voice.

## Evidence on Hand

- Existing component documentation and registry examples under `content/docs`
  and `registry/react/examples`.
- Existing theme customization for color, gray scale, radius, and light/dark
  mode.
- Legacy chart and sidebar previews under `registry/react/blocks` that must
  remain compatible but are not part of the first published block catalog.

## Product Principles

- Compose existing Shark primitives before introducing bespoke UI.
- Show the real result and every file required to reproduce it.
- Keep registry metadata, preview rendering, and installation output aligned.
- Preserve accessibility, responsive behavior, and RTL-safe layout choices.
- Favor static, cacheable delivery and load expensive previews only when needed.

## Accessibility & Inclusion

Interactive catalog controls, file navigation, live previews, and composed
blocks must remain keyboard accessible, expose meaningful labels, and respect
reduced-motion and document direction conventions.
