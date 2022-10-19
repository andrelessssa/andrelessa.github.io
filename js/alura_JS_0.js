class cliente {
    nome;
    cpf;
}
class contaCorrente {
    agencia;
    saldo = 0;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;  
        }
    }
}
const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11223344;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 4433221122;



const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.sacar(50);

const contaCorrenteAlice = new contaCorrente();
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1002;

contaCorrenteAlice.depositar(400);
contaCorrenteAlice.sacar(100);


console.log(cliente1);
console.log(contaCorrenteRicardo);

console.log("")
console.log(cliente2);
console.log(contaCorrenteAlice);
