const deotPart3Study = `
    <!-- CATEGORIAS ESPECÍFICAS -->
    <section id="screen-humanas" class="screen flex-col gap-4 w-full">
        <h2 class="text-2xl font-black text-pink-500 title-underline mb-2" style="--underline-color: #ec4899;">🌍 HUMANAS</h2>
        <div class="flex flex-col gap-3 mt-2">
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #ec4899;" onclick="openMateria('História', '#ec4899')">História</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #ec4899;" onclick="openMateria('Geografia', '#ec4899')">Geografia</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #ec4899;" onclick="openMateria('Filosofia', '#ec4899')">Filosofia</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #ec4899;" onclick="openMateria('Sociologia', '#ec4899')">Sociologia</button>
        </div>
    </section>

    <section id="screen-exatas" class="screen flex-col gap-4 w-full">
        <h2 class="text-2xl font-black text-cyan-400 title-underline mb-2" style="--underline-color: #06b6d4;">📐 EXATAS</h2>
        <div class="flex flex-col gap-3 mt-2">
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #06b6d4;" onclick="openMateria('Matemática', '#06b6d4')">Matemática</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #06b6d4;" onclick="openMateria('Física', '#06b6d4')">Física</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #06b6d4;" onclick="openMateria('Química', '#06b6d4')">Química</button>
        </div>
    </section>

    <section id="screen-linguagens" class="screen flex-col gap-4 w-full">
        <h2 class="text-2xl font-black text-purple-400 title-underline mb-2" style="--underline-color: #a855f7;">🗣️ LINGUAGENS</h2>
        <div class="flex flex-col gap-3 mt-2">
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #a855f7;" onclick="openMateria('Português', '#a855f7')">Português</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #a855f7;" onclick="openMateria('Espanhol', '#a855f7')">Espanhol</button>
            <button class="btn-deot-glow py-4 text-left px-6 font-bold" style="--glow-color: #a855f7;" onclick="openMateria('Inglês', '#a855f7')">Inglês</button>
        </div>
    </section>

    <!-- TELA MESTRA DE INTERAÇÃO DA MATÉRIA -->
    <section id="screen-materia" class="screen flex-col gap-4 w-full">
        <h2 id="txt-materia-dinamica" class="text-2xl font-black title-underline mb-2">📚 MATÉRIA</h2>
        <div class="flex flex-col gap-3 mt-2">
            <div>
                <button id="btn-materia-temas" class="btn-deot-glow w-full py-4 px-6 text-left font-bold flex justify-between items-center" onclick="toggleTemasDropdown()">
                    <span>📌 Temas</span> <span id="arrow-temas">▼</span>
                </button>
                <div id="dropdown-temas-container" class="hidden flex-col gap-1.5 mt-2 p-3 bg-black/80 border border-gray-900 rounded-xl"></div>
            </div>
            <button id="btn-materia-resumos" class="btn-deot-glow py-4 text-left px-6 font-bold" onclick="checkPointsBlock(3000, 'Acessar/Publicar Resumos')">📚 Resumos</button>
            <button id="btn-materia-mapas" class="btn-deot-glow py-4 text-left px-6 font-bold" onclick="checkPointsBlock(3000, 'Acessar/Publicar Mapas Mentais')">🧠 Mapas Mentais</button>
            <button id="btn-materia-videos" class="btn-deot-glow py-4 text-left px-6 font-bold" onclick="alert('Vídeos integrados.')">▶ Vídeos</button>
            <button id="btn-materia-quiz" class="btn-deot-glow py-4 text-left px-6 font-bold" onclick="initiateQuizFlow('Geral')">❓ Quiz</button>
            <button id="btn-materia-personalizado" class="btn-deot-glow py-4 text-left px-6 font-bold" onclick="initiatePersonalizedQuizFlow()">🎯 Quiz Personalizado</button>
            <button id="btn-materia-duvidas" class="btn-deot-glow py-4 text-left px-6 font-bold" onclick="navigateTo('screen-duvidas')">💬 Dúvidas</button>
        </div>
    </section>
`;
