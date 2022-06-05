const fs = require('fs');

// Membuat folder data Jika Tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
// Membuat File "dataweb.json" Jika Tidak ada
const dataPath = './data/dataweb.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Function Menampilkan data
const loadData = () => {
    const fileBuffer = fs.readFileSync('data/dataweb.json', 'utf-8');
    const value = JSON.parse(fileBuffer);
    return value;
}

// Mencari Sebuah data "nama" di dataweb.json
const findData = (nama) => {
    const datas = loadData()
    const data = datas.find((data) => data.nama.toLowerCase() === nama.toLowerCase());
    return data;
}

// Menuliskan / Menimpa File dataweb.json dengan data yang baru
const saveDatas = (datas) => {
    fs.writeFileSync('data/dataweb.json', JSON.stringify(datas));
}

// Menambahkan Data Baru
const addData = (data) => {
    const datas = loadData();
    datas.push(data);
    saveDatas(datas);
}

// Cek nama Yang Duplikat
const cekDuplikat =  (nama) => {
    const datas = loadData();
    return datas.find((data) => data.nama === nama);
}

// Hapus Data
const deleteData = (nama) => {
    const Datas = loadData();
    const filteredDatas = Datas.filter((data) => data.nama !== nama);
    saveDatas(filteredDatas)
}
// Export

module.exports = { loadData, findData, addData, cekDuplikat, deleteData }