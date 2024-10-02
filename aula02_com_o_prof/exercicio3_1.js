const temperaturas = [25, 30, 15, 20];

console.log(`As temperaturas armazenadas são: ${temperaturas}`);

const temperatura = temperaturas[Math.floor(Math.random() * temperaturas.length)];

var fahrenheit = ((temperatura * 9)/5) + 32;

console.log(`A temperatura sorteada é ${temperatura}°C, que corresponde a ${fahrenheit}°F`);