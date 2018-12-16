// Uma função recebe um valor e faz todo o tratamento necessário, porém não cria efeitos colaterais;
// Uma função sempre retorna um valor;
// É interessante a tipagem dos valores para que não ocorra erro durante o processamento;
// É possível chamar uma função passando uma outra função com argumento, como é no jQuery, por exemplo;

function setIdade(idade){return idade;} 

var idade = setIdade(30);

function maioridade(idade){return idade>=18;}

// Exemplo de repetição sem a utilização da multiplicação

var repeat = function(s){return s+s;};

// Função para tratar o valor

var str= function(s){
    if(typeof s !== 'string'){
        throw new TypeError('Expected a string')}
    else{
        return s;
    }
}