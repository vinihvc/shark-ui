# Plan 072: Publicar um exemplo válido de tipos aceitos em File Upload

> **Executor instructions**: siga este plano em ordem. Não rode `pnpm test`,
> `pnpm typecheck`, builds ou navegador sem autorização explícita do operador.
> Ao concluir, atualize a linha deste plano em `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/file-upload.mdx registry/react/examples/file-upload/example-accepted-file-types.tsx`
> Se os trechos em “Estado atual” tiverem mudado, pare e reporte; não escolha
> uma sintaxe de `accept` por conta própria.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

O exemplo principal de `FileUpload` informa tipos MIME inválidos: `image/*png`
e `image/jpeg*`. Um consumidor que copie o exemplo pode ter PNG e JPEG
filtrados pelo seletor de arquivos, contrariando a intenção de permitir
imagens e PDF. O exemplo específico do próprio registro já demonstra a forma
válida usada pelo projeto.

## Current state

- `content/docs/components/file-upload.mdx` é a página pública de File Upload.
- `registry/react/examples/file-upload/example-accepted-file-types.tsx` é o
  exemplo local que já limita corretamente a PNG e JPEG.

`content/docs/components/file-upload.mdx:88-98` contém:

```tsx
<FileUpload maxFiles={2} accept={["image/*png,image/jpeg*", ".pdf"]}>
```

O exemplar em `registry/react/examples/file-upload/example-accepted-file-types.tsx:10-20` contém:

```tsx
<FileUpload accept="image/png,image/jpeg" className="w-full max-w-xs">
```

As páginas de componentes usam código copiável em blocos `tsx`; mantenha
imports, semicolons e a estrutura do exemplo já presentes no MDX. Não altere
o contrato de `FileUpload` nem o exemplo do registro.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/components/file-upload.mdx registry/react/examples/file-upload/example-accepted-file-types.tsx` | revisar somente a deriva esperada |
| Check whitespace | `git diff --check -- content/docs/components/file-upload.mdx` | sem saída e exit 0 |
| Check stale value | `rg -n 'image/\\*png|image/jpeg\\*' content/docs/components/file-upload.mdx` | sem saída e exit 1 |
| Check intended value | `rg -n 'image/png,image/jpeg.*\\.pdf|image/png.*image/jpeg' content/docs/components/file-upload.mdx` | uma ocorrência no exemplo de Usage |

## Scope

**In scope**:

- `content/docs/components/file-upload.mdx`
- `plans/README.md` (somente o status desta linha)

**Out of scope**:

- `registry/react/components/file-upload.tsx` — o contrato não está em erro.
- `registry/react/examples/file-upload/example-accepted-file-types.tsx` — é o
  exemplar correto, não o alvo.
- Outros exemplos, API tables e arquivos gerados em `public/r/`.

## Git workflow

- Trabalhe na árvore atual; não crie ou troque branches, não faça stash e não
  faça commit sem pedido do operador.
- Preserve todas as alterações não relacionadas já presentes na árvore.

## Steps

### Step 1: Corrigir o valor de `accept` no exemplo de Usage

Em `content/docs/components/file-upload.mdx`, substitua a lista inválida por
um único valor `accept` separado por vírgulas que permita exatamente PNG,
JPEG e `.pdf`: `"image/png,image/jpeg,.pdf"`. Mantenha `maxFiles={2}` e toda
a composição do dropzone como está.

**Verify**: execute os dois checks de `rg` da tabela; o valor obsoleto não
deve existir e o novo deve aparecer no bloco de Usage.

### Step 2: Conferir a alteração documental

Inspecione o diff para confirmar que apenas o atributo `accept` foi alterado
na página e que nenhum arquivo fora do escopo mudou por esta tarefa.

**Verify**: `git diff --check -- content/docs/components/file-upload.mdx` →
sem saída e exit 0.

## Test plan

Não há teste unitário proporcional para um literal em documentação. A
regressão fica coberta pelos dois scans estáticos definidos acima. Não rode
testes, typecheck ou navegador sem autorização explícita, conforme `AGENTS.md`.

## Done criteria

- [ ] O exemplo usa `accept="image/png,image/jpeg,.pdf"`.
- [ ] `rg -n 'image/\\*png|image/jpeg\\*' content/docs/components/file-upload.mdx` não encontra ocorrências.
- [ ] `git diff --check -- content/docs/components/file-upload.mdx` não relata whitespace.
- [ ] Nenhum arquivo fora do escopo foi alterado por esta tarefa.
- [ ] A linha 072 em `plans/README.md` está marcada como DONE.

## STOP conditions

- O componente passa a declarar uma semântica diferente para `accept` antes
  da execução.
- O trecho de Usage deixou de ser um exemplo copiável de `FileUpload`.
- Corrigir o exemplo parece exigir uma mudança no componente ou no manifesto.

## Maintenance notes

Quando forem adicionados mais tipos aceitos, mantenha o texto de ajuda e o
literal `accept` em sincronia. Prefira a sintaxe MIME/extension já usada em
exemplos do registro.
