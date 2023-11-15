function convertToRupiah(number) {
  var rupiah = '';
  var numberRev = number.toString().split('').reverse().join('');
  for (var i = 0; i < numberRev.length; i++) if (i % 3 == 0) rupiah += numberRev.substr(i, 3) + '.';
  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
}

export default convertToRupiah;
