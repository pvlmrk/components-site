function toggleDropdown() {
    var dropdown = document.getElementById('dropdown');
    var currentDisplay = dropdown.style.display;
    var caret = document.getElementById('caret');

    dropdown.classList.toggle('active');

    if (currentDisplay === 'none' || currentDisplay === '') {
        dropdown.style.display = 'block';
        caret.style.transform = 'rotate(180deg)';
    } else {
        dropdown.style.display = 'none';
        caret.style.transform = 'rotate(0deg)';
    }
}