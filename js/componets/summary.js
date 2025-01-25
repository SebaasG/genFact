import { dataTable, observeTableChanges, saveInvoice } from "../controllers/summaryController.js";

class SummaryComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html*/ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <div class="container mt-5">
        <div class="card">
          <div class="card-header text-center">
            <h3>Invoice Detail</h3>
          </div>
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
              
              </thead>
              <tfoot>
                <tr>
                  <th colspan="3">Subtotal</th>
           
                </tr>
                <tr>
                  <th colspan="3">IVA (19%)</th>
         
                </tr>
                <tr>
                  <th colspan="3">Total</th>
        
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-primary btn-lg" id="payBtn">Pay</button>
        </div>
      </div>`;
  }

  connectedCallback() {
    const tableComponent = this.shadowRoot.querySelector("table");
    const payButton = this.shadowRoot.querySelector("#payBtn");

    payButton.addEventListener("click", () => {
      saveInvoice(this);
    });

    observeTableChanges(tableComponent, () => {
      dataTable(tableComponent, this);
    });

    // Escuchar evento custom desde userComponent
    const userComponent = document.querySelector("user-component");
    if (userComponent) {
      userComponent.addEventListener("userDataSubmitted", (event) => {
        const userData = event.detail;
        console.log("User Data Received: ", userData);
        localStorage.setItem("dataParcial", JSON.stringify(userData));
      });
    }
  }
}

customElements.define("summary-component", SummaryComponent);
