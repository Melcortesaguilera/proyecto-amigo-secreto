// Crear lista para almacenar los nombres

let amigos = [];


function agregarAmigo () {
    let input = document.getElementById("amigo");//capturar nombre del amigo
    let nombre = input.value.trim(); // Eliminar espacios en blanco al principio o final del nombre
    //validar la entrada que no este vacia
    if ( nombre === '') {
        alert ('Por favor ingresa el nombre de tu amigo.');
        return;
    }
    //agregar amigo a la lista
    amigos.push(nombre);
    //limpiar 
    input.value = '';
    //mostrar lista
    mostrarLista();
}

function mostrarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // limpiar lista antes de actualizar
    
    for (amigo of amigos) {
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);

    }
}

//sorteo del amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert ('No hay amigos en la lista para sortear')
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML =  `El amigo sorteado es ${amigoSorteado}`;
    
}







