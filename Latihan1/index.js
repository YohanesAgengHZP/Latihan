require('dotenv').config({ override: true });

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.env.yourName;
const environment = process.env.environment;

for(let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);