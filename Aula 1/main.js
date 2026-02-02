'use strict'

const botao = document.getElementById('trocar-cor')
const input = document.getElementById('cor')

botao.addEventListener('click', () => {
  const corDigitada = input.value.toLowerCase()

  switch (corDigitada) {
    case 'vermelho':
      document.body.style.backgroundColor = 'red'
      break
    case 'azul':
      document.body.style.backgroundColor = 'blue'
      break
    case 'verde':
      document.body.style.backgroundColor = 'green'
      break
    case 'amarelo':
      document.body.style.backgroundColor = 'yellow'
      break
    case 'roxo':
      document.body.style.backgroundColor = 'purple'
      break
    default:
      alert('Cor inválida! Use: Vermelho, Azul, Verde, Amarelo ou Roxo')
  }
})