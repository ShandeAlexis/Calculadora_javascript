//esto agregar el boton a la pantalla
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}
//borrar datos de la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}
//calcular operacion en la pantalla
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}