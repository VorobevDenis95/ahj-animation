export default class Colapse {
  constructor(container) {
    this.container = container;

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  init() {
    this.bindToDom();
    const btn = this.container.querySelector('.btn');
    btn.addEventListener('click', this.onClickBtn);
  }

  bindToDom() {
    const div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = Colapse.markup;
    this.container.append(div);
  }

  static get markup() {
    return `
        <button class="btn" type="button" name="button" aria-label="Click to open description">
          Collapse
        </button>
        <div class="wrapper">
          <p class="description">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        `;
  }

  onClickBtn() {
    const wrapper = document.querySelector('.wrapper');
    const active = this.container.querySelector('.active');
    if (!active) {
      wrapper.classList.add('active');
      wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
    } else {
      wrapper.classList.remove('active');
      wrapper.style.maxHeight = '';
    }
  }
}
