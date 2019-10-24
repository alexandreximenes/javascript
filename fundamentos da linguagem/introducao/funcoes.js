function imprimeSoma(a,b){
    console.log(` a + b = ${a + b}`);
}

function retornaSoma(a, b = 1){
    return a + b;
}



imprimeSoma(2,3);
console.log(retornaSoma(2,10));


//variavel armazenando função

let soma = function (a,b=1) {
    console.log(a+b);
}

soma(10,10);
console.log(typeof soma);

let somaArrow = (a,b) => console.log(a+b); 


somaArrow(15,10);



const func = [];

for(let i = 0 ; i < 10; i++){
    func.push(function(){
        console.log(i)
    });
}

console.log("func");
func[2]();
func[8]();