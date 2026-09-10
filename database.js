// ==========================================================================
// DE'OT - BANCO DE DADOS LOCAL E ESTRUTURAS ESTÁTICAS
// ==========================================================================

// 10. BANCO DE QUESTÕES INDEPENDENTE (Modelagem de Pesos e Dificuldades)
const questionBank = [
    { 
        id: 1, 
        text: "Qual filósofo é conhecido pela frase 'Conhece-te a ti mesmo'?", 
        options: ["Sócrates", "Platão", "Aristóteles", "Descartes"], 
        correct: 0, 
        points: 20, 
        level: "FÁCIL" 
    },
    { 
        id: 2, 
        text: "Se f(x) = 2x + 3, qual o valor de f(5)?", 
        options: ["10", "13", "15", "8"], 
        correct: 1, 
        points: 20, 
        level: "FÁCIL" 
    },
    { 
        id: 3, 
        text: "A primeira lei de Newton aborda qual princípio fundamental?", 
        options: ["Ação e Reação", "Inércia", "Força Gravitacional", "Massa"], 
        correct: 1, 
        points: 40, 
        level: "MÉDIO" 
    },
    { 
        id: 4, 
        text: "Qual elemento químico possui o símbolo 'O' na tabela periódica?", 
        options: ["Ouro", "Ósmio", "Oxigênio", "Olho"], 
        correct: 2, 
        points: 10, 
        level: "FÁCIL" 
    },
    { 
        id: 5, 
        text: "Em qual ano teve início a Revolução Francesa, marco da Idade Contemporânea?", 
        options: ["1789", "1822", "1500", "1914"], 
        correct: 0, 
        points: 60, 
        level: "DIFÍCIL" 
    }
];

// 23 & 24. MODELO DE ESTADO INICIAL PARA ARMAZENAMENTO E PROGRESSÃO LOCAL
const defaultInitialState = {
    pointsStudy: 0,        // Pontos de Estudo (Usados para travas/ranking)
    pointsToday: 0,        // Pontos ganhos hoje (Meta diária de 100 pontos)
    streakDays: 0,         // Sequência ativa de dias estudados
    isLoggedIn: false,     // Controle de sessão do usuário
    // Lista de temas iniciais que aparecem no dropdown das matérias
    themes: [
        'Cinemática', 
        'Geometria Espacial', 
        'Grandes Guerras', 
        'Sintaxe e Pontuação'
    ],
    quizHistory: [],       // Armazena o histórico recente de acertos (para o gráfico)
    failedQuestion: null   // Armazena os parâmetros do último erro (para a dúvida privada)
};
