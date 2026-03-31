/* ================================================================
   COMPONENTE CAROUSEL - Netflix Clone
   Cria um carrossel (slider) com múltiplos cartões de filme/série
   com título da categoria e lista de indicadores
   ================================================================ */

/* Importa função para criar cartões individuais */
import { createCard } from './Card.js';

/**
 * Cria uma seção de carrossel com:
 * - Título da categoria
 * - Indicadores de progresso
 * - Linha horizontal com múltiplos cartões scrollaveis
 * 
 * @param {object} category - Objeto com:
 *   - title: título da categoria (ex: "Mais assistidos")
 *   - items: array de filmes/séries com suas respectivas propriedades
 * 
 * @returns {HTMLElement} - Seção HTML contendo carrossel completo
 */
export function createCarousel(category) {
    /* ====================== CRIAÇÃO DA SEÇÃO ==================== */
    /* Elemento principal que encapsula toda a categoria */
    const section = document.createElement('div');
    /* Adiciona classe CSS para estilização */
    section.className = 'slider-section';

    /* ====================== CRIAÃO DO CABEÇALHO ================= */
    /* Contém título e indicadores de progresso */
    const header = document.createElement('div');
    header.className = 'slider-header';

    /* ====================== TÍTULO DA CATEGORIA ================= */
    const title = document.createElement('h2');
    title.className = 'slider-title';
    /* Define o nome da categoria */
    title.innerText = category.title;

    /* ====================== INDICADORES DE SLIDE ================= */
    /* Pequenos pontos indicadores de progresso/páginas */
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';
    /* TODO: Pode ser preenchido com lógica de paginação futura */

    /* Adiciona elementos ao cabeçalho */
    header.appendChild(title);
    header.appendChild(indicators);
    /* Adiciona cabeçalho à seção */
    section.appendChild(header);

    /* ====================== LINHA DE CARTÕES ==================== */
    /* Container horizontal scrollavel com os cartões */
    const row = document.createElement('div');
    row.className = 'movie-row';

    /* Itera sobre cada item (filme/série) da categoria */
    category.items.forEach(item => {
        /* Cria um cartão para o item */
        const card = createCard(item);
        /* Adiciona o cartão à linha */
        row.appendChild(card);
    });

    /* Adiciona linha de cartões à seção */
    section.appendChild(row);
    
    /* Retorna a seção completa do carrossel */
    return section;
}
