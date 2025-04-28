'use strict';

const table = document.querySelector('table');
const tableHeadRow = table.querySelector('thead tr');
const tableBodyRow = table.querySelectorAll('tbody tr');
const tableFootRow = table.querySelector('tfoot tr');

const newHeadRow = tableHeadRow.children[1].cloneNode(true);
const newFootRow = tableFootRow.children[1].cloneNode(true);

tableHeadRow.lastElementChild.before(newHeadRow);
tableFootRow.lastElementChild.before(newFootRow);

for (const row of tableBodyRow) {
  const newbodyRow = row.children[1].cloneNode(true);

  row.lastElementChild.before(newbodyRow);
}
