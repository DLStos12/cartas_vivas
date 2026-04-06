// Loader - Ocultar quando a página termina de carregar
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// Função de trocar video
function trocarVideo(id){
    const player =document.getElementById('player');

    player.src = "https://www.youtube.com/embed/" + id
}


// Função que troca as abas de videos nas sugestões
function mostrarSermao(){
    const sermao = document.querySelector('.sermao');

    const sections = document.querySelectorAll('.sermao, .devocional, .louvores');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    sermao.style.display = 'grid';
    sermao.style.gridTemplateColumns = '1fr 1fr';
    sermao.style.gap = '20px';
    sermao.style.opacity = '0';
    setTimeout(() => {
        sermao.style.opacity = '1';
    }, 100);
}
function mostrarDevocional(){
    const devocional = document.querySelector('.devocional');

    const sections = document.querySelectorAll('.sermao, .devocional, .louvores');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    devocional.style.display = 'grid';
    devocional.style.gridTemplateColumns = '1fr 1fr';
    devocional.style.gap = '20px';
    devocional.style.opacity = '0';
    setTimeout(() => {
        devocional.style.opacity = '1';
    }, 100);
}
function mostrarLouvores(){
    const louvores = document.querySelector('.louvores');

    const sections = document.querySelectorAll('.sermao, .devocional, .louvores');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    louvores.style.display = 'grid';
    louvores.style.gridTemplateColumns = '1fr 1fr';
    louvores.style.gap = '20px';
    louvores.style.opacity = '0';
    setTimeout(() => {
        louvores.style.opacity = '1';
    }, 100);
}

// Função que troca as abas de videos nas sugestões
function mostrarSermaoMobile(){
    const sermao = document.querySelector('.sermao-mobile');

    const sections = document.querySelectorAll('.sermao-mobile, .devocional-mobile, .louvores-mobile');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    sermao.style.display = 'grid';
    sermao.style.gridTemplateColumns = '1fr 1fr';
    sermao.style.gap = '20px';
    sermao.style.opacity = '0';
    setTimeout(() => {
        sermao.style.opacity = '1';
    }, 100);
}
function mostrarDevocionalMobile(){
    const devocional = document.querySelector('.devocional-mobile');

    const sections = document.querySelectorAll('.sermao-mobile, .devocional-mobile, .louvores-mobile');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    devocional.style.display = 'grid';
    devocional.style.gridTemplateColumns = '1fr 1fr';
    devocional.style.gap = '20px';
    devocional.style.opacity = '0';
    setTimeout(() => {
        devocional.style.opacity = '1';
    }, 100);
}
function mostrarLouvoresMobile(){
    const louvores = document.querySelector('.louvores-mobile');

    const sections = document.querySelectorAll('.sermao-mobile, .devocional-mobile, .louvores-mobile');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    louvores.style.display = 'grid';
    louvores.style.gridTemplateColumns = '1fr 1fr';
    louvores.style.gap = '20px';
    louvores.style.opacity = '0';
    setTimeout(() => {
        louvores.style.opacity = '1';
    }, 100);
}




// Abrir e fechar a aba de estudo
function abrirEstudo(id){
    const estudo = document.getElementById(id);
    if (estudo) {
        estudo.classList.add("aberto");
    }
}

function fecharEstudo(botao){
    const estudo = botao.closest(".estudo");
    if (estudo) {
        estudo.classList.remove("aberto");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botoesAbrir = document.querySelectorAll(".abrir-estudo");
    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", (event) => {
            event.preventDefault();
            abrirEstudo(botao.dataset.target);
        });
    });

    const botoesFechar = document.querySelectorAll(".estudo .fechar");
    botoesFechar.forEach(botao => {
        botao.addEventListener("click", () => fecharEstudo(botao));
    });
});


// função para abrir o video recomendado
function abrirRecomendado(){
    document.getElementById("abaRecomendado").style.display ="block";
}

function fecharRecomendado(){
    document.getElementById("abaRecomendado").style.display= "none"
}



// função para abrir o versiculo recomendado
function abrirVersiculo(){
    document.getElementById("abaVersiculo").style.display ="block";
}

function fecharVersiculo(){
    document.getElementById("abaVersiculo").style.display= "none"
}






// Função para enviar pedido de oração
const formOracao = document.getElementById("formOracao");

if (formOracao) {
    formOracao.addEventListener("submit", function(e){
        e.preventDefault();

        const nome= document.getElementById('nome').value;
        const pedido = document.getElementById('pedido').value;

        const url= "https://docs.google.com/forms/d/e/1FAIpQLSdQjYyZ7P2EIrPOgBH9MaNK9_s4_lCwmhgnlXW3A7BZ_FIZkA/formResponse";

        const dados = new FormData();
        dados.append("entry.243779129", nome);
        dados.append("entry.1025573461", pedido);

        fetch(url, {
            method: "POST",
            mode: "no-cors",
            body: dados
        }).then(() => {
            document.getElementById("menssagem").innerText = "Pedido Enviado! Estaremos orando por você!";

            document.getElementById("formOracao").reset();
        });
    });
}
