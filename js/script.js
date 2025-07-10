// Configurações e dados do diagnóstico
const diagnosticConfig = {
    dimensions: {
        security: {
            name: 'Segurança da Informação',
            questions: ['security1', 'security2', 'security3'],
            weight: 0.25,
            color: '#e53e3e'
        },
        infrastructure: {
            name: 'Infraestrutura Digital',
            questions: ['infrastructure1', 'infrastructure2', 'infrastructure3'],
            weight: 0.25,
            color: '#3182ce'
        },
        vendors: {
            name: 'Gestão de Terceiros',
            questions: ['vendors1', 'vendors2', 'vendors3'],
            weight: 0.20,
            color: '#38a169'
        },
        digital: {
            name: 'Presença Digital',
            questions: ['digital1', 'digital2', 'digital3'],
            weight: 0.15,
            color: '#d69e2e'
        },
        incident: {
            name: 'Resposta a Incidentes',
            questions: ['incident1', 'incident2', 'incident3'],
            weight: 0.15,
            color: '#805ad5'
        }
    },
    
    maturityLevels: {
        critical: { min: 0, max: 40, label: 'Crítico', description: 'Vulnerabilidades graves que exigem ação imediata', color: '#e53e3e' },
        basic: { min: 41, max: 60, label: 'Básico', description: 'Controles fundamentais implementados, mas com lacunas importantes', color: '#dd6b20' },
        adequate: { min: 61, max: 75, label: 'Adequado', description: 'Nível satisfatório para o mercado, com oportunidades de melhoria', color: '#d69e2e' },
        advanced: { min: 76, max: 90, label: 'Avançado', description: 'Práticas sólidas que superam a média do mercado', color: '#38a169' },
        excellent: { min: 91, max: 100, label: 'Excelente', description: 'Referência em gestão reputacional', color: '#2d5aa0' }
    }
};

