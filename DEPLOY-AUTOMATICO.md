# 🚀 Deploy Automático - Hostinger

Este documento explica como configurar o sistema de deploy automático incremental para o site SYNCRONIX na Hostinger.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Configuração Inicial](#configuração-inicial)
- [Deploy Automático (GitHub Actions)](#deploy-automático-github-actions)
- [Deploy Manual (Script Local)](#deploy-manual-script-local)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

### Problema Resolvido

**Antes:**
- ❌ Upload manual de 228 MB a cada mudança
- ❌ Tempo: 5-15 minutos por deploy
- ❌ Processo manual e propenso a erros

**Depois:**
- ✅ Upload automático apenas dos arquivos modificados (~500 KB - 2 MB)
- ✅ Tempo: 10-30 segundos
- ✅ Deploy automático com `git push`
- ✅ Redução de 95-99% no tempo e tamanho do deploy

### Como Funciona

1. Você faz alterações no código e commita
2. Faz `git push origin main`
3. GitHub Actions detecta o push
4. Executa o build automaticamente
5. Compara arquivos novos vs remotos
6. Faz upload VIA FTP apenas dos arquivos alterados
7. Site atualizado em segundos! 🎉

---

## ⚙️ Configuração Inicial

### 1. Obter Credenciais FTP da Hostinger

1. Acesse o painel da Hostinger: https://hpanel.hostinger.com
2. Vá em **Arquivos** → **Gerenciador de Arquivos** ou **FTP**
3. Anote as seguintes informações:
   - **Servidor FTP**: geralmente `ftp.seudominio.com`
   - **Usuário FTP**: seu usuário (ex: `u123456789`)
   - **Senha FTP**: sua senha
   - **Porta**: `21` (padrão)

### 2. Configurar Segredos no GitHub

1. Vá para o repositório no GitHub: https://github.com/Limaeduardo7/syncronix
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Secrets and variables** → **Actions**
4. Clique em **New repository secret** e adicione os 3 segredos:

#### Secret 1: FTP_SERVER
- **Name:** `FTP_SERVER`
- **Value:** `ftp.syncronix.co` (ou seu servidor FTP)

#### Secret 2: FTP_USERNAME
- **Name:** `FTP_USERNAME`
- **Value:** Seu usuário FTP (ex: `u123456789`)

#### Secret 3: FTP_PASSWORD
- **Name:** `FTP_PASSWORD`
- **Value:** Sua senha FTP

**⚠️ IMPORTANTE:** Nunca commite as credenciais FTP no código!

---

## 🤖 Deploy Automático (GitHub Actions)

### Uso Normal

Depois de configurar os segredos, o deploy é automático:

```bash
# 1. Faça suas alterações
git add .
git commit -m "feat: atualiza página X"

# 2. Push para o GitHub
git push origin main

# 3. Pronto! O GitHub Actions vai fazer o deploy automaticamente
```

### Monitorar Deploy

1. Vá para o repositório no GitHub
2. Clique na aba **Actions**
3. Você verá o workflow "Deploy to Hostinger" executando
4. Clique no workflow para ver os logs em tempo real

### Deploy Manual via Interface

Se quiser fazer deploy sem fazer push:

1. Vá para **Actions** no GitHub
2. Selecione "Deploy to Hostinger"
3. Clique em **Run workflow**
4. Selecione a branch `main`
5. Clique em **Run workflow**

---

## 💻 Deploy Manual (Script Local)

Se preferir fazer deploy do seu computador sem GitHub Actions:

### 1. Instalar Dependência

```bash
npm install ftp-deploy --save-dev
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (não commitar este arquivo!):

```env
FTP_SERVER=ftp.syncronix.co
FTP_USERNAME=seu_usuario_ftp
FTP_PASSWORD=sua_senha_ftp
FTP_REMOTE_ROOT=/public_html/
```

Adicione `.env` ao `.gitignore`:

```gitignore
.env
.env.local
```

### 3. Executar Deploy Manual

```bash
# Deploy completo (build + upload)
npm run deploy

# Apenas upload (se já tiver feito build)
npm run deploy:manual
```

O script vai:
1. Fazer build do projeto (se usar `npm run deploy`)
2. Conectar ao FTP da Hostinger
3. Comparar arquivos locais vs remotos
4. Fazer upload apenas dos modificados
5. Mostrar progresso em tempo real

---

## 🔧 Troubleshooting

### Erro: "Permission denied"

**Problema:** GitHub Actions não consegue conectar ao FTP

**Solução:**
1. Verifique se os segredos estão configurados corretamente
2. Teste as credenciais manualmente via FileZilla
3. Verifique se o IP do GitHub não está bloqueado na Hostinger

### Erro: "Could not connect to server"

**Problema:** Servidor FTP não responde

**Solução:**
1. Verifique se o servidor FTP está correto (`ftp.seudominio.com`)
2. Tente usar o IP direto ao invés do domínio
3. Verifique se a porta é 21
4. Na Hostinger, vá em Arquivos → FTP e confira as credenciais

### Deploy Lento

**Problema:** Upload está demorando muito

**Solução:**
1. Verifique se apenas arquivos modificados estão sendo enviados (veja logs)
2. Verifique sua conexão com internet
3. Tente fazer deploy em horário de menor tráfego

### Arquivos Não Atualizam no Site

**Problema:** Deploy foi bem-sucedido mas site não atualizou

**Solução:**
1. Limpe cache do navegador (Ctrl+Shift+Delete)
2. Tente em aba anônima
3. Verifique se o `.htaccess` está no servidor
4. Aguarde 1-2 minutos para propagação

### Script Local Não Funciona

**Problema:** `npm run deploy` dá erro

**Solução:**
1. Instale a dependência: `npm install ftp-deploy --save-dev`
2. Verifique se o arquivo `.env` existe e está configurado
3. Verifique se o arquivo `scripts/deploy-ftp.js` existe
4. Rode `npm run build` separadamente para ver se o build funciona

---

## 📁 Estrutura de Arquivos

```
syncronix-flux-main/
├── .github/
│   └── workflows/
│       └── deploy-hostinger.yml    # Workflow do GitHub Actions
├── scripts/
│   └── deploy-ftp.js               # Script de deploy manual
├── .gitignore                       # Exclui dist/ e .env
├── package.json                     # Scripts: deploy, deploy:manual
└── DEPLOY-AUTOMATICO.md            # Esta documentação
```

---

## ✅ Checklist de Configuração

- [ ] Credenciais FTP obtidas da Hostinger
- [ ] Segredos configurados no GitHub (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Workflow `.github/workflows/deploy-hostinger.yml` criado
- [ ] `.gitignore` atualizado (dist/ e .env)
- [ ] Primeiro deploy testado e funcionando
- [ ] Site acessível e funcionando corretamente

---

## 🎉 Pronto!

Agora você tem deploy automático configurado! A cada `git push`, seu site será atualizado automaticamente em segundos.

**Dúvidas?** Consulte os logs no GitHub Actions ou teste o deploy manual primeiro.

---

**Última atualização:** 14 de Janeiro de 2026
