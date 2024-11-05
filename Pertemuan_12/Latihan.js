const pelanggan = [
  {
    id_pelanggan: 1,
    nama_pelanggan: "John Doe",
    saldo_awal: 150000,
    riwayat_transaksi: [
      { type: "debit", amount: 50000 },
      { type: "kredit", amount: 100000 },
    ],
  },
  {
    id_pelanggan: 2,
    nama_pelanggan: "Jane Doe",
    saldo_awal: 200000,
    riwayat_transaksi: [
      { type: "kredit", amount: 150000 },
      { type: "debit", amount: 100000 },
    ],
  },
  {
    id_pelanggan: 3,
    nama_pelanggan: "Bob Smith",
    saldo_awal: 50000,
    riwayat_transaksi: [
      { type: "debit", amount: 20000 },
      { type: "kredit", amount: 10000 },
    ],
  },
];

function hitungSaldoAkhir(pelanggan) {
  return pelanggan.map((p) => {
    const saldo_akhir = p.riwayat_transaksi.reduce((total, value) => {
      if (value.type === "kredit") {
        return total - value.amount;
      }
      return total + value.amount;
    }, p.saldo_awal);

    return { nama_pelanggan: p.nama_pelanggan, saldo_akhir: saldo_akhir };
  });
}

function filterSaldoRendah(pelanggan) {
  return pelanggan.filter((p) => p.saldo_akhir < 100000);
}

function totalDebit(pelanggan) {
  return pelanggan.reduce((totalLuar, p) => {
    for (let i = 0; i < p.riwayat_transaksi.length; i++) {
      if (p.riwayat_transaksi[i].type === "debit") {
        totalLuar += p.riwayat_transaksi[i].amount;
      }
    }
    return totalLuar;
  }, 0);
}

/**
     * totalLuar = 0
     * p -> isi dari pelanggan
     * p.riwayat_transaksi -> pelanggan -> isinya riwayat transaksi
     */

function main() {
  const saldoAkhir = hitungSaldoAkhir(pelanggan);
  //   console.log(saldoAkhir);
  console.log("Saldo Akhir Pelanggan : ", saldoAkhir);

  const pelangganSaldoRendah = filterSaldoRendah(saldoAkhir);
  console.log("Pelanggan dengan Saldo < 100.000", pelangganSaldoRendah);

  const totalDebitTransaksi = totalDebit(pelanggan);
  console.log("Total Debit Semua Pelanggan", totalDebitTransaksi);
}

main();