// Banco de recomendações
const recommendationsBank = {
    security: {
        low: {
            title: 'Implementação de Controles de Segurança Básicos',
            description: 'Estabelecer fundamentos sólidos de segurança da informação com foco em proteção de dados e prevenção de incidentes.',
            priority: 'high',
            icon: 'shield-alt',
            actions: [
                'Implementar firewall de nova geração com FWD Computers',
                'Estabelecer políticas de segurança da informação',
                'Configurar backup automatizado e seguro',
                'Treinar equipe em conscientização de segurança'
            ]
        },
        medium: {
            title: 'Fortalecimento da Postura de Segurança',
            description: 'Aprimorar controles existentes e implementar monitoramento proativo para detecção de ameaças.',
            priority: 'medium',
            icon: 'lock',
            actions: [
                'Implementar SIEM para monitoramento 24/7',
                'Realizar testes de penetração regulares',
                'Estabelecer centro de operações de segurança',
                'Implementar autenticação multifator'
            ]
        },
        high: {
            title: 'Otimização e Automação de Segurança',
            description: 'Implementar tecnologias avançadas e automação para manter a liderança em segurança.',
            priority: 'low',
            icon: 'robot',
            actions: [
                'Implementar inteligência artificial para detecção de ameaças',
                'Automatizar resposta a incidentes',
                'Estabelecer programa de bug bounty',
                'Certificações de segurança avançadas'
            ]
        }
    },
    infrastructure: {
        low: {
            title: 'Modernização da Infraestrutura Digital',
            description: 'Migrar para infraestrutura moderna e confiável que suporte o crescimento do negócio.',
            priority: 'high',
            icon: 'server',
            actions: [
                'Migração para data centers Equinix',
                'Implementar conectividade dedicada Megaport',
                'Estabelecer arquitetura de alta disponibilidade',
                'Implementar monitoramento de infraestrutura'
            ]
        },
        medium: {
            title: 'Otimização de Performance e Escalabilidade',
            description: 'Aprimorar performance e preparar infraestrutura para crescimento acelerado.',
            priority: 'medium',
            icon: 'tachometer-alt',
            actions: [
                'Implementar CDN global',
                'Otimizar arquitetura para auto-scaling',
                'Estabelecer múltiplas zonas de disponibilidade',
                'Implementar cache distribuído'
            ]
        },
        high: {
            title: 'Infraestrutura de Classe Mundial',
            description: 'Manter e expandir infraestrutura de referência no mercado.',
            priority: 'low',
            icon: 'globe',
            actions: [
                'Expandir presença global',
                'Implementar edge computing',
                'Otimizar custos com IA',
                'Estabelecer parcerias estratégicas'
            ]
        }
    },
    vendors: {
        low: {
            title: 'Estruturação da Gestão de Terceiros',
            description: 'Implementar processos estruturados para seleção, contratação e monitoramento de fornecedores.',
            priority: 'high',
            icon: 'handshake',
            actions: [
                'Implementar due diligence com Executiva Outsourcing',
                'Estabelecer critérios de seleção de fornecedores',
                'Criar contratos com SLAs definidos',
                'Implementar processo de homologação'
            ]
        },
        medium: {
            title: 'Monitoramento e Otimização de Fornecedores',
            description: 'Aprimorar monitoramento contínuo e otimizar relacionamento com fornecedores estratégicos.',
            priority: 'medium',
            icon: 'chart-line',
            actions: [
                'Implementar dashboard de performance de fornecedores',
                'Estabelecer programa de desenvolvimento de fornecedores',
                'Criar métricas de risco reputacional',
                'Implementar auditoria regular'
            ]
        },
        high: {
            title: 'Excelência em Gestão de Terceiros',
            description: 'Manter programa de classe mundial para gestão de fornecedores e parceiros.',
            priority: 'low',
            icon: 'award',
            actions: [
                'Implementar IA para análise preditiva de riscos',
                'Estabelecer programa de inovação colaborativa',
                'Criar marketplace interno de fornecedores',
                'Liderar iniciativas setoriais'
            ]
        }
    },
    digital: {
        low: {
            title: 'Estabelecimento da Presença Digital',
            description: 'Criar presença digital consistente e profissional em todos os canais relevantes.',
            priority: 'medium',
            icon: 'globe',
            actions: [
                'Desenvolver website institucional moderno',
                'Estabelecer presença em redes sociais profissionais',
                'Implementar estratégia de conteúdo',
                'Configurar monitoramento de menções'
            ]
        },
        medium: {
            title: 'Otimização do Engajamento Digital',
            description: 'Aprimorar estratégia digital para aumentar engajamento e construir autoridade no mercado.',
            priority: 'medium',
            icon: 'users',
            actions: [
                'Implementar marketing de conteúdo avançado',
                'Estabelecer programa de thought leadership',
                'Otimizar SEO e presença orgânica',
                'Criar comunidade de clientes'
            ]
        },
        high: {
            title: 'Liderança Digital no Setor',
            description: 'Manter posição de liderança digital e inovar em experiência do cliente.',
            priority: 'low',
            icon: 'crown',
            actions: [
                'Implementar experiências digitais inovadoras',
                'Liderar tendências do setor',
                'Estabelecer parcerias digitais estratégicas',
                'Criar plataforma de advocacy'
            ]
        }
    },
    incident: {
        low: {
            title: 'Implementação de Gestão de Crises',
            description: 'Estabelecer capacidade básica para responder a incidentes e proteger a reputação.',
            priority: 'high',
            icon: 'exclamation-triangle',
            actions: [
                'Criar plano de gestão de crises',
                'Estabelecer equipe de resposta a incidentes',
                'Implementar sistema de comunicação de emergência',
                'Treinar porta-vozes da empresa'
            ]
        },
        medium: {
            title: 'Aprimoramento da Resposta a Incidentes',
            description: 'Fortalecer capacidade de resposta e implementar monitoramento proativo.',
            priority: 'medium',
            icon: 'first-aid',
            actions: [
                'Implementar centro de comando para crises',
                'Estabelecer simulações regulares',
                'Criar playbooks específicos por tipo de crise',
                'Implementar monitoramento de sinais de alerta'
            ]
        },
        high: {
            title: 'Excelência em Gestão de Crises',
            description: 'Manter capacidade de resposta de classe mundial e liderança em resiliência.',
            priority: 'low',
            icon: 'medal',
            actions: [
                'Implementar IA para detecção precoce de crises',
                'Estabelecer centro de excelência em resiliência',
                'Liderar iniciativas setoriais de preparação',
                'Criar programa de mentoria em gestão de crises'
            ]
        }
    }
};

