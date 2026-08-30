# Questionnaire: qualidade, acessibilidade e publicação

## Objetivo

Simplificar a resolução de etapas do `Questionnaire`, tornar seus contratos públicos intransponíveis, corrigir relações ARIA e teclado, e publicar a mesma fonte que os exemplos consomem.

## Escopo

1. Validar nomes de etapas uma vez na raiz e usar índices por nome para resolver a etapa ativa e cada `QuestionnaireItem`.
2. Associar descrição e erro apenas quando as partes correspondentes existirem na composição SSR.
3. Não capturar setas enquanto o foco estiver em qualquer campo de texto.
4. Expor progresso vazio como status, sem valores de `progressbar` inventados.
5. Impedir que props nativas sobrescrevam visibilidade, validação e `type` gerenciados pelo componente.
6. Documentar o limite intencional de discovery de atalhos e regenerar o registry.
7. Adicionar testes de caracterização somente se a infraestrutura atual suportar componentes DOM sem introduzir dependências desproporcionais.

## Verificação

- `pnpm exec ultracite check` nos arquivos alterados.
- `pnpm registry:build`.
- `git diff --check`.
- Não executar browser, `pnpm test` ou `pnpm typecheck` sem autorização explícita.

## Resultado da execução

- Concluídos os itens 1–6.
- Não foi adicionada infraestrutura de testes DOM: o repositório não possui uma suíte de componentes configurada, e introduzi-la seria uma mudança de dependências fora do escopo deste componente.
- Lint do componente, build do registry, sincronização entre source e JSON publicado, e `git diff --check` concluídos com sucesso.

## Fora do escopo

- Introduzir Actions, Optimistic UI, Suspense ou Activity sem uma operação assíncrona do componente que justifique essas APIs do React 19.2.
- Criar uma infraestrutura de testes DOM nova apenas para este componente.
