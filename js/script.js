const init = () => {
  document.addEventListener('scroll', e => {
    const btn = document.querySelector('.go-up');
    window.scrollY >= 10 ? btn.classList.add('up') : btn.classList.remove('up');
  })
}

init();
