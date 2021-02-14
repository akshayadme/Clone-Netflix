document.querySelectorAll('.accordionButton').forEach(button => {
    button.addEventListener('click', () => {
        const accordianContent = button.nextElementSibling;
        button.classList.toggle('accordionButton--active');
        if (button.classList.contains('accordionButton--active')) {
            accordianContent.style.display = 'block';
        } else {
            accordianContent.style.display = 'none';
        }
    })
})