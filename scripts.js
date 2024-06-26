const bar = document.getElementById('bar');
const ul = document.getElementById('ul');
const close = document.getElementById('close');

if(bar) {
  bar.addEventListener("click", () => {
    ul.classList.add('active');
  })
}

if(close) {
  close.addEventListener("click", () => {
    ul.classList.remove('active');
  })
}