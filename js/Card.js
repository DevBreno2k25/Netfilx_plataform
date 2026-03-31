/* ================================================================
   COMPONENTE CARD - Netflix Clone
   Cria um cartão de filme/série com:
   - Imagem de capa
   - Botões de ação (play, adicionar, like)
   - Detalhes (score, classificação, duração)
   - Preview de vídeo do YouTube ao passar o mouse
   - Barra de progresso (opcional)
   ================================================================ */

/* Importa funções utilitárias de manipulação de dados */
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from './utils.js';

/**
 * Cria um elemento de cartão de filme/série completo com interações
 * 
 * @param {object} item - Dados do item (filme/série) com:
 *   - img: URL da imagem de capa
 *   - youtube: URL do YouTube para preview
 *   - progress: progresso da visualização (0-100)
 *   - badge: texto do badge customizado
 *   - badgeColor: cor do badge
 *   - top10: se está no top 10
 * 
 * @returns {HTMLElement} - Elemento DIV com o cartão completo
 */
export function createCard(item) {
    /* Cria o elemento principal do cartão */
    const card = document.createElement('div');
    /* Atribui classe CSS do cartão */
    card.className = 'movie-card';
    
    /* Se o item tem progress registrado, marca como viãvel */
    if (item.progress) {
        card.classList.add('has-progress');
    }

    /* ====================== IMAGEM DE CAPA ======================== */
    const img = document.createElement('img');
    /* Define a URL da imagem */
    img.src = item.img;
    /* Texto alternativo para acessibilidade */
    img.alt = `Movie cover`;

    /* ====================== IFRAME PARA VÍDEO ==================== */
    const iframe = document.createElement('iframe');
    /* Remove borda do iframe */
    iframe.frameBorder = "0";
    /* Permite autoplay e conteúdo encriptado */
    iframe.allow = "autoplay; encrypted-media";

    /* Extrai ID do YouTube da URL fornecida */
    const videoId = getYouTubeId(item.youtube);

    /* Adiciona iframe e imagem ao cartão */
    card.appendChild(iframe);
    card.appendChild(img);

    /* Gera badge de classificação etária aleatória */
    const ageBadge = getRandomAgeBadge();

    /* ====================== DETALHES DO CARTÃO =================== */
    const details = document.createElement('div');
    details.className = 'card-details';
    /* HTML com todos os detalhes e botões */
    details.innerHTML = `
        <!-- Botões de ação principais -->
        <div class="details-buttons">
            <!-- Botões da esquerda: Play, Adicionar/Concluído, Like -->
            <div class="left-buttons">
                <!-- Botão Play (sempre presente) -->
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                <!-- Se já foi visto, mostra ícone de check, senão ícone de + -->
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <!-- Botão Like -->
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <!-- Botões da direita: Expandir menu -->
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        
        <!-- Informações do filme: score, classificação, duração -->
        <div class="details-info">
            <!-- Percentual de compatibilidade/score -->
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <!-- Classificação etária -->
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <!-- Duração (filme em horas, série em temporadas) -->
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <!-- Qualidade de vídeo -->
            <span class="resolution">HD</span>
        </div>
        
        <!-- Tags/gêneros do conteúdo -->
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    card.appendChild(details);

    /* ====================== BARRA DE PROGRESSO ==================== */
    /* Se o item foi parcialmente assistido (progress > 0), exibe barra */
    if (item.progress) {
        /* Container que envolve a barra */
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        
        /* Barra preenchida com a porcentagem do progresso */
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        /* Largura em % igual ao progresso */
        pbValue.style.width = `${item.progress}%`;
        
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    /* ====================== INTERAÇÕES DO MOUSE ================= */
    /* Variável de controle para delay ao passar mouse */
    let playTimeout;
    
    /* Evento: mouse entra no cartão */
    card.addEventListener('mouseenter', () => {
        /* Obtém posição do cartão na tela */
        const rect = card.getBoundingClientRect();
        /* Obtém largura da janela */
        const windowWidth = window.innerWidth;
        
        /* Se cartão está próximo da borda esquerda, ajusta origem de transformação */
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } 
        /* Se cartão está próximo da borda direita, ajusta origem */
        else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        /* Aguarda 600ms antes de carregar o vídeo (efeito suave) */
        playTimeout = setTimeout(() => {
            /* Define a URL do embed do YouTube com parâmetros de autoplay */
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            /* Marca iframe como "playing" para mostri-lo via CSS */
            iframe.classList.add('playing');
            /* Oculta a imagem de capa */
            img.classList.add('playing-video');
        }, 600);
    });

    /* Evento: mouse sai do cartão */
    card.addEventListener('mouseleave', () => {
        /* Cancela o timeout se ainda não tiver sido executado */
        clearTimeout(playTimeout);
        /* Remove classe de "playing" do iframe */
        iframe.classList.remove('playing');
        /* Re-exibe a imagem de capa */
        img.classList.remove('playing-video');
        /* Limpa o iframe para parar o vídeo */
        iframe.src = "";
        /* Remove classes de ajuste de origem */
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    /* Retorna o elemento completo do cartão */
    return card;
}
