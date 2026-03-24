# Controle de Gastos Residenciais

## Sobre o projeto

Este projeto está sendo desenvolvido com o intuito de ser um sistema de controle de gastos residenciais.

A aplicação permite o gerenciamento de pessoas, categorias e transações financeiras, além da geração de relatórios simples.

---

## Tecnologias utilizadas

- Back-end: C# com .NET Web API
- Front-end: React com TypeScript (a ser implementado)
- Banco de dados: SQL Server (LocalDB) com Entity Framework

---

## Estrutura do projeto (Back-end)

O projeto foi organizado de forma simples, separando responsabilidades:

- **Controllers** → Responsáveis por receber as requisições HTTP
- **Models** → Representação das entidades do sistema
- **Services** → Regras de negócio
- **Data** → Contexto do banco de dados

---

## Etapas de desenvolvimento do Back-end
### Etapa 1 - Criação do projeto

Nesta etapa foi criado o projeto base utilizando o template de API do ASP.NET Core.

#### Passos realizados:

##### 1.1 - Projeto e Estrutura Inicial

1. Criação do projeto "ControleGastos.Api" no Visual Studio
2. Criação das pastas:
   - Controllers
   - Models
   - Services
   - Data
3. Execução da aplicação para verificar se está funcionando
4. Acesso ao Swagger para testes iniciais efetuado com sucesso

### Etapa 2 - Modelagem das entidades

Nesta etapa foram criadas as entidades principais do sistema e seus respectivos enums.

#### Passos realizados:

##### 2.1 - Estrutura criada:

1. Entities:
   - Person
   - Category
   - Transaction

2. Enums:
   - TransactionType (Receita, Despesa)
   - CategoryPurpose (Receita, Despesa, Ambas)

As entidades foram modeladas considerando os relacionamentos entre pessoa, categoria e transações.

### Etapa 3 - Configuração do banco de dados

Nesta etapa foi configurado o Entity Framework com SQL Server.
#### Passos realizados:

##### 3.1 - Configuração do Entity Framework e criação do banco:
1. Instalação dos pacotes do Entity Framework
   - Microsoft.EntityFrameworkCore
   - Microsoft.EntityFrameworkCore.SqlServer
   - Microsoft.EntityFrameworkCore.Tools
2. Criação do AppDbContext
3. Configuração da connection string
4. Registro do DbContext no Program.cs
5. Criação da primeira migration
   - Add-Migration InitialCreate (diz como o banco deve ser baseado nas entidades)
6. Criação do banco de dados
   - Update-Database (aplica a migration e cria o banco de dados)

### Etapa 4 - Implementação de Services

Nesta etapa foi criada a camada de serviços responsável pela lógica de negócio da aplicação.

#### Passos realizados:

##### 4.1 - Implementação do PersonService:

1. Criação do PersonService
2. Implementação dos métodos:
   - Criar pessoa
   - Listar pessoas
   - Buscar por ID
   - Atualizar pessoa
   - Deletar pessoa
3. Registro do service no Program.cs

##### 4.2 - Implementação do CategoryService

Nesta etapa foi criada a camada de serviço para gerenciamento de categorias.

1. Criação do CategoryService
2. Implementação dos métodos:
   - Criar categoria
   - Listar categorias
3. Registro do service no Program.cs

##### 4.3 - Implementação do TransactionService
1. Criação do TransactionService
2. Implementação dos métodos:
   - Criar transação
   - Listar transações
3. Regras de negócios implementadas:
   - O valor da transação deve ser positivo
   - Menores de idade não podem possuir receitas
   - A categoria deve ser compatível com o tipo da transação

1. Criação do CategoryService
2. Implementação dos métodos:
   - Criar categoria
   - Listar categorias
3. Registro do service no Program.cs

---

## Status atual

- Projeto criado e estruturado
- Entidades e enums implementados
- Banco de dados configurado com Entity Framework  
- Migration inicial criada e aplicada  
- PersonService implementado com operações de CRUD  
- CategoryService implementado com criação (create) e listagem (read)
- TransactionService implementado com regras de negócio
- Injeção de dependência configurada