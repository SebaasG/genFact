class SummaryComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<div>Resumen de la factura</div>`;
    }
  }
  
  customElements.define("summary-component", SummaryComponent);
  