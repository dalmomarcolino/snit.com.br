// Diagnóstico Reputacional Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnosticForm');
    const resultsSection = document.getElementById('results');
    
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
    form.addEventListener('submit', async function(e) {
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
        for (let i = 1; i <= 5; i++) {
            const answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer) {
                data[`q${i}`] = answer.value;
            }
        }
        
        // Validate all questions answered
        let answeredQuestions = 0;
        for (let i = 1; i <= 5; i++) {
            if (data[`q${i}`]) {
                answeredQuestions++;
            }
        }
        
        if (answeredQuestions < 5) {
            alert('Por favor, responda todas as perguntas para gerar o diagnóstico.');
            return;
        }
        
        try {
            // Show loading
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
            submitBtn.disabled = true;
            
            const response = await fetch('/api/diagnostic', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Display results
                displayResults(result.score, result.label, result.recommendations);
                
                // Show success message
                alert(result.message);
                
                // Scroll to results
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Erro ao processar diagnóstico: ' + result.message);
            }
            
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
        } catch (error) {
            alert('Erro ao enviar diagnóstico. Tente novamente.');
            
            // Restore button
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-chart-line"></i> Gerar Diagnóstico Reputacional';
            submitBtn.disabled = false;
        }
    });
    
    function displayResults(score, label, recommendations) {
        document.getElementById('scoreNumber').textContent = score;
        document.getElementById('scoreLabel').textContent = label;
        
        const recommendationsList = document.getElementById('recommendationsList');
        
        recommendationsList.innerHTML = recommendations.map(rec => `
            <div class="recommendation-item">
                <div class="recommendation-title">${rec.title}</div>
                <div>${rec.description}</div>
            </div>
        `).join('');
        
        resultsSection.style.display = 'block';
    }
});

