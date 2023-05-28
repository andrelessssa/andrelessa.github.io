function salvarResumo() {
  const materia = document.getElementById('materia').value;
  const assunto = document.getElementById('assunto').value;
  const data = document.getElementById('data').value;
  const resumo = document.getElementById('resumo').value;

  const resumosSalvos = localStorage.getItem('resumos');
  let resumos = [];

  if (resumosSalvos) {
    resumos = JSON.parse(resumosSalvos);
  }

  resumos.push({ materia, assunto, data, resumo });

  localStorage.setItem('resumos', JSON.stringify(resumos));

  document.getElementById('materia').value = '';
  document.getElementById('assunto').value = '';
  document.getElementById('data').value = '';
  document.getElementById('resumo').value = '';

  window.location.href = '/Memoriz/html/meusResumos.html';
}

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário
  salvarResumo();
});
