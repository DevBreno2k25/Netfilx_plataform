/* ================================================================
   FUNÇÕES UTILITÁRIAS - Netflix Clone
   Contém funções reutilizáveis para manipulação de dados
   e geração de valores aleatórios
   ================================================================ */

/**
 * Extrai o ID de vídeo do YouTube a partir de uma URL
 * 
 * @param {string} url - URL completa do YouTube
 * @returns {string} - ID do vídeo para uso em embeds
 * 
 * Exemplos:
 *   - "https://www.youtube.com/watch?v=abc123" retorna "abc123"
 *   - "https://youtu.be/abc123" retorna "abc123"
 *   - Se não houver URL, retorna um 'vídeo padrão ID
 */
export function getYouTubeId(url) {
    /* Se não houver URL, retorna ID padrão */
    if (!url) return "7RUA0IOfar8";
    
    /* Se a URL contém "v=" (YouTube padrão), extrai o ID após esse parâmetro */
    if (url.includes('v=')) {
        /* Split em 'v=' para pegar a parte após, depois split em '&' para remover parâmetros adicionais */
        return url.split('v=')[1].split('&')[0];
    }
    
    /* Para URLs curtas youtu.be, retorna a última parte */
    return url.split('/').pop();
}

/**
 * Gera um percentual aleatório de "matching" (compatibilidade)
 * Simula o sistema de porcentagem Netflix (80-99%)
 * 
 * @returns {number} - Número inteiro entre 80 e 99
 */
export function getRandomMatchScore() {
    /* Gera número aleatório entre 0 e 19, depois soma 80 (range: 80-99) */
    return Math.floor(Math.random() * 20 + 80);
}

/**
 * Gera duração aleatória de filme ou série
 * 
 * @param {boolean} hasProgress - Se true, retorna com "X temporadas", senão horas:minutos
 * @returns {string} - Texto de duração formatado
 * 
 * Exemplos:
 *   - Se hasProgress = true: "10 temporadas"
 *   - Se hasProgress = false: "2h 45m"
 */
export function getRandomDuration(hasProgress) {
    /* Se é uma série (tem progress), retorna temporadas */
    if (hasProgress) {
        return '10 temporadas';
    }
    
    /* Se é filme, retorna horas e minutos aleatórios */
    /* Math.floor(Math.random() * 59) gera minutos de 0 a 58 */
    return '2h ' + Math.floor(Math.random() * 59) + 'm';
}

/**
 * Gera um badge de classificação etária aleatório
 * 
 * @returns {object} - Objeto com propriedades:
 *   - text: "A16" ou "16" (texto a exibir)
 *   - class: "red-accent" ou "" (classe CSS para estilo)
 * 
 * Simula a classificação etária aleatória de filmes/séries
 */
export function getRandomAgeBadge() {
    /* 50% de chance de retornar "A16" com classe red-accent */
    /* 50% de chance de retornar "16" sem classe especial */
    return Math.random() > 0.5 
        ? { text: 'A16', class: 'red-accent' } 
        : { text: '16', class: '' };
}
