# Migração de TanStack Table v8 para v9

Data da pesquisa: 24 de agosto de 2026.

## Fontes oficiais

- [Guia de migração React v9](https://tanstack.com/table/latest/docs/framework/react/guide/migrating)
- [Exemplo oficial de `useLegacyTable`](https://tanstack.com/table/latest/docs/framework/react/examples/basic-use-legacy-table)
- [Changelog de `@tanstack/react-table`](https://github.com/TanStack/table/blob/main/packages/react-table/CHANGELOG.md)

O changelog marca a 9.0.0 como uma major release e encaminha ao guia de
migração. Não há codemod ou CLI de migração descrito nesse guia.

## Caminhos oficiais

### Recomendado: API v9 nativa

Substituir `useReactTable` por `useTable` e declarar explicitamente em
`tableFeatures` cada feature e row model usado. O core row model é automático;
os demais saem das opções `get*RowModel` e passam para slots do `features`.

| v8 | v9 |
| --- | --- |
| `useReactTable` | `useTable` |
| `getCoreRowModel()` | automático; não importar |
| `getFilteredRowModel()` | `filteredRowModel: createFilteredRowModel()` |
| `getSortedRowModel()` | `sortedRowModel: createSortedRowModel()` |
| `getPaginationRowModel()` | `paginatedRowModel: createPaginatedRowModel()` |

O estado controlado com `state` e callbacks `on*Change` continua suportado.
Em código novo, o guia recomenda também considerar atoms ou `table.Subscribe`
apenas quando houver necessidade real de granularidade de renderização.

Para `components/examples/payments-table-example.tsx`, a configuração v9 deve
registrar:

```tsx
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";

const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
});
```

As definições de coluna devem receber o feature set para preservar a inferência:
`ColumnDef<typeof features, Payment>[]`. A criação da tabela passa a ser
`useTable({ features, columns, data, state, on*Change })`. O markup atual pode
permanecer: os métodos são chamados sobre seus respectivos objetos, e o arquivo
já segue esse padrão (`row.getValue(...)`, `cell.getContext()`, etc.).

### Ponte temporária: API compatível com v8

Para desbloquear uma migração incremental, a própria biblioteca fornece
`useLegacyTable`, mas o guia o marca como **deprecated** e temporário. Os itens
legados ficam fora do export principal:

```tsx
import { flexRender } from "@tanstack/react-table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useLegacyTable,
} from "@tanstack/react-table/legacy";
import type { LegacyColumnDef } from "@tanstack/react-table/legacy";
```

Esse caminho preserva as opções atuais `get*RowModel` e exige trocar
`useReactTable` por `useLegacyTable`; para as colunas manuais, usar
`LegacyColumnDef<Payment>[]`. Ele inclui todas as features e tende a gerar
bundle maior que a API v8, portanto não deve ser a solução final do registry.

## Recomendação para Shark UI

Migrar diretamente o único uso do repositório, em
`components/examples/payments-table-example.tsx`, para a API nativa v9. O
exemplo já depende de filtering, visibility, selection, sorting e pagination,
de modo que declarar essas cinco features é explícito, tree-shakeable e elimina
o erro de build sem introduzir uma API depreciada. Após a alteração, validar a
seleção, a contagem filtrada e a paginação do preview, além de executar
`pnpm typecheck`.
