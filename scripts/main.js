// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    let currentLang = 'es';

    // Textos en español e inglés
    const translations = {
        es: {
            nav: {
                inicio: 'Inicio',
                proyectos: 'Proyectos',
                skills: 'Skills',
                contacto: 'Contacto'
            },
            presentacion: {
                subtitulo: 'Ingeniero en Telecomunicaciones',
                descripcion: 'Soy ingeniero junior con entusiasmo por la electrónica y las redes. Me apasiona aprender, asumir nuevos retos creativos y el mundo craft.',
                btnCV: 'Descargar CV'
            },
            proyectos: {
                titulo: '<Proyectos/>',
                tecnologia: 'Tecnología',
                frontend: 'Frontend',
                arduino: 'Arduino'
            },
            skills: {
                titulo: '<Skills/>'
            },
            contacto: {
                titulo: '<Contacto/>'
            },
            footer: {
                derechos: '© 2025 Marc Zaragoza. Todos los derechos reservados.'
            }
        },
        en: {
            nav: {
                inicio: 'Home',
                proyectos: 'Projects',
                skills: 'Skills',
                contacto: 'Contact'
            },
            presentacion: {
                subtitulo: 'Telecommunications Engineer',
                descripcion: 'I am a junior engineer with enthusiasm for electronics and networks. I am passionate about learning, taking on new creative challenges, and the craft world.',
                btnCV: 'Download CV'
            },
            proyectos: {
                titulo: '<Projects/>',
                tecnologia: 'Technology',
                frontend: 'Frontend',
                arduino: 'Arduino'
            },
            skills: {
                titulo: '<Skills/>'
            },
            contacto: {
                titulo: '<Contact/>'
            },
            footer: {
                derechos: '© 2025 Marc Zaragoza. All rights reserved.'
            }
        }
    };

    // Función para actualizar el idioma
    function updateLanguage(lang) {
        const t = translations[lang];
        
        // Actualizar navegación
        const navLinks = document.querySelectorAll('nav a span');
        if (navLinks.length > 0) {
            navLinks[0].textContent = t.nav.inicio;
            navLinks[1].textContent = t.nav.proyectos;
            navLinks[2].textContent = t.nav.skills;
            navLinks[3].textContent = t.nav.contacto;
        }
        
        // Actualizar presentación
        const presentacionH2 = document.querySelector('#presentacion h2');
        const presentacionP = document.querySelector('#presentacion p');
        const btnCV = document.querySelector('.btn-cv');
        
        if (presentacionH2) presentacionH2.textContent = t.presentacion.subtitulo;
        if (presentacionP) presentacionP.textContent = t.presentacion.descripcion;
        if (btnCV) btnCV.textContent = t.presentacion.btnCV;
        
        // Actualizar proyectos
        const proyectosTitulo = document.querySelector('#proyectos h2');
        if (proyectosTitulo) proyectosTitulo.textContent = t.proyectos.titulo;
        
        // Actualizar footer
        const footerP = document.querySelector('footer p:first-child');
        if (footerP) footerP.textContent = t.footer.derechos;
    }

    // Función para actualizar el tema
    function updateTheme(isLight) {
        if (isLight) {
            body.classList.add('light-theme');
            if (themeToggle) themeToggle.textContent = '☀️';
        } else {
            body.classList.remove('light-theme');
            if (themeToggle) themeToggle.textContent = '🌙';
        }
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        updateTheme(true);
    } else if (savedTheme === null) {
        // Si no hay tema guardado, establecer el tema oscuro por defecto
        localStorage.setItem('theme', 'dark');
        updateTheme(false);
    }

    // Manejar clic en el botón de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = !body.classList.contains('light-theme');
            updateTheme(isLight);
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // Cargar idioma guardado
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
        currentLang = 'en';
        if (langToggle) {
            langToggle.textContent = 'EN';
            updateLanguage('en');
        }
    } else if (savedLang === null) {
        // Si no hay idioma guardado, establecer español por defecto
        localStorage.setItem('lang', 'es');
        if (langToggle) langToggle.textContent = 'ES';
    }

    // Manejar clic en el botón de idioma
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langToggle.textContent = currentLang.toUpperCase();
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
        });
    }

    // Animación suave al hacer scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langToggle.textContent = currentLang.toUpperCase();
    localStorage.setItem('lang', currentLang);
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    const t = translations[lang];
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('nav a span');
    navLinks[0].textContent = t.nav.inicio;
    navLinks[1].textContent = t.nav.proyectos;
    navLinks[2].textContent = t.nav.skills;
    navLinks[3].textContent = t.nav.contacto;
    
    // Actualizar presentación
    document.querySelector('#presentacion h2').textContent = t.presentacion.subtitulo;
    document.querySelector('#presentacion p').textContent = t.presentacion.descripcion;
    document.querySelector('.btn-cv').textContent = t.presentacion.btnCV;
    
    // Actualizar proyectos
    document.querySelector('#proyectos h2').textContent = t.proyectos.titulo;
    const categorias = document.querySelectorAll('.proyecto-categoria h3');
    categorias[0].textContent = t.proyectos.tecnologia;
    categorias[1].textContent = t.proyectos.frontend;
    categorias[2].textContent = t.proyectos.arduino;
    
    // Actualizar skills
    document.querySelector('#skills h2').textContent = t.skills.titulo;
    
    // Actualizar contacto
    document.querySelector('#contacto h2').textContent = t.contacto.titulo;
    
    // Actualizar footer
    document.querySelector('footer p').textContent = t.footer.derechos;
}

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
