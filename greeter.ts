export class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }
  getGreeting() {
    return `Olá, ${this.greeting}`;
  }
}
