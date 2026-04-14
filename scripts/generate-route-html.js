import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const baseHtmlPath = path.join(distDir, "index.html");

const routePages = [
  {
    route: "ebook-a-chave-do-poder",
    lang: "pt-BR",
    title: "A Chave do Poder | eBook Transforme sua Realidade",
    description:
      "Descubra os conhecimentos ancestrais e modernos em 351 paginas. Fisica Quantica, Kabbalah, Metafisica e muito mais. A verdade que jamais te contaram.",
    canonical: "https://syncronix.co/ebook-a-chave-do-poder",
    ogImage: "https://syncronix.co/mockup-3-ebook-black.webp",
  },
  {
    route: "ebook-the-key-to-power",
    lang: "en",
    title: "The Key to Power | eBook Transform Your Reality",
    description:
      "Discover ancient and modern knowledge in 351 pages. Quantum Physics, Kabbalah, Metaphysics and much more. The truth they never told you.",
    canonical: "https://syncronix.co/ebook-the-key-to-power",
    ogImage: "https://syncronix.co/mockup-ebook-english.png",
  },
  {
    route: "ebook-la-clave-del-poder",
    lang: "es",
    title: "La Clave del Poder | eBook Transforma tu Realidad",
    description:
      "Descubre los conocimientos ancestrales y modernos en 351 paginas. Fisica Cuantica, Kabbalah, Metafisica y mucho mas. La verdad que jamas te contaron.",
    canonical: "https://syncronix.co/ebook-la-clave-del-poder",
    ogImage: "https://syncronix.co/mockup-ebook-spanish.png",
  },
  {
    route: "ebook-a-regra-da-vida",
    lang: "pt-BR",
    title: "A Regra da Vida | eBook - Clareza Mental Aplicada",
    description:
      "Manual visual de engenharia mental que revela o que realmente controla suas decisoes, habitos e resultados. Deixe de tentar mais e entenda o sistema.",
    canonical: "https://syncronix.co/ebook-a-regra-da-vida",
    ogImage: "https://syncronix.co/regra-da-vida/MOCKUP%20PRESENTS%20PORTUGUES.png",
  },
  {
    route: "ebook-the-rule-of-life",
    lang: "en",
    title: "The Rule of Life | eBook - Applied Mental Clarity",
    description:
      "Visual manual of mental engineering that reveals what really controls your decisions, habits, and results. Stop trying harder and understand the system.",
    canonical: "https://syncronix.co/ebook-the-rule-of-life",
    ogImage: "https://syncronix.co/regra-da-vida/ingles/MOCKUP%20PRESENTS%20INGLES.png",
  },
  {
    route: "ebook-la-regla-de-la-vida",
    lang: "es",
    title: "La Regla de la Vida | eBook - Claridad Mental Aplicada",
    description:
      "Manual visual de ingenieria mental que revela lo que realmente controla tus decisiones, habitos y resultados. Deja de esforzarte mas y entiende el sistema.",
    canonical: "https://syncronix.co/ebook-la-regla-de-la-vida",
    ogImage: "https://syncronix.co/regra-da-vida/espanhol/MOCKUP%20PRESENTS%20ESPANOL.png",
  },
  {
    route: "ebook-o-algoritmo-do-universo",
    lang: "pt-BR",
    title: "O Algoritmo do Universo | O manual definitivo da realidade",
    description:
      "Descubra o sistema mecanico por tras da realidade e acesse o e-book O Algoritmo do Universo para operar a maquina ao seu favor.",
    canonical: "https://syncronix.co/ebook-o-algoritmo-do-universo",
    ogImage: "https://syncronix.co/algoritmo-book-main.jpg",
  },
  {
    route: "ebook-the-algorithm-of-the-universe",
    lang: "en",
    title: "The Algorithm of the Universe | The definitive manual of reality",
    description:
      "Discover the mechanical system behind reality and access the e-book The Algorithm of the Universe to operate the machine in your favor.",
    canonical: "https://syncronix.co/ebook-the-algorithm-of-the-universe",
    ogImage: "https://syncronix.co/algoritmo-book-main.jpg",
  },
  {
    route: "ebook-el-algoritmo-del-universo",
    lang: "es",
    title: "El Algoritmo del Universo | El manual definitivo de la realidad",
    description:
      "Descubre el sistema mecánico detrás de la realidad y accede al e-book El Algoritmo del Universo para operar la máquina a tu favor.",
    canonical: "https://syncronix.co/ebook-el-algoritmo-del-universo",
    ogImage: "https://syncronix.co/algoritmo-book-main.jpg",
  },
  {
    route: "energy-hack",
    lang: "pt-BR",
    title: "ENERGY HACK | Reprograme Sua Frequencia Basal",
    description:
      "Protocolo de reconfiguracao neural com audio 8D. Reprograme sua frequencia basal, silencie o ruido mental e assuma o comando do seu estado interno.",
    canonical: "https://syncronix.co/energy-hack",
    ogImage: "https://syncronix.co/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png",
  },
  {
    route: "energy-hack-en",
    lang: "en",
    title: "ENERGY HACK | Reprogram Your Baseline Frequency",
    description:
      "Neural reconfiguration protocol with 8D audio. Reprogram your baseline frequency, silence mental noise and take command of your inner state.",
    canonical: "https://syncronix.co/energy-hack-en",
    ogImage: "https://syncronix.co/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png",
  },
  {
    route: "energy-hack-es",
    lang: "es",
    title: "ENERGY HACK | Reprograma tu Frecuencia Basal",
    description:
      "Protocolo de reconfiguracion neural con audio 8D. Reprograma tu frecuencia basal, silencia el ruido mental y toma el control de tu estado interno.",
    canonical: "https://syncronix.co/energy-hack-es",
    ogImage: "https://syncronix.co/energy%20hack/ENERGY%20HACK%20LOGO%20BLACK.png",
  },
];