// Variáveis globais
let diagnosticResults = {};
let charts = {};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnostic-form');
    form.addEventListener('submit', handleFormSubmit);
    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactSubmit);
});

// Função principal para processar o formulário
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Coletar dados do formulário
    const formData = new FormData(event.target);
    const responses = {};
    
    for (let [key, value] of formData.entries()) {
        responses[key] = value;
    }
    
    // Validar se todas as perguntas foram respondidas
    if (!validateResponses(responses)) {
        alert('Por favor, responda todas as perguntas antes de continuar.');
        return;
    }
    
    // Calcular resultados
    diagnosticResults = calculateResults(responses);
    
    // Exibir dashboard
    displayResults(diagnosticResults);
    
    // Scroll para resultados
    document.getElementById('results-dashboard').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Validar respostas
function validateResponses(responses) {
    const requiredQuestions = [];
    
    // Adicionar todas as perguntas obrigatórias
    Object.values(diagnosticConfig.dimensions).forEach(dimension => {
        requiredQuestions.push(...dimension.questions);
    });
    
    // Verificar se todas foram respondidas
    for (let question of requiredQuestions) {
        if (!responses[question]) {
            return false;
        }
    }
    
    return true;
}

// Calcular resultados do diagnóstico
function calculateResults(responses) {
    const results = {
        company: {
            name: responses.companyName,
            sector: responses.companySector,
            size: responses.companySize,
            email: responses.contactEmail
        },
        dimensions: {},
        overall: 0,
        maturityLevel: null,
        vulnerabilities: [],
        strengths: [],
        recommendations: []
    };
    
    let totalWeightedScore = 0;
    
    // Calcular pontuação por dimensão
    Object.entries(diagnosticConfig.dimensions).forEach(([key, dimension]) => {
        const scores = dimension.questions.map(q => parseInt(responses[q]));
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        const normalizedScore = (average - 1) * 25; // Converter 1-5 para 0-100
        
        results.dimensions[key] = {
            name: dimension.name,
            score: Math.round(normalizedScore),
            color: dimension.color,
            questions: scores
        };
        
        totalWeightedScore += normalizedScore * dimension.weight;
        
        // Identificar vulnerabilidades e pontos fortes
        if (normalizedScore < 50) {
            results.vulnerabilities.push({
                dimension: dimension.name,
                score: Math.round(normalizedScore),
                severity: normalizedScore < 25 ? 'critical' : 'high'
            });
        } else if (normalizedScore > 75) {
            results.strengths.push({
                dimension: dimension.name,
                score: Math.round(normalizedScore)
            });
        }
    });
    
    results.overall = Math.round(totalWeightedScore);
    
    // Determinar nível de maturidade
    Object.entries(diagnosticConfig.maturityLevels).forEach(([key, level]) => {
        if (results.overall >= level.min && results.overall <= level.max) {
            results.maturityLevel = {
                key: key,
                ...level
            };
        }
    });
    
    // Gerar recomendações
    results.recommendations = generateRecommendations(results);
    
    return results;
}

