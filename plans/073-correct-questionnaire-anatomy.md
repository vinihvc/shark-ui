# Plan 073: Corrigir a hierarquia de QuestionnaireInput na anatomia

> **Executor instructions**: siga os passos na ordem. Não rode testes,
> typecheck, builds ou navegador sem autorização explícita do operador. Ao
> concluir, atualize somente a linha deste plano no índice.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/questionnaire.mdx registry/react/components/questionnaire.tsx registry/react/examples/questionnaire/example-freeform.tsx`
> Se a anatomia, o componente ou o exemplo tiverem divergido dos trechos
> abaixo, pare e reporte.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

A árvore de anatomia documenta `QuestionnaireInput` como filho de
`QuestionnaireChoices`. Ambos são partes independentes de `QuestionnaireItem`:
escolhas representam controles de seleção, enquanto o input é a resposta de
texto livre. A árvore errada induz uma composição e uma leitura da API que não
correspondem ao modelo exposto nos exemplos.

## Current state

- `content/docs/components/questionnaire.mdx` é a referência pública do
  componente.
- `registry/react/components/questionnaire.tsx` implementa
  `QuestionnaireChoices` e `QuestionnaireInput` como partes distintas que
  obtêm o contexto de `QuestionnaireItem`.
- `registry/react/examples/questionnaire/example-freeform.tsx` é o padrão a
  preservar para resposta de texto livre.

`content/docs/components/questionnaire.mdx:59-65` contém:

```text
│   ├── QuestionnaireChoices
│   │   ├── QuestionnaireChoice
│   │   │   └── QuestionnaireChoiceShortcut
│   │   └── QuestionnaireInput
│   └── QuestionnaireError
```

A árvore correta deve deixar `QuestionnaireInput` no mesmo nível de
`QuestionnaireChoices`, mantendo `QuestionnaireChoiceShortcut` aninhado em
`QuestionnaireChoice` e `QuestionnaireError` como filho de `QuestionnaireItem`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/components/questionnaire.mdx registry/react/components/questionnaire.tsx registry/react/examples/questionnaire/example-freeform.tsx` | revisar a deriva antes de editar |
| Check tree | `sed -n '55,70p' content/docs/components/questionnaire.mdx` | `QuestionnaireInput` alinhado a `QuestionnaireChoices` |
| Check whitespace | `git diff --check -- content/docs/components/questionnaire.mdx` | sem saída e exit 0 |

## Scope

**In scope**:

- `content/docs/components/questionnaire.mdx`
- `plans/README.md` (somente o status desta linha)

**Out of scope**:

- `registry/react/components/questionnaire.tsx`
- Todos os exemplos de Questionnaire
- `content/docs/ai-elements/approval-card.mdx` — possui a mesma classe de
  erro, mas é coberto exclusivamente pelo plano 074.

## Git workflow

- Execute na árvore atual, sem criar/trocar branches, stash ou commits não
  autorizados.
- Não reformate seções vizinhas nem altere a descrição de atalhos.

## Steps

### Step 1: Mover a linha de input para o nível correto da árvore

Em `content/docs/components/questionnaire.mdx`, troque somente os caracteres
de árvore de `QuestionnaireInput` para que ele seja irmão de
`QuestionnaireChoices`. Não mude a ordem das outras partes.

**Verify**: `sed -n '55,70p' content/docs/components/questionnaire.mdx` → a
linha começa com `│   ├── QuestionnaireInput`.

### Step 2: Confirmar que o diff é documental e mínimo

Revise o diff e atualize o índice apenas após a verificação de whitespace.

**Verify**: `git diff --check -- content/docs/components/questionnaire.mdx` →
sem saída e exit 0.

## Test plan

É uma correção de diagrama textual. Use inspeção do trecho e `git diff --check`;
não há teste de runtime proporcional. O repositório exige autorização explícita
antes de testes, typecheck ou browser.

## Done criteria

- [ ] `QuestionnaireInput` está no mesmo nível de `QuestionnaireChoices`.
- [ ] `QuestionnaireChoiceShortcut` continua filho de `QuestionnaireChoice`.
- [ ] `git diff --check -- content/docs/components/questionnaire.mdx` passa.
- [ ] Não há mudanças fora do escopo atribuíveis a este plano.
- [ ] A linha 073 em `plans/README.md` está marcada como DONE.

## STOP conditions

- O exemplo de resposta livre ou a implementação exigem de fato que o input
  seja filho de `QuestionnaireChoices`.
- A árvore tiver sido substituída por uma anatomia gerada automaticamente.
- A correção exigir mudanças de API ou de CSS.

## Maintenance notes

Ao adicionar novas partes de `QuestionnaireItem`, mantenha a árvore alinhada à
composição real dos exemplos, não apenas à proximidade visual dos controles.
