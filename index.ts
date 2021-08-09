// Import stylesheets
import './style.css';

//EX1 console.log("Olá TypeScript!");
for(let i = 0; i <= 10; i++){
  console.log(i);
};

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Teste</h1>`;
