const filterButtons = document.querySelectorAll('.menu-filter button');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    filterItems(filterValue);
  });
});

function filterItems(filterValue) {
  menuItems.forEach(item => {
    if (filterValue === '*') {
      item.style.display = 'flex'; // Show all items
    } else {
      item.style.display = item.classList.contains(filterValue) ? 'flex' : 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year-current').textContent = new Date().getFullYear();
});
