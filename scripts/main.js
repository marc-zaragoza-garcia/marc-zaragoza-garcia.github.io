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
                estudios: 'Estudios',
                skills: 'Skills',
                contacto: 'Contacto'
            },
            presentacion: {
                subtitulo: 'Ingeniero en Telecomunicaciones',
                descripcion: 'Soy ingeniero junior con entusiasmo por la electrónica y las redes. Me apasiona aprender, asumir nuevos retos creativos y el mundo craft.',
                btnCV: 'Solicitar CV'
            },
            proyectos: {
                titulo: '<Proyectos/>',
                tecnologia: 'Tecnología',
                electronica: 'Electrónica',
                arduino: 'Arduino',
                proyectosTecnologia: [
                    {
                        titulo: 'Microcontrolador RISC-V',
                        descripcion: 'Desarrollo y verificación de un microcontrolador RISC-V en SystemVerilog.'
                    },
                    {
                        titulo: 'Multiplicador secuencial',
                        descripcion: 'Desarrollo y verificación de un multiplicador secuencial en SystemVerilog.'
                    },
                    {
                        titulo: 'FIFO mediante RAM-DP',
                        descripcion: 'Desarrollo y verificación con aserciones de un FIFO mediante RAM-DP en SystemVerilog.'
                    }
                ],
                proyectosElectronica: [
                    {
                        titulo: 'Proyecto de electrónica 1',
                        descripcion: 'Diseño y montaje de un circuito electrónico.'
                    },
                    {
                        titulo: 'Proyecto de electrónica 2',
                        descripcion: 'Integración de sensores y control electrónico.'
                    },
                    {
                        titulo: 'Proyecto de electrónica 3',
                        descripcion: 'Desarrollo de un sistema electrónico aplicado.'
                    }
                ],
                proyectosArduino: [
                    {
                        titulo: 'Proyecto Arduino 1',
                        descripcion: 'Descripción breve del proyecto de Arduino 1.'
                    },
                    {
                        titulo: 'Proyecto Arduino 2',
                        descripcion: 'Descripción breve del proyecto de Arduino 2.'
                    },
                    {
                        titulo: 'Proyecto Arduino 3',
                        descripcion: 'Descripción breve del proyecto de Arduino 3.'
                    }
                ]
            },
            skills: {
                titulo: '<Skills/>',
                tarjetas: {
                    systemverilog: ['SystemVerilog', 'Diseño digital y verificación de hardware'],
                    python: ['Python', 'Desarrollo de aplicaciones y automatización'],
                    arduino: ['Arduino', 'Electrónica y proyectos IoT'],
                    html5: ['HTML5', 'Estructura y semántica web'],
                    css3: ['CSS3', 'Diseño y estilos web'],
                    c: ['C', 'Programación de sistemas y bajo nivel'],
                    assembly: ['Lenguaje ensamblador', 'Programación y arquitectura de computadores'],
                    stm32: ['STM32', 'Desarrollo de sistemas embebidos'],
                    vlsi: ['Diseño VLSI en Cadence Virtuoso', 'Diseño y simulación de circuitos integrados'],
                    java: ['Java', 'Programación orientada a objetos'],
                    android: ['Android Apps', 'Desarrollo de aplicaciones móviles']
                }
            },
            estudios: {
                titulo: '<Estudios/>',
                tipos: ['Grado universitario', 'Summer school internacional', 'Cursos online']
            },
            contacto: {
                titulo: '<Contacto/>',
                enlaces: ['GitHub', 'LinkedIn', 'Correo', 'WhatsApp', 'Instagram', 'Teléfono']
            },
        },
        en: {
            nav: {
                inicio: 'Home',
                proyectos: 'Projects',
                estudios: 'Studies',
                skills: 'Skills',
                contacto: 'Contact'
            },
            presentacion: {
                subtitulo: 'Telecommunications Engineer',
                descripcion: 'I am a junior engineer with enthusiasm for electronics and networks. I am passionate about learning, taking on new creative challenges, and the craft world.',
                btnCV: 'Request CV'
            },
            proyectos: {
                titulo: '<Projects/>',
                tecnologia: 'Technology',
                electronica: 'Electronics',
                arduino: 'Arduino',
                proyectosTecnologia: [
                    {
                        titulo: 'RISC-V Microcontroller',
                        descripcion: 'Development and verification of a RISC-V microcontroller in SystemVerilog.'
                    },
                    {
                        titulo: 'Sequential Multiplier',
                        descripcion: 'Development and verification of a sequential multiplier in SystemVerilog.'
                    },
                    {
                        titulo: 'FIFO using DP-RAM',
                        descripcion: 'Development and assertion-based verification of a FIFO in SystemVerilog.'
                    }
                ],
                proyectosElectronica: [
                    {
                        titulo: 'Electronics project 1',
                        descripcion: 'Design and assembly of an electronic circuit.'
                    },
                    {
                        titulo: 'Electronics project 2',
                        descripcion: 'Sensor integration and electronic control.'
                    },
                    {
                        titulo: 'Electronics project 3',
                        descripcion: 'Development of an applied electronic system.'
                    }
                ],
                proyectosArduino: [
                    {
                        titulo: 'Arduino Project 1',
                        descripcion: 'Brief description of Arduino project 1.'
                    },
                    {
                        titulo: 'Arduino Project 2',
                        descripcion: 'Brief description of Arduino project 2.'
                    },
                    {
                        titulo: 'Arduino Project 3',
                        descripcion: 'Brief description of Arduino project 3.'
                    }
                ]
            },
            skills: {
                titulo: '<Skills/>',
                tarjetas: {
                    systemverilog: ['SystemVerilog', 'Digital design and hardware verification'],
                    python: ['Python', 'Application development and automation'],
                    arduino: ['Arduino', 'Electronics and IoT projects'],
                    html5: ['HTML5', 'Web structure and semantics'],
                    css3: ['CSS3', 'Web design and styling'],
                    c: ['C', 'Systems and low-level programming'],
                    assembly: ['Assembly language', 'Programming and computer architecture'],
                    stm32: ['STM32', 'Embedded systems development'],
                    vlsi: ['VLSI design with Cadence Virtuoso', 'Integrated circuit design and simulation'],
                    java: ['Java', 'Object-oriented programming'],
                    android: ['Android Apps', 'Mobile application development']
                }
            },
            estudios: {
                titulo: '<Studies/>',
                tipos: ['University degree', 'International summer school', 'Online courses']
            },
            contacto: {
                titulo: '<Contact/>',
                enlaces: ['GitHub', 'LinkedIn', 'Email', 'WhatsApp', 'Instagram', 'Phone']
            },
        }
    };

    // Función para actualizar el idioma
    function updateLanguage(lang) {
        const t = translations[lang];

        if (!t) return;

        if (themeToggle) {
            themeToggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar tema' : 'Change theme');
        }
        if (langToggle) {
            langToggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma' : 'Change language');
        }
        
        // Actualizar navegación
        const navLinks = document.querySelectorAll('nav a span');
        if (navLinks.length > 0) {
            [t.nav.inicio, t.nav.proyectos, t.nav.estudios, t.nav.skills, t.nav.contacto]
                .forEach((texto, index) => {
                    if (navLinks[index]) navLinks[index].textContent = texto;
                });
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

        const estudiosTitulo = document.querySelector('#estudios h2');
        if (estudiosTitulo) estudiosTitulo.textContent = t.estudios.titulo;

        document.querySelectorAll('.estudio-tipo').forEach((elemento, index) => {
            if (t.estudios.tipos[index]) elemento.textContent = t.estudios.tipos[index];
        });

        const skillsTitulo = document.querySelector('#skills h2');
        if (skillsTitulo) skillsTitulo.textContent = t.skills.titulo;

        document.querySelectorAll('[data-skill]').forEach(elemento => {
            const skill = t.skills.tarjetas[elemento.dataset.skill];
            if (skill) elemento.textContent = skill[0];
        });

        document.querySelectorAll('[data-skill-description]').forEach(elemento => {
            const skill = t.skills.tarjetas[elemento.dataset.skillDescription];
            if (skill) elemento.textContent = skill[1];
        });

        const contactoTitulo = document.querySelector('[data-section-title="contacto"]');
        if (contactoTitulo) contactoTitulo.textContent = t.contacto.titulo;

        document.querySelectorAll('#contacto .contacto-links a').forEach((enlace, index) => {
            if (t.contacto.enlaces[index]) enlace.textContent = t.contacto.enlaces[index];
        });
        
        // Actualizar títulos de categorías
        const categoriasTitulos = document.querySelectorAll('.categoria-titulo');
        if (categoriasTitulos.length >= 3) {
            categoriasTitulos[0].textContent = t.proyectos.tecnologia;
            categoriasTitulos[1].textContent = t.proyectos.electronica;
            categoriasTitulos[2].textContent = t.proyectos.arduino;
        }
        
        // Función universal para actualizar tarjetas en cualquier dispositivo
        const actualizarTarjetas = (categoria, proyectos) => {
            // Seleccionar todos los contenedores de categorías
            const categorias = document.querySelectorAll('.categoria-proyectos');
            if (categoria > categorias.length) {
                return;
            }
            
            // Seleccionar la categoría específica (restamos 1 porque los arrays son base 0)
            const categoriaActual = categorias[categoria - 1];
            
            // Seleccionar todas las tarjetas posibles en cualquier estructura
            const selectores = [
                '.swiper-slide .card',  // Para móviles/tablets con swiper
                '.card',                // Para escritorio sin swiper
                '.swiper-slide-active .card',  // Para la tarjeta activa en móvil
                '.swiper-wrapper .card' // Otra posible estructura
            ];
            
            // Buscar la primera estructura que coincida
            let tarjetas = [];
            for (const selector of selectores) {
                tarjetas = Array.from(categoriaActual.querySelectorAll(selector));
                if (tarjetas.length > 0) {
                    break;
                }
            }
            
            // Si no encontramos tarjetas, intentar con una búsqueda más amplia
            if (tarjetas.length === 0) {
                tarjetas = Array.from(categoriaActual.querySelectorAll('*'));
                tarjetas = tarjetas.filter(el => 
                    el.classList && 
                    (el.classList.contains('card') || 
                     el.querySelector('.card-content') || 
                     (el.tagName === 'H4' || el.tagName === 'P'))
                );
            }
            
            // Actualizar cada tarjeta encontrada
            tarjetas.forEach((elemento, index) => {
                // Si el elemento es un contenedor de tarjeta, buscar el contenido
                const cardContent = elemento.querySelector('.card-content') || elemento;
                const titulo = cardContent.querySelector('h4');
                const descripcion = cardContent.querySelector('p');
                
                // Usar el índice para obtener el proyecto correspondiente
                // Si hay más índices que proyectos, volver a empezar
                const proyectoIndex = index % proyectos.length;
                const proyecto = proyectos[proyectoIndex];
                
                if (!proyecto) {
                    return;
                }
                
                // Actualizar título y descripción si existen
                if (titulo) titulo.textContent = proyecto.titulo;
                if (descripcion) descripcion.textContent = proyecto.descripcion;
                
            });
        };
        
        // Actualizar cada categoría de proyectos
        actualizarTarjetas(1, t.proyectos.proyectosTecnologia);
        actualizarTarjetas(2, t.proyectos.proyectosElectronica);
        actualizarTarjetas(3, t.proyectos.proyectosArduino);
        
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

    // Función para cambiar el idioma
    function cambiarIdioma() {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        
        // Actualizar el texto del botón
        if (langToggle) {
            langToggle.textContent = currentLang.toUpperCase();
        }
        
        // Actualizar la interfaz
        updateLanguage(currentLang);
    }

    // Configurar el botón de idioma
    if (langToggle) {
        // Configuración básica del botón
        langToggle.textContent = currentLang.toUpperCase();
        langToggle.style.cursor = 'pointer';
        
        // Usar onclick para máxima compatibilidad
        langToggle.onclick = cambiarIdioma;
        
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
