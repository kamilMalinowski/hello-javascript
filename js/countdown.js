const countdown = document.querySelector('.countdown--js')
const countEnd = document.querySelector('.countEnd--js')
let min = 10
let sec = 59
setInterval(() => {
  sec--
  countdown.innerHTML = min + ' : ' + sec
  if (sec <= 9) {
    countdown.innerHTML = '0' + min + ' : ' + '0' + sec
  }
  if (sec <= 0) {
    min--
    countdown.innerHTML = '0' + min + ' : ' + '0' + sec
    sec = 59
    //   countEnd.innerHTML = 'frozen'
    //   clearInterval()
  }
}, `1000`)
