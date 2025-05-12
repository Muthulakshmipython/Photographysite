


  function showCategory(categoryId) {
  const containers = document.querySelectorAll('.photo-container');
  containers.forEach(container => {
    container.style.display = 'none';
  });

  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });

  const activeLink = document.querySelector(`.menu-item[onclick*="${categoryId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  const selected = document.getElementById(categoryId);
  if (selected) {
    selected.style.display = 'block';
  }
}
