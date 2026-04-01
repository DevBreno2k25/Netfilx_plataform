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
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem') || './assets/perfil netflix1- Imgur.png';
    /* Recupera tipo do perfil */
    const tipoPerfil = localStorage.getItem('perfilAtivoTipo') || 'cliente';

    /* Aplica o perfil na interface */
    applyProfile({ nome: nomePerfil, tipo: tipoPerfil, imagem: imagemPerfil });

    // Carrega o catálogo inicial baseado no perfil salvo
    loadCatalog();

    // Inicializa o menu de mudança de perfil (seta do topo direito)
    initializeProfileSwitchMenu();
});

/* ---------- FUNÇÃO PARA CARREGAR CATÁLOGO ---------- */

function loadCatalog() {
    const nomePerfil = localStorage.getItem('perfilAtivoNome') || 'Ana';
    const container = document.getElementById('main-content');
    
    if (container) {
        // Limpa o catálogo anterior
        container.innerHTML = '';
        
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
}

/* ---------- SUPORTE A TROCA DE PERFIL VIA SETA ---------- */

const profiles = [
    { nome: 'Ana', imagem: './assets/perfil netflix1- Imgur.png' },
    { nome: 'Raul', imagem: './assets/perfil netflix2- Imgur.png' },
    { nome: 'Daiane', imagem: './assets/perfil netflix3 - Imgur.png' },
    { nome: 'Breno', imagem: './assets/perfil netflix4 - Imgur.png' }
];

function initializeProfileSwitchMenu() {
    const profileMenu = document.querySelector('.profile-menu');
    if (!profileMenu) return;

    // Cria o container do menu de opções com estilo inline para evitar necessidade de CSS novo
    const dropdown = document.createElement('div');
    dropdown.id = 'profile-switcher-dropdown';
    dropdown.style.position = 'absolute';
    dropdown.style.top = '70px';
    dropdown.style.right = '20px';
    dropdown.style.backgroundColor = '#111';
    dropdown.style.border = '1px solid #444';
    dropdown.style.borderRadius = '6px';
    dropdown.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
    dropdown.style.padding = '8px 0';
    dropdown.style.zIndex = '2000';
    dropdown.style.display = 'none';
    dropdown.style.minWidth = '180px';

    // Adiciona opções
    profiles.forEach(profile => {
        const item = document.createElement('button');
        item.type = 'button';
        item.textContent = `Trocar para ${profile.nome}`;
        item.style.width = '100%';
        item.style.background = 'transparent';
        item.style.color = '#fff';
        item.style.border = 'none';
        item.style.padding = '10px 14px';
        item.style.textAlign = 'left';
        item.style.cursor = 'pointer';
        item.style.fontSize = '14px';

        item.addEventListener('mouseenter', () => item.style.backgroundColor = '#333');
        item.addEventListener('mouseleave', () => item.style.backgroundColor = 'transparent');

        item.addEventListener('click', () => {
            localStorage.setItem('perfilAtivoNome', profile.nome);
            localStorage.setItem('perfilAtivoImagem', profile.imagem);
            localStorage.setItem('perfilAtivoTipo', 'cliente');
            applyProfile({ nome: profile.nome, tipo: 'cliente', imagem: profile.imagem });
            loadCatalog(); // Recarrega o catálogo para o novo perfil
            dropdown.style.display = 'none';
        });

        dropdown.appendChild(item);
    });

    // Adiciona link de voltar à seleção (index)
    const separator = document.createElement('hr');
    separator.style.border = '0';
    separator.style.height = '1px';
    separator.style.margin = '6px 0';
    separator.style.backgroundColor = '#444';
    dropdown.appendChild(separator);

    const revert = document.createElement('button');
    revert.type = 'button';
    revert.textContent = 'Ir para seleção de perfil';
    revert.style.width = '100%';
    revert.style.background = 'transparent';
    revert.style.color = '#f4f4f4';
    revert.style.border = 'none';
    revert.style.padding = '8px 14px';
    revert.style.textAlign = 'left';
    revert.style.cursor = 'pointer';
    revert.style.fontSize = '14px';

    revert.addEventListener('mouseenter', () => revert.style.backgroundColor = '#333');
    revert.addEventListener('mouseleave', () => revert.style.backgroundColor = 'transparent');
    revert.addEventListener('click', () => window.location.href = '../index.html');

    dropdown.appendChild(revert);

    document.body.appendChild(dropdown);

    profileMenu.addEventListener('click', event => {
        event.preventDefault();
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Fecha ao clicar fora
    document.addEventListener('click', event => {
        if (!profileMenu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
}

function applyProfile(profile) {
    const kidsLink = document.querySelector('.kids-link');
    const profileIcon = document.querySelector('.profile-icon');
    if (kidsLink) kidsLink.textContent = profile.nome;
    if (profileIcon) profileIcon.src = profile.imagem;

    document.body.classList.remove('perfil-cliente', 'perfil-admin');
    document.body.classList.add(profile.tipo === 'admin' ? 'perfil-admin' : 'perfil-cliente');

    const adminOnly = document.querySelectorAll('[data-role="admin-only"]');
    const clienteOnly = document.querySelectorAll('[data-role="cliente-only"]');

    adminOnly.forEach(el => {
        el.style.display = profile.tipo === 'admin' ? '' : 'none';
    });
    clienteOnly.forEach(el => {
        el.style.display = profile.tipo === 'cliente' ? '' : 'none';
    });
}

