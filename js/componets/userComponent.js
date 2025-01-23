class UserComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html */ `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <form id="user-form">
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

        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" aria-describedby="addressHelp">
          <div id="addressHelp" class="form-text">We'll never share your address with anyone else.</div>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

      </form>`;
  }

  // connectedCallback() {
  //   this.shadowRoot.querySelector("#user-form").addEventListener("submit", this.handleFormSubmit.bind(this));
  // }

  // handleFormSubmit(event) {
  //   event.preventDefault();
  //   console.log("Formulario enviado!");
    
  //   const name = this.shadowRoot.getElementById("nameClient").value;
  //   const lastName =  this.shadowRoot.getElementById("lastClient").value;
  //   const addres = this.shadowRoot.getElementById("address").value;
  //   const email = this.shadowRoot.getElementById("email").value;

  //   this.dispatchEvent(new CustomEvent("userDataSubmitted", {
  //     detail: { name, lastName, addres, email }
  //   }));
  // }
}


customElements.define("user-component", UserComponent);
