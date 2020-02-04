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
