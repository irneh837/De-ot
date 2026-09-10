// ==========================================================================
// DE'OT - MOTOR DO QUIZ (DINÂMICO POR QUESTÃO) E DÚVIDA PRIVADA
// ==========================================================================

let currentQuizIndex = 0;
let currentQuizScore = 0;
let currentQuizCorrectCount = 0;
let activeQuizQuestions = [];
let selectedOptionIndex = null;

function initiateQuizFlow(tema) {
    activeTema = tema;
    currentQuizIndex = 0;
    currentQuizScore = 0;
    currentQuizCorrectCount = 0;
    selectedOptionIndex = null;
    
    activeQuizQuestions = [...questionBank];
    
    // Injeta dinamicamente a cor da matéria de origem nas ondas pontilhadas dos cantos do Quiz
    const quizCard = document.getElementById('screen-quiz-execution');
    if (quizCard) {
        quizCard.style.setProperty('--card-glow-color', currentMateriaColor || '#3b82f6');
    }

    loadQuizQuestion();
    navigateTo('screen-quiz-execution');
}

function initiatePersonalizedQuizFlow() {
    alert("🎯 Quiz Personalizado Ativado!\nAnalisando o histórico para priorizar temas com mais erros...");
    initiateQuizFlow("Foco em Fraquezas");
}

function loadQuizQuestion() {
    selectedOptionIndex = null;
    const q = activeQuizQuestions[currentQuizIndex];
    
    // Configura os metadados individuais por questão (Imagem 7)
    document.getElementById('quiz-question-pts').innerText = q.points;
    document.getElementById('quiz-question-badge').innerText = q.level;
    
    const ordinais = ["1º", "2º", "3º", "4º", "5º"];
    document.getElementById('quiz-header-progress').innerText = ordinais[currentQuizIndex] || `${currentQuizIndex + 1}º`;
    document.getElementById('quiz-question-text').innerText = q.text;

    const optBox = document.getElementById('quiz-options-box');
    optBox.innerHTML = '';

    const letras = ["A", "B", "C", "D", "E"];
    q.options.forEach((opt, idx) => {
        const container = document.createElement('button');
        container.id = `opt-btn-${idx}`;
        container.className = "btn-deot-glow w-full text-left p-3.5 flex items-center gap-3 text-xs";
        container.style.setProperty('--glow-color', '#3b82f6'); 
        container.style.setProperty('--glow-shadow', 'rgba(59, 130, 246, 0.2)');

        container.innerHTML = `
            <span class="text-blue-400 font-black border-r border-gray-800/80 pr-3">${letras[idx]}</span>
            <span class="text-gray-200">${opt}</span>
        `;
        container.onclick = () => selectQuizOption(idx);
        optBox.appendChild(container);
    });
}

function selectQuizOption(idx) {
    const q = activeQuizQuestions[currentQuizIndex];
    selectedOptionIndex = idx;
    
    for(let i = 0; i < q.options.length; i++) {
        const target = document.getElementById(`opt-btn-${i}`);
        if (!target) continue;
        
        const letras = ["A", "B", "C", "D", "E"];
        if(i === idx) {
            target.className = "w-full text-left p-3.5 flex items-center gap-3 text-xs bg-blue-950/40 border-2 border-blue-400 rounded-2xl text-blue-300 font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]";
            target.innerHTML = `
                <span class="text-blue-300 font-black border-r border-blue-900 pr-3">${letras[i]}</span>
                <span>${q.options[i]}</span>
            `;
        } else {
            target.className = "btn-deot-glow w-full text-left p-3.5 flex items-center gap-3 text-xs";
            target.style.setProperty('--glow-color', '#3b82f6');
            target.innerHTML = `
                <span class="text-blue-400 font-black border-r border-gray-800/80 pr-3">${letras[i]}</span>
                <span class="text-gray-200">${q.options[i]}</span>
            `;
        }
    }
}

