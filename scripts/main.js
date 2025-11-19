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
                proyectosFrontend: [
                    {
                        titulo: 'Proyecto Frontend 1',
                        descripcion: 'Descripción breve del proyecto de frontend 1.'
                    },
                    {
                        titulo: 'Proyecto Frontend 2',
                        descripcion: 'Descripción breve del proyecto de frontend 2.'
                    },
                    {
                        titulo: 'Proyecto Frontend 3',
                        descripcion: 'Descripción breve del proyecto de frontend 3.'
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
                proyectosFrontend: [
                    {
                        titulo: 'Frontend Project 1',
                        descripcion: 'Brief description of frontend project 1.'
                    },
                    {
                        titulo: 'Frontend Project 2',
                        descripcion: 'Brief description of frontend project 2.'
                    },
                    {
                        titulo: 'Frontend Project 3',
                        descripcion: 'Brief description of frontend project 3.'
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
        
        // Actualizar títulos de categorías
        const categoriasTitulos = document.querySelectorAll('.categoria-titulo');
        if (categoriasTitulos.length >= 3) {
            categoriasTitulos[0].textContent = t.proyectos.tecnologia;
            categoriasTitulos[1].textContent = t.proyectos.frontend;
            categoriasTitulos[2].textContent = t.proyectos.arduino;
        }
        
        // Función universal para actualizar tarjetas en cualquier dispositivo
        const actualizarTarjetas = (categoria, proyectos) => {
            console.log(`Actualizando categoría ${categoria} con`, proyectos);
            
            // Seleccionar todos los contenedores de categorías
            const categorias = document.querySelectorAll('.categoria-proyectos');
            if (categoria > categorias.length) {
                console.error('Categoría no encontrada:', categoria);
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
                    console.log(`Selector usado: ${selector}, encontradas ${tarjetas.length} tarjetas`);
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
                console.log('Búsqueda ampliada, encontradas:', tarjetas.length);
            }
            
            // Actualizar cada tarjeta encontrada
            tarjetas.forEach((elemento, index) => {
                // Si el elemento es un contenedor de tarjeta, buscar el contenido
                const esContenedor = elemento.classList.contains('card') || 
                                   elemento.querySelector('.card-content');
                
                const cardContent = elemento.querySelector('.card-content') || elemento;
                const titulo = cardContent.querySelector('h4');
                const descripcion = cardContent.querySelector('p');
                
                // Usar el índice para obtener el proyecto correspondiente
                // Si hay más índices que proyectos, volver a empezar
                const proyectoIndex = index % proyectos.length;
                const proyecto = proyectos[proyectoIndex];
                
                if (!proyecto) {
                    console.warn(`No hay proyecto definido para el índice ${index}`);
                    return;
                }
                
                // Actualizar título y descripción si existen
                if (titulo) titulo.textContent = proyecto.titulo;
                if (descripcion) descripcion.textContent = proyecto.descripcion;
                
                console.log(`Tarjeta ${index} actualizada:`, proyecto);
            });
            
            // Si no encontramos tarjetas, registrar un error detallado
            if (tarjetas.length === 0) {
                console.error('No se encontraron tarjetas en la categoría. HTML:', categoriaActual.innerHTML);
            }
        };
        
        // Actualizar cada categoría de proyectos
        actualizarTarjetas(1, t.proyectos.proyectosTecnologia);
        actualizarTarjetas(2, t.proyectos.proyectosFrontend);
        actualizarTarjetas(3, t.proyectos.proyectosArduino);
        
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

    // Función para cambiar el idioma
    const cambiarIdioma = () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        if (langToggle) {
            langToggle.textContent = currentLang.toUpperCase();
        }
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    };

    // Manejar clic y toque en el botón de idioma
    if (langToggle) {
        // Para dispositivos táctiles
        langToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            cambiarIdioma();
        }, { passive: false });
        
        // Para dispositivos con mouse
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            cambiarIdioma();
        });
        
        // Asegurarse de que el texto del botón esté actualizado
        langToggle.textContent = currentLang.toUpperCase();
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
