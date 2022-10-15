class cliente {
    nome;
    cpf;

}
const cliente1 = new cliente();
const cliente2 = new cliente();


class contaCorrente {
    agencia;
    saldo;

    sacar(valorSacado) {
        
if (conta2.saldo >= valorSacado) {
    conta2.saldo -= valorSacado;
    console.log(conta2.saldo)

} else {
    console.log(`Seu Saldo é ${conta2.saldo} por isso nao foi possivel` )
}
        
    }
}

let valorSacado = 150;


const conta1 = new contaCorrente();
const conta2 = new contaCorrente();
conta2.saldo = 100;
conta2.sacar(valorSacado);


cliente1.nome = "Ricardo";
cliente1.cpf = 11121212;


cliente2.nome = "Alice";
cliente2.cpf = 111212882;

conta1.agencia = 1001;
conta1.saldo = 10;

conta2.agencia = 1001;



console.log(cliente1, conta1);
console.log(cliente2, conta2);

