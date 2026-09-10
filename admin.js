// ==========================================================================
// DE'OT - MOTOR DE OPERAÇÕES DO PAINEL ADMINISTRATIVO (MOCK)
// ==========================================================================

/**
 * 22. CADASTRO DE NOVOS TEMAS PELO ADMINISTRADOR
 * Lê o campo de texto do painel administrativo, adiciona o novo tema
 * ao estado global e atualiza tanto o painel quanto o app.
 */
function adminRegisterTheme() {
    const input = document.getElementById('admin-new-theme');
    
    // Verifica se o campo não está vazio ou cheio de espaços
    if (input && input.value.trim() !== "") {
        const novoTema = input.value.trim();
        
        // Adiciona o tema ao array global localizado no app.js/database.js
        dbState.themes.push(novoTema);
        
        // Limpa o campo de digitação após o cadastro
        input.value = "";
        
        // Sincroniza a lista visual do painel do administrador
        syncAdminThemesList();
        
        // Recarrega os componentes visuais e salva no localStorage do navegador
        refreshEngineVisuals();
        
        // Se o usuário estiver na tela de uma matéria, atualiza o dropdown de temas imediatamente
        if (typeof renderThemesDropdown === "function") {
            renderThemesDropdown();
        }
        
        alert(`✅ Tema "${novoTema}" cadastrado com sucesso pelo administrador!`);
    } else {
        alert("⚠️ Por favor, digite o nome de um tema válido antes de clicar em adicionar.");
    }
}

/**
 * ATUALIZADOR VISUAL DO PAINEL ADMIN
 * Renderiza na tela do administrador a listagem atualizada de todos os temas
 * que estão cadastrados no sistema local.
 */
function syncAdminThemesList() {
    const ul = document.getElementById('admin-themes-ul');
    
    // Se o elemento não existir na tela atual, interrompe a função para evitar erros
    if (!ul) return;
    
    // Limpa a listagem antiga para evitar duplicações
    ul.innerHTML = '';
    
    // Percorre todos os temas salvos no estado e cria os itens da lista (<li>)
    dbState.themes.forEach(t => {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center py-1 text-gray-400 font-mono text-[11px] border-b border-gray-900/40";
        li.innerHTML = `
            <span>• ${t}</span>
            <span class="text-[9px] text-amber-500/80 bg-amber-950/20 px-1.5 py-0.5 rounded border border-amber-900/30">ATIVO</span>
        `;
        ul.appendChild(li);
    });
}

// Escutador global para sincronizar a lista assim que o ecossistema de visualização for montado
window.addEventListener('DOMContentLoaded', () => {
    // Aguarda um milissegundo para garantir que o injetor do index.html terminou de rodar
    setTimeout(syncAdminThemesList, 50);
});
