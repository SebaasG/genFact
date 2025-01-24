import { dataTable } from "../controllers/summaryController.js";
import { observeTableChanges } from "../controllers/summaryController.js";

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
            <tfoot>
              <tr>
                <th colspan="3" id = "subDet">Subtotal</th>
              
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
      <!-- Botón fuera de la factura, más grande -->
      <div class="text-center mt-4">
        <button class="btn btn-primary btn-lg "id ="payBtn" >Pay</button>
      </div>
    </div>`;
  }

  connectedCallback() {
    const tableComponent = document.querySelector("table-component");
    observeTableChanges(tableComponent, () => {
      dataTable(tableComponent, this);
    });
  }
}

customElements.define("summary-component", SummaryComponent);
