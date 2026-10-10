/// <reference types="cypress" />

describe('Testes da Funcionalidade Catálogo de Livros', () => {

     let token
     beforeEach(() => {
          cy.geraToken('admin@biblioteca.com', 'admin123').then(tkn => {
               token = tkn
          })
     });

     describe('GET - Teste de API - Catálogo de Livros', () => {

          it('GET - Deve listar livros com filtros e paginação', () => {

               cy.api({
                    method: 'GET',
                    url: 'books'
               }).then((response) => {

                    expect(response.status).to.equal(200)
                    expect(response.body.books).to.be.an('array')
                    expect(response.body.books.length).to.be.greaterThan(0)


               })

          })
          it('GET - Deve obter detalhes de um livro específico', () => {

               cy.api({
                    method: 'GET',
                    url: 'books/1'
               }).then((response) => {

                    expect(response.status).to.equal(200)
                    expect(response.body.book).to.have.property('id')
                    expect(response.body.book).to.have.property('title')
                    expect(response.body.book).to.have.property('author')
                    expect(response.body.book).to.have.property('isbn')

               })

          })
     });

     describe('POST - Teste de API - Catálogo de Livros', () => {

          it('POST - Deve cadastrar um novo livro com sucesso', () => {

               const titulo = `Livro Cypress ${Date.now()}`
               cy.api({
                    method: 'POST',
                    url: 'books',
                    headers: {
                         Authorization: token
                    },
                    body: {
                         title: titulo,
                         author: 'Autor Cypress',
                         description: 'Livro criado via automação',
                         category: 'Teste',
                         isbn: `${Date.now()}`,
                         editor: 'Editora Cypress',
                         language: 'Português',
                         publication_year: 2024,
                         pages: 300,
                         format: 'Físico',
                         total_copies: 5,
                         available_copies: 5
                    },
                    failOnStatusCode: false

               }).then((response) => {

                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal('Livro criado com sucesso.')

               })
          })

          it('POST - Deve rejeitar livro com dados inválidos', () => {

               cy.api({
                    method: 'POST',
                    url: 'books',
                    headers: {
                         Authorization: token
                    },
                    body: {
                         "title": "Iracema",
                         "author": "José de Alencar",
                         "category": "Literatura Brasileira",
                         "total_copies": 2
                    },
                    failOnStatusCode: false

               }).then((response) => {
                    expect(response.status).to.equal(400)
                    expect(response.body.message).to.equal('Já existe um livro com este título e autor.')
               })
          })
     });

     describe('PUT - Teste de API - Catálogo de Livros', () => {

          it('PUT - Deve atualizar um livro previamente cadastrado', () => {
               cy.api({
                    method: 'PUT',
                    url: 'books/1', // Supondo que o ID do livro a ser atualizado seja 1
                    headers: {
                         Authorization: token
                    },
                    body: {
                         "title": "Nome livro atualizado",
                         "author": "Autor Atualizado",
                         "description": "Descrição atualizada do livro",
                         "category": "Categoria atualizada",
                         "editor": "Editora Atualizada",
                         "language": "Português",
                         "publication_year": 2000,
                         "pages": 300,
                         "format": "Físico",
                         "total_copies": 10,
                         "available_copies": 5
                    },
                    failOnStatusCode: false

               }).then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Livro atualizado com sucesso.')
               })
          })
     });

    describe('DELETE - Teste de API - Catálogo de Livros', () => {


    it('DELETE - Deve deletar um livro previamente cadastrado', () => {

        const titulo = `Livro Cypress ${Date.now()}`

        cy.api({
            method: 'POST',
            url: 'books',
            headers: {
                Authorization: token
            },
            body: {
                title: titulo,
                author: 'Autor Cypress',
                description: 'Livro criado para exclusão',
                category: 'Teste',
                isbn: `${Date.now()}`,
                editor: 'Editora Cypress',
                language: 'Português',
                publication_year: 2024,
                pages: 300,
                format: 'Físico',
                total_copies: 5,
                available_copies: 5
            }

        }).then((response) => {

            const bookId = response.body.book.id

            cy.api({
                method: 'DELETE',
                url: `books/${bookId}`,
                headers: {
                    Authorization: token
                },
                failOnStatusCode: false

            }).then((response) => {

                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Livro deletado com sucesso.')
            })
        })
    })
})
})
