
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter os valores digitados pelo usuário
    var materia = document.getElementById('materia').value;
    var assunto = document.getElementById('assunto').value;
    var data = document.getElementById('data').value;
    var resumo = document.getElementById('resumo').value;
  
    // Armazenar os valores no localStorage
    localStorage.setItem('materia', materia);
    localStorage.setItem('assunto', assunto);
    localStorage.setItem('data', data);
    localStorage.setItem('resumo', resumo);
  
    // Redirecionar para outra página
    window.location.href = '/Memoriz/html/meusResumos.html';
  });
  


