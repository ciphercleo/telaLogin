const mode = document.getElementById('mode-icon');

mode.addEventListener("click", () => {
    const form = document.getElementById('login-form');
    const container = document.getElementById('container');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        container.classList.add('dark');
    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');

        form.classList.remove('dark');
        container.classList.remove('dark');
    }
});
