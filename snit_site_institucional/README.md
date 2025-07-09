# Diagnóstico Reputacional SN IT

## Visão Geral

Este é um sistema completo de diagnóstico reputacional desenvolvido para a SN IT, que permite avaliar a maturidade reputacional de empresas através de um questionário interativo e gerar um dashboard visual com recomendações personalizadas.

## Características Principais

### 🎯 Avaliação Completa
- **5 Dimensões de Análise**: Segurança da Informação, Infraestrutura Digital, Gestão de Terceiros, Presença Digital e Resposta a Incidentes
- **15 Perguntas Estratégicas**: 3 perguntas por dimensão, cuidadosamente elaboradas para identificar vulnerabilidades e pontos fortes
- **Sistema de Pontuação Ponderado**: Cada dimensão tem peso específico baseado no impacto reputacional

### 📊 Dashboard Visual Interativo
- **Índice de Maturidade Reputacional**: Pontuação geral de 0-100 com classificação em 5 níveis
- **Gráfico Radar**: Visualização das 5 dimensões para identificar padrões
- **Gauge Chart**: Indicador visual da pontuação geral
- **Análise de Vulnerabilidades**: Identificação automática de pontos críticos
- **Pontos Fortes**: Destaque das áreas de excelência da empresa

### 🎯 Recomendações Personalizadas
- **Banco de Recomendações**: Mais de 60 recomendações específicas organizadas por dimensão e nível de maturidade
- **Priorização Inteligente**: Sistema de prioridades (Alta, Média, Baixa) baseado no impacto
- **Ações Específicas**: Cada recomendação inclui 4 ações práticas para implementação
- **Integração com Parceiros**: Recomendações incluem soluções dos parceiros SN IT (Equinix, Megaport, FWD Computers, Executiva Outsourcing)

### 💼 Geração de Leads
- **Formulário de Contato Integrado**: Modal para agendamento de consulta gratuita
- **Captura de Dados**: Coleta informações da empresa e contato para follow-up
- **Call-to-Action Estratégico**: Posicionamento da SN IT como solução para os problemas identificados

## Estrutura Técnica

### Arquivos Principais
```
snit_diagnostico_web/
├── index.html          # Página principal com formulário e dashboard
├── css/
│   └── style.css       # Estilos responsivos e animações
├── js/
│   └── script.js       # Lógica do diagnóstico e visualizações
└── images/             # Pasta para imagens e logos
```

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com animações e transições
- **JavaScript ES6**: Lógica de negócio e interatividade
- **Chart.js**: Biblioteca para gráficos interativos
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia moderna (Inter)

## Sistema de Pontuação

### Dimensões e Pesos
1. **Segurança da Informação** (25%)
2. **Infraestrutura Digital** (25%)
3. **Gestão de Terceiros** (20%)
4. **Presença Digital** (15%)
5. **Resposta a Incidentes** (15%)

### Níveis de Maturidade
- **Crítico** (0-40): Vulnerabilidades graves que exigem ação imediata
- **Básico** (41-60): Controles fundamentais com lacunas importantes
- **Adequado** (61-75): Nível satisfatório com oportunidades de melhoria
- **Avançado** (76-90): Práticas sólidas acima da média do mercado
- **Excelente** (91-100): Referência em gestão reputacional

## Banco de Recomendações

### Estrutura por Dimensão
Cada dimensão possui 3 níveis de recomendações:
- **Baixa Maturidade**: Foco em implementação de controles básicos
- **Média Maturidade**: Aprimoramento e otimização de processos existentes
- **Alta Maturidade**: Inovação e manutenção da liderança

### Integração com Parceiros SN IT
- **FWD Computers**: Soluções de segurança da informação
- **Equinix**: Infraestrutura de data centers
- **Megaport**: Conectividade dedicada
- **Executiva Outsourcing**: Gestão de terceiros e due diligence

## Como Implementar

### 1. Hospedagem
- Faça upload dos arquivos para seu servidor web
- Certifique-se de que o servidor suporte HTML5, CSS3 e JavaScript
- Configure HTTPS para segurança (recomendado)

### 2. Personalização
- Edite as informações de contato no arquivo `index.html`
- Ajuste as cores da marca no arquivo `css/style.css`
- Personalize as recomendações no arquivo `js/script.js`

### 3. Integração com CRM
- Configure webhooks para enviar dados para o Zoho CRM
- Implemente Google Analytics para acompanhar conversões
- Configure Google Tag Manager para eventos personalizados

### 4. Testes
- Teste em diferentes dispositivos e navegadores
- Valide o formulário com dados reais
- Verifique a responsividade em mobile

## Fluxo de Uso

### Para o Cliente
1. **Acesso**: Cliente acessa o link do diagnóstico
2. **Preenchimento**: Responde 15 perguntas em 5 minutos
3. **Resultado**: Visualiza dashboard com análise completa
4. **Ação**: Agenda consulta gratuita com a SN IT

### Para a SN IT
1. **Captura**: Recebe dados do cliente automaticamente
2. **Análise**: Revisa resultados do diagnóstico
3. **Preparação**: Prepara proposta baseada nas vulnerabilidades identificadas
4. **Apresentação**: Usa o dashboard como ferramenta de vendas

## Benefícios para a SN IT

### 🎯 Geração de Leads Qualificados
- Clientes que completam o diagnóstico demonstram interesse real
- Dados coletados permitem personalização da abordagem
- Dashboard serve como ferramenta de apresentação

### 💡 Posicionamento como Especialista
- Demonstra conhecimento técnico e metodologia estruturada
- Cria percepção de valor antes mesmo da venda
- Diferencia a SN IT da concorrência

### ⚡ Eficiência no Processo de Vendas
- Reduz tempo de qualificação de prospects
- Fornece base técnica para propostas
- Facilita demonstração de ROI das soluções

### 📈 Escalabilidade
- Processo automatizado que funciona 24/7
- Pode ser usado em campanhas de marketing digital
- Facilita expansão para novos mercados

## Próximos Passos

1. **Implementação**: Hospedar o diagnóstico no domínio snit.com.br
2. **Integração**: Conectar com Zoho CRM para automação
3. **Marketing**: Criar campanhas para divulgar o diagnóstico gratuito
4. **Otimização**: Analisar dados e refinar recomendações
5. **Expansão**: Criar versões específicas por setor

## Suporte e Manutenção

- **Atualizações**: Revisar recomendações trimestralmente
- **Melhorias**: Adicionar novas funcionalidades baseadas no feedback
- **Monitoramento**: Acompanhar taxa de conversão e otimizar
- **Backup**: Manter backup regular dos dados coletados

---

**Desenvolvido para SN IT - Protegendo e fortalecendo a reputação digital das empresas**

