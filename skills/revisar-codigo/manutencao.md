# Manutenção

- A mudança respeita as camadas do projeto (quem pode importar quem)?
- Reaproveita o que já existe, ou duplica uma função, componente ou padrão do projeto?
- Abstração nova tem um segundo uso real? Se não, é peso.
- Arquivo ficou grande demais ou com mais de uma responsabilidade?
- Nomes dizem o que a coisa é. Comentário explica o porquê, não o quê.
- React: estado derivado calculado no render em vez de copiado num efeito; efeito só para sincronizar com algo de fora; sem componente definido dentro de componente; props demais passando por camadas que não usam.
- Código morto, `console.log` esquecido, `biome-ignore` ou `eslint-disable` sem motivo escrito.
