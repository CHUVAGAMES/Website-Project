/**
 * CHUVA Games - Main JavaScript
 * Handles navigation, animations, and interactive elements for both English and Portuguese versions
 */

// Utility function to safely get DOM elements
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initDropdowns();
  initSocialIconsHover();
  initCopyEmail();
  initGameModals();
  initImageZoom();
  initTeamCards();
  initTeamModal();
  initNavbarScroll();
  renderProfileSkillbars();
  renderProfileSocial();
});

// Navbar: hide on scroll down, show on scroll up
function initNavbar() {
  const header = $('.header');
  if (!header) return;
  
  let prevScrollpos = window.pageYOffset;
  let scrollTimer;
  
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimer);
    
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('hide');
    } else if (currentScrollPos > 100) { // Only hide after scrolling down a bit
      header.classList.add('hide');
    }
    prevScrollpos = currentScrollPos;
    
    // Add a small delay to prevent the header from flickering
    scrollTimer = setTimeout(() => {
      if (currentScrollPos < 50) {
        header.classList.remove('hide');
      }
    }, 150);
  });
}

// Mobile menu and dropdown functionality
function initDropdowns() {
  // Mobile menu toggle
  const mobileMenuToggle = $('.mobile-menu-toggle');
  const navMenu = $('.nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Toggle icon between hamburger and X
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }
  
  // Dropdown menus
  const dropdowns = $$('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    if (toggleBtn && dropdownMenu) {
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown && d.classList.contains('active')) {
            d.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      });
    }
  });
  
  // Close dropdowns and mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    // Close dropdowns
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
    
    // Close mobile menu
    if (navMenu && navMenu.classList.contains('active') && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.mobile-menu-toggle')) {
      navMenu.classList.remove('active');
      
      // Reset hamburger icon
      if (mobileMenuToggle) {
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close dropdowns
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      
      // Close mobile menu
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        if (mobileMenuToggle) {
          const icon = mobileMenuToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    }
  });
}

// Social icons hover effect
function initSocialIconsHover() {
  const icons = $$('.social-icon-hover');
  
  icons.forEach(icon => {
    const originalSrc = icon.getAttribute('data-original-src');
    const hoverSrc = icon.getAttribute('data-hover-src');
    
    if (!originalSrc || !hoverSrc) return;
    
    // Mouse events
    icon.addEventListener('mouseover', () => {
      icon.src = hoverSrc;
      icon.style.transform = 'scale(1.15)';
    });
    
    icon.addEventListener('mouseout', () => {
      icon.src = originalSrc;
      icon.style.transform = '';
    });
    
    // Touch events for mobile
    icon.addEventListener('touchstart', () => {
      icon.src = hoverSrc;
      icon.style.transform = 'scale(1.15)';
    });
    
    icon.addEventListener('touchend', () => {
      icon.src = originalSrc;
      icon.style.transform = '';
    });
  });
}

// Copy email to clipboard
function initCopyEmail() {
  const copyBtn = $('#copy-email');
  
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const email = 'contato@chuvagames.com';
    
    navigator.clipboard.writeText(email)
      .then(() => {
        // Create and show a temporary tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Email copied: ' + email;
        tooltip.style.position = 'fixed';
        tooltip.style.bottom = '20px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '10px 15px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '9999';
        
        document.body.appendChild(tooltip);
        
        // Remove tooltip after 3 seconds
        setTimeout(() => {
          tooltip.style.opacity = '0';
          tooltip.style.transition = 'opacity 0.5s ease';
          
          setTimeout(() => {
            document.body.removeChild(tooltip);
          }, 500);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        alert('Failed to copy email. Please try again.');
      });
  });
}

// Game modals
function initGameModals() {
  // Dados dos jogos em inglês
  const gamesEn = {
    amazon: {
      title: "The Amazon Grove",
      img: "/assets/images/games/amazongrove.webp",
      desc: "Soon"
    },
    arcane: {
      title: "TAG: Trials of The Arcane Grove",
      img: "/assets/images/games/arcanegrove.webp",
      desc: "TAG: Trials of The Arcane Grove is a 2D top-down action-adventure with a focus on magic, exploration, puzzles, and real-time combat. Features hand-drawn art and a mystical atmosphere."
    },
    magicless: {
      title: "Magicless Mage",
      img: "/assets/images/games/magicless.webp",
      desc: "Magicless Mage is a 2D top-down action-adventure starring RAGEnaldo, a furious mage with no magic. Solve puzzles, outsmart enemies, and survive a magical world using brains and rage. Stylized visuals and comedic tone."
    },
    silent: {
      title: "The Legend of the Silent Knight",
      img: "/assets/images/games/silentknight.webp",
      desc: "The Legend of the Silent Knight is a 2D top-down action-adventure about a nonverbal autistic boy on a heroic journey. Face symbolic bosses inspired by real-life challenges, solve puzzles, and explore a heartfelt, stylized world. Emotional narrative with meaningful representation."
    }
  };

  // Dados dos jogos em português
  const gamesPt = {
    amazon: {
      title: "The Amazon Grove",
      img: "/assets/images/games/amazongrove.webp",
      desc: "Em breve"
    },
    arcane: {
      title: "TAG: Trials of The Arcane Grove",
      img: "/assets/images/games/arcanegrove.webp",
      desc: "TAG: Trials of The Arcane Grove é um jogo 2D de ação e aventura em visão top-down, com foco em magia, exploração, puzzles e combate em tempo real. Estilo artístico desenhado à mão e atmosfera mística."
    },
    magicless: {
      title: "Magicless Mage",
      img: "/assets/images/games/magicless.webp",
      desc: "Magicless Mage é um jogo 2D de ação e aventura em visão top-down, estrelado por RAGEnaldo, um mago furioso sem magia. Resolva puzzles, engane inimigos e sobreviva em um mundo mágico usando inteligência e raiva. Visual estilizado e tom cômico."
    },
    silent: {
      title: "The Legend of the Silent Knight",
      img: "/assets/images/games/silentknight.webp",
      desc: "The Legend of the Silent Knight é um jogo 2D de ação e aventura em visão top-down sobre um garoto autista não verbal em uma jornada heroica. Enfrente chefes simbólicos inspirados em desafios reais, resolva puzzles e explore um mundo estilizado e comovente. Narrativa emocional com representatividade significativa."
    }
  };

  // Detecta idioma da página
  const lang = document.documentElement.lang || 'en';
  const games = lang.startsWith('pt') ? gamesPt : gamesEn;

  const modalBg = $('#gameModalBg');
  const modal = $('#gameModal');
  const modalImg = $('#modalImg');
  const modalTitle = $('#modalTitle');
  const modalDesc = $('#modalDesc');
  const modalClose = $('#modalClose');

  if (!modalBg || !modal || !modalImg || !modalTitle || !modalDesc || !modalClose) return;

  // Redirect to individual game pages when clicking on a game card
  $$('.game-cloud-card, .game-highlight-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-game');
      
      // Define the URLs for each game based on current language
      const gameUrls = {
        'arcane': lang.startsWith('pt') ? '/pt-br/trialsofthearcanegrove.html' : '/eng/trialsofthearcanegrove.html',
        'magicless': lang.startsWith('pt') ? '/pt-br/magiclessmage.html' : '/eng/magiclessmage.html',
        'silent': lang.startsWith('pt') ? '/pt-br/thelegendofthesilentknight.html' : '/eng/thelegendofthesilentknight.html',
        'gatonho': lang.startsWith('pt') ? '/pt-br/gatonho.html' : '/eng/gatonho.html'
      };
      
      const gameUrl = gameUrls[key];
      if (gameUrl) {
        window.location.href = gameUrl;
      }
    });
  });

  // Close modal functions
  function closeModal() {
    modalBg.classList.remove('active');
    document.body.style.overflow = '';
    if (modalImg.classList.contains('zoom')) {
      modalImg.classList.remove('zoom');
      modalImg.style.transform = '';
    }
  }

  modalClose.addEventListener('click', closeModal);

  modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Image zoom functionality
