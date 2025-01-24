export function dataTable(tableComponent, summaryComponent) {
  const rows = tableComponent.shadowRoot.querySelectorAll("tbody tr");
  const data = [];
  let total = 0;

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const rowData = {
      code: cells[0].textContent,
      name: cells[1].textContent,
      value: parseFloat(cells[2].textContent),
      amount: parseInt(cells[3].textContent),
      subTotal: parseFloat(cells[4].textContent),
    };
    total += rowData.subTotal;
    data.push(rowData);
  });

  const iva = total * 0.19;
  const grandTotal = total + iva;

  //   // Insertar valores en la tabla del summaryComponent
  //   summaryComponent.shadowRoot.getElementById(
  //     "subDet"
  //   ).innerHTML = `Subtotal: $${total.toFixed(2)}`;

  const rowsFooter = summaryComponent.shadowRoot.querySelectorAll("tfoot tr");

  rowsFooter[0].innerHTML = `<th colspan="3">SubTotal</th><td>$${total.toFixed(
    2
  )}
   </td>`;

  if (rowsFooter.length > 1) {
    rowsFooter[1].innerHTML = `<th colspan="3">IVA (19%)</th><td>$${iva.toFixed(
      2
    )}</td>`;
  }

  if (rowsFooter.length > 2) {
    rowsFooter[2].innerHTML = `<th colspan="3">Total</th><td>$${grandTotal.toFixed(
      2
    )}</td>`;
  }

  return data;
}

export function observeTableChanges(tableComponent, callback) {
  const tableBody = tableComponent.shadowRoot.querySelector("tbody");

  if (!tableBody) {
    console.error("No se encontró el cuerpo de la tabla.");
    return;
  }

  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList") {
        callback(mutation);
      }
    });
  });

  observer.observe(tableBody, { childList: true });

  return observer;
}
