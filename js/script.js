// Luas Segitiga
function hitungLuasSegitiga() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    document.getElementById("hasil-luas-segitiga").textContent = "Masukkan angka positif yang benar.";
    return;
  }

  const hasil = 0.5 * alas * tinggi;
  document.getElementById("hasil-luas-segitiga").textContent = `Luas Segitiga = ${hasil.toFixed(2)} cm²`;
}

// Luas Jajar Genjang
function hitungLuasJajarGenjang() {
  const alasjg = parseFloat(document.getElementById("alas-jg").value);
  const tinggijg = parseFloat(document.getElementById("tinggi-jg").value);

  if (isNaN(alasjg) || isNaN(tinggijg) || alasjg <= 0 || tinggijg <= 0) {
    document.getElementById("hasil-luas-jg").textContent = "Masukkan angka positif yang benar.";
    return;
  }

  const hasil = alasjg * tinggijg;
  document.getElementById("hasil-luas-jg").textContent = `Luas Jajar Genjang = ${hasil.toFixed(2)} cm²`;
}

// Keliling Segitiga
function hitungKelilingSegitiga() {
  const a = parseFloat(document.getElementById("sisi-a").value);
  const b = parseFloat(document.getElementById("sisi-b").value);
  const c = parseFloat(document.getElementById("sisi-c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("hasil-keliling-segitiga").textContent = "Masukkan semua sisi dengan angka positif.";
    return;
  }

  const hasil = a + b + c;
  document.getElementById("hasil-keliling-segitiga").textContent = `Keliling Segitiga = ${hasil.toFixed(2)} cm`;
}

// Keliling Jajar Genjang
function hitungKelilingJajarGenjang() {
  const a = parseFloat(document.getElementById("sisi-a-jg").value);
  const b = parseFloat(document.getElementById("sisi-b-jg").value);
  const c = parseFloat(document.getElementById("sisi-c-jg").value);
  const d = parseFloat(document.getElementById("sisi-d-jg").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
    document.getElementById("hasil-keliling-jg").textContent = "Masukkan semua sisi dengan angka positif.";
    return;
  }

  const hasil = a + b + c + d;
  document.getElementById("hasil-keliling-jg").textContent = `Keliling Jajar Genjang = ${hasil.toFixed(2)} cm`;
}