function submitQuizAnswer() {
    if (selectedOptionIndex === null) {
        alert("Selecione uma alternativa antes de confirmar.");
        return;
    }

    const q = activeQuizQuestions[currentQuizIndex];
    
    // Regra matemática por questão (+Valor integral se correto / -Metade se errado)
    if (selectedOptionIndex === q.correct) {
        currentQuizScore += q.points;
        currentQuizCorrectCount++;
    } else {
        currentQuizScore -= (q.points / 2);
        
        dbState.failedQuestion = {
            enunciado: q.text, alternativas: q.options,
            escolhida: q.options[selectedOptionIndex], correta: q.options[q.correct],
            materia: activeMateria, tema: activeTema
        };
    }

    currentQuizIndex++;
    if (currentQuizIndex < 5) {
        loadQuizQuestion();
    } else {
        renderQuizResultsDashboard();
    }
}

function renderQuizResultsDashboard() {
    if (dbState.pointsToday === 0 && dbState.streakDays === 0) {
        dbState.streakDays = 1;
        dbState.daysWithoutMeta = 0;
    }
    
    dbState.pointsToday += currentQuizScore;
    dbState.pointsStudy += currentQuizScore;
    
    if (dbState.pointsToday < 0) dbState.pointsToday = 0;
    if (dbState.pointsStudy < 0) dbState.pointsStudy = 0;

    if (dbState.pointsToday >= 100) {
        dbState.daysWithoutMeta = 0; 
    }

    document.getElementById('res-quiz-pts').innerText = (currentQuizScore >= 0 ? `+${currentQuizScore}` : currentQuizScore);
    document.getElementById('res-total-accum').innerText = `${dbState.pointsStudy} pts`;

    const compareElement = document.getElementById('res-quiz-compare');
    if (dbState.quizHistory.length > 0) {
        const prev = dbState.quizHistory[dbState.quizHistory.length - 1];
        if (currentQuizCorrectCount > prev) {
            compareElement.innerText = "📈 Melhora!"; compareElement.className = "text-xs font-bold text-green-400";
        } else if (currentQuizCorrectCount < prev) {
            compareElement.innerText = "📉 Piora"; compareElement.className = "text-xs font-bold text-red-400";
        } else {
            compareElement.innerText = "⚖️ Estável"; compareElement.className = "text-xs font-bold text-gray-400";
        }
    } else {
        compareElement.innerText = "Primeiro Quiz";
    }

    dbState.quizHistory.push(currentQuizCorrectCount);
    if(dbState.quizHistory.length > 5) dbState.quizHistory.shift();

    const chart = document.getElementById('res-chart-container');
    chart.innerHTML = '';
    dbState.quizHistory.forEach((val) => {
        const bar = document.createElement('div');
        bar.className = "bg-blue-500 rounded-t w-6 transition-all duration-500";
        bar.style.height = `${(val / 5) * 100}%`;
        chart.appendChild(bar);
    });

    const failureBox = document.getElementById('quiz-failure-action-box');
    const weakThemesText = document.getElementById('res-weak-themes');
    if (currentQuizCorrectCount < 5) {
        failureBox.classList.remove('hidden');
        failureBox.classList.add('flex');
        weakThemesText.innerText = activeTema;
    } else {
        failureBox.classList.add('hidden');
        weakThemesText.innerText = "Nenhum nesta rodada!";
    }

    refreshEngineVisuals();
    navigateTo('screen-quiz-result');
}

function requestDoubtService(type) {
    const out = document.getElementById('doubt-ai-output');
    switch (type) {
        case 'OUTRA_MANEIRA': out.innerText = "💡 [Tutor]: Vamos mudar a perspectiva. Pense neste problema dividindo-o em partes menores."; break;
        case 'EXEMPLO': out.innerText = "📝 [Tutor]: Um exemplo prático seria aplicar os mesmos valores em uma situação cotidiana."; break;
        case 'RESUMIR': out.innerText = "✂️ [Tutor]: Resumo: Sua escolha invalida o conceito estrutural. O gabarito resolve a regra padrão."; break;
        case 'PASSO_A_PASSO': out.innerText = "🪜 [Tutor]: Passo 1: Isolar variáveis. Passo 2: Eliminar distratores. Passo 3: Aplicar teoria direta."; break;
    }
}
