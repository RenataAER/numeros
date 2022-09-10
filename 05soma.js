
// soma dos números de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = numeros.reduce(function(pilha, numero){
    return pilha + numero;
});
console.log(soma)