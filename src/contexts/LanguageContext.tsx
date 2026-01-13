import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.ebooks': 'E-books',
    'nav.shop': 'Loja',
    'nav.community': 'Comunidade',
    'nav.about': 'Sobre',

    // Home Page - Manifesto
    'manifesto.quote': 'A realidade é moldável. Você só precisa aprender a sintaxe.',
    'manifesto.p1': 'Na SYNCRONIX, entendemos que a existência humana opera em frequências. Alguns nascem sintonizados com o poder, outros precisam encontrar a estação certa.',
    'manifesto.p2': 'Não somos uma marca. Somos um sistema operacional para a vida humana. Uma filosofia que reconhece uma verdade simples: você não está aqui para sobreviver. Você está aqui para dominar.',
    'manifesto.p3': 'O mundo está dividido entre aqueles que criam as regras e aqueles que as seguem. Entre os que constroem impérios e os que trabalham neles. Entre os que definem a realidade e os que simplesmente existem dentro dela.',
    'manifesto.p4': 'SYNCRONIX é para aqueles que escolheram o primeiro caminho.',

    // Header Navigation
    'header.nav.brand': 'Marca',
    'header.nav.knowledge': 'Conhecimento',
    'header.nav.clothes': 'Roupas',
    'header.nav.reality': 'Realidade',

    // Footer
    'footer.tagline': 'SYNCRONIX. FULLPOWER ENERGY.',
    'footer.description': 'Redefina sua realidade. Sintonize sua frequência. Construa seu poder.',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Conecte-se',
    'footer.copyright': '© 2025 SYNCRONIX®. A realidade espera por suas ordens.',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.link.about': 'Sobre a Marca',
    'footer.link.knowledge': 'Conhecimento',
    'footer.link.clothes': 'Roupas',
    'footer.link.community': 'Comunidade',

    // EbookHub Section
    'ebookhub.title': 'Construa Sua Realidade.',
    'ebookhub.subtitle': 'Desbloqueie o poder que habita em você com a CHAVE MESTRE.',
    'ebookhub.description1': 'Este não é mais um livro de autoajuda. É um manual de engenharia humana. Um sistema comprovado para reescrever sua programação mental e alinhar suas ações com a frequência do poder.',
    'ebookhub.description2': 'Desenvolvido através de anos de estudo sobre neurociência, psicologia comportamental e os padrões de sucesso das elites globais.',
    'ebookhub.button': 'ACESSAR O CONHECIMENTO',
    'ebookhub.pillars.title': 'Domine os Pilares da Sua Existência:',
    'ebookhub.ecosystem1': 'SYNCRONIX não é apenas conhecimento. É um ecossistema completo de transformação. Além do ebook fundamental, você terá acesso a:',
    'ebookhub.ecosystem2': 'Workshops exclusivos, comunidade de alto nível, mentoria direta, ferramentas de tracking de progresso e updates constantes conforme evoluímos nossos métodos.',
    'ebookhub.ecosystem3': 'Quando você entra na SYNCRONIX, você não compra um produto. Você ganha acesso a uma realidade superior.',

    // Shop Section
    'shop.title': 'SYNCWEAR: A Materialização do Poder.',
    'shop.subtitle': 'Sportlife: Equipamento para a guerra diária.',
    'shop.description1': 'Cada peça SYNCWEAR é projetada para o indivíduo que entende que até mesmo o que você veste comunica poder. Não fazemos roupas. Criamos armaduras modernas.',
    'shop.description2': 'Tecidos premium, cortes precisos, design minimalista. Porque quando você domina sua realidade, não precisa gritar sobre isso. Sua presença já é suficiente.',
    'shop.description3': 'SYNCWEAR: Vista-se como quem você está se tornando.',
    'shop.button': 'CONHEÇA AS COLEÇÕES',
    'shop.product1.name': 'Essential Tee',
    'shop.product1.category': 'Sportlife',
    'shop.product1.description': 'Minimalismo em forma física',
    'shop.product2.name': 'Power Hoodie',
    'shop.product2.category': 'Streetwear',
    'shop.product2.description': 'Conforto como declaração',
    'shop.product3.name': 'Elite Joggers',
    'shop.product3.category': 'Performance',
    'shop.product3.description': 'Mobilidade sem compromissos',

    // Community Section
    'community.title': 'A Comunidade SYNCRONIX',
    'community.subtitle1': 'Você não está sozinho nesta jornada',
    'community.subtitle2': 'Rejeitar a mediocridade',
    'community.subtitle3': 'Construir excelência',
    'community.subtitle4': 'Formar alianças',
    'community.description1': 'Aqui você encontrará mentores, parceiros estratégicos e mentes que operam na mesma frequência. Networking não é sobre trocar cartões. É sobre formar alianças que amplificam o poder de todos os envolvidos.',
    'community.description2': 'Entre na frequência do poder. Junte-se a nós.',
    'community.button.main': 'CONHEÇA A COMUNIDADE COMPLETA',
    'community.button.subscribe': 'DESBLOQUEIE SUA ASCENÇÃO',
    'community.button.loading': 'Processando...',
    'community.button.success': 'Sucesso!',
    'community.button.error': 'Tentar novamente',
    'community.form.placeholder': 'seu@email.com',
    'community.form.privacy': 'Ao se inscrever, você concorda com nossa',
    'community.form.privacy.link': 'política de privacidade',
    'community.toast.email.required': 'Email obrigatório',
    'community.toast.email.required.desc': 'Por favor, insira seu endereço de email.',
    'community.toast.email.invalid': 'Email inválido',
    'community.toast.email.invalid.desc': 'Por favor, insira um endereço de email válido.',
    'community.toast.success': 'Bem-vindo à SYNCRONIX!',
    'community.toast.success.desc': 'Sua jornada de ascensão começou. Verifique seu email.',
    'community.toast.error': 'Erro na inscrição',
    'community.toast.error.desc': 'Tente novamente em alguns instantes.',
    'community.toast.connection': 'Erro de conexão',
    'community.toast.connection.desc': 'Verifique sua conexão e tente novamente.',

    // Ebooks Page
    'ebooks.badge': '✨ Biblioteca Digital',
    'ebooks.title': 'Coleção de e‑books',
    'ebooks.subtitle': 'A SYNCRONIX valoriza a tríade que amplia a mente, alimenta a alma e nos ajuda a escapar da rotina:',
    'ebooks.subtitle.highlight': 'arte, conhecimento e entretenimento',
    'ebooks.feature.instant': 'Acesso Imediato',
    'ebooks.feature.guarantee': 'Garantia de 7 Dias',
    'ebooks.feature.premium': 'Conteúdo Premium',
    'ebooks.section.title': 'Nossa Coleção',
    'ebooks.section.subtitle': 'Transforme sua vida com conhecimento de ponta',
    'ebooks.language.choose': 'Escolha o idioma',
    'ebooks.button.buy': 'VER MAIS',
    'ebooks.price.or': 'ou',

    // Products
    'product.chave.name': 'eBook – A Chave do Poder',
    'product.chave.desc': 'Desbloqueie seu potencial com sabedoria',
    'product.camaleao.name': 'eBook – Efeito Camaleão – O Guia Definitivo da Persuasão e Influência Invisível',
    'product.camaleao.desc': 'Guia de persuasão e influência invisível',
    'product.alma.name': 'eBook – Alma Livre, Leve e Abundante',
    'product.alma.desc': 'Bem‑estar emocional e abundância interior',
    'product.demonios.name': 'Guia Prático – Dominando Demônios Internos',
    'product.demonios.desc': 'Transforme inseguranças em poder e clareza',
    'product.salto.name': 'Manual Avançado do Salto Quântico – 10 Passos',
    'product.salto.desc': '10 passos para reescrever sua realidade',
    'product.energy.name': 'Energy Hack + Áudio Reprogramação',
    'product.energy.desc': 'Atualize o mindset e viva sua realidade',

    // Guarantee
    'guarantee.title': 'Garantia de 7 Dias',
    'guarantee.text1': 'Você tem',
    'guarantee.text1.highlight': '7 dias completos',
    'guarantee.text1.end': 'para explorar o conteúdo e experimentar sua transformação.',
    'guarantee.text2': 'Se, ao final desse período, você não sentir que o livro tocou profundamente sua vida, devolvemos',
    'guarantee.text2.highlight': '100% do seu investimento',
    'guarantee.text2.end': '. Sem perguntas, sem complicações.',
    'guarantee.text3': 'A transformação exige prática e tempo. Por isso, incentivamos que você dedique tempo à leitura, reflexão e prática antes de solicitar o reembolso.',
    'guarantee.badge.secure': 'Pagamento Seguro',
    'guarantee.badge.instant': 'Entrega Instantânea',
    'guarantee.badge.support': 'Suporte 24/7',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.ebooks': 'E-books',
    'nav.shop': 'Shop',
    'nav.community': 'Community',
    'nav.about': 'About',

    // Home Page - Manifesto
    'manifesto.quote': 'Reality is moldable. You just need to learn the syntax.',
    'manifesto.p1': 'At SYNCRONIX, we understand that human existence operates on frequencies. Some are born tuned to power, others need to find the right station.',
    'manifesto.p2': 'We are not a brand. We are an operating system for human life. A philosophy that recognizes a simple truth: you are not here to survive. You are here to dominate.',
    'manifesto.p3': 'The world is divided between those who create the rules and those who follow them. Between those who build empires and those who work in them. Between those who define reality and those who simply exist within it.',
    'manifesto.p4': 'SYNCRONIX is for those who chose the first path.',

    // Header Navigation
    'header.nav.brand': 'Brand',
    'header.nav.knowledge': 'Knowledge',
    'header.nav.clothes': 'Clothes',
    'header.nav.reality': 'Reality',

    // Footer
    'footer.tagline': 'SYNCRONIX. FULLPOWER ENERGY.',
    'footer.description': 'Redefine your reality. Tune your frequency. Build your power.',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2025 SYNCRONIX®. Reality awaits your commands.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.link.about': 'About the Brand',
    'footer.link.knowledge': 'Knowledge',
    'footer.link.clothes': 'Clothes',
    'footer.link.community': 'Community',

    // EbookHub Section
    'ebookhub.title': 'Build Your Reality.',
    'ebookhub.subtitle': 'Unlock the power within you with the MASTER KEY.',
    'ebookhub.description1': 'This is not another self-help book. It is a human engineering manual. A proven system to rewrite your mental programming and align your actions with the frequency of power.',
    'ebookhub.description2': 'Developed through years of studying neuroscience, behavioral psychology, and the success patterns of global elites.',
    'ebookhub.button': 'ACCESS THE KNOWLEDGE',
    'ebookhub.pillars.title': 'Master the Pillars of Your Existence:',
    'ebookhub.ecosystem1': 'SYNCRONIX is not just knowledge. It is a complete transformation ecosystem. Beyond the fundamental ebook, you will have access to:',
    'ebookhub.ecosystem2': 'Exclusive workshops, high-level community, direct mentorship, progress tracking tools, and constant updates as we evolve our methods.',
    'ebookhub.ecosystem3': 'When you enter SYNCRONIX, you don\'t buy a product. You gain access to a superior reality.',

    // Shop Section
    'shop.title': 'SYNCWEAR: The Materialization of Power.',
    'shop.subtitle': 'Sportlife: Equipment for the daily war.',
    'shop.description1': 'Every SYNCWEAR piece is designed for the individual who understands that even what you wear communicates power. We don\'t make clothes. We create modern armor.',
    'shop.description2': 'Premium fabrics, precise cuts, minimalist design. Because when you master your reality, you don\'t need to shout about it. Your presence is enough.',
    'shop.description3': 'SYNCWEAR: Dress like who you are becoming.',
    'shop.button': 'DISCOVER THE COLLECTIONS',
    'shop.product1.name': 'Essential Tee',
    'shop.product1.category': 'Sportlife',
    'shop.product1.description': 'Minimalism in physical form',
    'shop.product2.name': 'Power Hoodie',
    'shop.product2.category': 'Streetwear',
    'shop.product2.description': 'Comfort as a statement',
    'shop.product3.name': 'Elite Joggers',
    'shop.product3.category': 'Performance',
    'shop.product3.description': 'Mobility without compromises',

    // Community Section
    'community.title': 'The SYNCRONIX Community',
    'community.subtitle1': 'You are not alone on this journey',
    'community.subtitle2': 'Reject mediocrity',
    'community.subtitle3': 'Build excellence',
    'community.subtitle4': 'Form alliances',
    'community.description1': 'Here you will find mentors, strategic partners, and minds that operate on the same frequency. Networking is not about exchanging cards. It\'s about forming alliances that amplify the power of everyone involved.',
    'community.description2': 'Enter the frequency of power. Join us.',
    'community.button.main': 'DISCOVER THE FULL COMMUNITY',
    'community.button.subscribe': 'UNLOCK YOUR ASCENSION',
    'community.button.loading': 'Processing...',
    'community.button.success': 'Success!',
    'community.button.error': 'Try again',
    'community.form.placeholder': 'your@email.com',
    'community.form.privacy': 'By subscribing, you agree to our',
    'community.form.privacy.link': 'privacy policy',
    'community.toast.email.required': 'Email required',
    'community.toast.email.required.desc': 'Please enter your email address.',
    'community.toast.email.invalid': 'Invalid email',
    'community.toast.email.invalid.desc': 'Please enter a valid email address.',
    'community.toast.success': 'Welcome to SYNCRONIX!',
    'community.toast.success.desc': 'Your ascension journey has begun. Check your email.',
    'community.toast.error': 'Subscription error',
    'community.toast.error.desc': 'Please try again in a few moments.',
    'community.toast.connection': 'Connection error',
    'community.toast.connection.desc': 'Check your connection and try again.',

    // Ebooks Page
    'ebooks.badge': '✨ Digital Library',
    'ebooks.title': 'E-books Collection',
    'ebooks.subtitle': 'SYNCRONIX values the triad that expands the mind, nourishes the soul and helps us escape from routine:',
    'ebooks.subtitle.highlight': 'art, knowledge and entertainment',
    'ebooks.feature.instant': 'Instant Access',
    'ebooks.feature.guarantee': '7-Day Guarantee',
    'ebooks.feature.premium': 'Premium Content',
    'ebooks.section.title': 'Our Collection',
    'ebooks.section.subtitle': 'Transform your life with cutting-edge knowledge',
    'ebooks.language.choose': 'Choose language',
    'ebooks.button.buy': 'SEE MORE',
    'ebooks.price.or': 'or',

    // Products
    'product.chave.name': 'eBook – The Key to Power',
    'product.chave.desc': 'Unlock your potential with wisdom',
    'product.camaleao.name': 'eBook – Chameleon Effect – The Ultimate Guide to Invisible Persuasion and Influence',
    'product.camaleao.desc': 'Guide to persuasion and invisible influence',
    'product.alma.name': 'eBook – Free, Light and Abundant Soul',
    'product.alma.desc': 'Emotional well-being and inner abundance',
    'product.demonios.name': 'Practical Guide – Mastering Internal Demons',
    'product.demonios.desc': 'Transform insecurities into power and clarity',
    'product.salto.name': 'Advanced Quantum Leap Manual – 10 Steps',
    'product.salto.desc': '10 steps to rewrite your reality',
    'product.energy.name': 'Energy Hack + Reprogramming Audio',
    'product.energy.desc': 'Update your mindset and live your reality',

    // Guarantee
    'guarantee.title': '7-Day Guarantee',
    'guarantee.text1': 'You have',
    'guarantee.text1.highlight': '7 full days',
    'guarantee.text1.end': 'to explore the content and experience your transformation.',
    'guarantee.text2': 'If, at the end of this period, you do not feel that the book has deeply touched your life, we return',
    'guarantee.text2.highlight': '100% of your investment',
    'guarantee.text2.end': '. No questions, no complications.',
    'guarantee.text3': 'Transformation requires practice and time. Therefore, we encourage you to dedicate time to reading, reflection and practice before requesting a refund.',
    'guarantee.badge.secure': 'Secure Payment',
    'guarantee.badge.instant': 'Instant Delivery',
    'guarantee.badge.support': '24/7 Support',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.ebooks': 'E-books',
    'nav.shop': 'Tienda',
    'nav.community': 'Comunidad',
    'nav.about': 'Acerca de',

    // Home Page - Manifesto
    'manifesto.quote': 'La realidad es moldeable. Solo necesitas aprender la sintaxis.',
    'manifesto.p1': 'En SYNCRONIX, entendemos que la existencia humana opera en frecuencias. Algunos nacen sintonizados con el poder, otros necesitan encontrar la estación correcta.',
    'manifesto.p2': 'No somos una marca. Somos un sistema operativo para la vida humana. Una filosofía que reconoce una verdad simple: no estás aquí para sobrevivir. Estás aquí para dominar.',
    'manifesto.p3': 'El mundo está dividido entre aquellos que crean las reglas y aquellos que las siguen. Entre los que construyen imperios y los que trabajan en ellos. Entre los que definen la realidad y los que simplemente existen dentro de ella.',
    'manifesto.p4': 'SYNCRONIX es para aquellos que eligieron el primer camino.',

    // Header Navigation
    'header.nav.brand': 'Marca',
    'header.nav.knowledge': 'Conocimiento',
    'header.nav.clothes': 'Ropa',
    'header.nav.reality': 'Realidad',

    // Footer
    'footer.tagline': 'SYNCRONIX. FULLPOWER ENERGY.',
    'footer.description': 'Redefine tu realidad. Sintoniza tu frecuencia. Construye tu poder.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.copyright': '© 2025 SYNCRONIX®. La realidad espera tus órdenes.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.link.about': 'Sobre la Marca',
    'footer.link.knowledge': 'Conocimiento',
    'footer.link.clothes': 'Ropa',
    'footer.link.community': 'Comunidad',

    // EbookHub Section
    'ebookhub.title': 'Construye Tu Realidad.',
    'ebookhub.subtitle': 'Desbloquea el poder que habita en ti con la LLAVE MAESTRA.',
    'ebookhub.description1': 'Este no es otro libro de autoayuda. Es un manual de ingeniería humana. Un sistema comprobado para reescribir tu programación mental y alinear tus acciones con la frecuencia del poder.',
    'ebookhub.description2': 'Desarrollado a través de años de estudio sobre neurociencia, psicología conductual y los patrones de éxito de las élites globales.',
    'ebookhub.button': 'ACCEDER AL CONOCIMIENTO',
    'ebookhub.pillars.title': 'Domina los Pilares de Tu Existencia:',
    'ebookhub.ecosystem1': 'SYNCRONIX no es solo conocimiento. Es un ecosistema completo de transformación. Además del ebook fundamental, tendrás acceso a:',
    'ebookhub.ecosystem2': 'Talleres exclusivos, comunidad de alto nivel, mentoría directa, herramientas de seguimiento de progreso y actualizaciones constantes conforme evolucionamos nuestros métodos.',
    'ebookhub.ecosystem3': 'Cuando entras a SYNCRONIX, no compras un producto. Obtienes acceso a una realidad superior.',

    // Shop Section
    'shop.title': 'SYNCWEAR: La Materialización del Poder.',
    'shop.subtitle': 'Sportlife: Equipamiento para la guerra diaria.',
    'shop.description1': 'Cada pieza SYNCWEAR está diseñada para el individuo que entiende que incluso lo que vistes comunica poder. No hacemos ropa. Creamos armaduras modernas.',
    'shop.description2': 'Telas premium, cortes precisos, diseño minimalista. Porque cuando dominas tu realidad, no necesitas gritar sobre ello. Tu presencia ya es suficiente.',
    'shop.description3': 'SYNCWEAR: Vístete como quien te estás convirtiendo.',
    'shop.button': 'CONOCE LAS COLECCIONES',
    'shop.product1.name': 'Essential Tee',
    'shop.product1.category': 'Sportlife',
    'shop.product1.description': 'Minimalismo en forma física',
    'shop.product2.name': 'Power Hoodie',
    'shop.product2.category': 'Streetwear',
    'shop.product2.description': 'Comodidad como declaración',
    'shop.product3.name': 'Elite Joggers',
    'shop.product3.category': 'Performance',
    'shop.product3.description': 'Movilidad sin compromisos',

    // Community Section
    'community.title': 'La Comunidad SYNCRONIX',
    'community.subtitle1': 'No estás solo en este viaje',
    'community.subtitle2': 'Rechazar la mediocridad',
    'community.subtitle3': 'Construir excelencia',
    'community.subtitle4': 'Formar alianzas',
    'community.description1': 'Aquí encontrarás mentores, socios estratégicos y mentes que operan en la misma frecuencia. El networking no se trata de intercambiar tarjetas. Se trata de formar alianzas que amplifican el poder de todos los involucrados.',
    'community.description2': 'Entra en la frecuencia del poder. Únete a nosotros.',
    'community.button.main': 'CONOCE LA COMUNIDAD COMPLETA',
    'community.button.subscribe': 'DESBLOQUEA TU ASCENSIÓN',
    'community.button.loading': 'Procesando...',
    'community.button.success': '¡Éxito!',
    'community.button.error': 'Intentar de nuevo',
    'community.form.placeholder': 'tu@email.com',
    'community.form.privacy': 'Al suscribirte, aceptas nuestra',
    'community.form.privacy.link': 'política de privacidad',
    'community.toast.email.required': 'Email requerido',
    'community.toast.email.required.desc': 'Por favor, ingresa tu dirección de email.',
    'community.toast.email.invalid': 'Email inválido',
    'community.toast.email.invalid.desc': 'Por favor, ingresa una dirección de email válida.',
    'community.toast.success': '¡Bienvenido a SYNCRONIX!',
    'community.toast.success.desc': 'Tu viaje de ascensión ha comenzado. Verifica tu email.',
    'community.toast.error': 'Error en la suscripción',
    'community.toast.error.desc': 'Intenta de nuevo en unos momentos.',
    'community.toast.connection': 'Error de conexión',
    'community.toast.connection.desc': 'Verifica tu conexión e intenta de nuevo.',

    // Ebooks Page
    'ebooks.badge': '✨ Biblioteca Digital',
    'ebooks.title': 'Colección de e‑books',
    'ebooks.subtitle': 'SYNCRONIX valora la tríada que amplía la mente, alimenta el alma y nos ayuda a escapar de la rutina:',
    'ebooks.subtitle.highlight': 'arte, conocimiento y entretenimiento',
    'ebooks.feature.instant': 'Acceso Inmediato',
    'ebooks.feature.guarantee': 'Garantía de 7 Días',
    'ebooks.feature.premium': 'Contenido Premium',
    'ebooks.section.title': 'Nuestra Colección',
    'ebooks.section.subtitle': 'Transforma tu vida con conocimiento de vanguardia',
    'ebooks.language.choose': 'Elige el idioma',
    'ebooks.button.buy': 'VER MÁS',
    'ebooks.price.or': 'o',

    // Products
    'product.chave.name': 'eBook – La Clave del Poder',
    'product.chave.desc': 'Desbloquea tu potencial con sabiduría',
    'product.camaleao.name': 'eBook – Efecto Camaleón – La Guía Definitiva de Persuasión e Influencia Invisible',
    'product.camaleao.desc': 'Guía de persuasión e influencia invisible',
    'product.alma.name': 'eBook – Alma Libre, Ligera y Abundante',
    'product.alma.desc': 'Bienestar emocional y abundancia interior',
    'product.demonios.name': 'Guía Práctica – Dominando Demonios Internos',
    'product.demonios.desc': 'Transforma inseguridades en poder y claridad',
    'product.salto.name': 'Manual Avanzado del Salto Cuántico – 10 Pasos',
    'product.salto.desc': '10 pasos para reescribir tu realidad',
    'product.energy.name': 'Energy Hack + Audio de Reprogramación',
    'product.energy.desc': 'Actualiza tu mentalidad y vive tu realidad',

    // Guarantee
    'guarantee.title': 'Garantía de 7 Días',
    'guarantee.text1': 'Tienes',
    'guarantee.text1.highlight': '7 días completos',
    'guarantee.text1.end': 'para explorar el contenido y experimentar tu transformación.',
    'guarantee.text2': 'Si, al final de este período, no sientes que el libro ha tocado profundamente tu vida, devolvemos',
    'guarantee.text2.highlight': '100% de tu inversión',
    'guarantee.text2.end': '. Sin preguntas, sin complicaciones.',
    'guarantee.text3': 'La transformación requiere práctica y tiempo. Por eso, te animamos a dedicar tiempo a la lectura, reflexión y práctica antes de solicitar el reembolso.',
    'guarantee.badge.secure': 'Pago Seguro',
    'guarantee.badge.instant': 'Entrega Instantánea',
    'guarantee.badge.support': 'Soporte 24/7',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
