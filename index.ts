import { Greeter } from './greeter';

let greeter = new Greeter('Senhor');
const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();

//console.log("Olá TypeScript!");
/* for (let i = 0; i <= 10; i++) {
  if(i % 2 == 0){
    console.log(i + ' Par');  
  }
  else{
    console.log(i + ' Impar');  
  }
} */

// Write TypeScript code!
let title: string = 'MeuApp';

let paragraph: string = 'Blablabla';

const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

/*const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = paragraph;*/

let counter = 0;

let intervalId = setInterval(() => {
  counter++;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter + '';
}, 1000);

const btn = document.getElementById('app.btn');
btn.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando pelo typescript');
}
