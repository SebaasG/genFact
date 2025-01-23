class ProductComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <form>
        <label for="selectProd" class="form-label">Select Product</label>
        <select class="form-select" aria-label="Default select example" id="selectProd">
          <option selected>...</option>
        </select>

        <div class="mb-3">
          <label for="invNumber" class="form-label">Name Product</label>
          <input type="number" class="form-control" id="invNumber" disabled aria-describedby="numberFact">
        </div>

        <div class="d-flex gap-3">
          <div class="flex-grow-1">
            <label for="nameClient" class="form-label">Unit Value</label>
            <input type="text" class="form-control" id="nameClient">
          </div>
          <div class="flex-grow-1">
            <label for="lastClient" class="form-label">Amount</label>
            <input type="text" class="form-control" id="lastClient">
          </div>
        </div>

        <div class="d-flex justify-content-center"> 
          <button type="submit" id="submitBtn" class="btn btn-primary mx-auto mt-3">Submit</button>
        </div>
      </form>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#submitBtn").addEventListener("click", (event) => {
      event.preventDefault(); // Prevenir el comportamiento por defecto de submit
      this.collectUserData();
    });

    this.shadowRoot.addEventListener("DOMContentLoaded", this.loadProducts());
  }

  loadProducts(){
      fetch("http://localHost:3000/products")
      .then(response => response.json())
      .then(products => {
        const productSelect = this.shadowRoot.getElementById("selectProd");
        productSelect.innerHTML = /*html*/ `
        ` 
        console.log(JSON.stringify(products))
      })
  }


  
  collectUserData() {
    const userComponent = document.querySelector("user-component");
    
    const name = userComponent.shadowRoot.getElementById("nameClient").value;
    const lastName = userComponent.shadowRoot.getElementById("lastClient").value;
    const address = userComponent.shadowRoot.getElementById("address").value;
    const email = userComponent.shadowRoot.getElementById("email").value;

    // Enviar los datos a través de un CustomEvent
    userComponent.dispatchEvent(new CustomEvent("userDataSubmitted", {
      detail: { name, lastName, address, email }
    }));
  }
}

customElements.define("product-component", ProductComponent);
