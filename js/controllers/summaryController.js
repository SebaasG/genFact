export function dataTable(tableComponent, summaryComponent) {
  const rows = tableComponent.shadowRoot.querySelectorAll("tbody tr");
  const data = [];
  let total = 0;

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    if (cells.length >= 5) {
      const rowData = {
        code: cells[0].textContent.trim(),
        name: cells[1].textContent.trim(),
        value: parseFloat(cells[2].textContent.trim()) || 0,
        amount: parseInt(cells[3].textContent.trim()) || 0,
        subTotal: parseFloat(cells[4].textContent.trim()) || 0,
      };

      total += rowData.subTotal;
      data.push(rowData);
    }
  });

  const iva = total * 0.19;
  const grandTotal = total + iva;

  // Obtener los elementos dentro del shadow DOM del summaryComponent
  const subtotalElement = summaryComponent.shadowRoot.querySelector("#subtotal");
  const ivaElement = summaryComponent.shadowRoot.querySelector("#iva");
  const totalElement = summaryComponent.shadowRoot.querySelector("#total");

  if (subtotalElement && ivaElement && totalElement) {
    subtotalElement.textContent = `$${total.toFixed(2)}`;
    ivaElement.textContent = `$${iva.toFixed(2)}`;
    totalElement.textContent = `$${grandTotal.toFixed(2)}`;
  } else {
    console.error("No se encontraron los elementos del resumen en el shadow DOM.");
  }

  return data;
}

export function observeTableChanges(tableComponent, callback) {
  const tableBody = tableComponent.shadowRoot.querySelector("tbody");

  if (!tableBody) {
    console.error("No se encontró el cuerpo de la tabla.");
    return;
  }

  const observer = new MutationObserver(() => {
    callback();
  });

  observer.observe(tableBody, { childList: true, subtree: true });

  return observer;
}

export async function saveInvoice(summaryComponent) {
  const userComponent = document.querySelector("user-component");

  if (!userComponent) {
    console.error("user-component no encontrado.");
    return;
  }

  const dataString = localStorage.getItem("dataParcial");

  if (!dataString) {
    console.error("No hay datos almacenados en localStorage.");
    return;
  }

  try {
    const data = JSON.parse(dataString);
    const { numInvoice, document } = data;
    const today = new Date().toISOString().split("T")[0];

    // Obtener el total desde la tabla
    const totalElement = summaryComponent.shadowRoot.querySelector("#total");
    const total = totalElement ? parseFloat(totalElement.textContent.replace(/\D/g, "")) : 0;

    const invoiceData = {
      invoiceId: numInvoice,
      clientId: document,
      total,
      date: today,
    };

    console.log("Enviando datos:", invoiceData);

    const response = await fetch("http://localhost:3000/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoiceData),
    });

    if (response.ok) {
      console.log("Factura guardada correctamente");
    } else {
      console.error("Error al guardar la factura");
    }
  } catch (error) {
    console.error("Error procesando los datos:", error);
  }
}
