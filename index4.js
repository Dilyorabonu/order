function oraliq(a, b) {

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

const a = parseInt(prompt("Raqam kiriting (a):"));
const b = parseInt(prompt("Ikkinchi raqamni kiriting (b):"));

console.log(`Berilgan raqamlar bo'yicha Juft sonlar ro'yhati ${a} va ${b}:`);
console.log(oraliq(a, b));