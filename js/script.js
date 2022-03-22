var contadorPersonal = 0;
var contadorCPU = 0;
var marcadorPersonal = document.getElementById("marcadorPersonal");
var marcadorCPU = document.getElementById("marcadorCPU");
var btnReinicar = document.getElementById("btnReiniciar");
var btnPiedra = document.getElementById("opPiedra");
var btnPapel = document.getElementById("opPapel");
var btnTijera = document.getElementById("opTijera");
var modal = document.getElementById("modal");
var contenedorModal = document.getElementById("contenedorModal");
var contenidoModal = document.getElementById("contenidoModal");
var btnCerrarModal = document.getElementById("btnCerrarModal");
var imgPersonal = document.getElementById("imgPersonal");
var imgCPU = document.getElementById("imgCPU");
var txtResultado = document.getElementById("txtResultado");

function desplegarModal(opPersonal, opCPU, resultado){
    imgPersonal.src = `./img/${opPersonal}.png`;
    imgCPU.src = `./img/${opCPU}.png`;
    imgCPU.classList.add('reflex');
    contenedorModal.style.opacity="1";
    contenedorModal.style.visibility="visible";
    modal.classList.toggle("modalCerrar");
    txtResultado.innerHTML=`${resultado}`;
}

function cerrarModal(){
    modal.classList.toggle("modalCerrar");
    setTimeout(function(){
        contenedorModal.style.opacity="0";
        contenedorModal.style.visibility="hidden";
    }, 600);
}

function obtenerOpCPU(){
    var opciones = ['Piedra', 'Papel', 'Tijera'];
    var numeroAleatorio = Math.floor(Math.random()*3);
    return opciones[numeroAleatorio];
}

function ganar(opPersonal, opCPU){
    contadorPersonal++;
    marcadorPersonal.innerHTML = contadorPersonal;
    desplegarModal(opPersonal, opCPU, 'You win!');
}

function perder(opPersonal, opCPU){
    contadorCPU++;
    marcadorCPU.innerHTML = contadorCPU;
    desplegarModal(opPersonal, opCPU, 'You lost :(');
/*     contenidoModal.innerHTML=`<h1>You lost :(</h1><p>CPU chose ${opCPU}</p>`;
 */}

function empate(opPersonal, opCPU){
    desplegarModal(opPersonal, opCPU, "It's a draw");
}


function jugar(opPersonal){
    var opCPU = obtenerOpCPU();
    if(opPersonal !== opCPU){
        if(
            opPersonal === 'Piedra' && opCPU === 'Tijera' ||
            opPersonal === 'Papel' && opCPU === 'Piedra' ||
            opPersonal === 'Tijera' && opCPU === 'Papel'
            )
            ganar(opPersonal, opCPU);
        else
            perder(opPersonal, opCPU);
    }else{
        empate(opPersonal, opCPU);
    }
}

function reiniciarMarcador(){
    contadorPersonal = 0;
    contadorCPU = 0;
    marcadorPersonal.innerHTML = 0;
    marcadorCPU.innerHTML = 0;
}

btnPiedra.addEventListener('click', function(){
    jugar('Piedra');
});
btnPapel.addEventListener('click', function(){
    jugar('Papel');
});
btnTijera.addEventListener('click', function(){
    jugar('Tijera');
});

btnReinicar.addEventListener('click', function(){
    reiniciarMarcador();
});

btnCerrarModal.addEventListener('click', function(){
    cerrarModal();
});

window.addEventListener('click', function(e){
    if(e.target === contenedorModal){
        cerrarModal();
    }
});