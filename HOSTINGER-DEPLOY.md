# Guia de Deploy na Hostinger

## ✅ Arquivos Preparados para Hostinger

O build está pronto com todas as configurações necessárias para a Hostinger:

### Arquivos de Configuração Incluídos:

1. **`.htaccess`** - Configuração Apache com:
   - Redirecionamento de todas as rotas para `index.html`
   - Cache otimizado para assets estáticos
   - Compressão GZIP
   - Proteção de segurança

2. **`404.html`** - Fallback para servidores que não respeitam `.htaccess`

3. **`_redirects`** - Alternativa para servidores modernos

## 📦 Passos para Deploy na Hostinger

### Opção 1: Upload via File Manager (Recomendado)

1. **Acesse o hPanel da Hostinger**
   - Entre em sua conta Hostinger
   - Vá para o painel de controle (hPanel)

2. **Abra o File Manager**
   - Clique em "File Manager" no hPanel
   - Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)

3. **Limpe a pasta (se necessário)**
   - Se houver arquivos antigos, delete-os primeiro
   - **IMPORTANTE:** Não delete `.htaccess` se houver configurações importantes

4. **Faça upload do conteúdo do dist**
   - Selecione **TODOS** os arquivos e pastas dentro da pasta `dist/`
   - **NÃO** faça upload da pasta `dist` em si, apenas seu conteúdo
   - Clique em "Upload" e selecione os arquivos
   - Aguarde o upload completar

5. **Verifique os arquivos importantes**
   - Certifique-se que `.htaccess` está na raiz
   - Certifique-se que `404.html` está na raiz
   - Certifique-se que `index.html` está na raiz

### Opção 2: Upload via FTP

1. **Obtenha as credenciais FTP**
   - No hPanel, vá para "FTP Accounts"
   - Anote o hostname, username e senha

2. **Use um cliente FTP (FileZilla recomendado)**
   - Host: `ftp.seudominio.com` (ou o fornecido pela Hostinger)
   - Username: seu username FTP
   - Password: sua senha FTP
   - Port: 21

3. **Faça upload**
   - Navegue até `public_html` no servidor
   - Selecione TODOS os arquivos dentro de `dist/`
   - Arraste para a pasta `public_html`

## 🔍 Verificação Pós-Deploy

1. **Teste a página principal**
   - Acesse `https://seudominio.com`
   - Deve carregar normalmente

2. **Teste as rotas do ebook**
   - `https://seudominio.com/ebook-a-regra-da-vida`
   - `https://seudominio.com/ebook-the-rule-of-life`
   - `https://seudominio.com/ebook-la-regla-de-la-vida`

3. **Teste outras rotas**
   - `https://seudominio.com/ebook-a-chave-do-poder`
   - `https://seudominio.com/livro-fisico`

## ⚠️ Troubleshooting

### Se as rotas não funcionarem:

1. **Verifique se o `.htaccess` está na raiz**
   ```
   public_html/
   ├── .htaccess  ← DEVE ESTAR AQUI
   ├── index.html
   ├── 404.html
   └── assets/
   ```

2. **Verifique as permissões do `.htaccess`**
   - No File Manager, clique com botão direito em `.htaccess`
   - "Change Permissions"
   - Defina como `644` (rw-r--r--)

3. **Limpe o cache do navegador**
   - Pressione `Ctrl + Shift + Delete`
   - Limpe cache e cookies
   - Ou teste em modo anônimo/privado

4. **Verifique se mod_rewrite está habilitado**
   - Entre em contato com suporte Hostinger
   - Peça para verificar se `mod_rewrite` está ativo
   - (Normalmente já vem ativado por padrão)

### Se ainda não funcionar:

O arquivo `404.html` serve como fallback:
- Ele captura URLs não encontradas
- Redireciona automaticamente para a página correta
- Funciona mesmo sem `.htaccess`

## 🎯 Estrutura Final no Servidor

```
public_html/
├── .htaccess
├── 404.html
├── _redirects
├── index.html
├── favicon.ico
├── HEXACRONIX-ADESIVO-300x300.webp
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   ├── js/
│   └── [outros arquivos]
├── regra-da-vida/
│   └── [imagens do ebook]
├── fisico/
│   └── [arquivos do livro físico]
└── [outros arquivos públicos]
```

## ✨ Bônus: Cache e Performance

O `.htaccess` já está configurado com:
- ✅ Cache de 7 dias para imagens e assets
- ✅ Sem cache para HTML (sempre atualizado)
- ✅ Compressão GZIP automática
- ✅ Segurança contra directory browsing

## 📞 Suporte

Se tiver problemas:
1. Verifique o console do navegador (F12) para erros
2. Teste a URL diretamente: `seudominio.com/ebook-a-regra-da-vida`
3. Se necessário, entre em contato com suporte da Hostinger

---

**Última atualização:** 04/01/2026
**Configuração testada para:** Hostinger Shared Hosting
