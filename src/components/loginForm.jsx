import '../styles/forms.css'

const LoginForms = () => {
    return (
    <div class="wrapper">
  
    <div class="content-login">
  
        <h2 class="active"> Faça o login! </h2>
  
        <form class="box-login" method="post" action="#">
          <input type="email" id="email" class="campo" name="email" placeholder="E-mail"/>
          <input type="text" id="password" class="campo" name="senha" placeholder="Senha"/>
          <input type="submit" class="botao" value="Entrar"/>
        </form>
  
  
        <div class="box-lembrar-senha">  
          <a class="link" href="#">Lembrar Senha ?</a>
        </div>
  
    </div>
  
  </div>
  )
}

export default LoginForms