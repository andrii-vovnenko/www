import Nav from './Nav.js';

const nav = new Nav({
  options: [
    { text: 'Bio', link: '/bio.html' },
    { text: 'LinkedIn', link: '/linkedin' },
    { text: 'GitHub', link: '/github' },
  ],
});

nav.init();