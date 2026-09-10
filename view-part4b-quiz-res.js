const deotPart4bQuizRes = `
    <!-- DASHBOARD DE RESULTADO DO QUIZ -->
    <section id="screen-quiz-result" class="screen flex-col gap-4 w-full bg-black/60 border border-gray-900 p-5 rounded-2xl backdrop-blur-md">
        <h2 class="text-xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">📊 RESULTADO DO QUIZ</h2>
        <div class="grid grid-cols-2 gap-2 text-center text-xs font-mono my-2">
            <div class="bg-gray-950 p-3 rounded-xl border border-gray-900">
                <span class="text-gray-500 block text-[10px]">PONTOS NO QUIZ</span>
                <span id="res-quiz-pts" class="text-lg font-bold text-green-400">+0</span>
            </div>
            <div class="bg-gray-950 p-3 rounded-xl border border-gray-900">
                <span class="text-gray-500 block text-[10px]">EVOLUÇÃO</span>
                <span id="res-quiz-compare" class="text-xs font-bold text-gray-300">Estável</span>
            </div>
        </div>
        <div class="bg-gray-950 p-3 rounded-xl border border-gray-900 flex flex-col gap-2">
            <span class="text-[10px] font-bold text-gray-400 font-mono">HISTÓRICO RECENTE (ACERTOS)</span>
            <div id="res-chart-container" class="flex items-end justify-between h-16 pt-4 px-4 gap-2"></div>
        </div>
        <div class="text-xs text-gray-400 space-y-1 bg-black/40 p-3 rounded-xl border border-gray-900">
            <p>⚠️ <strong>Temas com Fraqueza:</strong> <span id="res-weak-themes" class="text-red-400">Nenhum</span></p>
            <p>🎯 <strong>Pontos de Estudo Acumulados:</strong> <span id="res-total-accum" class="text-cyan-400">0 pts</span></p>
        </div>
        <div id="quiz-failure-action-box" class="hidden flex-col gap-2 mt-1">
            <p class="text-[10px] text-red-400 font-bold font-mono">❌ QUESTÕES ERRADAS:</p>
            <button class="w-full bg-red-950/40 text-red-300 border border-red-900/60 py-2.5 rounded-xl text-xs font-bold font-mono hover:bg-red-900/40" onclick="openPrivateDoubtFlow()">
                💬 ABRIR DÚVIDA PRIVADA DA QUESTÃO
            </button>
        </div>
        <button class="w-full bg-gray-900 hover:bg-gray-800 py-3 rounded-xl text-xs font-bold" onclick="navigateTo('screen-home')">VOLTAR AO INÍCIO</button>
    </section>

    <!-- TELA DE DÚVIDA PRIVADA -->
    <section id="screen-private-doubt" class="screen flex-col gap-3 w-full bg-gray-950 border border-gray-900 p-5 rounded-2xl">
        <h2 class="text-sm font-bold text-red-400 font-mono flex items-center gap-1">🧠 DÚVIDA PRIVADA: <span id="doubt-topic-title" class="text-gray-300">Tema</span></h2>
        <div class="bg-black/50 p-3 rounded-xl border border-gray-900 text-xs text-gray-400 space-y-1">
            <p class="italic text-gray-300" id="doubt-question-body">"Carregando enunciado..."</p>
            <p class="text-red-400">Sua escolha: <span id="doubt-user-ans">X</span></p>
            <p class="text-green-400">Gabarito correto: <span id="doubt-correct-ans">Y</span></p>
        </div>
        <div id="doubt-ai-output" class="bg-blue-950/20 border border-blue-900/50 p-3.5 rounded-xl text-xs text-blue-200 leading-relaxed max-h-[160px] overflow-y-auto">
            Selecione uma opção de revisão.
        </div>
        <div class="grid grid-cols-2 gap-2 mt-1 text-[11px] font-bold">
            <button class="bg-gray-900 p-2 rounded-xl text-left border border-gray-800" onclick="requestDoubtService('OUTRA_MANEIRA')">💡 Outra Maneira</button>
            <button class="bg-gray-900 p-2 rounded-xl text-left border border-gray-800" onclick="requestDoubtService('EXEMPLO')">📝 Mostrar Exemplo</button>
            <button class="bg-gray-900 p-2 rounded-xl text-left border border-gray-800" onclick="requestDoubtService('RESUMIR')">✂️ Resumir Explicação</button>
            <button class="bg-gray-900 p-2 rounded-xl text-left border border-gray-800" onclick="requestDoubtService('PASSO_A_PASSO')">🪜 Passo a Passo</button>
        </div>
        <button class="w-full bg-gray-900 hover:bg-gray-800 py-2.5 rounded-xl text-xs font-bold mt-2" onclick="goBack()">VOLTAR À MATÉRIA</button>
    </section>
`;
