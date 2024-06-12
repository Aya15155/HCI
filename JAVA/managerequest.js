document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');

    document.getElementById('hamburger').style.zIndex= 1001;
});


document.querySelectorAll('.approve, .decline').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + ' request ID: ' + this.parentElement.parentElement.cells[2].textContent);
    });
});