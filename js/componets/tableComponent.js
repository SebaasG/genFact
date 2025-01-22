class TableComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html */ `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
        <table class="table">
          <thead>
            <tr>
              <th colspan="4" class="text-center fs-4">Purchase detail</th>
            </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Value/unit</th>
              <th scope="col">Amount</th>
              <th scope="col">Subtotal</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        `;
    }
}

customElements.define("table-component", TableComponent);