// Gerar recomendações personalizadas
function generateRecommendations(results) {
    const recommendations = [];
    
    Object.entries(results.dimensions).forEach(([key, dimension]) => {
        let level = 'high';
        if (dimension.score < 50) level = 'low';
        else if (dimension.score < 75) level = 'medium';
        
        if (recommendationsBank[key] && recommendationsBank[key][level]) {
            recommendations.push({
                dimension: dimension.name,
                ...recommendationsBank[key][level]
            });
        }
    });
    
    // Ordenar por prioridade
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
    recommendations.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    
    return recommendations.slice(0, 5); // Limitar a 5 recomendações
}

// Exibir resultados no dashboard
function displayResults(results) {
    // Mostrar seção de resultados
    document.getElementById('assessment-form').style.display = 'none';
    document.getElementById('results-dashboard').style.display = 'block';
    
    // Preencher informações da empresa
    document.getElementById('result-company-name').textContent = results.company.name;
    document.getElementById('result-company-details').textContent = 
        `${getSectorName(results.company.sector)} • ${getSizeName(results.company.size)}`;
    
    // Exibir pontuação geral
    displayOverallScore(results);
    
    // Criar gráfico radar
    createRadarChart(results);
    
    // Exibir vulnerabilidades
    displayVulnerabilities(results.vulnerabilities);
    
    // Exibir pontos fortes
    displayStrengths(results.strengths);
    
    // Exibir recomendações
    displayRecommendations(results.recommendations);
}

// Exibir pontuação geral
function displayOverallScore(results) {
    const scoreElement = document.getElementById('overall-score');
    const levelElement = document.getElementById('maturity-level');
    const descriptionElement = document.getElementById('maturity-description');
    
    // Animar pontuação
    animateScore(scoreElement, results.overall);
    
    // Atualizar nível de maturidade
    levelElement.textContent = results.maturityLevel.label;
    descriptionElement.textContent = results.maturityLevel.description;
    
    // Criar gauge chart
    createGaugeChart(results.overall);
}

// Animar pontuação
function animateScore(element, targetScore) {
    let currentScore = 0;
    const increment = targetScore / 50;
    
    const timer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(timer);
        }
        element.textContent = Math.round(currentScore);
    }, 20);
}

// Criar gráfico gauge
function createGaugeChart(score) {
    const canvas = document.getElementById('scoreGauge');
    const ctx = canvas.getContext('2d');
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Desenhar fundo do gauge
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, 0.25 * Math.PI);
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#e2e8f0';
    ctx.stroke();
    
    // Desenhar progresso
    const angle = 0.75 * Math.PI + (1.5 * Math.PI * score / 100);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, angle);
    ctx.lineWidth = 20;
    ctx.strokeStyle = getScoreColor(score);
    ctx.stroke();
}

// Obter cor baseada na pontuação
function getScoreColor(score) {
    if (score < 40) return '#e53e3e';
    if (score < 60) return '#dd6b20';
    if (score < 75) return '#d69e2e';
    if (score < 90) return '#38a169';
    return '#2d5aa0';
}

// Criar gráfico radar
function createRadarChart(results) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    const labels = Object.values(results.dimensions).map(d => d.name);
    const data = Object.values(results.dimensions).map(d => d.score);
    const colors = Object.values(results.dimensions).map(d => d.color);
    
    if (charts.radar) {
        charts.radar.destroy();
    }
    
    charts.radar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Pontuação Atual',
                data: data,
                backgroundColor: 'rgba(45, 90, 160, 0.2)',
                borderColor: '#2d5aa0',
                borderWidth: 3,
                pointBackgroundColor: colors,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        font: {
                            size: 12
                        }
                    },
                    pointLabels: {
                        font: {
                            size: 11,
                            weight: 'bold'
                        },
                        color: '#2d3748'
                    },
                    grid: {
                        color: '#e2e8f0'
                    },
                    angleLines: {
                        color: '#e2e8f0'
                    }
                }
            }
        }
    });
}

