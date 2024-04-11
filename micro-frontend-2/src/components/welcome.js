const template = document.createElement("template");
template.innerHTML = `<h1>Welcome to micro front-end 2</h1>`;
class WelcomeComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("welcome-component", WelcomeComponent);
