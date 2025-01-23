export function collectUserData(usercomponent) {
  const userComponent = document.querySelector("user-component");

  const name = userComponent.shadowRoot.getElementById("nameClient").value;
  const lastName = userComponent.shadowRoot.getElementById("lastClient").value;
  const address = userComponent.shadowRoot.getElementById("address").value;
  const email = userComponent.shadowRoot.getElementById("email").value;
  const codeProd = usercomponent.shadowRoot.getElementById("codeNumber").value;
  const value = usercomponent.shadowRoot.getElementById("unitValue").value;
  const amount = usercomponent.shadowRoot.getElementById("amountProd").value;

  // Enviar los datos a través de un CustomEvent
  userComponent.dispatchEvent(
    new CustomEvent("userDataSubmitted", {
      detail: { name, lastName, address, email, codeProd, value, amount },
    })
  );
}

export async function createNumberFact() {
  try {
    const response = await fetch("http://localhost:3000/invoices");
    const invoices = await response.json();

    const maxInvoiceId = invoices.reduce(
      (max, invoice) => Math.max(max, invoice.id),
      100
    );
    const nextInvoiceNumber = maxInvoiceId + 1;
    console.log("Next invoice number:", nextInvoiceNumber);

   
  } catch (error) {
    console.error("Error fetching invoices:", error);
   
  }
}
