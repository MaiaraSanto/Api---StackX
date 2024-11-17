# Api-StackX
Este projeto é uma API desenvolvida em Node.js e Express com o objetivo de praticar conceitos de persistência de dados, validação e documentação de APIs RESTful. O projeto permite operações CRUD (Criar, Ler, Atualizar e Deletar) em uma entidade fictícia, com os dados sendo persistidos em um arquivo JSON. A API utiliza middlewares para validação dos dados, garantindo que as requisições atendam aos requisitos de formato e tipo de dados.

Estrutura do Projeto
Abaixo está a estrutura de diretórios e arquivos do projeto, com uma breve descrição de cada componente:

meu_projeto_api/

├── src/

│   ├── server.js  `` Arquivo principal para configuração e inicialização do servidor``

│   ├── routes/


│   │   └── entidadeRoutes.js  ``Define as rotas da API para a entidade``

│   ├── controllers/

│   │   └── entidadeController.js ``Contém a lógica das operações CRUD``

│   ├── data/

│   │   └── entidade.json ``Armazena os dados da entidade para persistência``

│   └── middlewares/

│       └── validateMiddleware.js ``Middleware para validação dos dados das requisições``

├── README.md  ``Documentação detalhada do projeto``

└── package.json  ``Define as dependências e scripts do projeto``

# Explicação dos Componentes
- src/: Pasta que contém todo o código principal da aplicação.
  
- server.js: Configura e inicializa o servidor Express. É o ponto de entrada da aplicação.
  
- routes/: Pasta que armazena os arquivos de rotas.
  
- entidadeRoutes.js: Define as rotas para a entidade, associando cada rota a um controlador específico.

- controllers/: Pasta que contém a lógica de negócio da aplicação.

- entidadeController.js: Define as funções responsáveis por cada operação CRUD da entidade (obter todos os itens, criar, atualizar e deletar).

- data/: Pasta destinada ao armazenamento de dados.

- entidade.json: Arquivo JSON onde os dados da entidade são persistidos.

- middlewares/: Pasta para middlewares personalizados.

- validateMiddleware.js: Middleware responsável por validar o corpo das requisições antes de processá-las, garantindo que os dados enviados estejam no formato correto.

# Pré-requisitos
Antes de iniciar o projeto, certifique-se de que você possui as seguintes ferramentas instaladas:

- Node.js - Ambiente de execução JavaScript
- NPM - Gerenciador de pacotes para Node.js
= Instalação
- Siga os passos abaixo para configurar o projeto em sua máquina local:
- git clone https://github.com/seu-usuario/meu_projeto_api.git

  ````
  cd meu_projeto_api
  
   npm install

# Scripts
O arquivo package.json contém scripts que facilitam a execução do projeto. Os principais scripts são:

`` npm start`` Inicia o servidor em modo de produção, executando node src/server.js.

`` npm run dev`` Inicia o servidor em modo de desenvolvimento com nodemon, que reinicia automaticamente o servidor ao detectar mudanças nos arquivos.

 Para rodar o projeto em modo de desenvolvimento, use o comando:
  ``npm run dev``

 # Uso da API
 Abaixo estão as rotas disponíveis nesta API. Todas as requisições devem ser feitas para o endpoint base /api/entidade.
## Endpoints
1. GET /api/entidade: Retorna uma lista de todos os itens.

````
[
  {
    "id": "1",
    "title": "Item 1",
    "description": "Descrição do item 1",
    "quantity": 10
  },
  ...
]

````

## POST /api/entidade: Cria um novo item na lista.
- Requisição:
````
{
  "title": "Novo Item",
  "description": "Descrição do novo item",
  "quantity": 5
}
````
- Resposta
````
{
  "id": "2",
  "title": "Novo Item",
  "description": "Descrição do novo item",
  "quantity": 5
}
````
## PUT /api/entidade/
2. Atualiza um item existente pelo seu ID.

- Requisição:

````
{
  "title": "Item Atualizado",
  "description": "Descrição atualizada",
  "quantity": 7
}
````
- Resposta
````
{
  "id": "2",
  "title": "Item Atualizado",
  "description": "Descrição atualizada",
  "quantity": 7
}
````
## DELETE /api/entidade/
3. Remove um item da lista pelo seu ID.
- Resposta: Status 204 - Sem conteúdo.

## Exemplos de Requisições
Aqui estão alguns exemplos de como usar o Postman ou outra ferramenta para fazer requisições aos endpoints:

- Criar um novo item
- Método: POST
- URL: ``http://localhost:3000/api/entidade``
- Corpo da Requisição:
 ````
{
  "title": "Novo Item",
  "description": "Exemplo de descrição",
  "quantity": 5
}
````
## Atualizar um item
- Método: PUT
- URL: ``http://localhost:3000/api/entidade/1``
- Corpo da Requisição
 ````
{
  "title": "Item Atualizado",
  "description": "Nova descrição",
  "quantity": 10
}
````
## Deletar um item
- Método: DELETE
- URL: ``http://localhost:3000/api/entidade/1``

 ## Validação de Dados
O middleware de validação ``validateMiddleware.js`` usa o pacote ``Joi`` para garantir que o corpo das requisições ``POST`` e ``PUT`` siga o formato exigido. O esquema de validação exige os seguintes campos:

- title: String (obrigatório)
- description: String (obrigatório)
- quantity: Número inteiro (obrigatório)
Caso os dados enviados não estejam de acordo com o esquema, a API retorna uma resposta de erro 400 com uma mensagem detalhada.

## Exemplos de Erros
Abaixo estão alguns erros comuns e suas respectivas respostas:

1. Erro 400 - Requisição inválida
- Exemplo: Enviar um campo quantity como texto ao invés de número.
- Resposta:
````
{
  "message": "\"quantity\" must be a number"
}
````

2. Erro 404 - Item não encontrado

- Exemplo: Tentar atualizar ou deletar um item com ID que não existe.
- Resposta:
 ````
{
  "message": "\"quantity\" must be a number"
}
````

## Dependências
- Express: Framework para construção de servidores web.
- Nodemon: Ferramenta de desenvolvimento que reinicia automaticamente o servidor ao detectar mudanças nos arquivos.
- Joi: Biblioteca de validação de dados.

## Licença
- Este projeto está sob a licença ISC. Consulte o arquivo LICENSE para mais informações.
  





