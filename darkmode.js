const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

// Kontrollera dark mode-status vid sidladdning
if (hasDarkmode === 'on') {
  enableDarkMode()
} else if (hasDarkmode === 'off') {
  disableDarkMode()
} else {
  // Om ingen inställning finns, använd systeminställningen
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
}

// Lägg till eventlistener för att byta dark/light mode
darkmodeSwitch.addEventListener('change', () => {
  if (darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

// Funktioner för att aktivera/inaktivera dark mode
function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('dark')
}

function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}