class ProductComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <form>
        <label for="selectProd" class="form-label">Select Product</label>
        <select class="form-select" aria-label="Default select example" id="selectProd">
        </select>

        <div class="mb-3">
          <label for="codeNumber" class="form-label">Code</label>
          <input type="text" class="form-control" id="codeNumber" disabled aria-describedby="numberFact">
        </div>

        <div class="d-flex gap-3">
          <div class="flex-grow-1">
            <label for="unitValue" class="form-label">Unit Value</label>
            <input type="text" class="form-control" disabled id="unitValue">
          </div>
          <div class="flex-grow-1">
            <label for="amountProd" class="form-label">Amount</label>
            <input type="text" class="form-control" id="amountProd">
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
      event.preventDefault(); 
      this.collectUserData();
    });

    this.shadowRoot.getElementById("selectProd").addEventListener("change", () => {
      this.loadCode();
    })

    this.loadProducts(); 
  }

  //Funcion para llenar la info en base la bd
  loadProducts() {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(products => {
        const productSelect = this.shadowRoot.getElementById("selectProd");
        productSelect.innerHTML = "";
  
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Choose product...";
        productSelect.appendChild(defaultOption);
  
        // Iterar sobre los productos usando forEach nativo de JavaScript
        products.forEach(product => {
          const option = document.createElement("option");
          option.value = product.id;
          option.textContent = product.name;
          productSelect.appendChild(option);
        });
      })
      .catch(error => console.error("Error fetching products:", error));
  }

  //Funcion para trar data segun el select 
  loadCode() {
    const selectedValue = this.shadowRoot.getElementById("selectProd").value;
    const codeInput = this.shadowRoot.getElementById("codeNumber");
  
    codeInput.value = selectedValue;
    alert("This is codeinput value: " + codeInput.value);
    
    fetch(`http://localhost:3000/products?id=${selectedValue}`)
  .then(response => response.json())
  .then(products => {
    if (products.length > 0) {
      const product = products[0]; 
      const value = product.value; 

      const inputValue = this.shadowRoot.getElementById("unitValue");
      inputValue.value = value;

    } else {
      alert("Product not found");
    }
  })
  .catch(error => console.error("Error fetching product:", error));

  }
  
  
  

  collectUserData() {
    const userComponent = document.querySelector("user-component");

    const name = userComponent.shadowRoot.getElementById("nameClient").value;
    const lastName = userComponent.shadowRoot.getElementById("lastClient").value;
    const address = userComponent.shadowRoot.getElementById("address").value;
    const email = userComponent.shadowRoot.getElementById("email").value;

    const codeProd = this.shadowRoot.getElementById("codeNumber").value;
    const value = this.shadowRoot.getElementById("unitValue").value;
    const amount = this.shadowRoot.getElementById("amountProd").value;

    // Enviar los datos a través de un CustomEvent
    userComponent.dispatchEvent(new CustomEvent("userDataSubmitted", {
      detail: { name, lastName, address, email, codeProd, value, amount }
    }));
  }
}

customElements.define("product-component", ProductComponent);
