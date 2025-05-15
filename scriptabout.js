document.addEventListener('DOMContentLoaded', function() {
  function handlePolaroidStack() {
    const stack = document.querySelector('.polaroid-stack');
    if (!stack) return;
    let items = Array.from(stack.children);
    let current = 0;

    function showActive(idx) {
      items.forEach((item, i) => {
        item.classList.toggle('active', i === idx);
      });
    }

    showActive(current);

    stack.onclick = function() {
      current = (current + 1) % items.length;
      showActive(current);
    };
  }

  function handleResponsivePolaroids() {
    const grid = document.querySelector('.images-grid');
    const stackMobile = document.querySelector('.images-stack-mobile');
    if (window.innerWidth <= 600) {
      if (grid) grid.style.display = 'none';
      if (stackMobile) stackMobile.style.display = 'flex';
      handlePolaroidStack();
    } else {
      if (grid) grid.style.display = '';
      if (stackMobile) stackMobile.style.display = 'none';
    }
  }

  handleResponsivePolaroids();
  window.addEventListener('resize', handleResponsivePolaroids);
});