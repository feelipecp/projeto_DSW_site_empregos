const validaDados = () =>{
    event.preventDefault(); //não apaga os dados toda vez que o metodo é rodado (toda vez que envia o form)

    let nome = document.getElementById("nome").value; //pega todos os elementos do form 
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;
    let element = document.getElementById('element');

    let patternletters = /^[a-zA-Z][a-zA-Z-_\. ]{1,50}$/; //padrão de apenas letras
    let patternemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(nome === ""){ //validação de dados
        alert("Nome deve ser informado!");
    }
    else if(!patternletters.test(nome)){ //testa verificar se o nome está no padrão
        alert("Digite um nome válido (apenas letras)");
    }
    else if(email === ""){
        alert("E-mail deve ser informado!");
    }
    else if(!patternemail.test(email)){ //testa verificar se o nome está no padrão
        alert("Digite um e-mail válido (exemplo@exemplo.com)");
    }
    else if(assunto === ""){
        alert("Assunto deve ser informado!");
    }
    else if(mensagem === ""){
        alert("Mensagem deve ser informada!");
    }
    else{
        //alert("Mensagem enviada com sucesso!");
        element.innerHTML = "<div class='alert alert-success' role='alert'>Mensagem enviada com sucesso!</div>";
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
        document.getElementById("assunto").value = '';
        document.getElementById("mensagem").value = '';
        //window.location.reload() //refresha a pagina

        setTimeout(function() {
            window.location.reload(1);
          }, 1500); 
    }

    function abreModal() {
        $("#modal").modal({
          show: true
        });
        console.log('Funcionou!');
      }
      
      setTimeout(abreModal, 1000);


      $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Botão que acionou o modal
        var recipient = button.data('whatever') // Extrai informação dos atributos data-*
        // Se necessário, você pode iniciar uma requisição AJAX aqui e, então, fazer a atualização em um callback.
        // Atualiza o conteúdo do modal. Nós vamos usar jQuery, aqui. No entanto, você poderia usar uma biblioteca de data binding ou outros métodos.
        var modal = $(this)
        modal.find('.modal-title').text('Nova mensagem para ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })

}
