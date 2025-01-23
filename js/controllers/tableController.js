
export function setTable(tableComponent, tableData) {
    const tbody = tableComponent.shadowRoot.querySelector("tbody");
    // tbody.innerHTML = ""; 
  
    const subTotal = tableData.value * tableData.amount;
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `
        <td>${tableData.codeProd}</td>
        <td>${tableData.nameProd}</td>
        <td>${tableData.value}</td>
        <td>${tableData.amount}</td>
        <td>${subTotal}</td>
        <td><button class="btn-danger" id = "btnDelete">X</button></td>
        `;
      tbody.appendChild(tableRow);

      const btnDelete = tableComponent.shadowRoot.getElementById("btnDelete");
        btnDelete.addEventListener("click", () => {
    alert("hola");
})
    }


// }
  