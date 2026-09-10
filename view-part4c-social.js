const deotPart4cSocial = `
    <!-- TELA DE RANKING (PÓDIO HORIZONAL) -->
    <section id="screen-ranking" class="screen flex-col gap-4 w-full">
        <h2 class="text-xl font-bold title-underline" style="--underline-color: #06b6d4;">🏆 RANKING DE ESTUDOS</h2>
        <div class="flex items-end justify-center gap-3 my-6 text-center h-32">
            <div class="bg-gray-950 border border-gray-800 p-3 rounded-t-2xl w-24 h-24 flex flex-col justify-end"><span class="text-xl">🥈</span> <span class="text-[11px] font-bold text-gray-400">Marta_PR</span> <span class="text-[10px] text-gray-500 font-mono">2670 pts</span></div>
            <div class="bg-gray-950 border-2 border-yellow-500/50 p-3 rounded-t-2xl w-28 h-32 flex flex-col justify-end shadow-[0_0_15px_rgba(234,179,8,0.15)]"><span class="text-2xl">🏆</span> <span class="text-xs font-black text-yellow-400">Você</span> <span id="ranking-user-pts" class="text-[11px] text-yellow-500 font-mono">0 pts</span></div>
            <div class="bg-gray-950 border border-gray-800 p-3 rounded-t-2xl w-24 h-20 flex flex-col justify-end"><span class="text-xl">🥉</span> <span class="text-[11px] font-bold text-gray-400">Gabs_Dev</span> <span class="text-[10px] text-gray-500 font-mono">2520 pts</span></div>
        </div>
    </section>

    <!-- COMUNIDADE PÚBLICA DE DÚVIDAS -->
    <section id="screen-duvidas" class="screen flex-col gap-4 w-full">
        <h2 class="text-xl font-bold title-underline" style="--underline-color: #a855f7;">💬 COMUNIDADE PÚBLICA</h2>
        
        <button class="btn-deot-glow w-full py-4 px-6 text-left font-bold flex items-center gap-2 text-purple-400 mt-1" style="--glow-color: #a855f7;" onclick="checkPointsBlock(500, 'Mandar uma Dúvida')">
            <span>(+)</span> <span>MANDAR UMA DÚVIDA</span>
        </button>

        <div id="comunidade-bloqueio" class="flex flex-col gap-3 mt-2 overflow-y-auto max-h-[280px] pr-1">
            <div class="quiz-card-premium p-4 flex flex-col gap-2 text-xs relative" style="--card-glow-color: #3b82f6; border-color: #3b82f6;">
                <div class="flex justify-between items-center relative z-10"><span class="bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-900 font-bold">MATEMÁTICA</span><span class="text-gray-500">2h atrás</span></div>
                <p class="text-gray-200 relative z-10 font-medium">Alguém consegue me explicar a resolução de matrizes por determinantes de terceira ordem?</p>
                <button class="border border-blue-500/40 text-blue-400 text-[10px] font-bold py-1.5 rounded-lg w-24 text-center mt-2 relative z-10" onclick="checkPointsBlock(1000, 'Responder Dúvidas')">(+) RESPONDER</button>
            </div>
            <div class="quiz-card-premium p-4 flex flex-col gap-2 text-xs relative" style="--card-glow-color: #eab308; border-color: #eab308;">
                <div class="flex justify-between items-center relative z-10"><span class="bg-yellow-950 text-yellow-400 px-2 py-0.5 rounded border border-yellow-900 font-bold">QUÍMICA</span><span class="text-gray-500">4h atrás</span></div>
                <p class="text-gray-200 relative z-10 font-medium">Qual a diferença prática na cadeia carbônica entre ligações Sigma e ligações Pi?</p>
                <button class="border border-yellow-500/40 text-yellow-400 text-[10px] font-bold py-1.5 rounded-lg w-24 text-center mt-2 relative z-10" onclick="checkPointsBlock(1000, 'Responder Dúvidas')">(+) RESPONDER</button>
            </div>
        </div>
    </section>

    <!-- TELA DE PERFIL -->
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
