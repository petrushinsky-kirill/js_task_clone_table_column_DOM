"use strict";
const table = document.querySelector("table");
const tableHead = table.querySelector("thead tr");
const tableBody = table.querySelectorAll("tbody tr");
const tableFoot = table.querySelector("tfoot tr");
const newHeadRow = tableHead.children[1].cloneNode(true);
const newFootRow = tableFoot.children[1].cloneNode(true);
tableHead.lastElementChild.before(newHeadRow);
tableFoot.lastElementChild.before(newFootRow);
for (const row of tableBody){
    const newbodyRow = row.children[1].cloneNode(true);
    row.lastElementChild.before(newbodyRow);
}

//# sourceMappingURL=index.f75de5e1.js.map
