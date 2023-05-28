// Obter os valores armazenados no localStorage
var materia = localStorage.getItem('materia');
var assunto = localStorage.getItem('assunto');
var data = localStorage.getItem('data');
var resumo = localStorage.getItem('resumo');

// Use os valores como desejar
console.log('Materia:', materia);
console.log('Assunto:', assunto);
console.log('Data:', data);
console.log('Resumo:', resumo);

// Limpar os valores armazenados no localStorage, se necessário
localStorage.removeItem('materia');
localStorage.removeItem('assunto');
localStorage.removeItem('data');
localStorage.removeItem('resumo');