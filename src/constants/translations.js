export const translations = {
  es: {
    languageSelector: "Seleccionar idioma",
    blog: "Blog",
    about: "Sobre mi",
    skills: "Habilidades",
    frontend: "Frontend",
    ai: "Inteligencia Artificial",
    backend: "Backend",
    spanish: "Español",
    skillNames: {
      python: "Python",
      javascript: "Javascript",
      rust: "Rust",
      docker: "Docker",
      react: "React",
      svelte: "Svelte",
      tailwind: "Tailwind",
      next: "Next.js",
      node: "Node.js",
      fastapi: "Fast API",
      tauri: "Tauri",
      postgresql: "PostgreSQL"
    },
    english: "Inglés",
    german: "Alemán",
    japanese: "Japonés",
    projects: "Proyectos",
    contact: "Contacto",
    play: "Jugar",
    channelContent: {
      blog: {
        title: "Escribo sobre:",
        items: [
          "Desarrollo web moderno",
          "Mejores prácticas",
          "Nuevas tecnologías"
        ],
        action: "Leer blog"
      },
      whoami: {
        title: "Información:",
        items: [
          "Desarrollador Full Stack",
          "Especialista en React & Node.js",
          "Apasionado por la tecnología",
          "y el código limpio"
        ]
      },
      projects: {
        title: "ls projects/",
        items: [
          "Dashboard meteorologico",
          "Servicio de desarrollo web",
          "Blog de desarrollo y tecnología"
        ]
      },
    },
    themeToggle: {
      toLight: "Cambiar a tema claro",
      toDark: "Cambiar a tema oscuro"
    },
    currentTheme: "Tema actual",
    currentLanguage: "Idioma",
    themes: {
      light: "Claro",
      dark: "Oscuro"
    },
    title: "0SC1 - Osciloscopio CRT",
    subtitle: "Diseño minimalista con detalles retro futuristas",
    channels: "Info",
    aboutPage: {
      header: { whoami: "whoami", mutt: "mutt" },
      profile: {
        name: "Flavio Gabriel Morales",
        bio: [
          "Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras y eficientes.",
          "Me especializo en el desarrollo web moderno, con experiencia en arquitecturas escalables y tecnologías de vanguardia.",
          "Disfruto trabajando tanto en el frontend como en el backend, siempre buscando escribir código limpio y mantenible.",
          "Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir conocimiento con la comunidad."
        ]
      },
      contact: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
      skills: {
        title: "htop skills",
        categories: {
          general: "HABILIDADES",
          backend: "BACKEND",
          frontend: "FRONTEND",
          ai: "INTELIGENCIA ARTIFICIAL"
        },
        toasts: {
          javascript: "El lenguaje de la web, ideal para el desarrollo de apps y sitios facilmente desplegables y de alto rendimiento, sobre todo con ES6+, mi lenguaje favorito",
          python: "Un lenguaje dinamico, flexible y con un repertorio de bibliotecas enorme sobre todo para Data Science y AI/ML, actualmente es el lenguaje de la IA",
          rust: "Un lenguaje diseñado para ser robusto, tener un exelente performance y ser seguro. Es la opcion ideal para gestionar sistemas de alta velocidad y concurrencia",
          docker: "Una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores. Es la opcion ideal para desplegar servicios en la nube de manera eficiente",
          node: "Es, junto con Deno y Bun, el entorno de ejecución de JavaScript del servidor, ideal para apps backend escalables y en tiempo real, confiable y seguro",
          fastapi: "Un framework moderno y rápido para construir APIs con Python similar a Django pero más minimalista, ligero y asincrono. Es ideal para microservicios",
          tauri: "Es rapido, ligero, trabaja a nivel de sistema y permite crear apps de Rust con tecnologías web. Es mejor que Electron para aplicaciones multiplataforma",
          postgresql: "Es una sql moderna, rapida, eficiente, ampliamente utilizada y de codigo abierto. Es ideal para proyectos con relaciones complejas",
          react: "El framework de JavaScript más popular para construir interfaces de usuario. Ideal para aplicaciones web interactivas y dinámicas",
          svelte: "Un framework centrado en la optimización del rendimiento. Ideal para proyectos donde se necesita un desarrollo ágil y una interfaz simple pero moderna",
          tailwind: "Un framework CSS para diseño responsivo y personalizado. Ideal para desarrollar una solución rápida y flexible con mucho estilo",
          next: "Un framework para React que permite la renderización del lado del servidor y la optimización del rendimiento. Ideal para proyectos mas grandes y escalables",
          ia_sdk: "Desarrollado por Vercel, es un conjunto de herramientas y bibliotecas que facilitan la integración de modelos de inteligencia artificial en aplicaciones",
          mcp: "Un protocolo de gestión de contextos en IA desarrollado por Anthropic. Actualmente es un estándar para la interacción entre modelos y su entorno",
          n8n: "Una herramienta de automatización de flujos de trabajo que permite integrar diferentes servicios, aplicaciones y modelos de manera sencilla",
          vibe_coding: "Una técnica donde la IA hace el codigo mediante prompts, bien usada mejora el flujo de trabajo para el diseño de interfaces y el prototipado basico"
        }
      },
      experience: {
        title: "bat experience.md",
        paragraphs: [
          "Participe en el Rally de Innovacion Latinoamericana, una competencia donde se te dan 28 horas para desarrollar una propuesta de proyecto que debe solucionar un problema real, en nuestro caso como suplir de agua a una region arida aislada, junto con mi equipo desarrollamos un proyecto de recoleccion electrostatica en altura, junto con los planos del proyecto, una pagina de demostracion junto con la capacidad teorica de recoleccion de agua en funcion del nivel de humedad, la presion atmosferica y la temperatura, quedamos primeros a nivel provincial y octavos a nivel nacional en la categoria de impacto social.",
          "Nota de la competencia: Mendoza, 7 de octubre, 2024"
        ],
      },
      projectCards: {
        tecnologies: "Tecnologías",
        visit: "Visitar ↗",
        descriptions: {
          blackSun: "Dashboard interactivo de muestra.",
          hornero: "Servicio de desarrollo web para tu negocio.",
          osci: "Newsletter y documentación.",
        },
      },
      muttForm: {
        subject: "Recibimos tu mensaje",
        userMessage: "Hola {{name}}, ¡gracias por escribir! Ya recibimos tu mensaje y lo responderemos a la brevedad.",
        to: "Para",
        from: "De",
        labels: { name: "Nombre", message: "Mensaje" },
        placeholders: { name: "Tu nombre", message: "Escribe tu mensaje aquí..." },
        submit: "Enviar ↗",
        sending: "Enviando...",
        status: {
          success: "¡Mensaje enviado con éxito desde {{email}}!",
          error: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
          required: "Rellene este campo"
        },
        auth: {
          authenticating: "Autenticando... completa el popup para continuar.",
          retry: "Reintentar",
          useRedirect: "Usar redirección",
          closeAria: "Cerrar",
          popupBlocked: "El navegador bloqueó el popup. Habilita pop-ups para este sitio o usa la redirección.",
          popupClosed: "Autenticación cancelada. Vuelve a intentar.",
          redirectError: "Error al redireccionar. Intenta de nuevo.",
          cannotGetEmail: "No se pudo obtener el email autenticado. Intenta de nuevo.",
          cannotGetEmailAfterRedirect: "No se pudo obtener el email autenticado tras la redirección. Intenta de nuevo."
        }
      }
    },
    playChannel: {
      menu: {
        start: "Empezar",
        loading: "Cargando…",
        helper: "W/lado derecho para ascender - S/lado izquierdo para descender",
        power: "W+S/ambos lados para activar el Zonda"
      },
      gameover: {
        title: "Game Over",
        distance: "Distancia",
        zondaCharges: "Cargas de Zonda",
        sticks: "Palitos",
        finalScore: "Puntuación Final",
        newRecord: "¡Nuevo Récord!",
        record: "Récord",
        restart: "Reiniciar「R」"
      }
    },
    md: {
      codeCopyButton: {
        copy: "Copiar",
        copied: "Copiado",
      },
      postLink: {
        share: "Compartir",
        copied: "Enlace Copiado",
      }
    }
  },
  en: {
    languageSelector: "Select language",
    blog: "Blog",
    about: "About me",
    skills: "Skills",
    frontend: "Frontend",
    ai: "Artificial Intelligence",
    backend: "Backend",
    channels: "Info",
    spanish: "Spanish",
    english: "English",
    german: "German",
    japanese: "Japanese",
    projects: "Projects",
    contact: "Contact",
    play: "Play",

    channelContent: {
      blog: {
        title: "I write about:",
        items: [
          "Modern web development",
          "Best practices",
          "New technologies"
        ],
        action: "Read blog"
      },
      whoami: {
        title: "Information:",
        items: [
          "Full Stack Developer",
          "React & Node.js Specialist",
          "Passionate about technology",
          "and clean code"
        ]
      },
      projects: {
        title: "ls projects/",
        items: [
          "Weather Dashboard",
          "Web development service",
          "Development and Technology Blog"
        ]
      }
    },
    themeToggle: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme"
    },
    currentTheme: "Current theme",
    currentLanguage: "Language",
    themes: {
      light: "Light",
      dark: "Dark"
    },
    title: "0SC1 - CRT Oscilloscope",
    subtitle: "Minimalist design with retro futuristic details",
    aboutPage: {
      header: { whoami: "whoami", mutt: "mutt" },
      profile: {
        name: "Flavio Gabriel Morales",
        bio: [
          "Full Stack developer passionate about building innovative and efficient tech solutions.",
          "I specialize in modern web development with experience in scalable architectures and cutting-edge technologies.",
          "I enjoy working on both frontend and backend, always aiming for clean and maintainable code.",
          "When I'm not coding, I explore new technologies, contribute to open source, and share knowledge with the community."
        ]
      },
      contact: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
      skills: {
        title: "htop skills",
        categories: {
          general: "SKILLS",
          backend: "BACKEND",
          frontend: "FRONTEND",
          ai: "ARTIFICIAL INTELLIGENCE"
        },
        toasts: {
          javascript: "The language of the web, ideal for building easily deployable, high‑performance apps and sites—especially with ES6+. My favorite language.",
          python: "A dynamic, flexible language with a huge library ecosystem—especially for Data Science and AI/ML. Today, it's the language of AI.",
          rust: "A language designed to be robust, offer excellent performance, and be memory‑safe. Ideal for managing high‑speed, concurrent systems.",
          docker: "A platform to develop, ship, and run applications in containers. The ideal choice for deploying cloud services efficiently.",
          node: "Alongside Deno and Bun, it's the server‑side JavaScript runtime—great for scalable, real‑time backend apps; reliable and secure.",
          fastapi: "A modern, fast framework to build APIs with Python—similar to Django but more minimal, lightweight, and async. Ideal for microservices.",
          tauri: "Fast, lightweight, system‑level, and enables building Rust apps with web tech. Better than Electron for multi‑platform desktop apps.",
          postgresql: "A modern, fast, efficient, widely used, open‑source SQL database. Ideal for projects with complex relationships.",
          react: "The most popular JavaScript framework for building user interfaces. Great for dynamic, interactive web applications.",
          svelte: "A framework focused on performance optimization. Ideal for projects needing agile development and a simple yet modern UI.",
          tailwind: "A CSS framework for responsive, customized design. Ideal for creating fast, flexible solutions with lots of style.",
          next: "A React framework that enables server‑side rendering and performance optimization. Ideal for larger, more scalable projects.",
          ia_sdk: "Developed by Vercel, it's a toolkit and libraries that simplify integrating AI models into applications.",
          mcp: "A model context management protocol developed by Anthropic. Currently a standard for interaction between models and their environment.",
          n8n: "A workflow automation tool that lets you integrate different services, applications, and models easily.",
          vibe_coding: "A technique where AI writes code via prompts; when used well, it improves the workflow for UI design and basic prototyping."
        }
      },
      experience: {
        title: "bat experience.md",
        paragraphs: [
          "Participate in the Latin American Innovation Rally, a competition where you are given 28 hours to develop a project proposal that must solve a real problem. in our case, how to supply water to an isolated arid region. Together with my team, we developed a project for electrostatic collection at height, along with the project plans, a demonstration page, and the theoretical water collection capacity based on humidity level, atmospheric pressure, and temperature. We came first at the provincial level and eighth at the national level in the social impact category.",
          "Competition note: Mendoza, October 7, 2024"
        ]
      },
      projectCards: {
        tecnologies: "Tecnologies",
        visit: "Visit ↗",
        descriptions: {
          blackSun: "Dashboard interactive demo.",
          hornero: "Web development service for your business.",
          osci: "Newsletter and documentation.",
        },
      },
      muttForm: {
        subject: "We received your message",
        userMessage: "Hello {{name}}, we received your message and we will respond as soon as possible.",
        to: "To",
        from: "From",
        labels: { name: "Name", message: "Message" },
        placeholders: { name: "Your name", message: "Write your message here..." },
        submit: "Send ↗",
        sending: "Sending...",
        status: {
          success: "Message sent successfully from {{email}}!",
          error: "Error sending the message. Please try again.",
          required: "Please fill out this field"
        },
        auth: {
          title: "Authentication",
          authenticating: "Authenticating... complete the popup to continue.",
          retry: "Retry",
          useRedirect: "Use redirect",
          closeAria: "Close",
          popupBlocked: "The browser blocked the popup. Enable pop‑ups for this site or use redirect.",
          popupClosed: "Authentication canceled. Try again.",
          redirectError: "Redirection error. Please try again.",
          cannotGetEmail: "Couldn't obtain the authenticated email. Try again.",
          cannotGetEmailAfterRedirect: "Couldn't obtain the authenticated email after redirect. Try again."
        }
      }
    },
    playChannel: {
      menu: {
        start: "Start",
        loading: "Loading…",
        helper: "W/right side to ascend - S/left side to descend",
        power: "W+S/both sides to activate Zonda"
      },
      gameover: {
        title: "Game Over",
        distance: "Distance",
        zondaCharges: "Zonda charges",
        sticks: "Sticks",
        finalScore: "Final score",
        newRecord: "New Record!",
        record: "Record",
        restart: "Restart「R」"
      }
    },
    md: {
      codeCopyButton: {
        copy: "Copy",
        copied: "Copied",
      },
      postLink: {
        share: "Share",
        copied: "Link Copied",
      }
    }
  },
  de: {
    languageSelector: "Sprache auswählen",
    blog: "Blog",
    about: "Über mich",
    skills: "Fähigkeiten",
    frontend: "Frontend",
    ai: "Künstliche Intelligenz",
    backend: "Backend",
    spanish: "Spanisch",
    english: "Englisch",
    german: "Deutsch",
    japanese: "Japanisch",
    projects: "Projekte",
    contact: "Kontakt",
    play: "Spielen",
    channelContent: {
      blog: {
        title: "Ich schreibe über:",
        items: [
          "Moderne Webentwicklung",
          "Beste Praktiken",
          "Neue Technologien"
        ],
        action: "Blog lesen"
      },
      whoami: {
        title: "Information:",
        items: [
          "Full Stack Entwickler",
          "React & Node.js Spezialist",
          "Leidenschaftlich für Technologie",
          "und sauberen Code"
        ]
      },
      projects: {
        title: "ls projects/",
        items: [
          "Wetter-Dashboard",
          "Webentwicklung Service",
          "Entwicklung und Technologie Blog"
        ]
      }
    },
    themeToggle: {
      toLight: "Zu hellem Design wechseln",
      toDark: "Zu dunklem Design wechseln"
    },
    currentTheme: "Aktuelles Design",
    currentLanguage: "Sprache",
    themes: {
      light: "Hell",
      dark: "Dunkel"
    },
    title: "0SC1 - CRT Oszilloskop",
    subtitle: "Minimalistisches Design mit retro-futuristischen Details",
    channels: "Info",
    aboutPage: {
      header: { whoami: "whoami", mutt: "mutt" },
      profile: {
        name: "Flavio Gabriel Morales",
        bio: [
          "Full‑Stack‑Entwickler mit Leidenschaft für innovative und effiziente Lösungen.",
          "Spezialisiert auf moderne Webentwicklung mit Erfahrung in skalierbaren Architekturen und modernen Technologien.",
          "Ich arbeite gerne im Frontend und Backend und strebe stets sauberen, wartbaren Code an.",
          "Wenn ich nicht code, erkunde ich neue Technologien, trage zu Open Source bei und teile Wissen mit der Community."
        ]
      },
      contact: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
      skills: {
        title: "htop skills",
        categories: { general: "FÄHIGKEITEN", backend: "BACKEND", frontend: "FRONTEND", ai: "KÜNSTLICHE INTELLIGENZ" },
        toasts: {
          javascript: "Die Sprache des Webs – ideal für leicht deploybare, performante Apps und Sites, besonders mit ES6+. Meine Lieblingssprache.",
          python: "Dynamisch und flexibel mit riesigem Bibliotheks‑Ökosystem – insbesondere für Data Science und KI/ML. Heute die Sprache der KI.",
          rust: "Entwickelt für Robustheit, exzellente Performance und Speicher­sicherheit. Ideal für hoch­performante, konkurrierende Systeme.",
          docker: "Plattform zum Entwickeln, Versenden und Ausführen von Anwendungen in Containern. Perfekt für effiziente Cloud‑Deployments.",
          node: "Zusammen mit Deno und Bun die serverseitige JavaScript‑Laufzeit – ideal für skalierbare, Echtzeit‑Backends; zuverlässig und sicher.",
          fastapi: "Modernes, schnelles Framework für Python‑APIs – ähnlich wie Django, aber minimalistischer, leichter und asynchron. Ideal für Microservices.",
          tauri: "Schnell, leichtgewichtig, systemnah und ermöglicht Rust‑Apps mit Web‑Technologien. Besser als Electron für Multi‑Plattform‑Desktops.",
          postgresql: "Moderne, schnelle, effiziente, weit verbreitete Open‑Source‑SQL‑Datenbank. Ideal für Projekte mit komplexen Relationen.",
          react: "Das beliebteste JavaScript‑Framework für Benutzeroberflächen. Ideal für interaktive, dynamische Web‑Anwendungen.",
          svelte: "Ein auf Performance‑Optimierung fokussiertes Framework. Ideal für agile Entwicklung und einfache, moderne UIs.",
          tailwind: "CSS‑Framework für responsives, maßgeschneidertes Design. Ideal für schnelle, flexible Lösungen mit viel Stil.",
          next: "React‑Framework mit Server‑Side‑Rendering und Performance‑Optimierung. Ideal für größere, skalierbare Projekte.",
          ia_sdk: "Von Vercel entwickelt: Tooling und Bibliotheken zur einfachen Integration von KI‑Modellen in Anwendungen.",
          mcp: "Von Anthropic entwickeltes Protokoll zur Kontextverwaltung in KI. Aktueller Standard für die Interaktion zwischen Modellen und Umgebung.",
          n8n: "Workflow‑Automatisierungstool zur einfachen Integration verschiedener Services, Anwendungen und Modelle.",
          vibe_coding: "Technik, bei der KI Code über Prompts schreibt; richtig eingesetzt verbessert sie UI‑Design und Basis‑Prototyping."
        }
      },
      experience: {
        title: "bat experience.md",
        paragraphs: [
          "Nehmen Sie an der Rallye für lateinamerikanische Innovation teil, einem Wettbewerb, bei dem Sie 28 Stunden Zeit haben, um einen Projektvorschlag zu entwickeln, der ein reales Problem lösen soll. In unserem Fall ging es darum, eine abgelegene, trockene Region mit Wasser zu versorgen. Zusammen mit meinem Team entwickelten wir ein Projekt zur elektrostatischen Wassersammlung in großer Höhe, einschließlich der Projektpläne, einer Demonstrationsseite und der theoretischen Wassersammelkapazität in Abhängigkeit von Luftfeuchtigkeit, Luftdruck und Temperatur. Wir belegten den ersten Platz auf Provinzebene und den achten Platz auf nationaler Ebene in der Kategorie „Soziale Auswirkungen”.",
          "Anmerkung zur Zuständigkeit: Mendoza, 7 Oktober 2024."
        ]
      },
      projectCards: {
        tecnologies: "Technologien",
        visit: "Besuchen ↗",
        descriptions: {
          blackSun: "Dashboard interaktive demo.",
          hornero: "Web Entwicklungs Service für dein Geschäft.",
          osci: "Newsletter und Dokumentation.",
        },
      },
      muttForm: {
        subject: "Wir haben Ihre Nachricht erhalten",
        userMessage: "Hallo {{name}}, Wir haben Ihre Nachricht erhalten und werden sie so schnell wie möglich beantworten.",
        to: "An",
        from: "Von",
        labels: { name: "Name", message: "Nachricht" },
        placeholders: { name: "Dein Name", message: "Schreibe hier deine Nachricht..." },
        submit: "Senden ↗",
        sending: "Senden...",
        status: {
          success: "Nachricht erfolgreich von {{email}} gesendet!",
          error: "Fehler beim Senden. Bitte versuche es erneut.",
          required: "Dieses Feld ausfüllen"
        },
        auth: {
          title: "Authentifizierung",
          authenticating: "Authentifiziere... Schließe das Popup ab, um fortzufahren.",
          retry: "Erneut versuchen",
          useRedirect: "Weiterleitung nutzen",
          closeAria: "Schließen",
          popupBlocked: "Der Browser blockierte das Popup. Erlaube Pop‑ups oder nutze die Weiterleitung.",
          popupClosed: "Authentifizierung abgebrochen. Versuche es erneut.",
          redirectError: "Fehler bei der Weiterleitung. Bitte erneut versuchen.",
          cannotGetEmail: "Authentifizierte E‑Mail konnte nicht abgerufen werden.",
          cannotGetEmailAfterRedirect: "E‑Mail nach Weiterleitung konnte nicht abgerufen werden."
        }
      },
      playChannel: {
        menu: {
          start: "Starten",
          loading: "Laden…",
          helper: "W/rechte Seite zum Aufsteigen - S/linke Seite zum Absteigen",
          power: "W+S/beide Seiten zum Aktivieren von Zonda"
        },
        gameover: {
          title: "Game Over",
          distance: "Distanz",
          zondaCharges: "Zonda‑Ladungen",
          sticks: "Stöcke",
          finalScore: "Endpunktzahl",
          newRecord: "Neuer Rekord!",
          record: "Rekord",
          restart: "Neu starten「R」"
        }
      },
    },
    playChannel: {
      menu: {
        start: "Starten",
        loading: "Laden…",
        helper: "W/rechte Seite zum Aufsteigen - S/linke Seite zum Absteigen",
        power: "W+S/beide Seiten zum Aktivieren von Zonda"
      },
      gameover: {
        title: "Game Over",
        distance: "Distanz",
        zondaCharges: "Zonda‑Ladungen",
        sticks: "Stöcke",
        finalScore: "Endpunktzahl",
        newRecord: "Neuer Rekord!",
        record: "Rekord",
        restart: "Neu starten「R」"
      }
    },
    md: {
        codeCopyButton: {
          copy: "Kopieren",
          copied: "Kopiert",
        },
        postLink: {
          share: "Teilen",
          copied: "Link kopiert",
        }
      }
  },
  ja: {
    languageSelector: "言語を選択",
    blog: "ブログ",
    about: "私について",
    skills: "スキル",
    frontend: "フロントエンド",
    ai: "人工知能",
    backend: "バックエンド",
    spanish: "スペイン語",
    english: "英語",
    german: "ドイツ語",
    japanese: "日本語",
    projects: "プロジェクト",
    contact: "コンタクト",
    play: "プレイ",
    channelContent: {
      blog: {
        title: "ブログの内容：",
        items: [
          "モダンウェブ開発",
          "ベストプラクティス",
          "新技術"
        ],
        action: "ブログを読む"
      },
      whoami: {
        title: "プロフィール：",
        items: [
          "フルスタック開発者",
          "React & Node.js スペシャリスト",
          "テクノロジーへの情熱",
          "クリーンコードの追求"
        ]
      },
      projects: {
        title: "ls projects/",
        items: [
          "天気ダッシュボード",
          "Web開発サービス",
          "開発とテクノロジーのブログ"
        ]
      }
    },
    themeToggle: {
      toLight: "ライトテーマに切り替え",
      toDark: "ダークテーマに切り替え"
    },
    currentTheme: "現在のテーマ",
    currentLanguage: "言語",
    themes: {
      light: "ライト",
      dark: "ダーク"
    },
    title: "0SC1 - CRTオシロスコープ",
    subtitle: "レトロフューチャーな要素を取り入れたミニマルデザイン",
    channels: "インフォ",
    aboutPage: {
      header: { whoami: "whoami", mutt: "mutt" },
      profile: {
        name: "フラビオ・ガブリエル・モラレス",
        bio: [
          "革新的で効率的なソリューションを作ることに情熱を持つフルスタック開発者。",
          "スケーラブルなアーキテクチャと最新技術を用いたモダンなWeb開発を専門としています。",
          "フロントエンドとバックエンドの両方に携わり、常にクリーンで保守しやすいコードを目指します。",
          "コーディング以外では、新技術の探索、OSSへの貢献、コミュニティとの知識共有を楽しんでいます。"
        ]
      },
      contact: { email: "メール", linkedin: "LinkedIn", github: "GitHub" },
      skills: {
        title: "htop skills",
        categories: { general: "スキル", backend: "バックエンド", frontend: "フロントエンド", ai: "人工知能" },
        toasts: {
          javascript: "ウェブの言語。簡単にデプロイでき、高性能なアプリやサイトの開発に最適。とくにES6+で真価を発揮。私のお気に入りです。",
          python: "動的で柔軟、膨大なライブラリ群を持つ言語。データサイエンスやAI/MLに特化し、現在はAIの中心的言語です。",
          rust: "堅牢性・高性能・メモリ安全性を重視して設計された言語。高速かつ並行なシステムの管理に最適です。",
          docker: "コンテナでアプリを開発・配布・実行するプラットフォーム。効率的なクラウド展開に最適です。",
          node: "DenoやBunと並ぶサーバーサイドJavaScriptランタイム。スケーラブルでリアルタイムなバックエンドに最適で、信頼性と安全性も高いです。",
          fastapi: "PythonでAPIを構築するためのモダンで高速なフレームワーク。Djangoに似ていますが、よりミニマルで軽量、非同期にも対応。マイクロサービスに最適です。",
          tauri: "高速・軽量でシステムレベルに近く、Web技術でRustアプリを構築可能。マルチプラットフォームのデスクトップアプリではElectronより優れています。",
          postgresql: "モダンで高速・効率的、広く使われるオープンソースのSQLデータベース。複雑なリレーションを持つプロジェクトに最適です。",
          react: "ユーザーインターフェースを構築するための最も人気のあるJavaScriptフレームワーク。インタラクティブで動的なWebアプリに最適です。",
          svelte: "パフォーマンス最適化に焦点を当てたフレームワーク。アジャイル開発や、シンプルかつモダンなUIに最適です。",
          tailwind: "レスポンシブでカスタマイズ可能なデザインを実現するCSSフレームワーク。素早く柔軟で、スタイル性にも優れます。",
          next: "サーバーサイドレンダリングやパフォーマンス最適化を備えたReactフレームワーク。大規模でスケーラブルなプロジェクトに最適です。",
          ia_sdk: "Vercelが開発した、アプリへのAIモデル統合を容易にするツールキットとライブラリ群。",
          mcp: "Anthropicが開発した、モデルと環境の相互作用を標準化するコンテキスト管理プロトコル。",
          n8n: "サービス・アプリケーション・モデルを簡単に統合できるワークフロー自動化ツール。",
          vibe_coding: "AIがプロンプトを元にコードを書く手法。うまく使えばUI設計や基本的なプロトタイピングのワークフローを向上させます。"
        }
      },
      experience: {
        title: "bat experience.md",
        paragraphs: [
          "ラテンアメリカ・イノベーション・ラリーに参加しましょう。このコンテストでは、28時間で現実の問題を解決するプロジェクト提案を開発する必要があります。私たちの場合は、乾燥した孤立した地域への水の供給でした。私のチームは、高所での静電集水プロジェクトを開発し、プロジェクトの設計図、デモページ、湿度、気圧、温度に基づく理論的な集水能力を提示しました。その結果、州レベルで1位、全国レベルで社会影響部門8位を獲得しました。",
          "コンテストの注記：メンドーサ、2024年 10月 7日"
        ]
      },
      projectCards: {
        tecnologies: "テクノロジー",
        visit: "訪問 ↗",
        descriptions: {
          blackSun: "ダッシュボードインタラクティブデモ。",
          hornero: "ビジネス向けのWeb開発サービス。",
          osci: "ニュースレターと文書。",
        },
      },
      muttForm: {
        subject: "私たちはあなたのメッセージを受け取りました",
        userMessage: "こんにちは {{name}}、私たちはあなたのメッセージを受け取りました。可能な限り早く返信させていただきます。",
        to: "宛先",
        from: "送信元",
        labels: { name: "名前", message: "メッセージ" },
        placeholders: { name: "あなたの名前", message: "ここにメッセージを入力..." },
        submit: "送信 ↗",
        sending: "送信中...",
        status: {
          success: "{{email}} から送信されました！",
          error: "送信エラーが発生しました。もう一度お試しください。",
          required: "この項目を入力してください"
        },
        auth: {
          title: "認証",
          authenticating: "認証中... ポップアップを完了してください。",
          retry: "再試行",
          useRedirect: "リダイレクトを使用",
          closeAria: "閉じる",
          popupBlocked: "ブラウザがポップアップをブロックしました。許可するかリダイレクトを使用してください。",
          popupClosed: "認証がキャンセルされました。もう一度お試しください。",
          redirectError: "リダイレクト中にエラーが発生しました。",
          cannotGetEmail: "認証済みメールを取得できませんでした。",
          cannotGetEmailAfterRedirect: "リダイレクト後にメールを取得できませんでした。"
        }
      }
    },
    playChannel: {
      menu: {
        start: "スタート",
        loading: "読み込み中…",
        helper: "W/右側で上昇 - S/左側で下降",
        power: "W+S/両側でゾンダを起動"
      },
      gameover: {
        title: "ゲームオーバー",
        distance: "距離",
        zondaCharges: "ゾンダの充電数",
        sticks: "スティック数",
        finalScore: "最終スコア",
        newRecord: "新記録！",
        record: "記録",
        restart: "リスタート「R」"
      }
    },
    md: {
      codeCopyButton: {
        copy: "コピー",
        copied: "コピー済み",
      },
      postLink: {
        share: "シェア",
        copied: "リンクコピー",
      }
    }
  }
}
