# Contribuindo

- Uma branch por mudança, PR pequeno. Commits em [Conventional Commits](CONVENTIONS.md): tipo em inglês, descrição em português.
- Agente em `agents/<nome>.md`, skill em `skills/<nome>/SKILL.md`. O `name` do frontmatter é igual ao nome do arquivo ou da pasta, e `description` é obrigatória.
- Antes do PR: `node scripts/validar.mjs` (sem dependências, Node 22).
- Mudou o comportamento do plugin? Suba a `version` em `.claude-plugin/plugin.json` e registre no `CHANGELOG.md`.

# Contributing

- One branch per change, small PRs. Commits follow Conventional Commits ([CONVENTIONS.md](CONVENTIONS.md)): type in English, description in Portuguese.
- Agents live in `agents/<name>.md`, skills in `skills/<name>/SKILL.md`. Frontmatter `name` matches the file or folder name, and `description` is required.
- Before opening a PR run `node scripts/validar.mjs` (no dependencies, Node 22).
- Changed plugin behavior? Bump `version` in `.claude-plugin/plugin.json` and add an entry to `CHANGELOG.md`.
