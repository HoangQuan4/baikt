function search() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(keyword) ? 'flex' : 'none';
    });
  }

  