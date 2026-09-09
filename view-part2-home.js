const deotPart2Home = `
    <!-- TELA INICIAL (DASHBOARD COM LAYOUT CORRIGIDO) -->
    <section id="screen-home" class="screen flex-col gap-6 w-full">
        <div class="grid grid-cols-2 gap-4 w-full">
            <!-- Humanas à Esquerda -->
            <button class="btn-deot-glow py-12 text-lg font-black tracking-wider text-pink-400" style="--glow-color: #ec4899; --glow-shadow: rgba(236,72,153,0.3);" onclick="navigateTo('screen-humanas')">
                HUMANAS
            </button>
            <!-- Exatas à Direita -->
            <button class="btn-deot-glow py-12 text-lg font-black tracking-wider text-cyan-400" style="--glow-color: #06b6d4; --glow-shadow: rgba(6,182,212,0.3);" onclick="navigateTo('screen-exatas')">
                EXATAS
            </button>
        </div>
        <!-- Linguagens centralizado embaixo e mais baixo -->
        <div class="w-full flex justify-center">
            <button class="btn-deot-glow w-3/4 py-5 text-md font-black tracking-wider text-purple-400" style="--glow-color: #a855f7; --glow-shadow: rgba(168,85,247,0.3);" onclick="navigateTo('screen-linguagens')">
                LINGUAGENS
            </button>
        </div>
    </section>
`;
