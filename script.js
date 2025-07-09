const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');
const onBoardBtn = document.getElementById('onboardBtn');

navBtn.addEventListener('click', () => {
  const styles = window.getComputedStyle(nav);
  const displayValue = styles.getPropertyValue('display')
  if (displayValue === 'none') nav.style.display = 'flex';
  else  nav.style.display = 'none';
});

onBoardBtn.addEventListener('mouseenter', secureText)
onBoardBtn.addEventListener('mouseleave', initText)
onBoardBtn.addEventListener('click', secureNest)

function secureNest() {
  onBoardBtn.removeEventListener('mouseenter', secureText)
  onBoardBtn.removeEventListener('mouseleave', initText)
  onBoardBtn.removeEventListener('click', secureNest)
  flyText()
  setTimeout(() => {
    changeBtnText('Nest secured');
  }, 3000);
}

function flyText() {
  changeBtnText('Flying in ...')
}
function initText() {
  changeBtnText('Join the Flock')
}
function secureText() {
  changeBtnText('Secure a nest')
}

function changeBtnText(text) {
  onBoardBtn.textContent = text;
}