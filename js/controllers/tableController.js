export function setTable(tableComponent, tableData) {
  const tbody = tableComponent.shadowRoot.querySelector("tbody");

  const subTotal = tableData.value * tableData.amount;
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
      <td>${tableData.codeProd}</td>
      <td>${tableData.nameProd}</td>
      <td>${tableData.value}</td>
      <td>${tableData.amount}</td>
      <td>${subTotal}</td>
      <td><button class="btn btn-danger btnDelete">X</button></td>
    `;
  tbody.appendChild(tableRow);

  const btnDelete = tableRow.querySelector(".btnDelete");
  btnDelete.addEventListener("click", () => {
    tableRow.remove(); 
  });
}
