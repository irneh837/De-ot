// ==========================================================================
// DE'OT - CONTROLADOR CENTRAL DE NAVEGAÇÃO E LOGICA DE SESSÃO
// ==========================================================================

let appHistory = ['screen-home'];
let activeMateria = '';
let activeTema = '';

// Puxa o estado padrão do database.js e tenta carregar o localStorage
let dbState = { ...defaultInitialState };

if (localStorage.getItem('deot_engine_data')) {
    dbState = JSON.parse(localStorage.getItem('deot_engine_data'));
}

// 4 & 5. ATUALIZAÇÃO DA MIND FLAME E COMPONENTES VISUAIS
function refreshEngineVisuals() {
    const icon = document.getElementById('flame-container');
    const bar = document.getElementById('header-progress-bar');
    
    document.getElementById('header-days').innerText = dbState.streakDays;
    document.getElementById('header-pts').innerText = dbState.pointsToday;
    document.getElementById('ranking-user-pts').innerText = dbState.pointsStudy + ' pts';
    document.getElementById('perf-pts-estudo').innerText = dbState.pointsStudy;

    let pct = Math.min(dbState.pointsToday, 100);
    bar.style.width = `${pct}%`;

    // Lógica visual da lâmpada/chama
    if (dbState.pointsToday === 0) {
        icon.innerText = "⚫"; icon.className = "text-xl transition-all duration-300";
    } else if (dbState.pointsToday < 100) {
        icon.innerText = "💡"; icon.className = "text-xl flame-active";
        icon.style.setProperty('--flame-color', 'rgba(6, 182, 212, 0.6)');
        bar.style.background = "linear-gradient(to right, #06b6d4, #3b82f6)";
    } else {
        icon.innerText = "🔥"; icon.className = "text-xl flame-active scale-125";
        icon.style.setProperty('--flame-color', 'rgba(249, 115, 22, 0.9)');
        bar.style.background = "linear-gradient(to right, #f97316, #eab308)";
    }

    // 14. Travas de segurança de pontos da Comunidade
    const comBloqueio = document.getElementById('comunidade-bloqueio');
    if (comBloqueio) {
        if (dbState.pointsStudy >= 1000) {
            comBloqueio.innerHTML = "✅ Seção Liberada! Você possui pontuação para interagir e responder.";
            comBloqueio.className = "p-4 bg-green-950/20 border border-green-900 text-green-400 rounded-2xl text-center text-xs";
        } else if (dbState.pointsStudy >= 500) {
            comBloqueio.innerHTML = "⚠️ Acesso Parcial: Você pode criar dúvidas públicas, mas precisa de 1000 pontos para responder.";
            comBloqueio.className = "p-4 bg-blue-950/20 border border-blue-900 text-blue-300 rounded-2xl text-center text-xs";
        } else {
            comBloqueio.innerHTML = "🔒 Seção protegida. É preciso obter <strong>500 pontos</strong> para abrir publicações e <strong>1000 pontos</strong> para responder.";
            comBloqueio.className = "p-4 bg-gray-950/80 border border-gray-900 rounded-2xl text-center text-xs text-gray-400 my-4";
        }
    }

    localStorage.setItem('deot_engine_data', JSON.stringify(dbState));
}

// 21. LOGIN DO USUÁRIO
function handleLogin() {
    dbState.isLoggedIn = true;
    //document.getElementById('main-header').classList.remove('hidden');
    //document.getElementById('main-header').classList.add('flex');
    //document.getElementById('main-nav').classList.remove('hidden');
    navigateTo('screen-home');
    refreshEngineVisuals();
}

// FLUXO DE NAVEGAÇÃO ENTRE TELAS
function navigateTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    const targetScreen = document.getElementById(id);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    if (id !== appHistory[appHistory.length - 1]) appHistory.push(id);

    const btn = document.getElementById('btn-back');
    if (id === 'screen-home' || id === 'screen-login') {
        btn.classList.add('opacity-0', 'pointer-events-none');
        if (id === 'screen-home') appHistory = ['screen-home'];
    } else {
        btn.classList.remove('opacity-0', 'pointer-events-none');
    }
    window.scrollTo(0,0);
}

function goBack() {
    if (appHistory.length > 1) {
        appHistory.pop();
        const target = appHistory[appHistory.length - 1];
        navigateTo(target);
        appHistory.pop();
    }
}

// 9. ABERTURA DE MATÉRIA DINÂMICA
function openMateria(name, color) {
    activeMateria = name;
    const text = document.getElementById('txt-materia-dinamica');
    text.innerText = `📚 ${name.toUpperCase()}`;
    text.style.setProperty('--underline-color', color);
    
    const components = ['btn-materia-temas', 'btn-materia-resumos', 'btn-materia-mapas', 'btn-materia-videos', 'btn-materia-quiz', 'btn-materia-personalizado', 'btn-materia-duvidas'];
    components.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.setProperty('--glow-color', color);
    });

    document.getElementById('dropdown-temas-container').classList.add('hidden');
    document.getElementById('arrow-temas').innerText = "▼";
    navigateTo('screen-materia');
    renderThemesDropdown();
}

function toggleTemasDropdown() {
    const container = document.getElementById('dropdown-temas-container');
    const arrow = document.getElementById('arrow-temas');
    container.classList.toggle('hidden');
    arrow.innerText = container.classList.contains('hidden') ? "▼" : "▲";
}

function renderThemesDropdown() {
    const container = document.getElementById('dropdown-temas-container');
    container.innerHTML = '';
    dbState.themes.forEach(t => {
        const b = document.createElement('button');
        b.className = "w-full text-left py-2 px-3 hover:bg-white/5 rounded-lg text-xs text-gray-300 font-medium transition-colors flex justify-between";
        b.innerHTML = `<span>• ${t}</span> <span class="text-[10px] text-gray-500">Selecionar ❯</span>`;
        b.onclick = () => initiateQuizFlow(t);
        container.appendChild(b);
    });
}

// 14 & 16 & 17. REQUISITO DE TRAVAS POR PONTOS
function checkPointsBlock(points, msg) {
    if (dbState.pointsStudy < points) {
        alert(`🔒 Recurso Bloqueado!\nVocê precisa de no mínimo ${points} pontos de estudo acumulados para ${msg}.`);
    } else {
        alert(`✅ Acesso Liberado para o repositório público!`);
    }
}

// Execução ao iniciar página
window.addEventListener('DOMContentLoaded', () => {
    if (dbState.isLoggedIn) handleLogin();
});
