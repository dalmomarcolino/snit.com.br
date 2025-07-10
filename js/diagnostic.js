// Diagnóstico Reputacional Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnosticForm');
    
    // Handle radio button selection styling
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove selected class from all options in this question
            const questionName = this.name;
            document.querySelectorAll(`input[name="${questionName}"]`).forEach(r => {
                r.closest('.radio-option').classList.remove('selected');
            });
            // Add selected class to chosen option
            this.closest('.radio-option').classList.add('selected');
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(this);
        const data = {
            empresa: formData.get('empresa'),
            setor: formData.get('setor'),
            porte: formData.get('porte'),
            email: formData.get('email')
        };
        
        // Collect answers
        const scores = [];
        for (let i = 1; i <= 5; i++) {
            const answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                data[`q${i}`] = answer.value;
                scores.push(parseInt(answer.value));
            }
        }
        
        // Validate all questions answered
        if (scores.length < 5) {
            alert('Por favor, responda todas as perguntas para gerar o diagnóstico.');
            return;
        }
        
        // Show loading
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        submitBtn.disabled = true;
        
        // Simulate processing time
        setTimeout(() => {
            // Calculate score
            const totalScore = scores.reduce((sum, score) => sum + score, 0);
            const averageScore = Math.round((totalScore / 5) * 20); // Convert to 0-100 scale
            
            // Generate results
            let label, recommendations;
            
            if (averageScore >= 80) {
                label = "Excelente";
                recommendations = [
                    { title: "Manutenção da Excelência", description: "Continue monitorando e aprimorando suas práticas atuais." },
                    { title: "Inovação Contínua", description: "Explore novas tecnologias para manter sua vantagem competitiva." }
                ];
            } else if (averageScore >= 60) {
                label = "Bom";
                recommendations = [
                    { title: "Otimização de Processos", description: "Identifique áreas específicas para melhorias incrementais." },
                    { title: "Fortalecimento da Segurança", description: "Implemente controles adicionais de segurança da informação." }
                ];
            } else if (averageScore >= 40) {
                label = "Regular";
                recommendations = [
                    { title: "Modernização da Infraestrutura", description: "Invista em atualizações de infraestrutura digital." },
                    { title: "Gestão de Riscos", description: "Desenvolva um programa robusto de gestão de terceiros." }
                ];
            } else {
                label = "Crítico";
                recommendations = [
                    { title: "Ação Imediata Necessária", description: "Priorize investimentos em segurança e infraestrutura." },
                    { title: "Consultoria Especializada", description: "Busque apoio profissional para transformação digital." }
                ];
            }
            
            // Generate PDF content
            const pdfContent = `
DIAGNÓSTICO REPUTACIONAL - ${data.empresa}

Empresa: ${data.empresa}
Setor: ${data.setor}
Porte: ${data.porte}
E-mail: ${data.email}

PONTUAÇÃO: ${averageScore}/100 - ${label}

RECOMENDAÇÕES:
${recommendations.map(rec => `• ${rec.title}: ${rec.description}`).join('\n')}

Data: ${new Date().toLocaleDateString('pt-BR')}
Gerado por: SN IT - Reputação como Ativo Estratégico
            `;
            
            // Simulate email sending
            console.log('Enviando diagnóstico para:', data.email);
            console.log('Conteúdo do PDF:', pdfContent);
            
            // Show success message
            alert(`Diagnóstico gerado com sucesso!\n\nSua pontuação: ${averageScore}/100 (${label})\n\nO relatório completo foi enviado para ${data.email} e uma cópia para contato@snit.com.br`);
            
            // Reset form
            this.reset();
            
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
        }, 2000); // 2 second delay to simulate processing
    });
});

