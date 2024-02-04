# EngSoftTavolo

Trabalho de Engenharia de Software da Universidade Federal do Rio Grande do Sul - Semestre 2023/02 
**Alunos**: Fernando Sulzbach, Gian Montanet, Kaue Gomes, Kathleen Hoff e Santiago Gonzaga
**Projeto**: Tavolo -  Site de reservas de mesas de restaurantes.

**Linguagem**: JavaScript e React 
**Banco de dados**: .csv
**Simplificações**: Sem notificações, sem possibilidade de confirmação, cancelamento e avaliação. 

**Roadmap - 08/01**

| Task  | Data | Responsável | **Status** |
| ------------- | ------------- | ------------- | ------------- |
| Setup  | 10/01  | Santiago | Done |
| Criar componentes React  | 20/01  | Kathleen, Gean, Kaue | Done |
| Create Models | 28/01 | Santiago | Done |
| Alterações parte 1 e 2 | 20/01 | Fernando | Done |
| Front Imagens | 22/01 | Kaue e Gean | Done |
| Pag criar conta | 26/01 | Kath | Done |
| Pag login | 26/01 | Kath | Done |
! Pag Home | 26/01 | Kath | Done |
| *Pag pesquisa* | 30/01 | Kaue e Gean | Doing |
| *Pag Reserva* | 30/01 | Fernando | Done |
| API Cliente | 30/01 | Santiago | Done |
| API Restaurante | 30/01 | Santiago | Done |
| API Reserva | 30/01 | Santiago | Done |
| Pag confirmacao | 26/01 | Kath | Done |
| Pag de after join | 26/01 | Kath | Done |
| Pag delete conta | 26/01 | Kath | Done |
| Pag view reservas Restaurante | 02/02 | Kath | Done |
| Pag view reservas Consumidor | 02/02 | Kath | Done |
| Interagrações back e front | 05/01 | Todos | Open |

## Available Scripts

In the project directory, you can run:
(you need download [node](https://nodejs.org/en))

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Folder Structure

*assests* = contains all images, css files, font files, etc.

*components* = contains all reusable UI components.

*data* = contains all models.

*pages* = should contain one folder for each page in our application.

*services* = contains all images, css files, font files, etc.

## Páginas do site

*path:"/"* = homepage

*path:"/login"* = página de login

*path:"/signin"* = página com botões para escolher entre criar uma conta de restaurante ou de consumidor

*path:"/signinRestaurante"* = página para criar conta de restaurante

*path:"/siginConsumidores"* = página para criar conta de consumidor

*path:"/joinCustomer"* = página que aparece logo após o login/sign de um consumidor

*path:"/joinRestaurante"* = página que aparece logo após o login/sign de um restaurante

*path: "/deletarMinhaConta"* = página de confirmação de delete de conta

*path:"/busquePeloRestaurante"* = página para procurar por restaurante

*path:"/facaSuaReserva"* = página para fazer a reserva

*path:"/dadosSuaReserva"* = página que o consumidor vê após fazer sua reserva

*path:"/reservasNoMeuRestaurante"* = página onde restaurante pode ver as reservas feitas para ele

*path:"/minhasReservas"* = página onde consumidor pode ver as reservas que fez



