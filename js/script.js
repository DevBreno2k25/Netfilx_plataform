// ================================================================
// GERENCIADOR DE TEMA - Dark Mode / Light Mode
// ================================================================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.currentTheme = localStorage.getItem('theme') || 'dark';

        this.init();
    }

    init() {
        // Aplica o tema salvo no localStorage
        this.applyTheme(this.currentTheme);

        // Adiciona evento de clique no botão
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Atualiza o ícone baseado no tema atual
        this.updateIcon();
    }

    toggleTheme() {
        // Alterna entre dark e light
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';

        // Aplica o novo tema
        this.applyTheme(this.currentTheme);

        // Salva no localStorage
        localStorage.setItem('theme', this.currentTheme);

        // Atualiza o ícone
        this.updateIcon();
    }

    applyTheme(theme) {
        // Adiciona/remove a classe 'light-mode' no body
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    updateIcon() {
        // Atualiza o ícone baseado no tema atual
        if (this.currentTheme === 'dark') {
            this.themeIcon.textContent = '🌙'; // Lua para dark mode
            this.themeToggle.setAttribute('aria-label', 'Alternar para modo claro');
        } else {
            this.themeIcon.textContent = '☀️'; // Sol para light mode
            this.themeToggle.setAttribute('aria-label', 'Alternar para modo escuro');
        }
    }
}

// ================================================================
// GERENCIADOR DE PERFIS - Armazenar perfil ativo no localStorage
// ================================================================

class ProfileManager {
    constructor() {
        // Seleciona todos os links de perfil
        this.profileLinks = document.querySelectorAll('.profile-group li.profile a');
        
        this.init();
    }

    init() {
        // Adiciona evento de clique em cada perfil
        this.profileLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                this.handleProfileClick(event);
            });
        });
    }

    handleProfileClick(event) {
        // Obtém o elemento pai (li.profile)
        const profileItem = event.currentTarget.closest('li.profile');
        
        // Extrai o nome do figcaption
        const nomePerfil = profileItem.querySelector('figcaption').textContent;
        
        // Extrai a URL da imagem
        const imagemPerfil = profileItem.querySelector('img').src;
        
        // Armazena no localStorage com as chaves que o catalogo.html espera
        localStorage.setItem('perfilAtivoNome', nomePerfil);
        localStorage.setItem('perfilAtivoImagem', imagemPerfil);
        
        // Log para debug (opcional, remova se não quiser)
        console.log(`Perfil ativo: ${nomePerfil}`);
        console.log(`Imagem: ${imagemPerfil}`);
    }
}

// ================================================================
// INICIALIZAÇÃO - Quando a página carrega
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o gerenciador de tema
    new ThemeManager();
    
    // Inicializa o gerenciador de perfis
    new ProfileManager();
});