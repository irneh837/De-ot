const deotPart4Quiz = `
    <!-- INTERFACE DO QUIZ EM EXECUÇÃO -->
    <section id="screen-quiz-execution" class="screen flex-col gap-4 w-full bg-black/50 border border-gray-900 p-5 rounded-2xl backdrop-blur-md">
        <div class="flex justify-between items-center text-xs font-mono text-gray-400">
            <span id="quiz-header-title">MATÉRIA - TEMA</span>
            <span id="quiz-header-progress">Questão 1 de 5</span>
        </div>
        <div class="w-full bg-gray-950 h-1.5 rounded-full overflow-hidden">
            <div id="quiz-bar-inner" class="h-full bg-blue-500 w-1/5 transition-all duration-300"></div>
        </div>
        <div class="my-2">
            <span id="quiz-question-badge" class="bg-blue-950 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-900 font-mono">DIFICULDADE</span>
            <p id="quiz-question-text" class="text-sm font-medium text-gray-200 mt-2 leading-relaxed">Enunciado da questão...</p>
        </div>
        <div id="quiz-options-box" class="flex flex-col gap-2.5 mt-2"></div>
        <button id="btn-quiz-submit" class="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold text-xs tracking-wider mt-2 transition-colors" onclick="submitQuizAnswer()">CONFIRMAR RESPOSTA</button>
    </section>

    <!-- DASHBOARD DE RESULTADO ANÁLITICO -->
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

    <!-- ABAS COMPLEMENTARES DO RODAPÉ -->
    <section id="screen-ranking" class="screen flex-col gap-4 w-full">
        <h2 class="text-xl font-bold title-underline" style="--underline-color: #eab308;">🏆 RANKING DE ESTUDOS</h2>
        <div class="flex items-end justify-center gap-3 my-6 text-center h-32">
            <div class="bg-gray-950 border border-gray-800 p-3 rounded-t-2xl w-24 h-24 flex flex-col justify-end"><span class="text-xl">🥈</span> <span class="text-[11px] font-bold text-gray-400">Marta_PR</span> <span class="text-[10px] text-gray-500 font-mono">350 pts</span></div>
            <div class="bg-gray-950 border-2 border-yellow-500/50 p-3 rounded-t-2xl w-28 h-32 flex flex-col justify-end shadow-[0_0_15px_rgba(234,179,8,0.15)]"><span class="text-2xl">🏆</span> <span class="text-xs font-black text-yellow-400">Você</span> <span id="ranking-user-pts" class="text-[11px] text-yellow-500 font-mono">0 pts</span></div>
            <div class="bg-gray-950 border border-gray-800 p-3 rounded-t-2xl w-24 h-20 flex flex-col justify-end"><span class="text-xl">🥉</span> <span class="text-[11px] font-bold text-gray-400">Gabs_Dev</span> <span class="text-[10px] text-gray-500 font-mono">120 pts</span></div>
        </div>
    </section>

    <section id="screen-duvidas" class="screen flex-col gap-4 w-full">
        <h2 class="text-xl font-bold title-underline" style="--underline-color: #3b82f6;">💬 COMUNIDADE PÚBLICA</h2>
        <div id="comunidade-bloqueio" class="p-4 bg-gray-950/80 border border-gray-900 rounded-2xl text-center text-xs text-gray-400 my-4">🔒 Seção protegida. É preciso obter 500 pontos para abrir publicações e 1000 pontos para responder.</div>
    </section>

    <section id="screen-perfil" class="screen flex-col gap-4 w-full">
        <h2 class="text-xl font-bold title-underline" style="--underline-color: #a855f7;">👤 MEU PERFIL</h2>
        <div class="flex items-center gap-4 bg-gray-950/50 p-4 rounded-2xl border border-gray-900 mt-2">
            <div class="text-4xl bg-gray-900 p-3 rounded-full border border-gray-800">🦊</div>
            <div><h3 class="font-bold text-base">Estudante De'ot</h3><p class="text-xs text-gray-500">Membro Oficial Local</p></div>
        </div>
        <div class="grid grid-cols-2 gap-3 font-mono text-xs mt-2">
            <div class="bg-black/40 p-3 rounded-xl border border-gray-900"><div class="text-gray-500 text-[10px]">Pontos Estudo</div><div id="perf-pts-estudo" class="text-lg font-bold text-cyan-400">0</div></div>
            <div class="bg-black/40 p-3 rounded-xl border border-gray-900"><div class="text-gray-500 text-[10px]">Pontos Contrib.</div><div class="text-lg font-bold text-pink-400">0</div></div>
        </div>
    </section>
`;
