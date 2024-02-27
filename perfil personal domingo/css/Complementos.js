function accion(){}
console.log('esta en funcion mi boton');
var ancla = document.getElementsByClassName('conM');
for (var i=0; i < ancla.legth; i++){
    ancla[i].classList.toggle('desaparece');
}