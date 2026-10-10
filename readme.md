📚 Hub de Leitura - Catálogo de Livros

Projeto de automação de testes de API desenvolvido com Cypress para validar a funcionalidade Catálogo de Livros do sistema Hub de Leitura.

🎯 Objetivo

Automatizar os cenários da API de Catálogo de Livros utilizando Cypress, cobrindo operações de consulta, cadastro, atualização e exclusão de livros.

🛠 Tecnologias Utilizadas
Cypress
JavaScript
Node.js
REST API
Git e GitHub
📋 Pré-requisitos
Node.js
npm
Git
API Hub de Leitura em execução localmente
🚀 Instalação

Clonar o projeto:

Shell
git clone https://github.com/AlexandreLuan/hub-de-leitura-api-teste-task.git

Entrar na pasta:

Shell
cd hub-de-leitura-api-teste-task

Instalar dependências:

Shell
npm install
▶️ Executar os testes

Abrir o Cypress:

Shell
npx cypress open
 

Executar em modo headless:

Shell
npx cypress run
✅ Cenários Automatizados
GET
Listar livros com filtros e paginação
Obter detalhes de um livro específico
POST
Cadastrar novo livro com sucesso
Rejeitar cadastro com dados inválidos
PUT
Atualizar um livro previamente cadastrado
DELETE
Remover um livro previamente cadastrado
🔐 Autenticação

Os testes utilizam autenticação JWT através do comando customizado:

JavaScript
cy.geraToken()

O token é gerado automaticamente antes da execução dos cenários protegidos.

📁 Estrutura do Projeto
Plain Text
cypress
│
├── e2e
│ ├── exercicio.cy.js
│ └── usuarios.cy.js
│
├── fixtures
│
└── support
├── commands.js
└── e2e.js
 
cypress.config.js
package.json
README.md
📈 Resultados

Todos os cenários especificados para a funcionalidade Catálogo de Livros foram automatizados e executados com sucesso utilizando Cypress.

👨‍💻 Autor

Alexandre Luan

Antes de atualizar o README, não se esqueça de adicionar o cypress.zip ao .gitignore caso ele ainda exista:

.ignore
cypress.zip

Depois:

Shell
git add .
git commit -m "Atualiza README"
git push origin main
