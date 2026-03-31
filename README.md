# Netflix Clone - Imersão Alura

Projeto de front-end para simular uma plataforma de streaming (estilo Netflix) como parte do curso de Imersão Alura.

## Visão Geral

- Páginas:
  - `index.html`: seleção de perfil (Ana, Raul, Daiane, Breno)
  - `catalogo/catalogo.html`: exibição de catálogo de filmes por perfil
- Lógica em JavaScript: módulos ESM com components e catálogo de dados
- Estilo CSS: responsivo e animado para cards, carrossel e navbar
- Persistência: usa `localStorage` para manter perfil ativo e exibir nome/foto no catálogo

## Estrutura de Pastas

```
netflix-plataform-main/
  index.html
  style.css
  script.js
  catalogo/
    catalogo.html
    catalogo.css
    js/
      main.js
      data.js
      utils.js
      components/
        Card.js
        Carousel.js
```

## Funcionalidades implementadas

1. Seleção de perfil na página inicial
   - Cada perfil com foto e nome
   - Ao clicar, define `localStorage.perfilAtivoNome` e `localStorage.perfilAtivoImagem`
   - Redirecionamento para `catalogo/catalogo.html`

2. Catálogo personalizado por perfil
   - `catalogo/js/data.js` exporta `catalogosPorPerfil` com perfis diferentes
   - `getCatalogoPorPerfil(nomePerfil)` retorna os dados do perfil ativo

3. Carrossel de filmes e vídeos
   - `catalogo/js/components/Carousel.js` cria seção de categoria
   - `catalogo/js/components/Card.js` cria cards com preview e overlay
   - `catalogo/js/utils.js` com geradores de dados auxiliares (segundo, tag emagre)

4. Trailers e imagens reais
   - Cada item do catálogo inclui `img` e `youtube` válidos
   - exibidos no card do filme

5. Design e responsividade
   - Navbar fixa com logo, pesquisa, perfil ativo e ícones
   - Cards com hover, transição 3D, botão play, indicadores de progresso
   - Suporta desktop e mobile via media queries

## Como rodar

1. Abra `index.html` no navegador (ou ative servidor local para ESM:
   - `python -m http.server 8000` (Python 3)
   - ou `npx serve .`
2. Selecione um perfil e veja o catálogo carregar automaticamente

## Tecnologias

- HTML5
- CSS3 (flexbox, grid, animações, queries)
- JavaScript ES6 (módulos, `fetch` não usado, localStorage)

## Checklist do projeto

- [x] Index com seleção de perfil
- [x] LocalStorage persistente
- [x] Catálogo por perfil (Ana/Raul/Daiane/Breno)
- [x] Cards com imagem, badge, progress e play
- [x] Carrossel funcional (botões + módulos)
- [x] Comentários e organização de código

## Possíveis melhorias

- filtros por classificação/ano/gênero
- modo escuro e alternância de tema salva
- backend + API real (e.g., TMDB)
- login e múltiplos usuários com CRUD
- animações de transição de página

## Observações

- Ajuste apenas links de imagem caso sejam bloqueados em alguns browsers (CORS/https). 
- Cada `youtube` no `data.js` usa embed para integração com o player do site.
