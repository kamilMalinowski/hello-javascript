const buttons = document.querySelectorAll('.game__button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.innerHTML = 'X'
    console.log(button.id)
    console.log(button)
    console.dir(button)
  })
})
