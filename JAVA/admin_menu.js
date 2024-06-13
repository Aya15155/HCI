document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('hamburger').style.zIndex = 1001;
});