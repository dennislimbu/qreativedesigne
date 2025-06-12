fetch('components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

  // Load Footer
fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });


fetch('../../components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('project-navbar').innerHTML = data;
});

fetch('../../components/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('project-footer').innerHTML = data;
});
