import './scss/style.sass'

const app = document.getElementById('app')

const el = document.createElement('h1')
el.innerHTML = 'Hello Electron!'

app.appendChild(el)
