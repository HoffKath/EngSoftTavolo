import '../styles/forms.css'

const SignRestaurantForms = () => {
    return (
    <div class="wrapper">
  
    <div class="content-login">
  
        <h2 class="active"> Bem Vindo a Tavolo! </h2>
  
        <form class="box-login" method="post" action="#">
          <label class="text">Nome do restaurante:
          <input type="text" id="nomeRestaurante" class="campo" name="NomeRestaurante" placeholder="Restaurante"/>
          </label>
          <label class="text"> Seu nome:
          <input type="text" id="nomeFuncionario" class="campo" name="nome" placeholder="Seu Nome"/>
          </label>
          <label class="text"> Endereço do restaurante:
          <input type="text" id="endereco" class="campo" name="endereco" placeholder="Endereço"/>
          </label>
          <label class="text"> Telefone:
          <input type="text" id="telefone" class="campo" name="telefone" placeholder="Telefone"/>
          </label>
          <label class="text"> Email:
          <input type="email" id="email" class="campo" name="email" placeholder="Email"/>
          </label>
          <label class="text"> Quantidades de mesas disponiveis para reserva:   
            <select name="mesas" id="mesas-quant"> 
              <option value="Uma">Uma</option> 
              <option value="Duas">Duas</option> 
              <option value="Três">Três</option> 
              <option value="Quatro">Quatro</option> 
              </select>
              </label>
         <label class="text"> Insira os horários disponíveis para reserva:
         <input type="text" id="horarios" class="campo" name="horarios" placeholder="Horários"/>
         </label>
         <label class="text"> Possui opções vegetarianas/veganas:  
            <select name="mesas" id="mesas-quant"> 
              <option value="false">Não</option> 
              <option value="true">Sim</option> 
              </select>
              </label>
        <label class="text"> Possui opções sem gluten:  
            <select name="glueten" id="gluten"> 
              <option value="false">Não</option> 
              <option value="true">Sim</option> 
              </select>
        </label>
        <label class="text"> Culinária foco: 
        <input type="text" id="culinaria" class="campo" name="culinaria" placeholder="Culinária Foco"/>
              </label>
          <label class="text"> Insira uma senha:
          <input type="text" id="password" class="campo" name="senha" placeholder="Senha"/>
          </label>
          <label class="text"> Envie a logo do restaurante:
          <input type="file" />
          </label>
          <label class="text">
          <input type="submit" class="botao" value="Criar Conta"/>
        </label>
        </form>
 
    </div>
  
  </div>
  )
}

export default SignRestaurantForms