function makeDiagonalRed(table) {

  const rows = table.querySelectorAll('tr');
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td');

    if (i < cells.length) {
      cells[i].style.backgroundColor = 'red';
    }
  }
}



