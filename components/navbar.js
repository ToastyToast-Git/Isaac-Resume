class Navbad extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="sidenav">
        <a href="#">These</a>
        <a href="#">Are</a>
        <a href="#">Only</a>
        <a href="#">Placeholders</a>
        <a href="#">For Now</a>	
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
