class UserComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /*html */ `
        <style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
      </style>
        <form>
        <div class="mb-3">
        <label for="invNumber" class="form-label">Invoice Number</label>
        <input type="number" class="form-control" id="invNumber" disabled aria-describedby="numberFact">
          <label for="nameClient" class="form-label">Name</label>
          <input type="text" class="form-control" id="nameClient" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
        </div>
        <label for="nameClient" class="form-label">Name</label>
        <input type="text" class="form-control" id="nameClient" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
      </div>
      <label for="nameClient" class="form-label">Name</label>
      <input type="text" class="form-control" id="nameClient" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
    </div>
    <label for="nameClient" class="form-label">Name</label>
    <input type="text" class="form-control" id="nameClient" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
  </div>
       
       
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        `;
  }
}
customElements.define("user-component", UserComponent);
