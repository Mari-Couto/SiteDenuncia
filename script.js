function fecharDropdown() {
   let navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

  //formulário
  function exibirAlerta(event) {
    event.preventDefault(); 

  
    alert("Denúncia enviada com sucesso!");

    
    window.onbeforeunload = function() {
      return null;
    };
    window.location.href = document.referrer;
  }