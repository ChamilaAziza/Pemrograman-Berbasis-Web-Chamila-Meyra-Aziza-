const kalkulator = (operator, ...args) => {
    if (args.length < 2) return "Masukkan dua angka!";

    let [a, b] = args;

    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Tidak bisa dibagi 0!";
        case '%': return b !== 0 ? a % b : "Tidak bisa dibagi 0!";
        default: return "Operator tidak valid!";
    }
};

const hitung = (operator) => {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let output = document.getElementById("hasil");

    if (isNaN(angka1) || isNaN(angka2)) {
        output.innerText = "Masukkan dua angka yang valid!";
        return;
    }

    let hasil = kalkulator(operator, angka1, angka2);
    output.innerText = `Hasil: ${hasil}`;
    console.log(`Hasil dari ${angka1} ${operator} ${angka2} = ${hasil}`);
};
