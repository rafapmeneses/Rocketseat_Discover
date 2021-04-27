// createElement

const div = document.createElement('div');

div.innetText = "olá Devs!";

// append prepend

const body = document.querySelector('body');

body.append(div);

body.prepend(div);

// insertBefore

const script = body.querySelector('script');

body.insertBefore(div, script);

// ou after

const header = body.querySelector('header');

body.insertBefore(div, header.nextSibling);
