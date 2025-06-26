// Luas Segitiga
function hitungLuasSegitiga() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById("hasil-luas-segitiga").textContent = "Masukkan angka yang benar.";
    return;
  }
  const hasil = 0.5 * alas * tinggi;
  document.getElementById("hasil-luas-segitiga").textContent = `Luas = ${hasil} cm²`;
}

// Luas Jajar Genjang
function hitungLuasJajarGenjang() {
  const alasjg = parseFloat(document.getElementById("alas-jg").value);
  const tinngijg = parseFloat(document.getElementById("tinggi-jg").value);
  if (isNaN(d1) || isNaN(d2)) {
    document.getElementById("hasil-luas-jg").textContent = "Masukkan angka yang benar.";
    return;
  }
  const hasil = alasjg * tinggijg;
  document.getElementById("hasil-luas-jg").textContent = `Luas = ${hasil} cm²`;
}

// Keliling Segitiga
function hitungKelilingSegitiga() {
  const a = parseFloat(document.getElementById("sisi-a").value);
  const b = parseFloat(document.getElementById("sisi-b").value);
  const c = parseFloat(document.getElementById("sisi-c").value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("hasil-keliling-segitiga").textContent = "Masukkan semua sisi.";
    return;
  }
  const hasil = a + b + c;
  document.getElementById("hasil-keliling-segitiga").textContent = `Keliling = ${hasil} cm`;
}

// Keliling Jajar Genjang
function hitungKelilingJajarGenjang() {
  const a = parseFloat(document.getElementById("sisi-a-jg").value);
  const b = parseFloat(document.getElementById("sisi-b-jg").value);
  const c = parseFloat(document.getElementById("sisi-c-jg").value);
  const d = parseFloat(document.getElementById("sisi-d-jg").value);
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    document.getElementById("hasil-keliling-jg").textContent = "Masukkan semua sisi.";
    return;
  }
  const hasil = a + b + c + d;
  document.getElementById("hasil-keliling-jg").textContent = `Keliling = ${hasil} cm`;
}
