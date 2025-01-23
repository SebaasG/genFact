import { setTable} from "../controllers/tableController.js"

class TableComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html */ `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
        <table class="table">
          <thead>
          <div class= "d-flex justify-content-center no-wrap">
            <tr>
              <th colspan="4" class="text-center fs-5">Purchase detail</th>
            </tr>

            </div>
            <tr>
              <th scope="col" id = "codTable">#</th>
              <th scope="col "id = "nameTable">Name</th>
              <th scope="col" id = "valueTable">Value/unit</th>
              <th scope="col" id = "amountTable">Amount</th>
              <th scope="col" id = "subTable">Subtotal</th>
              <th scope="col" id = "btnTable"></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        `;
     
    }
    prepareTableData(userData){
      const tableData= [];
      for (const item of userData.items){
        tableData.push({
          code: item.code,
          name: item.name,
          value: item.value,
          amount: item.amount,
          subTotal: item.value * item.amount
        });
        return tableData;
      }

    }

    connectedCallback() {
      const userComponent = document.querySelector("user-component");

      userComponent.addEventListener("userDataSubmitted", (event) => {
          console.log("Evento recibido:", event.detail);
          const userData = event.detail;
          alert(JSON.stringify(userData));
          setTable(this, userData);
         
      });
    }
}

customElements.define("table-component", TableComponent);
