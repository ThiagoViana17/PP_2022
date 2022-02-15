const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function sumTotal(x, y){
    let total = 0;
    for(let i = 0; i < x; i++){
        total = total + y;
    }

    return total;
}

rl.question('Digite o primeiro numero para multiplicar: ', (numberOne) => {
    rl.question('Digite o segundo numero para multiplicar com o primeiro: ', (numberTwo)=>{
        const x = parseFloat(numberOne);
        const y = parseFloat(numberTwo);
        const total = sumTotal(x, y);
        console.log('O total da multiplicação é ', total);
        rl.close();
    })
});

rl.on('close', function () {
    console.log('\nFIM!');
    process.exit(0);
});