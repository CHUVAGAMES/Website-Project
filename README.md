# 🎮 CHUVA Games - Website Oficial

> **"Somos um coletivo de neurodivergentes amantes de jogos que se reuniram para contar histórias"**

Site oficial do estúdio brasileiro de jogos independentes CHUVA Games, desenvolvido com foco em acessibilidade, responsividade e experiência do usuário.

## 📋 Índice

- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Sistema de Cards da Equipe](#-sistema-de-cards-da-equipe)
- [Configuração do Emulador Javatari](#-configuração-do-emulador-javatari)
- [Configuração e Instalação](#-configuração-e-instalação)
- [Manutenção](#-manutenção)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🏗️ Estrutura do Projeto

```
chuvagames/
├── 📁 .vscode/                  # Configurações do VS Code
│   └── settings.json
├── 📁 assets/                   # Recursos estáticos
│   ├── 📁 css/
│   │   └── styles.css           # Estilos principais
│   ├── 📁 images/              # Imagens do site
│   │   ├── 📁 background/      # Imagens de fundo
│   │   ├── 📁 banners/         # Banners promocionais
│   │   ├── 📁 games/           # Screenshots dos jogos
│   │   ├── 📁 icons/           # Ícones e favicons
│   │   ├── 📁 logos/           # Logotipos
│   │   └── 📁 team/            # Fotos da equipe
│   ├── 📁 roms/                # ROMs dos jogos Atari 2600
│   │   └── gatonho.bin         # ROM do jogo Gatonho
│   └── 📁 scripts/             # Scripts JavaScript
│       └── scripts.js          # Script principal
├── 📁 eng/                     # Versão em inglês
│   ├── 📁 team/                # Páginas individuais da equipe
│   │   ├── andrews-nycollas.html
│   │   ├── brendo-teles.html
│   │   ├── camila-sales.html
│   │   ├── edpaulo-cardoso.html
│   │   ├── gabriel-flexa.html
│   │   ├── marcos-genu.html
│   │   ├── miguel-angel.html
│   │   ├── mohamed-capistrano.html
│   │   ├── rene-ballesteros.html
│   │   ├── richard-de-leon.html
│   │   └── rick-galasio.html
│   ├── contact.html
│   ├── games.html
│   ├── gatonho.html            # Página do jogo Gatonho (Atari 2600)
│   ├── index.html
│   ├── magiclessmage.html      # Página do jogo Magicless Mage
│   ├── team.html
│   ├── theamazongrove.html     # Página do jogo The Amazon Grove
│   ├── thelegendofthesilentknight.html # Página do jogo The Legend of the Silent Knight
│   └── trialsofthearcanegrove.html # Página do jogo Trials of the Arcane Grove
├── 📁 pt-br/                   # Versão em português
│   ├── 📁 team/                # Páginas individuais da equipe
│   │   ├── andrews-nycollas.html
│   │   ├── brendo-teles.html
│   │   ├── camila-sales.html
│   │   ├── edpaulo-cardoso.html
│   │   ├── gabriel-flexa.html
│   │   ├── marcos-genu.html
│   │   ├── miguel-angel.html
│   │   ├── mohamed-capistrano.html
│   │   ├── rene-ballesteros.html
│   │   ├── richard-de-leon.html
│   │   └── rick-galasio.html
│   ├── contact.html
│   ├── games.html
│   ├── gatonho.html            # Página do jogo Gatonho (Atari 2600)
│   ├── index.html
│   ├── magiclessmage.html      # Página do jogo Magicless Mage
│   ├── team.html
│   ├── theamazongrove.html     # Página do jogo The Amazon Grove
│   ├── thelegendofthesilentknight.html # Página do jogo The Legend of the Silent Knight
│   └── trialsofthearcanegrove.html # Página do jogo Trials of the Arcane Grove
├── 📁 javatari.js-master/      # Emulador Atari 2600 (Javatari)
│   ├── 📁 doc/                 # Documentação do Javatari
│   ├── 📁 release/             # Versões estáveis
│   ├── 📁 src/                 # Código fonte
│   ├── 📁 test/                # Testes e ROMs de exemplo
│   ├── README.md
│   ├── package.json
│   └── [outros arquivos]
├── .htaccess                   # Configurações do servidor Apache
├── 404.html                    # Página de erro 404
├── CNAME                       # Configuração de domínio
├── LICENSE.md                  # Licença do projeto
├── README.md                   # Este arquivo
├── SEO-OPTIMIZATIONS.md        # Documentação de otimizações SEO
├── index.html                  # Página de seleção de idioma
├── javatari.js                 # Script principal do emulador Atari 2600
├── robots.txt                  # Configurações para crawlers
├── sitemap.xml                 # Mapa do site
├── tast.md                     # Arquivo de teste
└── text.md                     # Arquivo de texto
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com variáveis CSS
- **JavaScript (ES6+)** - Interatividade e funcionalidades dinâmicas
- **Bootstrap 5.3.3** - Framework CSS para responsividade
- **Font Awesome** - Biblioteca de ícones
- **Google Fonts** - Tipografia (Open Sans)

### Emulação de Jogos
- **Javatari 5.0.4** - Emulador Atari 2600 para web
- **WebAssembly** - Performance otimizada para emulação
- **HTML5 Canvas** - Renderização de gráficos dos jogos
- **Web Audio API** - Sistema de áudio dos jogos

### Hospedagem
- **GitHub Pages** - Hospedagem estática
- **Domínio personalizado** - chuvagames.com

### SEO e Performance
- **Meta tags otimizadas** - Open Graph, Twitter Cards
- **Sitemap XML** - Indexação pelos motores de busca
- **Robots.txt** - Controle de crawling
- **Lazy loading** - Carregamento otimizado de imagens
- **Google Analytics** - Monitoramento de tráfego

## ⭐ Funcionalidades Principais

### 🌐 Multilíngue
- **Português (pt-br)** - Versão principal
- **Inglês (eng)** - Versão internacional
- Seletor de idioma na página inicial

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Navegação otimizada para dispositivos móveis
- Imagens responsivas com lazy loading

### 🎨 Interface Interativa
- **Navbar dinâmica** - Oculta/exibe no scroll
- **Dropdowns animados** - Menus de navegação
- **Hover effects** - Interações visuais
- **Modais responsivos** - Para equipe e jogos

### 🎮 Jogos Embarcados
- **Gatonho: Quest 4 Rings** - Jogo Atari 2600 via emulador Javatari
- **Magicless Mage** - RPG narrativo
- **The Amazon Grove** - Aventura na floresta
- **The Legend of the Silent Knight** - Jogo de ação medieval
- **Trials of the Arcane Grove** - Jogo de magia e mistério
- Integração direta no site com emulador web

### 🕹️ Emulador Atari 2600 (Javatari)
- **Emulação completa** - Console Atari 2600 no navegador
- **Controles responsivos** - Suporte a touch em dispositivos móveis
- **Carregamento automático** - ROMs carregadas automaticamente
- **Interface otimizada** - Layout limpo focado no jogo
- **Performance otimizada** - 60 FPS estáveis
- **Compatibilidade total** - Funciona em todos os navegadores modernos

## 👥 Sistema de Cards da Equipe

### Estrutura de Dados

O sistema de cards da equipe é gerenciado através de arrays JavaScript que contêm informações detalhadas de cada membro:

```javascript
const teamMembersEn = [
  {
    name: "Nome do Membro",
    role: "Cargo/Função",
    thumb: "/assets/images/team/foto.png",
    gif: "/assets/images/team/foto.gif",
    desc: "Descrição detalhada...",
    skills: [
      { name: "Habilidade", value: 100 }
    ],
    social: [
      { 
        href: "URL", 
        icon: "icone_padrao.png", 
        hover: "icone_hover.png", 
        alt: "Plataforma" 
      }
    ]
  }
];
```

### Funcionalidades dos Cards

#### 🖼️ Imagens Dinâmicas
- **Thumbnail estática** - Imagem padrão do membro
- **GIF animado** - Ativado no hover
- **Transições suaves** - Entre estados

#### 📊 Sistema de Skills
- **Barras de progresso** - Representação visual das habilidades
- **Valores percentuais** - De 0 a 100 (ou mais para casos especiais)
- **Animações** - Preenchimento progressivo das barras

#### 🔗 Redes Sociais
- **Ícones interativos** - Estado normal e hover
- **Links externos** - Abertura em nova aba
- **Múltiplas plataformas** - LinkedIn, Instagram, Discord, etc.

### Modal da Equipe

#### Estrutura HTML
```html
<div class="team-modal-bg" id="teamModalBgEn">
  <div class="team-modal" id="teamModalEn">
    <button class="modal-close" aria-label="Close">&times;</button>
    <img class="team-modal-img" id="teamModalImgEn">
    <div class="team-modal-title" id="teamModalTitleEn"></div>
    <div class="team-modal-role" id="teamModalRoleEn"></div>
    <div class="team-modal-desc" id="teamModalDescEn"></div>
    <div class="team-modal-skills" id="teamModalSkillsEn"></div>
    <div class="team-modal-social" id="teamModalSocialEn"></div>
  </div>
</div>
```

#### Funcionalidades JavaScript

1. **Renderização dos Cards**
   ```javascript
   function initTeamCards() {
     // Embaralha a ordem dos membros
     window._shuffledTeamEn = shuffleArray(teamMembersEn);
     
     // Gera HTML dos cards dinamicamente
     grid.innerHTML = window._shuffledTeamEn.map((member, idx) => {
       // Template do card
     }).join('');
   }
   ```

2. **Sistema de Modal**
   ```javascript
   function initTeamModal() {
     // Event listeners para abrir/fechar modal
     // Preenchimento dinâmico do conteúdo
     // Controle de scroll e acessibilidade
   }
   ```

3. **Hover Effects**
   ```javascript
   // Troca de imagem no hover
   img.addEventListener('mouseenter', () => {
     img.src = member.gif;
   });
   
   img.addEventListener('mouseleave', () => {
     img.src = member.thumb;
   });
   ```

### Adicionando Novos Membros

1. **Adicionar fotos**:
   - Thumbnail: `/assets/images/team/nome.png`
   - GIF: `/assets/images/team/nome.gif`

2. **Atualizar arrays**:
   - `teamMembersEn` (inglês) em `scripts.js`
   - `teamMembersPt` (português) em `scripts.js`
   - `teamMembersEn` em `team-en.js` (se aplicável)

3. **Estrutura do objeto**:
   ```javascript
   {
     name: "Nome Completo",
     role: "Cargo/Função",
     thumb: "/assets/images/team/arquivo.png",
     gif: "/assets/images/team/arquivo.gif",
     desc: "Biografia detalhada...",
     skills: [
       { name: "Habilidade 1", value: 90 },
       { name: "Habilidade 2", value: 75 }
     ],
     social: [
       {
         href: "https://linkedin.com/in/perfil",
         icon: "default_linkedin.png",
         hover: "hover_linkedin.png",
         alt: "LinkedIn"
       }
     ]
   }
   ```

## 🕹️ Configuração do Emulador Javatari

### Estrutura de Arquivos

```
javatari-integration/
├── javatari.js                 # Script principal do emulador
├── assets/roms/               # Diretório de ROMs
│   └── gatonho.bin           # ROM do jogo Gatonho
└── [páginas dos jogos].html   # Páginas com emulador integrado
```

### Configuração Básica

Cada página de jogo contém a configuração do Javatari antes do carregamento do script:

```javascript
// Configure Javatari BEFORE loading the script
window.Javatari = {
    SCREEN_ELEMENT_ID: "javatari-screen",
    CARTRIDGE_URL: "https://chuvagames.com/assets/roms/gatonho.bin",
    AUTO_START: true,
    AUTO_POWER_ON_DELAY: 1200,
    CARTRIDGE_SHOW_RECENT: false,
    CARTRIDGE_CHANGE_DISABLED: false,
    SCREEN_CONSOLE_PANEL_DISABLED: false
};
```

### Parâmetros de Configuração

| Parâmetro | Descrição | Valor Padrão |
|-----------|-----------|-------------|
| `SCREEN_ELEMENT_ID` | ID do elemento HTML onde o emulador será renderizado | `"javatari-screen"` |
| `CARTRIDGE_URL` | URL da ROM a ser carregada automaticamente | `""` |
| `AUTO_START` | Inicia o emulador automaticamente | `true` |
| `AUTO_POWER_ON_DELAY` | Delay em ms antes de ligar o console | `1200` |
| `CARTRIDGE_SHOW_RECENT` | Mostra ROMs recentes | `false` |
| `CARTRIDGE_CHANGE_DISABLED` | Desabilita troca de cartuchos | `false` |
| `SCREEN_CONSOLE_PANEL_DISABLED` | Desabilita painel do console | `false` |

### Estrutura HTML do Emulador

```html
<div class="javatari-container">
    <div id="javatari-screen" style="
        width: 100%; 
        height: 400px; 
        max-width: 640px; 
        margin: 0 auto; 
        border-radius: 8px; 
        overflow: hidden;
    "></div>
</div>
```

### Estilos CSS Responsivos

```css
/* Responsive Javatari Container */
.javatari-container {
    margin: 10px 0 !important;
    padding: 0 10px !important;
}

@media (max-width: 768px) {
    .javatari-container {
        margin: 10px 0 !important;
        padding: 0 10px !important;
    }
    
    #javatari-screen {
        height: 300px !important;
    }
}
```

### ROMs Disponíveis

- **gatonho.bin** - Gatonho: Quest 4 Rings (Atari 2600)
  - Tamanho: ~8KB
  - Formato: Binário Atari 2600
  - Localização: `/assets/roms/gatonho.bin`

### Correções Implementadas

#### Problema de Loop de Carregamento
**Problema**: O emulador entrava em loop ao tentar carregar ROMs inexistentes.

**Solução**: Correção da URL do `CARTRIDGE_URL` nos arquivos:
- `eng/gatonho.html`: Alterado de `ring_quest_v6.bin` para `gatonho.bin`
- `pt-br/gatonho.html`: Alterado de `ring_quest_v6.bin` para `gatonho.bin`

#### Otimizações de Layout
- Remoção do background preto do contêiner
- Ajuste das cores de texto de loading
- Otimização das dimensões (largura, altura)
- Melhorias no layout (espaçamento, centralização)
- Remoção de sombras e bordas desnecessárias
- Ajuste de border-radius para melhor integração visual
- Responsividade aprimorada com media queries específicas

### Páginas de Jogos Individuais

Cada jogo possui páginas dedicadas em ambos os idiomas com estrutura consistente:

#### 🎮 Gatonho: Quest 4 Rings
- **Arquivos**: `eng/gatonho.html`, `pt-br/gatonho.html`
- **Tipo**: Jogo Atari 2600 com emulador Javatari integrado
- **Características**:
  - Emulador responsivo com controles touch
  - Sistema de troféus e conquistas
  - Guia de controles interativo
  - História e lore do jogo
  - FAQ integrado

#### 📚 Magicless Mage
- **Arquivos**: `eng/magiclessmage.html`, `pt-br/magiclessmage.html`
- **Tipo**: Action-Adventure Top-Down View
- **Características**:
  - Página informativa com trailer
  - Descrição detalhada da história
  - Screenshots e artwork
  - Links para plataformas de distribuição

#### 🌳 The Amazon Grove
- **Arquivos**: `eng/theamazongrove.html`, `pt-br/theamazongrove.html`
- **Tipo**: Action-Adventure Top-Down View
- **Características**:
  - Ambientação temática
  - Galeria de imagens
  - Informações sobre desenvolvimento

#### ⚔️ The Legend of the Silent Knight
- **Arquivos**: `eng/thelegendofthesilentknight.html`, `pt-br/thelegendofthesilentknight.html`
- **Tipo**: Action-Adventure Top-Down View
- **Características**:
  - Design medieval autêntico
  - Sistema de personagens
  - Mecânicas de combate explicadas

#### 🔮 Trials of the Arcane Grove
- **Arquivos**: `eng/trialsofthearcanegrove.html`, `pt-br/trialsofthearcanegrove.html`
- **Tipo**: Action-Adventure Top-Down View
- **Características**:
  - Elementos místicos e mágicos
  - Sistema de puzzles
  - Progressão de habilidades

### Estrutura Padrão das Páginas de Jogos

```html
<!DOCTYPE html>
<html lang="en/pt-br">
<head>
    <!-- Meta tags otimizadas para SEO -->
    <!-- Open Graph e Twitter Cards -->
    <!-- Estilos responsivos -->
</head>
<body>
    <!-- Header com navegação -->
    <!-- Seção principal do jogo -->
    <!-- Informações e características -->
    <!-- Footer com redes sociais -->
    <!-- Scripts (incluindo Javatari se aplicável) -->
</body>
</html>
```

### Páginas Individuais da Equipe

Cada membro da equipe possui uma página individual em `eng/team/` e `pt-br/team/`:

- `andrews-nycollas.html`
- `brendo-teles.html`
- `camila-sales.html`
- `edpaulo-cardoso.html`
- `gabriel-flexa.html`
- `marcos-genu.html`
- `miguel-angel.html`
- `mohamed-capistrano.html`
- `rene-ballesteros.html`
- `richard-de-leon.html`
- `rick-galasio.html`

**Características das páginas da equipe**:
- Biografia detalhada
- Portfolio de trabalhos
- Redes sociais e contatos
- Habilidades e especializações
- Projetos em que participou

## 🔧 Configuração e Instalação

### Pré-requisitos
- Navegador web moderno
- Servidor web local (para desenvolvimento)
- Editor de código (recomendado: VS Code)

### Instalação Local

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/chuvagames/website.git
   cd website/chuvagames
   ```

2. **Servidor local**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com live-server)
   npx live-server
   
   # PHP
   php -S localhost:8000
   ```

3. **Acesse**: `http://localhost:8000`

### Deploy

O site é automaticamente deployado via GitHub Pages quando há push na branch principal.

## 🔨 Manutenção

### Atualizando Conteúdo

#### Membros da Equipe
1. Edite os arrays em `/assets/scripts/scripts.js`
2. Adicione imagens em `/assets/images/team/`
3. Teste localmente
4. Commit e push

#### Jogos
1. Adicione imagens em `/assets/images/games/`
2. Atualize páginas HTML correspondentes
3. Modifique dados dos jogos nos scripts

#### Estilos
1. Edite `/assets/css/styles.css`
2. Use variáveis CSS para consistência:
   ```css
   :root {
     --primary-color: #f27961;
     --primary-hover: #d0454f;
     --bg-transparent: #1d1d1db0;
   }
   ```

### Otimização de Performance

1. **Imagens**:
   - Comprima imagens antes do upload
   - Use formatos modernos (WebP quando possível)
   - Mantenha thumbnails pequenos (< 100KB)

2. **CSS/JS**:
   - Minifique arquivos para produção
   - Remova código não utilizado
   - Use lazy loading para imagens

### SEO

1. **Meta tags**: Atualize em cada página HTML
2. **Sitemap**: Regenere após adicionar páginas
3. **Alt texts**: Sempre inclua em imagens
4. **Estrutura semântica**: Use tags HTML apropriadas

## 🤝 Contribuição

### Diretrizes

1. **Fork** o repositório
2. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
3. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. **Push** para a branch: `git push origin feature/nova-funcionalidade`
5. **Abra um Pull Request**

### Padrões de Código

- **HTML**: Indentação de 2 espaços, tags em minúsculas
- **CSS**: BEM methodology, variáveis CSS
- **JavaScript**: ES6+, camelCase, comentários JSDoc

### Testes

- Teste em múltiplos navegadores
- Verifique responsividade
- Valide HTML/CSS
- Teste acessibilidade

## 📄 Licença

Este projeto está licenciado sob termos específicos - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

### Resumo da Licença

- ✅ **Permitido**: Uso para estudo e aprendizado
- ❌ **Proibido**: Uso comercial ou cópias para fins comerciais
- 🏢 **Exclusivo**: Este projeto é propriedade exclusiva da CHUVA Games CO

---

## 📞 Contato

- **Website**: [chuvagames.co](https://chuvagames.com)
- **Discord**: [Servidor Oficial](https://discord.gg/Py6nAHGcDX)
- **YouTube**: [@ChuvaGames](https://www.youtube.com/@ChuvaGames)
- **Instagram**: [@chuvagames](https://www.instagram.com/chuvagames/)

---

<div align="center">
  <img src="/assets/images/logos/chuvamain.png" alt="CHUVA Games Logo" width="200">
  



</div>
