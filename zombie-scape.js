//Animação efeito máquina de escrever js
function TypeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}
const titulo = document.querySelector('h1');
TypeWriter(titulo);
TypeWriter(document.querySelector('h3'));

