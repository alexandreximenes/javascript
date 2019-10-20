const texto = "texto";


const funcao = s => setInterval(() => console.log(`Chamada de uma função`),5000);
const funcao2 = s2 => s2.toUpperCase();
const funcao3 = s3 => console.log(s3.toLowerCase());

console.log(`Função2 ${funcao2('meu texto em maiusculo')}`);

funcao();

funcao3('TUDO JAVASCRIPT')



