function getAllEl(selector) {
  return document.querySelectorAll(selector)
}

const tabs = getAllEl('.tab')
const contents = getAllEl('.content')
const isActive = localStorage.getItem('active')

tabs.forEach(tab => {
  tab.classList.contains(isActive) ? tab.classList.add('focused') : ''
})

tabs.forEach(tab => {
  tab.addEventListener('focusin', function showContent() {
    tabs.forEach(tab => {
      tab.classList.remove('focused')
    })
    this.classList.add('focused')

    const dataName = this.getAttribute('data-js')
    localStorage.setItem('active', dataName)

    contents.forEach(content => {
      content.classList.remove('shown')
      content.classList.contains(dataName) && content.classList.add('shown')
    })
  })
})

getPrice()

function getPrice() {
  const input = document.querySelector('.quantity')
  const button = document.querySelector('.calculate-btn')
  const amount = document.querySelector('.amount')
  const price = 19.95
  const currentPrice = price - price * 0.1
  const output = currentPrice.toFixed(2)

  input.value = '1'
  amount.innerHTML = `${output}  €`

  button.addEventListener('click', () => {
    const quantity = input.value
    const sum = currentPrice * quantity
    const discountFor = quantity => {
      if (quantity >= 5) {
        return 0.7
      }
      if (quantity >= 3) {
        return 0.8
      }
      return 0.9
    }
    const total = sum * discountFor(quantity)
    const output = total.toFixed(2)
    amount.innerHTML = `${output}  €`
  })
}
