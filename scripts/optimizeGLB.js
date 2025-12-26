import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = "C:/Users/User/Desktop/syncronix-flux-main/public/_1019221926_texture.glb";
const outputPath = "C:/Users/User/Desktop/syncronix-flux-main/public/model_optimized.glb";

function getFileSizeInKB(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return (stats.size / 1024).toFixed(2);
    } catch (error) {
        return 0;
    }
}

function optimizeGLB() {
    console.log('🔄 Iniciando otimização do arquivo GLB...');
    
    const originalSize = getFileSizeInKB(inputPath);
    console.log(`📁 Tamanho original: ${originalSize} KB`);

    const command = `gltfpack -i "${inputPath}" -o "${outputPath}" -cc -kn -km -si 1024 -vp 14`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('❌ Erro durante a otimização:', error);
            return;
        }

        if (stderr) {
            console.log('⚠️ Avisos:', stderr);
        }

        const optimizedSize = getFileSizeInKB(outputPath);
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`📁 Tamanho original: ${originalSize} KB`);
        console.log(`📁 Tamanho final: ${optimizedSize} KB`);
        console.log(`📉 Percentual de redução: ${reduction}%`);
        console.log('✅ GLB otimizado com sucesso e pronto para uso no site.');
        
        // Chamar função para inserir o modelo na Hero section
        insertModelInHero();
    });
}

function insertModelInHero() {
    console.log('🔄 Inserindo modelo 3D na seção Hero...');
    
    const heroFilePath = path.join(__dirname, '../src/components/syncronix/Hero.tsx');
    const indexHtmlPath = path.join(__dirname, '../index.html');
    
    try {
        // Primeiro, adicionar o script do model-viewer no index.html
        let indexContent = fs.readFileSync(indexHtmlPath, 'utf8');
        
        if (!indexContent.includes('@google/model-viewer')) {
            const scriptTag = '    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>\n';
            indexContent = indexContent.replace(
                '</head>',
                `${scriptTag}  </head>`
            );
            fs.writeFileSync(indexHtmlPath, indexContent);
            console.log('✅ Script do model-viewer adicionado ao index.html');
        }
        
        // Agora modificar o componente Hero
        let heroContent = fs.readFileSync(heroFilePath, 'utf8');
        
        // Código JSX do model-viewer para inserir
        const modelViewerJSX = `        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <model-viewer
            src="/model_optimized.glb"
            alt="Modelo 3D Syncronix"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="20deg"
            exposure="1"
            environment-image="neutral"
            shadow-intensity="0.2"
            disable-zoom
            camera-controls={false}
            interaction-prompt="none"
            style={{
              width: '100%',
              maxWidth: '560px',
              aspectRatio: '4 / 3',
              background: 'transparent',
              display: 'block',
              margin: '0 auto',
              pointerEvents: 'none'
            }}
          />
        </motion.div>
`;

        // Procurar pelo título h1 e inserir o modelo após ele
        const h1Regex = /(<motion\.h1[^>]*>[\s\S]*?<\/motion\.h1>)/;
        if (h1Regex.test(heroContent)) {
            heroContent = heroContent.replace(h1Regex, `$1${modelViewerJSX}`);
            fs.writeFileSync(heroFilePath, heroContent);
            console.log('✅ Modelo 3D inserido com sucesso na seção Hero!');
        } else {
            console.log('⚠️ Título H1 não encontrado no Hero. Verifique o arquivo manualmente.');
        }
    } catch (error) {
        console.error('❌ Erro ao inserir modelo na Hero:', error.message);
    }
}

// Executar otimização
optimizeGLB();