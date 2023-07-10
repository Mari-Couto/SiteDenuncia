function fecharDropdown() {
   let navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

  //formulário
  function submitForm() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let denuncia = document.getElementById('denuncia').value;
  
    if (nome.trim() === '' || email.trim() === '' || denuncia.trim() === '') {
      alert('Por favor, preencha todos os campos do formulário');
      return false;
    } else {
      alert('Denúncia enviada com sucesso!');
      return false; 
    }
  }
  