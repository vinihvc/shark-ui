# Plan 075: Remover espaços finais dos MDX alterados

> **Executor instructions**: faça apenas a limpeza descrita abaixo. Não rode
> testes, typecheck, builds ou navegador sem autorização explícita. Ao
> terminar, atualize a linha deste plano no índice.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/button.mdx content/docs/components/scroll-area.mdx`
> Se as linhas indicadas não existirem mais, pare e reporte em vez de aplicar
> uma limpeza ampla no repositório.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

`git diff --check` reporta whitespace ao fim de duas linhas de documentação
modificadas. O problema não muda o conteúdo renderizado, mas deixa o diff
ruidoso e quebra uma verificação padrão de qualidade de patches.

## Current state

- `content/docs/components/button.mdx:101` termina a frase “button styling:”
  com um espaço final.
- `content/docs/components/scroll-area.mdx:99` termina a linha da tabela de
  `scrollbarGutter` com um espaço final.

O comando atual retorna exatamente:

```text
content/docs/components/button.mdx:101: trailing whitespace.
content/docs/components/scroll-area.mdx:99: trailing whitespace.
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/components/button.mdx content/docs/components/scroll-area.mdx` | revisar deriva antes de editar |
| Whitespace check | `git diff --check -- content/docs/components/button.mdx content/docs/components/scroll-area.mdx` | sem saída e exit 0 |

## Scope

**In scope**:

- `content/docs/components/button.mdx`
- `content/docs/components/scroll-area.mdx`
- `plans/README.md` (somente o status desta linha)

**Out of scope**:

- Todo outro arquivo MDX com whitespace pré-existente.
- Qualquer mudança de conteúdo, tabela, imports ou formatação não necessária.

## Git workflow

- Trabalhe na árvore atual e preserve alterações do operador.
- Não execute formatter em massa, não crie/troque branches e não faça commit
  sem autorização explícita.

## Steps

### Step 1: Remover os dois espaços finais

Remova somente o caractere de espaço ao fim de
`content/docs/components/button.mdx:101` e de
`content/docs/components/scroll-area.mdx:99`. Não altere o texto, a tabela ou
qualquer outra linha.

**Verify**: `git diff --check -- content/docs/components/button.mdx content/docs/components/scroll-area.mdx` → sem saída e exit 0.

## Test plan

`git diff --check` é a verificação suficiente para esse ajuste semântico nulo.
Não rode testes, typecheck ou navegador sem autorização do operador.

## Done criteria

- [ ] `git diff --check -- content/docs/components/button.mdx content/docs/components/scroll-area.mdx` não retorna erros.
- [ ] O diff em cada arquivo contém apenas a remoção de whitespace final.
- [ ] Não há alterações fora do escopo atribuíveis a este plano.
- [ ] A linha 075 em `plans/README.md` está marcada como DONE.

## STOP conditions

- As linhas tiverem sido reescritas por alterações concorrentes.
- O check reportar erros em outras linhas que exigiriam uma limpeza ampla.

## Maintenance notes

Não expanda esta tarefa para os demais espaços finais históricos: eles não
fazem parte desta alteração e devem ser tratados em um esforço separado.
