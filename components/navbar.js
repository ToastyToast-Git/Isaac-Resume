class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style></style>
      <nav class="sidenav">
        <a href="#">These</a>
        <a href="#">Are</a>
        <a href="#">Only</a>
        <a href="#">Placeholders</a>
        <a href="#">For Now</a>	
        <div>Views: <span id="views"></span></div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
