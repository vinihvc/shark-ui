# Ark UI 5.37.2 → 5.39.0: auditoria de compatibilidade

Data da auditoria: 24 de agosto de 2026.

## Escopo e fontes

O projeto resolve `@ark-ui/react` em `5.39.0` (`package.json` aceita
`^5.39.0` e `pnpm-lock.yaml` fixa essa versão). A versão `latest` do npm
também é `5.39.0`; portanto, não há uma atualização posterior pendente.

Esta análise cobre as alterações publicadas após `5.37.2`, nas versões
`5.38.0`, `5.38.1`, `5.38.2` e `5.39.0`. As fontes são o
[changelog oficial do React](https://github.com/chakra-ui/ark/blob/main/packages/react/CHANGELOG.md)
e a [release 5.39.0](https://github.com/chakra-ui/ark/releases/tag/%40ark-ui%2Freact%405.39.0).

Status:

- **Sem impacto:** não há superfície Shark correspondente ou a mudança não
  altera o contrato público existente.
- **Benefício automático:** o wrapper já delega para Ark; a correção ou API
  fica disponível com a dependência atual.
- **Ação opcional:** uma capacidade nova que só exige docs/exemplo se o
  registry decidir promovê-la.

## Matriz de impacto

| Componentes Ark afetados | Mudança | Superfície Shark verificada | Status |
| --- | --- | --- | --- |
| Color Picker, Combobox, Date Picker, Dialog, Drawer, Floating Panel, Hover Card, Menu, Popover, Select, Tooltip e Tour | `Presence.onEnterComplete` (5.39) | Os roots tipam as props de Ark e encaminham as props restantes. Todos possuem wrapper, docs e exemplos. | **Benefício automático**; documentar o callback é opcional. |
| Todos os triggers com `asChild` | Correção para filho que cruza a fronteira de React Server Components (5.39). | O registry usa `asChild` nos componentes de overlay e de coleção. | **Benefício automático**. |
| Fieldset, Date Picker, Dialog, Drawer, Menu, Popover, Floating Panel, Checkbox, Radio Group, Switch, Combobox, Listbox, Select, Image Cropper, QR Code, Splitter/Resizable e Tags Input | Correções 5.38.2: rerender de Fieldset, traduções e a11y de Date Picker, Escape imediato, stack de painel, foco visível, botões em formulário, destaque por teclado, crop fixo, exportação QR, foco no resize trigger e XSS em tags. | Há wrappers publicados para todas as superfícies Shark equivalentes. `Splitter` é encapsulado como `Resizable`. Cascade Select e Navigation Menu não existem no registry. | **Benefício automático**; a correção de XSS de Tags Input entra sem mudança de composição. |
| Todos os componentes com refs compostas; Next/RSC | Correções de refs compostas (5.38.0/5.38.1) e de import de React Activity em builds Next (5.38.2). | Shark usa Next 16 e React 19; os wrappers não implementam essa infraestrutura. | **Benefício automático**. |
| Collapsible, Accordion, Tree View e overlays baseados em Presence | `hideMode` (5.38). | Os roots repassam props de Ark. Os defaults Shark usam `unmountOnExit`, que torna `hideMode` inativo até o consumidor optar por mantê-los montados. | **Ação opcional**: adicionar exemplo apenas se o registry quiser expor o padrão `activity`. |
| Number Input e Slider | `largeStep`/`smallStep` e correções de teclado/API (5.38). | Ambos repassam props ao root e possuem docs e exemplos. | Correções: **benefício automático**. Novos passos: **ação opcional**. |
| Dialog e Drawer | `data-autofocus` / `data-no-autofocus` e correções de retorno de foco (5.38). | Content e triggers aceitam atributos HTML e encaminham props. | Correções: **benefício automático**. Atributos: **ação opcional**. |
| Focus Trap | `persistentElements` (5.38). | Não há wrapper, docs nem exemplo de Focus Trap no Shark. | **Sem impacto**; expô-lo seria uma **ação opcional** separada. |
| Image Cropper | `getCropData()` inclui `corners` e `outputSize`; `getCroppedImage({ maxSize })`; correções de rotação, escala e área fixa (5.38–5.38.2). | O hook e o root Shark delegam para Ark; há docs e exemplos. | Correções: **benefício automático**. APIs novas: **ação opcional**. |
| Date Input, Date Picker e Field | Numerais locais, timezone e range, estado controlado, `translations` parcial e `Field.Textarea` controlado (5.38–5.38.2). | Os wrappers delegam ao root de Ark; todos têm docs e exemplos. | **Benefício automático**. |
| Marquee, Scroll Lock/overlays, Signature Pad, Steps, Toast e Tour | Correções de velocidade, lock de scroll, `paths` controlado, filhos/triggers, flicker/generic e lifecycle/skip/posição (5.38–5.38.2). | Há wrappers Shark para Marquee, Signature Pad, Steps, Toast e Tour; Scroll Lock é infraestrutura interna de overlay. | **Benefício automático**. |
| Toc, Hotkeys, `ariaAttr` e `dataAttr` | APIs novas/exportações (5.39). | Não há Hotkeys nem uso dos helpers. Há arquivos de Toc não rastreados no worktree atual, que não fazem parte desta auditoria e não foram alterados. | Hotkeys/helpers: **sem impacto** e **ação opcional**. Toc: fora do delta em curso. |

## Conclusão

Não há API removida, renomeada ou mudança incompatível de tipos no intervalo
auditado. Nenhum wrapper, documentação ou exemplo publicado precisa ser
alterado para permanecer compatível com Ark UI 5.39.0.

As melhorias de comportamento são fornecidas pela atualização já resolvida da
dependência. Se o projeto quiser promover capacidades novas, as candidatas são
`onEnterComplete`, `hideMode`, passos grandes/pequenos e as APIs de Image
Cropper, sem necessidade de alterar os defaults atuais.

## Validação

- `pnpm list @ark-ui/react --depth 0` e `npm view @ark-ui/react version`
  confirmaram `5.39.0` instalado e publicado como `latest`.
- `pnpm lint:check` falhou com 759 diagnósticos preexistentes, todos fora
  deste relatório e dos wrappers auditados. A ferramenta não aplicou fixes.
- `pnpm typecheck` falhou antes da checagem de Ark: a atualização já presente
  para `@tanstack/react-table` 9.1.2 remove exports usados em
  `components/examples/payments-table-example.tsx` (`getCoreRowModel`,
  `getFilteredRowModel`, `getPaginationRowModel`, `getSortedRowModel` e
  `useReactTable`). Esse bloqueio é independente de Ark UI.
- Previews: o servidor de desenvolvimento preexistente em `:3000` não
  respondeu e mantém o lock do Next; não foi interrompido. A validação manual
  recomendada, quando ele estiver disponível, cobre Escape/foco em overlays,
  navegação de coleções, triggers dentro de formulário, data, teclado de
  Number Input/Slider, Tags Input em formulário e drag de Resizable.
