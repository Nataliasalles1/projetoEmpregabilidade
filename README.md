# Impulsionando talentos: Empreendedorismo
![Logo](https://dropsdocotidiano.files.wordpress.com/2020/11/empreendedorismo-feminino-fecomercio-2.jpg?w=930&h=450&crop=1)

Bem vindxs, ao projeto Impulsionando talentos! 
Sinta-se a vontade para explorar e conhecer um pouco mais desse projeto social, ele foi pensado e desenvolvido como requisito final para a conclusão do curso "Todas em Tech" da {reprograma}.


# Olá, eu sou a Natalia Salles! 👋
Moro em Salvador-Ba, tenho 25 anos, cursei Odontologia na Universidade Federal Fluminense, e no inicio do ano tomei a 
decisão de migração de carreira, desde então, estou aprimorando cada vez mais minhas habilidades de desenvolvedora back-end.


## Introdução e objetivo:

Diante do antagonismo entre diminuição do número de trabalhadores formais e aumento
do trabalho autônomo, pensei em criar uma aplicação(app) que tem como objetivo, promover profissionais autônomos, ampliando
seu alcance em relação aos clientes e trabalhando em marketing para trazer cada vez mais usuários ao app.

A ideia é fazer o cadastro dos profissionais, implementando uma aba com o portifólio do seu trabalho evidenciando o tipo de serviço prestado e traballhos concluidos,
se há disponibilidade do atendimento em local próprio ou em domícilio e conectar o cliente a esses profissionais, tanto para serviços instantâneos ou agendados.

O objetivo do projeto com os profissionais é dar autonomia aos profissionais e liberdade de negociação do seu trabalho, diminuir a lacuna de desemprego existente, e viabilizar a execução do trabalho
independente de um local físico próprio.

O objetivo do projeto com os clientes irá trazer facilidade na procura de profissionais, maior segurança em atendimento domiciliar por ambos os lados terem
cadastros e informações pessoais guardadas, encontrar profissionais em qualquer local do Brasil, buscar profissionais que cabem no orçamento e poder achar
um profissionais mesmo sem agendamento prévio.

A API permite que o usuário faça seu cadastro no site realize login, atualize seu cadastro e exclua seu cadastro. O usuário pode se cadastrar como colaborador ou cliente,
caso o cadastrado seja como cliente, é possível listar os colaboradores por todos disponíveis, por modalidade, e por bairro.


## Funcionalidades

- Listar todos os profissionais da API
- Listar profissionais por meio de filtro
- Cadastro, atualização, exclusão de profissionais;


## 👨‍💻TECNOLOGIAS E PACOTES UTILIZADOS
*TECNOLOGIAS*
- Git/Github
- Heroku
- JavaScript
- MongoDB AtlasName
- Node.js
- Insomnia
- VScode

*PACOTES* 
- Bcrypt
- Cors
- Dotenv
- Express
- Jest
- Jsonwebtoken
- Mongoose
- Nodemon
- Supertest

## 📂Arquitetura MVC
````
PROJETOEMPREGABILIDADE 
   |-  📁 src
   |    |
   |    |- 📁 config
   |         |- 📑 database.js
   |
   |    |- 📁 controllers
   |         |- 📑 authController.js
   |         |- 📑 clientController.js
   |         |- 📑 professionalController.js   
   |
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 AddressModel.js
   |         |- 📑 ClientModel.js
   |         |- 📑 ProfessionalModel.js
   |         |- 📑 UsersModel.js
   |     
   |    |  - 📁 routes
   |         |- 📑 clientRouter.js
   |         |- 📑 indexRoutes.js
   |         |- 📑 professionalRoutes.js
   |         |- 📑 userRouter.js
   |
   |    |  - 📁 test
   |         |- 📑 app.test.js
   |         |- 📑 jest.setup.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 vercel.json`
````

## 🔃 ROTAS

| Metodos HTTP|Rotas - Usuários| Funções                               
| -----------| ----------   | --------------------------------------|
| GET        |/users/all    | Acesso a todas os usuárias            |
| POST       |/users/create | Cadastro de nova usuária              |
| POST       |/users/login  | Login de usuária                      |
| DELETE     |/users/:id    | Exclusão de usuária do banco de dados |


| Metodos HTTP | Rotas - Professional   | Funções                               
| -----------  | -------------------    | ------------------------------------- 
| GET          |/professional/getall    | Lista todas as profissinais          
| GET          |/professional/modality  | Lista profissinais  por modalidade de trabalho   
| GET          |/professional/district  | Lista profissinais  por bairro        
| GET          |/professional/:id       | Trás a profissinal pelo ID digitado  
| POST         |/professional/create    | Cadastro de nova profissinal         
| PATCH        |/professional/update/:id| Atualiza dados de profissinal        
| DELETE       |/professional/delete/:id| Exclui profissinal do banco de dados 

| Metodos HTTP | Rotas - Client   | Funções                               
| -----------  | ---------------- | ------------------------------------- 
| GET          |/client/all       | Lista todas as clientes          
| GET          |/client/:id       | Trás a cliente pelo ID digitado  
| POST         |/client/create    | Cadastro de nova cliente         
| PATCH        |/client/update/:id| Atualiza dados de cliente        
| DELETE       |/client/delete/:id| Exclui cliente do banco de dados 

## 📐 COMO UTILIZAR A API EM SEU COMPUTADOR

1º Passo - clonar o repositório
- Clone esse repositório em sua máquina local
```bash
https://github.com/Nataliasalles1/projetoEmpregabilidade.git
````
2º Passo - Instalar as dependências
- Para instalar as dependências do projeto, digite o comando no terminal
```bash
npm install ou npm i  
``` 
-----------------------
3º Passo - Configurar o ambiente
```bash
Para configurar o ambiente é necessário duplicar o arquivo .env.examplee renomea-lo somente para .env. 
Em seguida, altere as informações contidas no arquivo .env para as informações correspondentes a sua 
máquinae inclua os valores para PORT com a porta, MONGO_URI com a URL DO MongoDb e SECRET com o secret.
``` 

4º Passo - Executar a aplicação
- Com a aplicação clonada e as dependências configuradas basta rodar a aplicação com o comando no terminal
```bash
npm start
```

## 🏗️ IMPLEMENTAÇÕES FUTURAS
- Implementação do front-end
- Implementar catálogos de fotos para profissionais
- Adaptar a API para um formato de APP;