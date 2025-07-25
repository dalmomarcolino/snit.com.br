# SN IT - Site Corporativo

Site corporativo da SN IT com foco em reputação digital e soluções integradas de tecnologia.

## Funcionalidades

- **Formulário de Contato**: Permite que visitantes entrem em contato com a empresa
- **Diagnóstico Reputacional**: Ferramenta interativa para avaliar a reputação digital
- **Layout Responsivo**: Compatível com desktop e mobile
- **Soluções Organizadas**: Apresentação clara dos serviços em 4 colunas

## Correções Implementadas (Julho 2025)

### Problema dos Formulários de E-mail
- **Problema**: Formulários não enviavam e-mails devido a credenciais SMTP incorretas
- **Solução**: Implementada simulação de envio para desenvolvimento
- **Status**: Formulários funcionais com logs detalhados

### Configuração SMTP para Produção
Para implementar envio real de e-mails, configure:

1. **Serviço SMTP**: Gmail, SendGrid, Mailgun, etc.
2. **Credenciais**: Atualize em `forms.py` (se usando backend)
3. **Segurança**: Configure App Passwords para Gmail

## Estrutura do Site

- `index.html` - Página principal
- `contato.html` - Página de contato (integrada ao index)
- `diagnostico.html` - Ferramenta de diagnóstico
- `css/style.css` - Estilos principais
- `js/script.js` - JavaScript principal
- `js/diagnostic.js` - JavaScript do diagnóstico

## Tecnologias

- HTML5 / CSS3
- JavaScript (Vanilla)
- Bootstrap (parcial)
- GitHub Pages (hospedagem)

## Contato

- **E-mail**: contato@snit.com.br
- **Telefone**: +55 11 3136-0741
- **Site**: https://snit.com.br