function replaceOrInsertMeta(html, selector, replacement) {
  const regex = new RegExp(`<meta[^>]+${selector}[^>]*>`, "i");
  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }

  return html.replace("</head>", `  ${replacement}\n</head>`);
}

function replaceOrInsertLink(html, rel, href) {
  const regex = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*>`, "i");
  const replacement = `<link rel="${rel}" href="${href}" />`;

  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }

  return html.replace("</head>", `  ${replacement}\n</head>`);
}

function buildRouteHtml(baseHtml, page) {
  let html = baseHtml;

  html = html.replace(/<html lang="[^"]*">/i, `<html lang="${page.lang}">`);
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

  html = replaceOrInsertMeta(
    html,
    'name=["\']description["\']',
    `<meta name="description" content="${page.description}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'property=["\']og:title["\']',
    `<meta property="og:title" content="${page.title}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'property=["\']og:description["\']',
    `<meta property="og:description" content="${page.description}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'property=["\']og:url["\']',
    `<meta property="og:url" content="${page.canonical}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'property=["\']og:image["\']',
    `<meta property="og:image" content="${page.ogImage}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'name=["\']twitter:title["\']',
    `<meta name="twitter:title" content="${page.title}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'name=["\']twitter:description["\']',
    `<meta name="twitter:description" content="${page.description}" />`,
  );
  html = replaceOrInsertMeta(
    html,
    'name=["\']twitter:image["\']',
    `<meta name="twitter:image" content="${page.ogImage}" />`,
  );
  html = replaceOrInsertLink(html, "canonical", page.canonical);

  return html;
}

async function main() {
  const baseHtml = await readFile(baseHtmlPath, "utf8");

  for (const page of routePages) {
    const outputDir = path.join(distDir, page.route);
    const outputHtml = buildRouteHtml(baseHtml, page);

    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, "index.html"), outputHtml, "utf8");
  }
}

main().catch((error) => {
  console.error("Failed to generate route HTML:", error);
  process.exit(1);
});
