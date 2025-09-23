# Tutorial Completo: Configuração do Discord Developer Portal para Embedded Apps

## Visão Geral
Este tutorial explica como configurar corretamente o Discord Developer Portal para hospedar aplicações embedded, incluindo jogos Atari 2600 com emulador Javatari.

## Pré-requisitos
- Conta no Discord Developer Portal
- Site hospedado com HTTPS
- Aplicação Discord criada

## Passo 1: Acessar o Discord Developer Portal

1. Acesse: https://discord.com/developers/applications
2. Faça login com sua conta Discord
3. Selecione sua aplicação existente ou clique em "New Application"

## Passo 2: Configurações Básicas da Aplicação

### 2.1 General Information
- **Name**: Nome da sua aplicação
- **Description**: Descrição clara do que a aplicação faz
- **Icon**: Logo/ícone da aplicação (512x512px recomendado)
- **Tags**: Adicione tags relevantes (ex: "game", "retro", "atari")

### 2.2 Application ID
- Anote o **Application ID** - você precisará dele

## Passo 3: Configurar URL Mappings (CRÍTICO)

### 3.1 Acessar URL Mappings
1. No menu lateral, clique em **"URL Mappings"**
2. Esta seção é ESSENCIAL para aplicações embedded

### 3.2 Configurar Mappings Principais

Adicione os seguintes mappings (clique em "Add Mapping" para cada um):

#### Mapping 1: Página Principal do Jogo
- **Prefix**: `/activities/gatonho`
- **Target**: `https://seusite.com/activities/gatonho.html`
- **Description**: "Página principal do jogo Gatonho"

#### Mapping 2: Assets de Imagens
- **Prefix**: `/assets/images`
- **Target**: `https://seusite.com/assets/images`
- **Description**: "Recursos de imagem do site"

#### Mapping 3: ROMs do Atari
- **Prefix**: `/assets/roms`
- **Target**: `https://seusite.com/assets/roms`
- **Description**: "Arquivos ROM do Atari 2600"

#### Mapping 4: Scripts JavaScript
- **Prefix**: `/assets/scripts`
- **Target**: `https://seusite.com/assets/scripts`
- **Description**: "Scripts JavaScript do site"

#### Mapping 5: Estilos CSS
- **Prefix**: `/assets/css`
- **Target**: `https://seusite.com/assets/css`
- **Description**: "Arquivos de estilo CSS"

#### Mapping 6: Emulador Javatari
- **Prefix**: `/javatari.js`
- **Target**: `https://seusite.com/javatari.js`
- **Description**: "Emulador Javatari JavaScript"

### 3.3 Exemplo de Configuração Completa
```
/activities/gatonho → https://seusite.com/activities/gatonho.html
/assets/images → https://seusite.com/assets/images
/assets/roms → https://seusite.com/assets/roms
/assets/scripts → https://seusite.com/assets/scripts
/assets/css → https://seusite.com/assets/css
/javatari.js → https://seusite.com/javatari.js
```

## Passo 4: Configurar OAuth2

### 4.1 OAuth2 General
1. Vá para **"OAuth2"** → **"General"**
2. Em **"Redirects"**, adicione:
   - `https://seusite.com/activities/gatonho.html`
   - `https://discord.com/oauth2/authorized`

### 4.2 OAuth2 URL Generator
1. Vá para **"OAuth2"** → **"URL Generator"**
2. **Scopes**: Selecione `applications.commands`
3. **Permissions**: Selecione as permissões necessárias
4. Copie a URL gerada para adicionar o bot ao servidor

## Passo 5: Configurar Activities (Embedded Apps)

### 5.1 Ativar Activities
1. Vá para **"Activities"** no menu lateral
2. Se não estiver visível, verifique se sua aplicação tem as permissões corretas

### 5.2 Configurações de Activity
- **Activity Name**: "Gatonho - Atari 2600"
- **Activity Description**: "Jogue Gatonho, um clássico jogo Atari 2600"
- **Activity URL**: `/activities/gatonho` (usa o mapping configurado)
- **Supported Platforms**: Selecione Desktop e Mobile

## Passo 6: Configurações de Segurança

### 6.1 CORS Headers
Seu servidor deve retornar os headers:
```
Access-Control-Allow-Origin: https://discord.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

### 6.2 Content Security Policy
Adicione ao seu HTML:
```html
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self' https://discord.com https://*.discord.com;">
```

## Passo 7: Testar a Configuração

### 7.1 Teste Local
1. Use a URL de desenvolvimento do Discord
2. Verifique se todos os recursos carregam corretamente

### 7.2 Teste em Servidor
1. Adicione a aplicação a um servidor Discord
2. Teste a activity em um canal de voz
3. Verifique se a ROM carrega corretamente

## Troubleshooting Comum

### Problema: ROM não carrega no Discord
**Solução**: 
- Verifique se o mapping `/assets/roms` está correto
- Confirme que a URL absoluta está sendo usada no código
- Teste o acesso direto à ROM: `https://seusite.com/assets/roms/gatonho.bin`

### Problema: Recursos CSS/JS não carregam
**Solução**:
- Adicione mappings para todos os recursos estáticos
- Verifique os headers CORS
- Confirme que os caminhos estão corretos

### Problema: Activity não aparece no Discord
**Solução**:
- Verifique se a aplicação foi adicionada ao servidor
- Confirme que as permissões estão corretas
- Teste em um canal de voz (não texto)

## Checklist Final

- [ ] Application criada no Discord Developer Portal
- [ ] URL Mappings configurados para todos os recursos
- [ ] OAuth2 redirects configurados
- [ ] Activities configuradas
- [ ] CORS headers implementados
- [ ] CSP headers adicionados
- [ ] URLs absolutas implementadas no código
- [ ] Teste realizado em servidor Discord

## URLs Importantes

- Discord Developer Portal: https://discord.com/developers/applications
- Documentação Activities: https://discord.com/developers/docs/activities/overview
- Documentação URL Mappings: https://discord.com/developers/docs/activities/development-guides#url-mappings

## Suporte

Se ainda houver problemas:
1. Verifique os logs do navegador (F12)
2. Teste cada URL mapping individualmente
3. Confirme que o site está acessível via HTTPS
4. Verifique se não há bloqueios de firewall

---

**Nota**: Substitua `seusite.com` pela URL real do seu site hospedado.