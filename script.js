const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');
const onBoardBtn = document.getElementById('onboardBtn');

navBtn.addEventListener('click', () => {
  const styles = window.getComputedStyle(nav);
  const displayValue = styles.getPropertyValue('display')
  if (displayValue === 'none') nav.style.display = 'flex';
  else  nav.style.display = 'none';
});

onBoardBtn.addEventListener('mouseenter', function() {
  this.textContent = 'Flying in ...'
})
onBoardBtn.addEventListener('mouseleave', function() {
  this.textContent = 'Join the Flock'
})
onBoardBtn.addEventListener('mousedown', function() {
  this.textContent = 'Securing Nest...'
})