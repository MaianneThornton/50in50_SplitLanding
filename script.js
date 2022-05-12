const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// Adds the class when the mouse hovers over the container
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// Removes the class when the mouse no longer hovers over the container
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))