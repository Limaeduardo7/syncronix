/**
 * Script de Deploy Manual via FTP
 *
 * Faz upload incremental apenas dos arquivos modificados para o servidor Hostinger
 *
 * Uso: npm run deploy
 */

const FtpDeploy = require('ftp-deploy');
const path = require('path');

// Configurações (sobrescritas por variáveis de ambiente)
const config = {
  user: process.env.FTP_USERNAME || 'seu_usuario_ftp',
  password: process.env.FTP_PASSWORD || 'sua_senha_ftp',
  host: process.env.FTP_SERVER || 'ftp.seudominio.com',
  port: process.env.FTP_PORT || 21,
  localRoot: path.join(__dirname, '../dist'),
  remoteRoot: process.env.FTP_REMOTE_ROOT || '/public_html/',
  include: ['*', '**/*'],
  exclude: [
    '**/.git*',
    '**/.git*/**',
    '**/node_modules/**',
    '**/.DS_Store'
  ],
  deleteRemote: false, // Não deletar arquivos remotos (segurança)
  forcePasv: true, // Usar modo passivo (necessário para alguns servidores)
  sftp: false
};

const ftpDeploy = new FtpDeploy();

console.log('\n🚀 SYNCRONIX Deploy Manual - Hostinger FTP\n');
console.log('📦 Preparando deploy...\n');

// Event listeners para feedback
ftpDeploy.on('uploading', (data) => {
  const percentage = ((data.transferredFileCount / data.totalFilesCount) * 100).toFixed(1);
  console.log(`⬆️  [${percentage}%] ${data.filename}`);
});

ftpDeploy.on('uploaded', (data) => {
  console.log(`✅ Upload completo: ${data.filename}`);
});

ftpDeploy.on('log', (data) => {
  console.log(`ℹ️  ${data}`);
});

ftpDeploy.on('upload-error', (data) => {
  console.error(`❌ Erro no upload: ${data.err}`);
});

// Executar deploy
ftpDeploy
  .deploy(config)
  .then((res) => {
    console.log('\n✅ Deploy concluído com sucesso!');
    console.log(`📊 Total de arquivos enviados: ${res.length}`);
    console.log('\n🌐 Seu site está atualizado em:', config.host);
  })
  .catch((err) => {
    console.error('\n❌ Erro no deploy:', err);
    process.exit(1);
  });
