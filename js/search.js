document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('menu-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            const desc = item.querySelector('.card-text').textContent.toLowerCase();
            if (title.includes(query) || desc.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
