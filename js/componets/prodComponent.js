class ProductComponent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html */ `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
        <form>
          <div class="mb-3">
            <label for="invNumber" class="form-label">Invoice Number</label>
            <input type="number" class="form-control" id="invNumber" disabled aria-describedby="numberFact">
          </div>

          <div class="mb-3">
          <label for="invNumber" class="form-label">Invoice Number</label>
          <input type="number" class="form-control" id="invNumber" disabled aria-describedby="numberFact">
        </div>
  
          <div class="d-flex gap-3">
          <div class="flex-grow-1">
            <label for="nameClient" class="form-label">Name</label>
            <input type="text" class="form-control" id="nameClient">
          </div>
          <div class="flex-grow-1">
            <label for="lastClient" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastClient">
          </div>
        </div>

        <button type="submit" class="btn btn-primary d-flex justify-content-center no-wrap">Submit</button>
        </form>
        `;
    }
}

customElements.define("product-component", ProductComponent)