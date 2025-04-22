function highlight(table) {
  
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    const cells = row.getElementsByTagName('td');
    
    if (cells[3].hasAttribute('data-available')) {

      if (cells[3].getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', true);
    }

    if (cells[2].textContent === 'm') {
      row.classList.add('male');
    } else if (cells[2].textContent === 'f') {
      row.classList.add('female');
    }

    if (parseInt(cells[1].textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
