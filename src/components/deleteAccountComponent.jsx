import '../styles/forms.css'

const DeleteAccountComponent = () => {
    return (
    <div class="wrapper">
  
    <div class="content-login">
  
        <h2 class="active"> Lamentamos que esteja deletando sua conta! </h2>
  
        <form class="box-login" method="post" action="#">

          <label class="text"> Confirmar delete?  
            <select name="confirmarDelete" id="delete"> 
              <option value="false">Não</option> 
              <option value="true">Sim</option> 
              </select>
        </label>
        <label class="text">
          <input type="submit" class="botao" value="Criar Conta"/>
        </label>
        </form>
  
    </div>
  
  </div>
  )
}

export default DeleteAccountComponent