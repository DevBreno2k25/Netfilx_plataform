/* ================================================================
   ARQUIVO PRINCIPAL - Netflix Clone
   Coordena a inicialização da aplicação:
   - Recupera dados do perfil do localStorage
   - Obtém o catálogo personalizado para o perfil
   - Renderiza o catálogo de categorias
   ================================================================ */

/* Importa dados com catálogos personalizados por perfil */
import { catalogosPorPerfil, getCatalogoPorPerfil } from './data.js';
/* Importa função para criar carrosséis (arquivo está em mesma pasta) */
import { createCarousel } from './Carousel.js';

/* ====================== INICIALIZAÇÃO DA PÁGINA ==================
   Aguarda o DOM estar completamente carregado antes de executar
   ============================================================== */
document.addEventListener('DOMContentLoaded', () => {
    /* Recupera nome do perfil salvo no localStorage (fallback para 'Ana') */
    const nomePerfil = localStorage.getItem('perfilAtivoNome') || 'Ana';
    /* Recupera URL da imagem do perfil salvo no localStorage */
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    /* Se ambos os dados do perfil existem, atualiza a navbar */
    if (nomePerfil && imagemPerfil) {
        /* Encontra o elemento que exibe o nome do perfil */
        const kidsLink = document.querySelector('.kids-link');
        /* Encontra o elemento que exibe a imagem do perfil */
        const profileIcon = document.querySelector('.profile-icon');
        
        /* Atualiza o nome na navbar se elemento existe */
        if (kidsLink) kidsLink.textContent = nomePerfil;
        /* Atualiza a imagem na navbar se elemento existe */
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    /* Encontra o container principal onde os carrosséis serão inseridos */
    const container = document.getElementById('main-content');
    
    /* Se o container foi encontrado, cria os carrosséis */
    if (container) {
        /* Obtém o catálogo personalizado para o perfil ativo */
        const categorias = getCatalogoPorPerfil(nomePerfil);
        
        /* Itera sobre cada categoria no catálogo do perfil */
        categorias.forEach(category => {
            /* Cria um elemento de carrossel para a categoria */
            const carousel = createCarousel(category);
            /* Adiciona o carrossel ao container HTML */
            container.appendChild(carousel);
        });
    }
});
