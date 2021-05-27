const icon1 = document.getElementById('responsive_i1')
const icon2 = document.getElementById('responsive_i2')
const icon3 = document.getElementById('responsive_i3')
const icon4 = document.getElementById('responsive_i4')
const icon5 = document.getElementById('responsive_i5')

const scr = screen.availWidth
if (scr <= 900) {
  icon1.setAttribute('data-bs-toggle', 'tooltip')
  icon1.setAttribute('data-bs-placement', 'right')
  icon1.setAttribute('title', 'Home')

  icon2.setAttribute('data-bs-toggle', 'tooltip')
  icon2.setAttribute('data-bs-placement', 'right')
  icon2.setAttribute('title', 'Dashboard')

  icon3.setAttribute('data-bs-toggle', 'tooltip')
  icon3.setAttribute('data-bs-placement', 'right')
  icon3.setAttribute('title', 'My Enrollments')

  icon4.setAttribute('data-bs-toggle', 'tooltip')
  icon4.setAttribute('data-bs-placement', 'right')
  icon4.setAttribute('title', 'Achieve')

  icon5.setAttribute('data-bs-toggle', 'tooltip')
  icon5.setAttribute('data-bs-placement', 'right')
  icon5.setAttribute('title', 'Forum')

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  )
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}
