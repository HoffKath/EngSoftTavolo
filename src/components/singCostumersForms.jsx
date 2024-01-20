import '../styles/forms.css'

const SignCustomersForms = () => {
    return (
    <div class="wrapper">
  
    <div class="content-login">
  
        <h2 class="active"> Bem Vindo a Tavolo!</h2>
  
        <form class="box-login" method="post" action="#">
          <label class="text"> Seu nome:
          <input type="text" id="nomeFuncionario" class="campo" name="nome" placeholder="Seu Nome"/>
          </label>
          <label class="text"> Email:
          <input type="email" id="email" class="campo" name="email" placeholder="Email"/>
          </label>
          <label class="text"> Telefone:
          <input type="text" id="telefone" class="campo" name="telefone" placeholder="Telefone"/>
          </label>
          <label class="text"> Insira uma senha:
          <input type="text" id="password" class="campo" name="senha" placeholder="Senha"/>
          </label>
          <label class="text"> Aceita receber notificações:  
            <select name="notificacoes" id="mesas-quant"> 
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

export default SignCustomersForms