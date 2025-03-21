const hitungFibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let hasil = [0, 1];
    for (let i = 2; i < n; i++) {
        hasil.push(hasil[i - 1] + hasil[i - 2]);
    }
    return hasil;
};


const tampilkanFibonacci = () => {
    let n = document.getElementById("jumlah").value;
    let output = document.getElementById("hasil");

    if (n <= 0 || isNaN(n)) {
        output.innerText = "Masukkan angka lebih dari 0!";
        console.log("Error: Input harus angka lebih dari 0!");
    } else {
        let hasilFibo = hitungFibonacci(n);
        output.innerText = `Deret Fibonacci: ${hasilFibo.join(", ")}`;
        console.log(`Deret Fibonacci (${n} angka):`, hasilFibo);
    }
};
