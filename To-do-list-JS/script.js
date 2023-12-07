const button = document.querySelector(".button-add");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector('.list-task');

let minhaLista = [];

function adicionarNovaTareva(){
    if(!input.value){
        alert("Por favor, digite um tarefa!");
    }else{
    minhaLista.push({
        tarefa: input.value,
        concluida:false 
        
     });

    input.value = "";

    mostrarTarefa();
    }
}
function mostrarTarefa(){

        let novaLi =  '';

        minhaLista.forEach( (item, index) => {
            novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}" >
                <img  src="./image/2.png" alt="check-confirmado" onclick="cocluirtaresa(${index})">
                <p> ${ item.tarefa }</p>
               <img src="./image/1.png" alt="tarefa-excluir" onclick="deletarItem(${index})">
            </li>
            
            `
        } )
        listaCompleta.innerHTML = novaLi;
        localStorage.setItem('lista', JSON.stringify(minhaLista));

}
function deletarItem(index){
    minhaLista.splice(index , 1 );
    mostrarTarefa() ;
    
}
function cocluirtaresa(index){
    minhaLista[index].concluida = !minhaLista[index].concluida;

    mostrarTarefa() ;

}
function recarregarTarefas(){
    const tarefasDoLocal = localStorage.getItem('lista')

    if(tarefasDoLocal){
    minhaLista = JSON.parse(tarefasDoLocal);
    }    
    mostrarTarefa();
}

recarregarTarefas()
button.addEventListener("click", adicionarNovaTareva );