function initImageZoom() {
  const modalImg = $('#modalImg');
  
  if (!modalImg) return;
  
  let isDragging = false;
  let startX, startY, imgX = 0, imgY = 0;
  
  // Toggle zoom on click
  modalImg.addEventListener('click', function(e) {
    e.stopPropagation();
    
    if (modalImg.classList.contains('zoom')) {
      modalImg.classList.remove('zoom');
      modalImg.style.transform = '';
      imgX = 0;
      imgY = 0;
    } else {
      modalImg.classList.add('zoom');
      modalImg.style.transform = 'scale(1.5)';
    }
  });
  
  // Drag functionality for zoomed images
  modalImg.addEventListener('mousedown', (e) => {
    if (!modalImg.classList.contains('zoom')) return;
    
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - imgX;
    startY = e.clientY - imgY;
    modalImg.style.cursor = 'grabbing';
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    imgX = e.clientX - startX;
    imgY = e.clientY - startY;
    modalImg.style.transform = `translate(${imgX}px, ${imgY}px) scale(1.5)`;
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
    if (modalImg.classList.contains('zoom')) {
      modalImg.style.cursor = 'grab';
    }
  });
  
  // Touch events for mobile
  modalImg.addEventListener('touchstart', (e) => {
    if (!modalImg.classList.contains('zoom')) return;
    
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX - imgX;
    startY = touch.clientY - imgY;
  });
  
  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    imgX = touch.clientX - startX;
    imgY = touch.clientY - startY;
    modalImg.style.transform = `translate(${imgX}px, ${imgY}px) scale(1.5)`;
  });
  
  document.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// Navbar scroll behavior
