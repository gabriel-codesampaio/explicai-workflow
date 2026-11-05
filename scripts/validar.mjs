// Valida o JSON do plugin e o frontmatter de agentes e skills. Sem dependências.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const erros = [];
const falha = (m) => erros.push(m);

for (const f of ["plugin.json", "marketplace.json"]) {
  try {
    JSON.parse(readFileSync(join(".claude-plugin", f), "utf8"));
  } catch (e) {
    falha(`.claude-plugin/${f}: ${e.message}`);
  }
}

function frontmatter(arquivo) {
  const m = readFileSync(arquivo, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return falha(`${arquivo}: sem frontmatter`);
  const campos = Object.fromEntries(
    m[1].split(/\r?\n/).map((l) => l.match(/^([\w-]+):\s*(.*)$/)).filter(Boolean).map((x) => [x[1], x[2].replace(/^"|"$/g, "")]),
  );
  return campos;
}

function confere(arquivo, nomeEsperado) {
  const c = frontmatter(arquivo);
  if (!c) return;
  if (!c.name) falha(`${arquivo}: falta name`);
  else if (c.name !== nomeEsperado) falha(`${arquivo}: name "${c.name}" difere de "${nomeEsperado}"`);
  if (!c.description) falha(`${arquivo}: falta description`);
}

for (const f of readdirSync("agents").filter((x) => x.endsWith(".md"))) {
  confere(join("agents", f), basename(f, ".md"));
}
for (const d of readdirSync("skills", { withFileTypes: true }).filter((x) => x.isDirectory())) {
  const arq = join("skills", d.name, "SKILL.md");
  if (!existsSync(arq)) falha(`${arq}: não existe`);
  else confere(arq, d.name);
}

if (erros.length) {
  console.error(erros.join("\n"));
  process.exit(1);
}
console.log("ok");
