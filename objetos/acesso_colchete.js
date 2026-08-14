const cliente ={
    nome: "Luis",
    idade: 16,
    cpf:"1122233345",
    email:"luis@dominio.com"
};

console.log(`0 nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]}anos.`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) =>  {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})