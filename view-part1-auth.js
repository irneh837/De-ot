const deotPart1Auth = `
    <!-- TELA DE LOGIN -->
    <section id="screen-login" class="screen active flex-col gap-5 w-full bg-black/40 p-6 rounded-2xl border border-gray-900 backdrop-blur-md">
        <div class="text-center mb-2">
            <h2 class="text-4xl font-black tracking-widest text-white">DE'OT</h2>
            <p class="text-xs text-gray-400 mt-1">Insira seus dados locais de acesso</p>
        </div>
        <div class="flex flex-col gap-3">
            <input type="text" id="login-user" value="estudante@deot.com" placeholder="Usuário ou E-mail" class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white">
            <input type="password" id="login-pass" value="123456" placeholder="Senha" class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white">
            <button class="btn-deot-glow w-full py-3.5 font-bold text-sm mt-2 text-blue-400" style="--glow-color: #3b82f6; --glow-shadow: rgba(59,130,246,0.3);" onclick="handleLogin()">
                ENTRAR
            </button>
        </div>
        <div class="border-t border-gray-900 my-2"></div>
        <button class="text-center text-xs text-gray-500 hover:text-gray-300" onclick="navigateTo('screen-admin')">Acessar Painel do Administrador ⚙️</button>
    </section>

    <!-- PAINEL ADMINISTRATIVO LOCAL -->
    <section id="screen-admin" class="screen flex-col gap-4 w-full bg-gray-950/90 border border-gray-800 p-5 rounded-2xl">
        <div class="flex justify-between items-center border-b border-gray-900 pb-2">
            <h2 class="text-sm font-black text-amber-500 font-mono">⚙️ CONTROLE ADMINISTRATIVO</h2>
            <button class="text-xs bg-gray-950 px-2 py-1 rounded text-gray-400" onclick="navigateTo('screen-login')">Sair</button>
        </div>
        <div class="flex flex-col gap-4 max-h-[320px] overflow-y-auto pr-1 text-xs">
            <div>
                <h3 class="font-bold text-gray-300 mb-1">📌 Criar Novo Tema</h3>
                <div class="flex gap-2">
                    <input type="text" id="admin-new-theme" placeholder="Ex: Eletrodinâmica" class="bg-black border border-gray-800 p-2 rounded flex-1 text-white">
                    <button onclick="adminRegisterTheme()" class="bg-amber-600 px-3 rounded font-black">Adicionar</button>
                </div>
            </div>
            <div class="border-t border-gray-900 pt-2">
                <h3 class="font-bold text-gray-300 mb-1">📋 Temas Disponíveis</h3>
                <ul id="admin-themes-ul" class="list-disc pl-4 text-gray-400 space-y-1"></ul>
            </div>
        </div>
    </section>
`;
