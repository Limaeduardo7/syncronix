import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const baseHtmlPath = path.join(distDir, "index.html");

const routePages = [
  {
    route: "ebook-o-algoritmo-do-universo",
    lang: "pt-BR",
    title: "O Algoritmo do Universo | O manual definitivo da realidade",
    description:
      "Descubra o sistema mecanico por tras da realidade e acesse o e-book O Algoritmo do Universo para operar a maquina ao seu favor.",
    canonical: "https://syncronix.co/ebook-o-algoritmo-do-universo",
    ogImage: "https://syncronix.co/algoritmo-book-main.jpg",
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
