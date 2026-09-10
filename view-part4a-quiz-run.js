const deotPart4aQuizRun = `
    <!-- INTERFACE INTERNA DO QUIZ (EXECUÇÃO DE QUESTÕES) -->
    <section id="screen-quiz-execution" class="screen flex-col gap-4 w-full quiz-card-premium p-5 relative" style="--card-glow-color: #3b82f6;">
        <div class="relative z-10 flex flex-col gap-4 w-full">
            
            <!-- Barra de Metadados Superior (Pontuação e Dificuldade por Questão) -->
            <div class="flex justify-between items-center text-xs font-mono">
                <div class="flex items-center gap-1.5">
                    <span class="text-yellow-400 drop-shadow-[0_0_6px_rgba(234,179,8,0.6)] text-sm">✦</span>
                    <span id="quiz-question-pts" class="font-bold text-gray-200 text-sm">30</span>
                    <span id="quiz-question-badge" class="bg-transparent text-yellow-500 text-[10px] font-black px-2 py-0.5 rounded-md border border-yellow-600/60 font-sans tracking-wide ml-1">MÉDIO</span>
                </div>
                
                <!-- Progresso da Questão (Ex: 1º) -->
                <div class="bg-transparent border border-blue-500/40 text-blue-400 font-bold px-2.5 py-0.5 rounded-md text-[11px]">
                    <span id="quiz-header-progress">1º</span>
                </div>
            </div>

            <!-- Divisória Sutil -->
            <div class="w-full h-[1px] bg-gray-900/60"></div>

            <!-- Área do Enunciado da Pergunta -->
            <div class="my-1">
                <p id="quiz-question-text" class="text-sm font-medium text-gray-100 leading-relaxed">
                    Carregando enunciado...
                </p>
            </div>

            <!-- As 5 Caixas de Alternativas (A até E com Moldura Azul Fixa) -->
            <div id="quiz-options-box" class="flex flex-col gap-2.5 mt-1"></div>

            <!-- Botão de Confirmação Oblíquo -->
            <button id="btn-quiz-submit" class="w-full bg-blue-600/90 hover:bg-blue-600 text-white py-3 rounded-xl font-black text-xs tracking-wider mt-3 transition-all border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]" onclick="submitQuizAnswer()">
                CONFIRMAR RESPOSTA
            </button>
        </div>
    </section>
`;
