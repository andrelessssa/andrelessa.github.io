document.addEventListener('DOMContentLoaded', function() {
    const resumosSalvos = localStorage.getItem('resumos');
    const resumosLista = document.getElementById('resumos-lista');
  
    if (resumosSalvos) {
      const resumos = JSON.parse(resumosSalvos);
  
      resumos.forEach(function(resumo) {
        const li = document.createElement('li');
        li.textContent = `Matéria: ${resumo.materia}, Assunto: ${resumo.assunto}, Data: ${resumo.data}, Resumo: ${resumo.resumo}`;
        resumosLista.appendChild(li);
      });
    }
  });
  
  
  