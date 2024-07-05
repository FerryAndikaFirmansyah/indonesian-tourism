function prosesTransaksi(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const nomorhp = document.getElementById('nomorhp').value;
    const hotel = document.getElementById('hotel').value;
    const tanggal = document.getElementById('tanggal').value;

    const hasilTransaksi = `
        <h3>Detail Transaksi:</h3>
        <p>Nama: ${nama}</p>
        <p>Email: ${email}</p>
        <p>Nomor Handphone: ${nomorhp}</p>
        <p>Hotel: ${hotel}</p>
        <p>Tanggal Check-in: ${tanggal}</p>
        <p>Tanggal Check-out: ${tanggal}</p>
    `;

    document.getElementById('transaksi-hasil').innerHTML = hasilTransaksi;
}
