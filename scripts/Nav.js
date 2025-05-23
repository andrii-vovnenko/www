/*
  options = {
    'text': string,
    'link': string,
  }[],
*/
export default class Nav {
  constructor(config) {
    this.config = config;
    this.options = config.options;
    this.selected = 0;
  }

  init() {
    console.log('init');
    this.nav = document.querySelector('.nav');
    const navList = this.createOptions();
    
    this.nav.appendChild(navList);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        this.nextOption();
      } else if (e.key === 'ArrowUp') {
        this.prevOption();
      } else if (e.key === 'Enter') {
        window.location.href = this.options[this.selected].link;
      }
    });
  }

  nextOption() {
    this.selected++;
    if (this.selected >= this.options.length) {
      this.selected = 0;
    }
    this.updateNav();
  }

  prevOption() {
    this.selected--;
    if (this.selected < 0) {
      this.selected = this.options.length - 1;
    }
    this.updateNav();
  }
  

  createOptions() {
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    this.options.forEach((option, index) => {
      const li = this.createOption(option, index === this.selected);
      ul.appendChild(li);
    });
    
    return ul;
  }

  createOption(option, selected = false) {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    if (selected) li.classList.add('selected');
    
    const a = document.createElement('a');
    a.href = option.link;
    a.textContent = option.text;
    li.appendChild(a);
    return li;
  }

  updateNav() {
    const newNavList = this.createOptions();
    const currentNavList = this.nav.querySelector('.nav-list');
    currentNavList.innerHTML = newNavList.innerHTML;
  }
}