// Exibir vulnerabilidades
function displayVulnerabilities(vulnerabilities) {
    const container = document.getElementById('vulnerabilities-list');
    
    if (vulnerabilities.length === 0) {
        container.innerHTML = `
            <div class="strength-item">
                <i class="fas fa-check-circle"></i>
                <div class="item-content">
                    <h4>Nenhuma vulnerabilidade crítica identificada</h4>
                    <p>Sua empresa demonstra boa maturidade reputacional</p>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = vulnerabilities.map(vuln => `
        <div class="vulnerability-item">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="item-content">
                <h4>${vuln.dimension}</h4>
                <p>Pontuação: ${vuln.score}/100 - ${vuln.severity === 'critical' ? 'Crítico' : 'Alto risco'}</p>
            </div>
        </div>
    `).join('');
}

// Exibir pontos fortes
function displayStrengths(strengths) {
    const container = document.getElementById('strengths-list');
    
    if (strengths.length === 0) {
        container.innerHTML = `
            <div class="vulnerability-item">
                <i class="fas fa-info-circle"></i>
                <div class="item-content">
                    <h4>Oportunidades de melhoria identificadas</h4>
                    <p>Veja as recomendações para fortalecer sua reputação</p>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = strengths.map(strength => `
        <div class="strength-item">
            <i class="fas fa-star"></i>
            <div class="item-content">
                <h4>${strength.dimension}</h4>
                <p>Pontuação: ${strength.score}/100 - Ponto forte da empresa</p>
            </div>
        </div>
    `).join('');
}

// Exibir recomendações
function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendations-list');
    
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-item">
            <div class="recommendation-header">
                <i class="fas fa-${rec.icon}"></i>
                <h4>${rec.title}</h4>
                <span class="recommendation-priority priority-${rec.priority}">
                    ${rec.priority === 'high' ? 'Alta' : rec.priority === 'medium' ? 'Média' : 'Baixa'} Prioridade
                </span>
            </div>
            <p>${rec.description}</p>
            <div class="recommendation-actions">
                <strong>Ações recomendadas:</strong>
                <ul>
                    ${rec.actions.map(action => `<li>${action}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Funções auxiliares
function getSectorName(sector) {
    const sectors = {
        'financeiro': 'Financeiro',
        'saude': 'Saúde',
        'varejo': 'Varejo',
        'industrial': 'Industrial',
        'tecnologia': 'Tecnologia',
        'servicos': 'Serviços',
        'outros': 'Outros'
    };
    return sectors[sector] || sector;
}

function getSizeName(size) {
    const sizes = {
        'pequena': 'Pequena Empresa',
        'media': 'Média Empresa',
        'grande': 'Grande Empresa',
        'multinacional': 'Multinacional'
    };
    return sizes[size] || size;
}

// Modal de contato
function openContactModal() {
    document.getElementById('contact-modal').style.display = 'block';
}

function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('contact-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Processar formulário de contato
function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const contactData = {};
    
    for (let [key, value] of formData.entries()) {
        contactData[key] = value;
    }
    
    // Simular envio (aqui você integraria com seu sistema de CRM)
    alert('Obrigado pelo interesse! Nossa equipe entrará em contato em até 24 horas.');
    closeContactModal();
    
    // Limpar formulário
    event.target.reset();
}

// Adicionar estilos para as ações das recomendações
const additionalStyles = `
    .recommendation-actions {
        margin-top: 15px;
    }
    
    .recommendation-actions strong {
        color: #2d5aa0;
        display: block;
        margin-bottom: 10px;
    }
    
    .recommendation-actions ul {
        list-style: none;
        padding-left: 0;
    }
    
    .recommendation-actions li {
        padding: 8px 0;
        padding-left: 25px;
        position: relative;
        color: #4a5568;
        line-height: 1.5;
    }
    
    .recommendation-actions li:before {
        content: "→";
        position: absolute;
        left: 0;
        color: #2d5aa0;
        font-weight: bold;
    }
`;

// Adicionar estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

