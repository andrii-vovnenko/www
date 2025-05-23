import Nav from './Nav.js';

const nav = new Nav({
  options: [
    { text: 'Bio', link: '/bio.html' },
    { text: 'LinkedIn', link: 'https://www.linkedin.com/in/andrii-vovnenko/', external: true },
    { text: 'GitHub', link: 'https://github.com/andrii-vovnenko', external: true },
  ],
});

nav.init();