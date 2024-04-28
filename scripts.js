// app.js
document.addEventListener('DOMContentLoaded', function() {
  const sidenavElems = document.querySelectorAll('.sidenav');
  const sidenavInstances = M.Sidenav.init(sidenavElems);

  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
