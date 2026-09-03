# Plan 074: Corrigir a hierarquia de ApprovalCardInput na anatomia

> **Executor instructions**: execute os passos na ordem e preserve alterações
> não relacionadas. Não rode testes, typecheck, builds ou navegador sem
> autorização explícita. Atualize a linha deste plano quando terminar.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/ai-elements/approval-card.mdx registry/react/components/approval-card.tsx registry/react/examples/approval-card/example-default.tsx`
> Se os trechos abaixo não corresponderem mais à fonte, pare e reporte.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

A documentação de Approval Card replica a árvore incorreta de Questionnaire:
`ApprovalCardInput` aparece dentro de `ApprovalCardChoices`. Isso oculta que
o input livre e o grupo de escolhas são alternativas independentes em um
`ApprovalCardItem`, deixando a anatomia pública incoerente com a composição
do componente.

## Current state

- `content/docs/ai-elements/approval-card.mdx` documenta a composição pública.
- `registry/react/components/approval-card.tsx` encaminha `ApprovalCardChoices`
  e `ApprovalCardInput` para partes distintas de Questionnaire.
- `registry/react/examples/approval-card/example-default.tsx` preserva a
  composição de choices e não deve ser mudado por esta correção textual.

`content/docs/ai-elements/approval-card.mdx:62-68` contém:

```text
│       ├── ApprovalCardChoices
│       │   ├── ApprovalCardChoice
│       │   │   └── ApprovalCardChoiceShortcut
│       │   └── ApprovalCardInput
│       └── ApprovalCardError
```

O resultado deve colocar `ApprovalCardInput` no mesmo nível de
`ApprovalCardChoices`, deixando o shortcut sob cada choice.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/ai-elements/approval-card.mdx registry/react/components/approval-card.tsx registry/react/examples/approval-card/example-default.tsx` | revisar deriva antes de editar |
| Check tree | `sed -n '60,70p' content/docs/ai-elements/approval-card.mdx` | input alinhado a choices |
| Check whitespace | `git diff --check -- content/docs/ai-elements/approval-card.mdx` | sem saída e exit 0 |

## Scope

**In scope**:

- `content/docs/ai-elements/approval-card.mdx`
- `plans/README.md` (somente o status desta linha)

**Out of scope**:

- `registry/react/components/approval-card.tsx`
- Exemplos de Approval Card
- `content/docs/components/questionnaire.mdx` — coberto pelo plano 073.

## Git workflow

- Use a árvore atual; não crie/troque branches, stash nem faça commit sem
  pedido explícito.
- Não altere o restante da grande atualização de Approval Card.

## Steps

### Step 1: Corrigir o ramo de input livre no diagrama

Em `content/docs/ai-elements/approval-card.mdx`, mude somente a indentação e
os conectores da linha `ApprovalCardInput` para torná-la irmã de
`ApprovalCardChoices`. Preserve a ordem, texto e os demais conectores.

**Verify**: `sed -n '60,70p' content/docs/ai-elements/approval-card.mdx` → a
linha mostra `│       ├── ApprovalCardInput`.

### Step 2: Verificar escopo e whitespace

Revise o diff; a correção deve ser apenas a linha da árvore. Depois atualize o
status do plano no índice.

**Verify**: `git diff --check -- content/docs/ai-elements/approval-card.mdx`
→ sem saída e exit 0.

## Test plan

Não escreva testes nem rode testes de runtime: trata-se de um diagrama textual
e o repositório exige permissão prévia para essas verificações. A inspeção do
trecho e `git diff --check` são as gates proporcionais.

## Done criteria

- [ ] `ApprovalCardInput` é irmão de `ApprovalCardChoices` na anatomia.
- [ ] `ApprovalCardChoiceShortcut` permanece filho de `ApprovalCardChoice`.
- [ ] `git diff --check -- content/docs/ai-elements/approval-card.mdx` passa.
- [ ] Nenhum arquivo fora do escopo mudou por este plano.
- [ ] A linha 074 em `plans/README.md` está marcada como DONE.

## STOP conditions

- A implementação atual passa a exigir que o input seja filho do grupo de
  escolhas.
- A página adota uma fonte automática para a anatomia.
- A correção precisa alterar exemplos ou a API pública.

## Maintenance notes

Approval Card é uma adaptação de Questionnaire. Mudanças de anatomia devem
revisar ambos os documentos, mas suas alterações devem continuar em planos e
diffs separados para evitar conflito nas páginas ativamente editadas.