function initNavbarScroll() {
  const header = $('.header');
  if (!header) return;
  
  let prevScrollpos = window.pageYOffset;
  
  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('hide');
    } else {
      header.classList.add('hide');
    }
    prevScrollpos = currentScrollPos;
  });
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Team members data - English version
const teamMembersEn = [
  {
    name: "Andrews Nycollas",
    slug: "andrews-nycollas",
    role: "Creative Director / Game Designer",
    thumb: "/assets/images/team/andrews.webp",
    gif: "/assets/images/team/animated_andrews.webp",
    desc: `Andrews Nycollas has been passionate about game development since his early teens, when he started creating and selling custom arcade fighting games at school at age 12. He has a diverse background in theater, music, film, and visual arts, enriching his creative approach to game design. A professional freelancer in the games industry since 2012, Andrews has worked extensively with the Asian games market since 2019. "I sold everything I had and came to the Philippines to meet a girl, we got married, we have a boy. Now I'm ready to become an indie game developer."`,
    skills: [
      { name: "Holistic Design", value: 100, desc: "Integrates sound, visuals, narrative, and interface as a cohesive emotional and functional system." },
      { name: "Interactive Narrative", value: 100, desc: "Creation of worlds and stories that emerge from player behavior and game aesthetics." },
      { name: "Sound Design and Music", value: 100, desc: "Composition and implementation of soundscapes that reinforce identity and emotion." },
      { name: "Creative Direction", value: 100, desc: "Orchestrates teams and disciplines to maintain aesthetic, symbolic, and functional cohesion." },
      { name: "Emotional UI/UX", value: 100, desc: "Interface design that communicates mechanics and lore with clarity and empathy." },
      { name: "Illustration and Visual Storytelling", value: 100, desc: "Communicates complex ideas with simple, intuitive, and symbolic visuals." },
      { name: "Applied Anthropology", value: 100, desc: "Translates cultural and behavioral references into playable experiences." },
      { name: "System Gamification", value: 100, desc: "Transforms routines, interfaces, and narratives into playful and meaningful systems." },
      { name: "Modular Prototyping", value: 100, desc: "Rapid creation and iteration of systems and assets focused on clarity and scalability." },
      { name: "Ethical and Collaborative Management", value: 100, desc: "Project coordination with transparency, active listening, and creative respect." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/andrews-nycollas-a80271251/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.youtube.com/@andrewsnycollas3651", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://www.twitch.tv/andrewsnycollas", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/andrewsnycollas_/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/512014156161875968", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" },
      { href: "https://steamcommunity.com/id/gmandrewsnycollas", icon: "default_steam.webp", hover: "hover_steam.webp", alt: "Steam" },
      { href: "https://x.com/andrewsnycollas", icon: "default_x.webp", hover: "hover_x.webp", alt: "X" },
      { href: "https://bsky.app/profile/andrewsnycollas.bsky.social", icon: "default_bsky.webp", hover: "hover_bsky.webp", alt: "Bluesky" },
      { href: "https://open.spotify.com/artist/5d1B5VZbcDhWjzuXWlL1Ui?si=HU5aU9RbQsGbHnoaKKKMfQ", icon: "default_spotify.webp", hover: "hover_spotify.webp", alt: "Spotify" }
    ]
  },
  {
    name: "Marcos Genú",
    slug: "marcos-genu",
    role: "Art Director",
    thumb: "/assets/images/team/marcos.webp",
    gif: "/assets/images/team/animated_marcos.webp",
    desc: `Marcos Genú has worked since 2012 with concept art, 2D animation, and asset creation for games. He has contributed to several projects, including Tap Tap Beer and games developed for major companies such as VALE and the Government of Pará. His work also includes internationally awarded games like Ghostein, recognized at Game Jam+, and a project that secured sixth place at the global BGJam. "Hi, I'm Marcos."`,
    skills: [
      { name: "Pixel Art", value: 100, desc: "Creation of pixelated art focused on detail and symbolism." },
      { name: "Illustration", value: 100, desc: "Communication of complex ideas through simple, intuitive, and symbolic lines." },
      { name: "Animation", value: 60, desc: "Creation of fluid and expressive animations for games." },
      { name: "3D", value: 20, desc: "3D modeling and animation for games and applications." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/markcg/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.instagram.com/its_mark_cg/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/532567066109149186", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Mohamed Capistrano",
    slug: "mohamed-capistrano",
    role: "Producer / Behavior Designer",
    thumb: "/assets/images/team/mohamed.webp",
    gif: "/assets/images/team/animated_mohamed.webp",
    desc: `Graduated in Game Development in 2015, but only now, with Andrews' invitation (a longtime friend), am I having the opportunity to work in the field. "I feel excited, as the essence of the game brings back a nostalgic memory. It's authentic."`,
    skills: [
      { name: "Game Developer", value: 50, desc: "Creation of a game from scratch." },
      { name: "Behavior Designer", value: 80, desc: "Designing the behavior of characters and elements within the game." },
      { name: "Level Designer", value: 80, desc: "Creating engaging and balanced levels for players." },
      { name: "Tester", value: 80, desc: "Testing the game for bugs and ensuring a smooth player experience." },
      { name: "Programmer", value: 40, desc: "Writing code to implement game features and mechanics." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/mohamed-capistrano-0a475279/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.twitch.tv/mokaap", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/brightersheep", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/335489284197056522", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Rick Galasio",
    slug: "rick-galasio",
    role: "Linux Specialist / Voice Actor",
    thumb: "/assets/images/team/rick.webp",
    gif: "/assets/images/team/animated_rick.webp",
    desc: `Rick Galasio, an autistic man with over half a century of life. After years dedicated to family and work, he can finally honor the autistic child who still lives inside him and fulfill his dream of becoming an indie game developer. "I'm just an old autistic guy."`,
    skills: [
      { name: "Linux", value: 100, desc: "Expertise in Linux operating systems and server management." },
      { name: "Acting", value: 200, desc: "Voice acting for characters in games and animations." },
      { name: "2D Artist – Pixel Art", value: 200, desc: "Creating pixel art assets for games." },
      { name: "Programmer", value: 200, desc: "Writing code to implement features and mechanics." },
      { name: "Software Portability Specialist", value: 200, desc: "Ensuring software runs smoothly on various platforms." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/ricardo-leite-a5467a38/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.youtube.com/@ricleitetube", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://www.instagram.com/rickgalasio", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/612803183764307968", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "André Borba",
    slug: "andre-borba",
    role: "Web Developer / Producer / Community Manager",
    thumb: "/assets/images/team/tuta.webp",
    gif: "/assets/images/team/animated_tuta.webp",
    desc: `André, known as Tutankhamal, is passionate about technology and music. Neurodivergent (autistic and ADHD), he has experience in Front-end development, community management, and customer support. A self-taught learner, he turns his passion for video games and computers into technical knowledge.`,
    skills: [
      { name: "Community Management", value: 100, desc: "Building and managing online communities." },
      { name: "Front-End Development", value: 100, desc: "Creating user-friendly interfaces for web applications." },
      { name: "Content Management", value: 100, desc: "Managing and organizing digital content." },
      { name: "UI/UX", value: 90, desc: "Designing user interfaces and enhancing user experiences." },
      { name: "Responsive Design", value: 90, desc: "Ensuring websites are accessible and usable on all devices." },
      { name: "Performance Optimization", value: 90, desc: "Improving website speed and efficiency." },
      { name: "Image Editing", value: 70, desc: "Creating and manipulating images for web and print materials." },      
      { name: "SEO", value: 100, desc: "Optimizing websites for search engines." }
    ],
    social: [
      { href: "https://tutankhamal.com", icon: "default_site.webp", hover: "hover_site.webp", alt: "Portifolio" },
      { href: "https://www.linkedin.com/in/tutankhamal/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://github.com/Tutankhamal", icon: "default_github.webp", hover: "hover_github.webp", alt: "GitHub" },
      { href: "https://www.youtube.com/@tutankhamal", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://www.twitch.tv/tutankhamal", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/tutankhamal", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://www.tiktok.com/@tutankhamal", icon: "default_tiktok.webp", hover: "hover_tiktok.webp", alt: "TikTok" },
      { href: "https://discordapp.com/users/820522746622246963", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" },
      { href: "https://steamcommunity.com/id/Tutankhamal/", icon: "default_steam.webp", hover: "hover_steam.webp", alt: "Steam" },
      { href: "https://x.com/Tutankhamal", icon: "default_x.webp", hover: "hover_x.webp", alt: "X" },
      { href: "https://soundcloud.com/tutankhamal", icon: "default_soundcloud.webp", hover: "hover_soundcloud.webp", alt: "Soundcloud" }
    ]
  },
  {
    name: "Camila Sales",
    slug: "camila-sales",
    role: "2D Artist",
    thumb: "/assets/images/team/camila.webp",
    gif: "/assets/images/team/animated_camila.webp",
    desc: `Graduated in Game Development since 2017 and currently pursuing a postgraduate degree in Digital Animation. I discovered the world of drawing in childhood, like many artists, starting with Dragon Ball sketches. I grew up and dedicated myself to various forms of drawing and painting, from pencil and paper to canvas painting. In 2020, I bought my first graphics tablet and started exploring Digital Painting, soon after starting to study 2D Digital Animation. Art, in general, has always been my escape, and returning to the game industry will be challenging but exciting.`,
    skills: [
      { name: "2D Illustration", value: 100, desc: "Creating detailed and expressive 2D illustrations." },
      { name: "Character Concept", value: 100, desc: "Designing unique and engaging characters for games." },
      { name: "2D Animation", value: 60, desc: "Bringing characters and scenes to life through animation." },
      { name: "Storyboard", value: 60, desc: "Planning and visualizing the narrative flow of a game." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/camila-sales-4b135a231", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://discordapp.com/users/1064628941970755735", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Richard de Leon",
    slug: "richard-de-leon",
    role: "Marketing Manager",
    thumb: "/assets/images/team/richard.webp",
    gif: "/assets/images/team/animated_richard.webp",
    desc: `He has worked in marketing for seven years, starting his career at major advertising agencies in São Paulo. A few years ago, he moved to Asia, where he has been active in the Asian games market, focusing on digital advertising. Passionate about reading and games, he draws inspiration from these interests to fuel his creativity and professional endeavors.`,
    skills: [
      { name: "Social Media Manager", value: 100, desc: "Managing social media platforms and engaging with the community." },
      { name: "Digital Marketing", value: 100, desc: "Creating and implementing online marketing strategies." },
      { name: "Prompt Engineer", value: 80, desc: "Designing effective prompts for AI interactions." },
      { name: "Video Editor", value: 70, desc: "Editing video content for promotional materials." },
      { name: "SEO/SEM", value: 60, desc: "Optimizing content for search engines and managing ad campaigns." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/richard-de-leon-534123144", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.instagram.com/_richarddeleon/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/1312938936120643670", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Miguel (Angel)",
    slug: "miguel-angel",
    role: "Young Apprentice",
    thumb: "/assets/images/team/angel.webp",
    gif: "/assets/images/team/animated_angel.webp",
    desc: `Miguel, better known as Angel, has loved games since childhood. He has always been interested in game development, especially in how games can go beyond entertainment to convey emotions, knowledge, and unique challenges. Recently, he turned this passion into practice by improving his art and developing projects in GameMaker. He is constantly seeking to improve his skills and contribute to creating experiences that engage CHUVA's members.`,
    skills: [
      { name: "Game Maker Language (GML)", value: 60, desc: "Proficient in using GML for game development." },
      { name: "Apprentice", value: 100, desc: "Eager to learn and grow in the field of game development." }
    ],
    social: [
      { href: "https://www.youtube.com/@AngelinoJollie", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://twitch.tv/paodeangel", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/angelinojollie/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://x.com/AngelinoJollie", icon: "default_x.webp", hover: "hover_x.webp", alt: "X" },
      { href: "https://github.com/angelinojollie", icon: "default_github.webp", hover: "hover_github.webp", alt: "GitHub" },
      { href: "https://discordapp.com/users/979140949185822762", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
    {
    name: "Brendo Teles",
    slug: "brendo-teles",
    role: "2D / 3D / Animation Artist",
    thumb: "/assets/images/team/teles.webp",
    gif: "/assets/images/team/animated_teles.webp",
    desc: `Digital artist focused on 3D modeling, concept art, illustration, and basic 2D/3D animation for digital games and graphic materials. Experienced in projects such as Matemagos, Holobeast Academy, Thunder Riders, and Amazon Quest, contributing to visual development and supporting the artistic consistency and creative direction of the productions. Passionate about storytelling through stylized and engaging visuals.`,
    skills: [
      { name: "Illustration / Concept Art", value: 90, desc: "Creating visually compelling illustrations and concept art." },
      { name: "3D Modeling", value: 80, desc: "Building detailed 3D models for games and animations." },
      { name: "2D Animation Frame-to-Frame", value: 60, desc: "Animating 2D characters and elements frame by frame." },
      { name: "3D Animation", value: 60, desc: "Animating 3D models and scenes." },
      { name: "Video Editing", value: 50, desc: "Editing video content for trailers and promotional materials." },
      { name: "UI/UX", value: 40, desc: "Designing user interfaces and experiences for games." }
    ],
    social: [
      { href: "https://www.artstation.com/teles_design", icon: "default_site.webp", hover: "hover_site.webp", alt: "Portifolio" },
      { href: "https://www.linkedin.com/in/brendo-teles-082909127/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.instagram.com/shiro.aniclubchannel/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://wa.me/5592982351719", icon: "default_whats.webp", hover: "hover_whats.webp", alt: "WhatsApp" },
      { href: "https://discordapp.com/users/246455690133110784", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
      {
    name: "Gabriel Flexa",
    slug: "gabriel-flexa",
    role: "Music Producer",
    thumb: "/assets/images/team/flexa.webp",
    gif: "/assets/images/team/animated_flexa.webp",
    desc: `Gabriel Flexa is a music producer at CHUVA Games studio, responsible for creating emotionally driven soundtracks with rich textures in sonic narratives that range from pop/rock/hip-hop aesthetics to traditional Amazonian regional music. Originally from Belém do Pará, he began producing his own tracks during his teenage years and has since been shaping his musical style through studio work and collaborations with artists from the Brazilian independent music scene.`,
    skills: [
      { name: "Music Production", value: 100, desc: "Creating and producing music tracks for various media." },
      { name: "Design", value: 80, desc: "Designing visual elements for music projects." },
      { name: "Video Editing", value: 70, desc: "Editing video content for music videos and promotional materials." }
    ],
    social: [
      { href: "https://www.behance.net/gabriel-flexa", icon: "default_behance.webp", hover: "hover_behance.webp", alt: "Behance" },
      { href: "https://www.linkedin.com/in/gabrielflexa/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://open.spotify.com/playlist/6uKqxaFp5Orkn83tiGPtVm?si=a6DZNsK5RT-waPuveQbGdg", icon: "default_spotify.webp", hover: "hover_spotify.webp", alt: "Spotify" },
      { href: "https://www.instagram.com/@gvflexa/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://www.youtube.com/@bandaverene", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://discordapp.com/users/663418867871121439", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Rene Ballesteros",
    slug: "rene-ballesteros",
    role: "Senior Full-Stack Developer",
    thumb: "/assets/images/team/rene.webp",
    gif: "/assets/images/team/animated_rene.webp",
    desc: `With over 40 years of experience, Rene is a true programming veteran. His journey began in the golden age of microcomputers, porting games to classics like the MSX and TK2000. This solid foundation in logic and optimization has propelled him through decades of technological evolution. Today, he remains at the forefront, specializing in Python and Artificial Intelligence, proving that a true passion for problem-solving and creating innovative solutions transcends time. "From the 8-bit era to artificial intelligence, the passion for creating never gets old."`,
    skills: [
      { name: "Full-Stack Development", value: 100, desc: "Architecting and developing complete applications, from back-end to front-end." },
      { name: "Python & AI", value: 100, desc: "Specializing in Python for developing Artificial Intelligence and Machine Learning solutions." },
      { name: "System Architecture", value: 100, desc: "Designing robust, scalable, and efficient systems for complex applications." },
      { name: "Legacy Porting", value: 100, desc: "Vast experience in adapting and modernizing legacy systems, including classic platforms like MSX and TK2000." },
      { name: "Database Management", value: 100, desc: "Modeling, optimizing, and managing relational and NoSQL databases." }
    ],
    social: [
      { href: "https://github.com/renejr", icon: "default_github.webp", hover: "hover_github.webp", alt: "GitHub" },
      { href: "https://www.instagram.com/renebmjr/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/1117568428547506227", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" },
      { href: "https://steamcommunity.com/profiles/76561198435321249", icon: "default_steam.webp", hover: "hover_steam.webp", alt: "Steam" }
    ]
  },
  {
    name: "Edpaulo Cardoso",
    slug: "edpaulo-cardoso",
    role: "Foley Artist",
    thumb: "/assets/images/team/ed.webp",
    gif: "/assets/images/team/animated_ed.webp",
    desc: `Edpaulo Cardoso is a foley artist at CHUVA Games, bringing immersive experiences to life through sound. A graffiti artist, body piercer, and tattooist, he expresses his creativity in many forms. In his free time, he rides the winds as a kiterider across the rivers of the Amazon, in Pará, Brazil.`,
    skills: [
      { name: "Audio", value: 100, desc: "Expertise in creating and manipulating audio for immersive experiences." }
    ],
    social: [
      { href: "https://www.instagram.com/edpaulocardoso", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/1356290249990607128", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  }
];

// Team members data - Portuguese version
const teamMembersPt = [
  {
    name: "Andrews Nycollas",
    slug: "andrews-nycollas",
    role: "Diretor Criativo / Designer de Jogos",
    thumb: "/assets/images/team/andrews.webp",
    gif: "/assets/images/team/animated_andrews.webp",
    desc: `Andrews Nycollas é apaixonado por desenvolvimento de jogos desde a pré-adolescência, quando começou a criar e vender jogos de luta arcade personalizados na escola, aos 12 anos. Ele tem uma formação diversificada em teatro, música, cinema e artes visuais, o que enriquece sua abordagem criativa ao design de jogos. Freelancer profissional na indústria de jogos desde 2012, Andrews tem trabalhado extensivamente com o mercado de jogos asiático desde 2019. "Vendi tudo o que tinha e vim para as Filipinas para encontrar uma garota, nos casamos, temos um menino. Agora estou pronto para me tornar um desenvolvedor de jogos independente"`,
    skills: [
      { name: "Design Holístico", value: 100, desc: "Integra som, imagem, narrativa e interface como um sistema emocional e funcional coeso." },
      { name: "Narrativa Interativa", value: 100, desc: "Criação de mundos e histórias que emergem do comportamento do jogador e da estética do jogo." },
      { name: "Sonorização e Música", value: 100, desc: "Composição e implementação de paisagens sonoras que reforçam identidade e emoção."},
      { name: "Direção Criativa", value: 100, desc: "Orquestra equipes e disciplinas para manter coesão estética, simbólica e funcional."},
      { name: "UI/UX Emocional", value: 100, desc: "Design de interfaces que comunicam mecânica e lore com clareza e afeto."},
      { name: "Ilustração e Visual Storytelling", value: 100, desc: "Comunicação de ideias complexas com traços simples, intuitivos e simbólicos."},
      { name: "Antropologia Aplicadag", value: 100, desc: "Tradução de referências culturais e comportamentais em experiências jogáveis."},
      { name: "Gamificação de Sistemas", value: 100, desc: "Transformação de rotinas, interfaces e narrativas em sistemas lúdicos e significativos."},
      { name: "Prototipagem Modular", value: 100, desc: "Criação e iteração rápida de sistemas e assets com foco em clareza e escalabilidade."},
      { name: "Gestão Ética e Colaborativa", value: 100, desc: "Coordenação de projetos com transparência, escuta ativa e respeito criativo."}
    ],
    social: [
      { href: "https://www.linkedin.com/in/andrews-nycollas-a80271251/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.youtube.com/@andrewsnycollas3651", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://www.twitch.tv/andrewsnycollas", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/andrewsnycollas_/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/512014156161875968", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" },
      { href: "https://steamcommunity.com/id/gmandrewsnycollas", icon: "default_steam.webp", hover: "hover_steam.webp", alt: "Steam" },
      { href: "https://x.com/andrewsnycollas", icon: "default_x.webp", hover: "hover_x.webp", alt: "X" },
      { href: "https://bsky.app/profile/andrewsnycollas.bsky.social", icon: "default_bsky.webp", hover: "hover_bsky.webp", alt: "Bluesky" },
      { href: "https://open.spotify.com/artist/5d1B5VZbcDhWjzuXWlL1Ui?si=HU5aU9RbQsGbHnoaKKKMfQ", icon: "default_spotify.webp", hover: "hover_spotify.webp", alt: "Spotify" }
    ]
  },
  {
    name: "Marcos Genú",
    slug: "marcos-genu",
    role: "Diretor de Arte",
    thumb: "/assets/images/team/marcos.webp",
    gif: "/assets/images/team/animated_marcos.webp",
    desc: `Marcos Genú trabalha desde 2012 com arte conceitual, animação 2D e criação de assets para jogos. Ele contribuiu para diversos projetos, incluindo Tap Tap Beer e jogos desenvolvidos para grandes empresas como VALE e o Governo do Pará. Seu trabalho também inclui jogos premiados internacionalmente, como Ghostein, que foi reconhecido na Game Jam+, e um projeto que garantiu o sexto lugar no BGJam global. "Oi, eu sou o Marcos."`,
    skills: [
      { name: "Pixel Art", value: 100, desc: "Criação de arte pixelada, com foco em detalhes e simbologia." },
      { name: "Ilustração", value: 100, desc: "Comunicação de ideias complexas com traços simples, intuitivos e simbólicos." },
      { name: "Animação", value: 60, desc: "Criação de animações fluidas e expressivas para jogos." },
      { name: "3D", value: 20, desc: "Modelagem e animação 3D para jogos e aplicações." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/markcg/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.instagram.com/its_mark_cg/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/532567066109149186", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Mohamed Capistrano",
    slug: "mohamed-capistrano",
    role: "Produtor / Designer de Comportamento",
    thumb: "/assets/images/team/mohamed.webp",
    gif: "/assets/images/team/animated_mohamed.webp",
    desc: `Concluí minha graduação em Desenvolvimento de Jogos em 2015, mas só agora, com o convite do Andrews (um amigo de longa data), estou tendo a oportunidade de trabalhar na área. 'Sinto-me empolgado, pois a essência do jogo remete a uma memória nostálgica. "É autêntico."`,
    skills: [
      { name: "Desenvolvedor de Jogos", value: 50, desc: "Desenvolvimento de jogos em várias plataformas." },
      { name: "Designer de Comportamento", value: 80, desc: "Criação de comportamentos e interações de personagens." },
      { name: "Designer de Níveis", value: 80, desc: "Planejamento e criação de níveis desafiadores." },
      { name: "Testador", value: 80, desc: "Teste e garantia de qualidade em jogos." },
      { name: "Programador", value: 40, desc: "Programação de mecânicas de jogo e sistemas." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/mohamed-capistrano-0a475279/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.twitch.tv/mokaap", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/brightersheep", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/335489284197056522", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Rick Galasio",
    slug: "rick-galasio",
    role: "Especialista em Linux / Ator de Voz",
    thumb: "/assets/images/team/rick.webp",
    gif: "/assets/images/team/animated_rick.webp",
    desc: `Rick Galasio, um homem autista com mais de meio século de vida. Após anos dedicados à família e ao trabalho, ele finalmente pode honrar a criança autista que ainda vive dentro dele e realizar seu sonho de se tornar um desenvolvedor de jogos independente. "Eu sou só um velhinho autista."`,
    skills: [
      { name: "Linux", value: 100, desc: "Especialização em sistemas operacionais Linux e gerenciamento de servidores." },
      { name: "Atuação", value: 200, desc: "Dublagem de personagens em jogos e animações." },
      { name: "Artista 2D – Pixel Art", value: 200, desc: "Criação de assets em pixel art para jogos." },
      { name: "Programador", value: 200, desc: "Escrita de código para implementar funcionalidades e mecânicas." },
      { name: "Especialista em Portabilidade de Software", value: 200, desc: "Garantir que o software funcione corretamente em várias plataformas." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/ricardo-leite-a5467a38/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.youtube.com/@ricleitetube", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://www.instagram.com/rickgalasio", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/612803183764307968", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "André Borba",
    slug: "andre-borba",
    role: "Desenvolvedor Web / Produtor / Gerente de Comunidade",
    thumb: "/assets/images/team/tuta.webp",
    gif: "/assets/images/team/animated_tuta.webp",
    desc: `André, conhecido como Tutankhamal, é apaixonado por tecnologia e música. Neurodivergente (autista e TDAH), ele tem experiência em desenvolvimento Front-end, gerenciamento de comunidade e suporte ao cliente. Um autodidata, ele transforma sua paixão por videogames e computadores em conhecimento técnico.`,
    skills: [
      { name: "Gestão de Comunidade", value: 100, desc: "Construção e gerenciamento de comunidades online." },
      { name: "Desenvolvimento Front-End", value: 100, desc: "Criação de interfaces amigáveis para aplicações web." },
      { name: "Gestão de Conteúdo", value: 100, desc: "Gerenciamento e organização de conteúdo digital." },
      { name: "UI/UX", value: 90, desc: "Design de interfaces e aprimoramento da experiência do usuário." },
      { name: "Design Responsivo", value: 90, desc: "Garantia de acessibilidade e usabilidade dos sites em todos os dispositivos." },
      { name: "Otimização de Performance", value: 90, desc: "Melhoria da velocidade e eficiência de sites." },
      { name: "Edição de Imagem", value: 70, desc: "Criação e manipulação de imagens para materiais digitais e impressos." },
      { name: "SEO", value: 100, desc: "Otimização de sites para mecanismos de busca." }
    ],
    social: [
      { href: "https://tutankhamal.com", icon: "default_site.webp", hover: "hover_site.webp", alt: "Portifolio" },
      { href: "https://www.linkedin.com/in/tutankhamal/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://github.com/Tutankhamal", icon: "default_github.webp", hover: "hover_github.webp", alt: "GitHub" },
      { href: "https://www.youtube.com/@tutankhamal", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://www.twitch.tv/tutankhamal", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/tutankhamal", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://www.tiktok.com/@tutankhamal", icon: "default_tiktok.webp", hover: "hover_tiktok.webp", alt: "TikTok" },
      { href: "https://discordapp.com/users/820522746622246963", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" },
      { href: "https://steamcommunity.com/id/Tutankhamal/", icon: "default_steam.webp", hover: "hover_steam.webp", alt: "Steam" },
      { href: "https://x.com/Tutankhamal", icon: "default_x.webp", hover: "hover_x.webp", alt: "X" },
      { href: "https://soundcloud.com/tutankhamal", icon: "default_soundcloud.webp", hover: "hover_soundcloud.webp", alt: "Soundcloud" }
    ]
  },
  {
    name: "Camila Sales",
    slug: "camila-sales",
    role: "Artista 2D",
    thumb: "/assets/images/team/camila.webp",
    gif: "/assets/images/team/animated_camila.webp",
    desc: `Formada em Desenvolvimento de Jogos desde 2017 e atualmente cursando pós-graduação em Animação Digital. Descobri o mundo do desenho na infância, como muitos artistas, começando com esboços de Dragon Ball. Cresci e me dediquei a várias formas de desenho e pintura, do lápis e papel à pintura em tela. Em 2020, comprei minha primeira mesa digitalizadora e comecei a explorar a Pintura Digital, logo após começar a estudar Animação Digital 2D. A arte, em geral, sempre foi minha fuga, e retornar à indústria de jogos será desafiador, mas emocionante.`,
    skills: [
      { name: "Ilustração 2D", value: 100, desc: "Criação de ilustrações detalhadas e expressivas em 2D." },
      { name: "Conceito de Personagem", value: 100, desc: "Desenvolvimento de personagens e suas histórias." },
      { name: "Animação 2D", value: 60, desc: "Criação de animações fluidas e expressivas em 2D." },
      { name: "Storyboard", value: 60, desc: "Planejamento visual de cenas e sequências." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/camila-sales-4b135a231", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://discordapp.com/users/1064628941970755735", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Richard de Leon",
    slug: "richard-de-leon",
    role: "Gerente de Marketing",
    thumb: "/assets/images/team/richard.webp",
    gif: "/assets/images/team/animated_richard.webp",
    desc: `Ele trabalhou em marketing por sete anos, iniciando sua carreira em grandes agências de publicidade em São Paulo. Há alguns anos, mudou-se para a Ásia, onde tem atuado no mercado de jogos asiático, com foco em publicidade digital. Apaixonado por leitura e jogos, ele se inspira nesses interesses para alimentar sua criatividade e empreendimentos profissionais.`,
    skills: [
      { name: "Gerente de Redes Sociais", value: 100, desc: "Gerenciamento de redes sociais e engajamento da comunidade." },
      { name: "Marketing Digital", value: 100, desc: "Estratégias de marketing digital e campanhas online." },
      { name: "Engenheiro de Prompt", value: 80, desc: "Desenvolvimento de prompts e interações para IA." },
      { name: "Editor de Video", value: 70, desc: "Edição de vídeos promocionais e conteúdo visual." },
      { name: "SEO/SEM", value: 60, desc: "Otimização para mecanismos de busca e marketing de busca." }
    ],
    social: [
      { href: "https://www.linkedin.com/in/richard-de-leon-534123144", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.instagram.com/_richarddeleon/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/1312938936120643670", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Miguel (Angel)",
    slug: "miguel-angel",
    role: "Menor Aprendiz",
    thumb: "/assets/images/team/angel.webp",
    gif: "/assets/images/team/animated_angel.webp",
    desc: `Miguel, mais conhecido como Angel, adora  jogos desde pequeno, a área de desenvolvimento de jogos sempre lhe interessou, principalmente como os jogos podem ir além do entretenimento, passando emoções, conhecimento e desafios únicos. Recentemente ele transformou essa paixão em prática, melhorando suas artes e desenvolvendo alguns projetos no GameMaker. Ele busca sempre melhorar suas habilidades e contribuir para a criação de experiências que engajem os jogadores da CHUVA.`,
    skills: [
      { name: "Game Maker Language (GML)", value: 60, desc: "Programação de jogos utilizando Game Maker Language." },
      { name: "Aprendiz", value: 100, desc: "Disposição para aprender e se desenvolver na área." }
    ],
    social: [
      { href: "https://www.youtube.com/@AngelinoJollie", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://twitch.tv/paodeangel", icon: "default_twitch.webp", hover: "hover_twitch.webp", alt: "Twitch" },
      { href: "https://www.instagram.com/angelinojollie/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://x.com/AngelinoJollie", icon: "default_x.webp", hover: "hover_x.webp", alt: "X" },
      { href: "https://github.com/angelinojollie", icon: "default_github.webp", hover: "hover_github.webp", alt: "GitHub" },
      { href: "https://discordapp.com/users/979140949185822762", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Brendo Teles",
    slug: "brendo-teles",
    role: "Artista 2D / 3D e Animação",
    thumb: "/assets/images/team/teles.webp",
    gif: "/assets/images/team/animated_teles.webp",
    desc: `Artista digital com foco em modelagem 3D, concept art, ilustração e animação básica 2D/3D para jogos digitais e materiais gráficos. Experiência em projetos como Matemagos, Holobeast Academy, Thunder Riders e Amazon Quest, atuando no desenvolvimento visual e contribuindo para a consistência artística e direcionamento criativo das produções. Apaixonado por contar histórias através de visuais estilizados e envolventes.`,
    skills: [
      { name: "Ilustração / Concept Art", value: 90, desc: "Criação de ilustrações e artes conceituais." },
      { name: "Modelagem 3D", value: 80, desc: "Desenvolvimento de modelos 3D para jogos e animações." },
      { name: "Animação 2D Frame-a-Frame", value: 60, desc: "Criação de animações 2D quadro a quadro." },
      { name: "Animação 3D", value: 60, desc: "Desenvolvimento de animações 3D para personagens e cenários." },
      { name: "Edição de Vídeo", value: 50, desc: "Edição de vídeos promocionais e trailers." },
      { name: "UI/UX", value: 40, desc: "Design de interfaces e experiência do usuário." }
    ],
    social: [
      { href: "https://www.artstation.com/teles_design", icon: "default_site.webp", hover: "hover_site.webp", alt: "Portifolio" },
      { href: "https://www.linkedin.com/in/brendo-teles-082909127/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://www.instagram.com/shiro.aniclubchannel/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://wa.me/5592982351719", icon: "default_whats.webp", hover: "hover_whats.webp", alt: "WhatsApp" },
      { href: "https://discordapp.com/users/246455690133110784", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
    {
    name: "Gabriel Flexa",
    slug: "gabriel-flexa",
    role: "Produtor Musical",
    thumb: "/assets/images/team/flexa.webp",
    gif: "/assets/images/team/animated_flexa.webp",
    desc: `Gabriel Flexa é produtor musical no estúdio CHUVA Games, responsável por produzir trilhas com sentimento e texturas em narrativas sonoras que transitam entre a estética sonora pop/rock/hiphop até música regional amazônica. Natural de Belém do Pará, começou a produzir suas próprias faixas ainda na adolescência, e desde então vem moldando sua estética musical entre estúdios colaborações com artistas da cena musical independente brasileira.`,
    skills: [
      { name: "Produção Musical", value: 100, desc: "Criação e produção de trilhas sonoras." },
      { name: "Design", value: 80, desc: "Design gráfico e visual para projetos." },
      { name: "Produção de Vídeo", value: 70, desc: "Edição e produção de vídeos promocionais." }
    ],
    social: [
      { href: "https://www.behance.net/gabriel-flexa", icon: "default_behance.webp", hover: "hover_behance.webp", alt: "Behance" },
      { href: "https://www.linkedin.com/in/gabrielflexa/", icon: "default_linkedin.webp", hover: "hover_linkedin.webp", alt: "LinkedIn" },
      { href: "https://open.spotify.com/playlist/6uKqxaFp5Orkn83tiGPtVm?si=a6DZNsK5RT-waPuveQbGdg", icon: "default_spotify.webp", hover: "hover_spotify.webp", alt: "Spotify" },
      { href: "https://www.instagram.com/@gvflexa/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://www.youtube.com/@bandaverene", icon: "default_youtube.webp", hover: "hover_youtube.webp", alt: "YouTube" },
      { href: "https://discordapp.com/users/663418867871121439", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  },
  {
    name: "Rene Ballesteros",
    slug: "rene-ballesteros",
    role: "Desenvolvedor Full-Stack Sênior",
    thumb: "/assets/images/team/rene.webp",
    gif: "/assets/images/team/animated_rene.webp",
    desc: `Com mais de 40 anos de experiência, Rene é um verdadeiro veterano da programação. Sua jornada começou na era de ouro dos microcomputadores, portando jogos para clássicos como o MSX e o TK2000. Essa base sólida em lógica e otimização o impulsionou por décadas de evolução tecnológica. Hoje, ele continua na vanguarda, especializando-se em Python e Inteligência Artificial, demonstrando que a verdadeira paixão por resolver problemas e criar soluções inovadoras transcende o tempo. "Da era dos 8-bits à inteligência artificial, a paixão por criar nunca envelhece."`,
    skills: [
      { name: "Desenvolvimento Full-Stack", value: 100, desc: "Arquitetura e desenvolvimento de aplicações completas, do back-end ao front-end." },
      { name: "Python & IA", value: 100, desc: "Especialização em Python para desenvolvimento de soluções de Inteligência Artificial e Machine Learning." },
      { name: "Arquitetura de Sistemas", value: 100, desc: "Projetando sistemas robustos, escaláveis e eficientes para aplicações complexas." },
      { name: "Portabilidade de Legado", value: 100, desc: "Vasta experiência em adaptar e modernizar sistemas legados, incluindo plataformas clássicas como MSX e TK2000." },
      { name: "Gerenciamento de Banco de Dados", value: 100, desc: "Modelagem, otimização e gerenciamento de bancos de dados relacionais e NoSQL." }
    ],
    social: [
      { href: "https://github.com/renejr", icon: "default_github.webp", hover: "hover_github.webp", alt: "GitHub" },
      { href: "https://www.instagram.com/renebmjr/", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/1117568428547506227", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" },
      { href: "https://steamcommunity.com/profiles/76561198435321249", icon: "default_steam.webp", hover: "hover_steam.webp", alt: "Steam" }
    ]
  },
  {
    name: "Edpaulo Cardoso",
    slug: "edpaulo-cardoso",
    role: "Artista de Foley",
    thumb: "/assets/images/team/ed.webp",
    gif: "/assets/images/team/animated_ed.webp",
    desc: `Edpaulo Cardoso é artista de foley no estúdio CHUVA Games, onde dá vida aos sons que moldam experiências imersivas. Grafiteiro, body piercer e tatuador, expressa sua arte em múltiplas formas. Nas horas vagas, desliza pelos rios da Amazônia, no Pará, como kiterider apaixonado pela liberdade e pela natureza. `,
    skills: [
      { name: "Audio", value: 100, desc: "Criação e edição de efeitos sonoros." }
    ],
    social: [
      { href: "https://www.instagram.com/edpaulocardoso", icon: "default_insta.webp", hover: "hover_insta.webp", alt: "Instagram" },
      { href: "https://discordapp.com/users/1356290249990607128", icon: "default_discord.webp", hover: "hover_discord.webp", alt: "Discord" }
    ]
  }
];

// Initialize team cards based on language
function initTeamCards() {
  // Check if we're on the English or Portuguese page
  const isEnglishPage = $('#teamCardsGridEn') !== null;
  const isPortuguesePage = $('#teamCardsGrid') !== null;
  
  // Initialize English team cards
  if (isEnglishPage) {
    const grid = $('#teamCardsGridEn');
    if (!grid) return;
    
    // Shuffle and save the order for use in the modal
    window._shuffledTeamEn = shuffleArray([...teamMembersEn]);
    
    grid.innerHTML = window._shuffledTeamEn.map((member, idx) => `
      <div class="team-card" data-idx="${idx}">
        <img 
          src="${member.thumb}" 
          data-original-src="${member.thumb}" 
          data-hover-src="${member.gif}" 
          class="team-thumb" 
          alt="${member.name}"
          loading="lazy"
        >
        <div class="team-card-name">${member.name}</div>
        <div class="team-card-role">${member.role}</div>
      </div>
    `).join('');
  }
  
  // Initialize Portuguese team cards
  if (isPortuguesePage) {
    const grid = $('#teamCardsGrid');
    if (!grid) return;
    
    // Shuffle and save the order for use in the modal
    window._shuffledTeamPt = shuffleArray([...teamMembersPt]);
    
    grid.innerHTML = window._shuffledTeamPt.map((member, idx) => `
      <div class="team-card" data-idx="${idx}">
        <img 
          src="${member.thumb}" 
          data-original-src="${member.thumb}" 
          data-hover-src="${member.gif}" 
          class="team-thumb" 
          alt="${member.name}"
          loading="lazy"
        >
        <div class="team-card-name">${member.name}</div>
        <div class="team-card-role">${member.role}</div>
      </div>
    `).join('');
  }
  
  // Add hover effect for team cards
$$('.team-card').forEach(card => {
  const thumb = card.querySelector('.team-thumb');
  if (!thumb) return;
  card.addEventListener('mouseenter', function() {
    thumb.src = thumb.getAttribute('data-hover-src');
    thumb.classList.add('hovered');
  });
  card.addEventListener('mouseleave', function() {
    thumb.src = thumb.getAttribute('data-original-src');
    thumb.classList.remove('hovered');
  });
});
}

// Initialize team member modal
function initTeamModal() {
  // Check if we're on the English or Portuguese page
  const isEnglishPage = $('#teamModalBgEn') !== null;
  const isPortuguesePage = $('#teamModalBg') !== null;
  
  // Initialize English modal
  if (isEnglishPage) {
    const grid = $('#teamCardsGridEn');
    const modalBg = $('#teamModalBgEn');
    const modal = $('#teamModalEn');
    const modalImg = $('#teamModalImgEn');
    const modalTitle = $('#teamModalTitleEn');
    const modalRole = $('#teamModalRoleEn');
    const modalDesc = $('#teamModalDescEn');
    const modalSkills = $('#teamModalSkillsEn');
    const modalSocial = $('#teamModalSocialEn');
    const modalProfileButton = $('#teamModalProfileButtonEn');
    const modalClose = $('#teamModalCloseEn');
    
    if (!grid || !modalBg || !modal || !modalImg || !modalTitle || 
        !modalRole || !modalDesc || !modalSkills || !modalSocial || !modalClose) return;
    
    // Open modal when clicking on a team card
    grid.addEventListener('click', function(e) {
      const card = e.target.closest('.team-card');
      if (!card) return;
      
      const idx = card.getAttribute('data-idx');
      const member = window._shuffledTeamEn[idx];
      
      if (!member) return;
      
      // Fill modal with member data
      modalImg.src = member.gif; // já exibe o gif animado
      modalImg.setAttribute('data-original-src', member.thumb);
      modalImg.setAttribute('data-hover-src', member.gif);
      modalImg.alt = member.name;
      
      modalTitle.textContent = member.name;
      modalRole.textContent = member.role;
      modalDesc.textContent = member.desc;
      
      // Render skills
      modalSkills.innerHTML = member.skills.map(skill => `
        <div class="progress-bar-container">
          <div class="progress-bar" tabindex="0" data-desc="${skill.desc ? skill.desc.replace(/"/g, '&quot;') : ''}">
            <div class="progress-fill" style="width: 0%"></div>
            <span class="progress-text">${skill.name}</span>
          </div>
          <div class="skill-tooltip"></div>
        </div>
      `).join('');

      // Animação das barras
      setTimeout(() => {
        $$('.progress-bar').forEach((bar, i) => {
          const fill = bar.querySelector('.progress-fill');
          const skill = member.skills[i];
          if (!fill || !skill) return;
          fill.style.width = '0%';
          setTimeout(() => {
            fill.style.transition = 'width 2.2s cubic-bezier(.4,2,.6,1)';
            fill.style.width = skill.value + '%';
          }, 50);
        });

        // Adicione o trecho AQUI, dentro do mesmo setTimeout:
$$('.progress-bar').forEach((bar, i) => {
  bar.addEventListener('click', function(e) {
    e.stopPropagation();
    const tooltip = bar.parentElement.querySelector('.skill-tooltip');
    const desc = bar.getAttribute('data-desc');
    if (!desc) return;

    // Toggle: se já está ativa, fecha; senão, abre e fecha as outras
    if (tooltip.classList.contains('active')) {
      tooltip.classList.remove('active');
      tooltip.textContent = '';
      return;
    }

    // Fecha outras tooltips abertas
    $$('.skill-tooltip').forEach(t => { t.classList.remove('active'); t.textContent = ''; });

    // Abre a tooltip desta barra
    tooltip.textContent = desc;
    tooltip.classList.add('active');

    // Fecha ao clicar fora
    function closeTooltip(ev) {
      if (!bar.contains(ev.target)) {
        tooltip.classList.remove('active');
        tooltip.textContent = '';
        document.removeEventListener('mousedown', closeTooltip);
      }
    }
    document.addEventListener('mousedown', closeTooltip);
  });
});

}, 50);
      
      // Render social links
      modalSocial.innerHTML = member.social.map(s => `
        <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.alt}">
          <img 
            src="/assets/images/icons/default/${s.icon}"
        data-original-src="/assets/images/icons/default/${s.icon}"
        data-hover-src="/assets/images/icons/hover/${s.hover}" 
            alt="${s.alt}"
            class="social-icon-hover"
            loading="lazy"
          >
        </a>
      `).join('');

      if (modalProfileButton) {
        modalProfileButton.innerHTML = `<a href="/eng/team/${member.slug}.html" class="team-modal-profile-btn">Full Profile</a>`;
      }
      
      // Show modal
      modalBg.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Close modal functions
    function closeModal() {
      modalBg.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    modalBg.addEventListener('click', (e) => {
      if (e.target === modalBg) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
  
  // Initialize Portuguese modal
  if (isPortuguesePage) {
    const grid = $('#teamCardsGrid');
    const modalBg = $('#teamModalBg');
    const modal = $('#teamModal');
    const modalImg = $('#teamModalImg');
    const modalTitle = $('#teamModalTitle');
    const modalRole = $('#teamModalRole');
    const modalDesc = $('#teamModalDesc');
    const modalSkills = $('#teamModalSkills');
    const modalSocial = $('#teamModalSocial');
    const modalProfileButton = $('#teamModalProfileButton');
    const modalClose = $('#teamModalClose');
    
    if (!grid || !modalBg || !modal || !modalImg || !modalTitle || 
        !modalRole || !modalDesc || !modalSkills || !modalSocial || !modalClose) return;
    
    // Open modal when clicking on a team card
    grid.addEventListener('click', function(e) {
      const card = e.target.closest('.team-card');
      if (!card) return;
      
      const idx = card.getAttribute('data-idx');
      const member = window._shuffledTeamPt[idx];
      
      if (!member) return;
      
      // Fill modal with member data
      modalImg.src = member.gif; // já exibe o gif animado
      modalImg.setAttribute('data-original-src', member.thumb);
      modalImg.setAttribute('data-hover-src', member.gif);
      modalImg.alt = member.name;
      
      modalTitle.textContent = member.name;
      modalRole.textContent = member.role;
      modalDesc.textContent = member.desc;
      
      // Render skills
      modalSkills.innerHTML = member.skills.map(skill => `
        <div class="progress-bar-container">
          <div class="progress-bar" tabindex="0" data-desc="${skill.desc ? skill.desc.replace(/"/g, '&quot;') : ''}">
            <div class="progress-fill" style="width: 0%"></div>
            <span class="progress-text">${skill.name}</span>
          </div>
          <div class="skill-tooltip"></div>
        </div>
      `).join('');

      // Animação das barras
      setTimeout(() => {
        $$('.progress-bar').forEach((bar, i) => {
          const fill = bar.querySelector('.progress-fill');
          const skill = member.skills[i];
          if (!fill || !skill) return;
          fill.style.width = '0%';
          setTimeout(() => {
            fill.style.transition = 'width 2s cubic-bezier(.4,2,.6,1)';
            fill.style.width = skill.value + '%';
          }, 50);
        });

        // Adicione o trecho AQUI, dentro do mesmo setTimeout:
 $$('.progress-bar').forEach((bar, i) => {
  bar.addEventListener('click', function(e) {
    e.stopPropagation();
    const tooltip = bar.parentElement.querySelector('.skill-tooltip');
    const desc = bar.getAttribute('data-desc');
    if (!desc) return;

    // Toggle: se já está ativa, fecha; senão, abre e fecha as outras
    if (tooltip.classList.contains('active')) {
      tooltip.classList.remove('active');
      tooltip.textContent = '';
      return;
    }

    // Fecha outras tooltips abertas
    $$('.skill-tooltip').forEach(t => { t.classList.remove('active'); t.textContent = ''; });

    // Abre a tooltip desta barra
    tooltip.textContent = desc;
    tooltip.classList.add('active');

    // Fecha ao clicar fora
    function closeTooltip(ev) {
      if (!bar.contains(ev.target)) {
        tooltip.classList.remove('active');
        tooltip.textContent = '';
        document.removeEventListener('mousedown', closeTooltip);
      }
    }
    document.addEventListener('mousedown', closeTooltip);
  });
});

}, 50);

      // Render social links
      modalSocial.innerHTML = member.social.map(s => `
        <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.alt}">
          <img 
            src="/assets/images/icons/default/${s.icon}"
        data-original-src="/assets/images/icons/default/${s.icon}"
        data-hover-src="/assets/images/icons/hover/${s.hover}" 
            alt="${s.alt}"
            class="social-icon-hover"
            loading="lazy"
          >
        </a>
      `).join('');

      if (modalProfileButton) {
        modalProfileButton.innerHTML = `<a href="/pt-br/team/${member.slug}.html" class="team-modal-profile-btn">Perfil Completo</a>`;
      }
      
      // Show modal
      modalBg.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Close modal functions
    function closeModal() {
      modalBg.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    modalBg.addEventListener('click', (e) => {
      if (e.target === modalBg) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
}

// Social icons hover effect for modal
document.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('social-icon-hover')) {
    const hoverSrc = e.target.getAttribute('data-hover-src');
    if (hoverSrc) e.target.src = hoverSrc;
    e.target.style.transform = 'scale(1.15)';
  }
});

document.addEventListener('mouseout', function(e) {
  if (e.target.classList.contains('social-icon-hover')) {
    const originalSrc = e.target.getAttribute('data-original-src');
    if (originalSrc) e.target.src = originalSrc;
    e.target.style.transform = '';
  }
});

// Initialize individual game page modal
function initIndividualGameModal() {
  const gameContainer = document.querySelector('.game-container');
  const modal = document.querySelector('#modal-jogos');
  const modalImage = document.querySelector('.modal-image');
  const closeButton = document.querySelector('.close');

  if (!gameContainer || !modal || !modalImage || !closeButton) return;

  // Open modal when clicking on game image
  gameContainer.addEventListener('click', () => {
    modal.classList.add('active');
    modal.style.display = 'flex';
    const fullSrc = gameContainer.querySelector('.game').getAttribute('data-full-src');
    modalImage.src = fullSrc;
    document.body.style.overflow = 'hidden';
  });

  // Close modal functions
  function closeModal() {
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function renderProfileSocial() {
    const socialContainer = document.getElementById('teamModalSocial') || document.getElementById('teamModalSocialEn');
    if (!socialContainer) return;

    const memberName = document.querySelector('.team-modal-title').textContent.trim();
    const lang = document.documentElement.lang || 'en';
    const teamMembers = lang.startsWith('pt') ? teamMembersPt : teamMembersEn;
    const member = teamMembers.find(m => m.name === memberName);

    if (!member) return;

    socialContainer.innerHTML = member.social.map(s => `
        <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.alt}">
          <img 
            src="/assets/images/icons/default/${s.icon}"
        data-original-src="/assets/images/icons/default/${s.icon}"
        data-hover-src="/assets/images/icons/hover/${s.hover}" 
            alt="${s.alt}"
            class="social-icon-hover"
            loading="lazy"
          >
        </a>
      `).join('');
}

// Renderiza skillbars animadas e tooltips na página de perfil individual
function renderProfileSkillbars() {
    const skillsContainer = document.getElementById('teamModalSkills') || document.getElementById('teamModalSkillsEn');
    if (!skillsContainer) return;

    const memberName = document.querySelector('.team-modal-title').textContent.trim();
    const lang = document.documentElement.lang || 'en';
    const teamMembers = lang.startsWith('pt') ? teamMembersPt : teamMembersEn;
    const member = teamMembers.find(m => m.name === memberName);

    if (!member) return;

    skillsContainer.innerHTML = member.skills.map(skill => `
        <div class="progress-bar-container">
            <div class="progress-bar" tabindex="0" data-desc="${skill.desc.replace(/"/g, '&quot;')}">
                <div class="progress-fill" style="width: ${skill.value}%"></div>
                <span class="progress-text">${skill.name}</span>
            </div>
            <div class="skill-tooltip"></div>
        </div>
    `).join('');

    // Adiciona eventos de tooltip para cada barra imediatamente
    skillsContainer.querySelectorAll('.progress-bar').forEach(bar => {
        bar.addEventListener('click', function(e) {
            e.stopPropagation();
            const tooltip = bar.parentElement.querySelector('.skill-tooltip');
            const desc = bar.getAttribute('data-desc');
            if (!desc) return;
            
            // Toggle tooltip
            if (tooltip.classList.contains('active')) {
                tooltip.classList.remove('active');
                tooltip.textContent = '';
                return;
            }

            // Fecha outras tooltips
            document.querySelectorAll('.skill-tooltip').forEach(t => {
                t.classList.remove('active');
                t.textContent = '';
            });

            // Mostra tooltip atual
            tooltip.textContent = desc;
            tooltip.classList.add('active');

            // Fecha ao clicar fora
            function closeTooltip(ev) {
                if (!bar.contains(ev.target)) {
                    tooltip.classList.remove('active');
                    tooltip.textContent = '';
                    document.removeEventListener('mousedown', closeTooltip);
                }
            }
            document.addEventListener('mousedown', closeTooltip);
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
  // ...existing inits...
  renderProfileSkillbars();
  initIndividualGameModal();
});