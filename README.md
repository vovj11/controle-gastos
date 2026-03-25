# Controle de Gastos Residenciais

## Sobre o projeto

Este projeto está sendo desenvolvido com o intuito de ser um sistema de controle de gastos residenciais.

A aplicação permite o gerenciamento de pessoas, categorias e transações financeiras, além da geração de relatórios simples.

---

## Tecnologias utilizadas

- Back-end: C# com .NET Web API
- Front-end: React com TypeScript
- Banco de dados: SQL Server (LocalDB) com Entity Framework

---

## Back-end

### Estrutura do projeto (Back-end)

O projeto foi organizado de forma simples, separando responsabilidades:

- **Controllers** → Responsáveis por receber as requisições HTTP
- **Models** → Representação das entidades do sistema
- **Services** → Regras de negócio
- **Data** → Contexto do banco de dados

---

### Etapas de desenvolvimento do Back-end

#### Etapa 1 - Criação do projeto

Nesta etapa foi criado o projeto base utilizando o template de API do ASP.NET Core.

##### Passos realizados:

###### 1.1 - Projeto e Estrutura Inicial

1. Criação do projeto "ControleGastos.Api" no Visual Studio
2. Criação das pastas:
   - Controllers
   - Models
   - Services
   - Data
3. Execução da aplicação para verificar se está funcionando
4. Acesso ao Swagger para testes iniciais efetuado com sucesso

#### Etapa 2 - Modelagem das entidades

Nesta etapa foram criadas as entidades principais do sistema e seus respectivos enums.

##### Passos realizados:

###### 2.1 - Estrutura criada:

1. Entities:
   - Person
   - Category
   - Transaction

2. Enums:
   - TransactionType (Receita, Despesa)
   - CategoryPurpose (Receita, Despesa, Ambas)

As entidades foram modeladas considerando os relacionamentos entre pessoa, categoria e transações.

#### Etapa 3 - Configuração do banco de dados

Nesta etapa foi configurado o Entity Framework com SQL Server.

##### Passos realizados:

###### 3.1 - Configuração do Entity Framework e criação do banco:

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

#### Etapa 4 - Implementação de Services

Nesta etapa foi criada a camada de serviços responsável pela lógica de negócio da aplicação.

##### Passos realizados:

###### 4.1 - Implementação do PersonService:

1. Criação do PersonService
2. Implementação dos métodos:
   - Criar pessoa
   - Listar pessoas
   - Buscar por ID
   - Atualizar pessoa
   - Deletar pessoa
3. Registro do service no Program.cs

###### 4.2 - Implementação do CategoryService

Nesta etapa foi criada a camada de serviço para gerenciamento de categorias.

1. Criação do CategoryService
2. Implementação dos métodos:
   - Criar categoria
   - Listar categorias
3. Registro do service no Program.cs

###### 4.3 - Implementação do TransactionService

1. Criação do TransactionService
2. Implementação dos métodos:
   - Criar transação
   - Listar transações
3. Regras de negócios implementadas:
   - O valor da transação deve ser positivo
   - Menores de idade não podem possuir receitas
   - A categoria deve ser compatível com o tipo da transação

4. Criação do CategoryService
5. Implementação dos métodos:
   - Criar categoria
   - Listar categorias
6. Registro do service no Program.cs

#### Etapa 5 - Criação dos Controllers

Nessa etapa foi criado os controllers responsáveis por expor os endpoints da API, permitindo a comunicação com os services e a execução das regras de negócio.

##### Passos realizados:

###### 5.1 - Implementação do PersonController:

1. Criação do PersonController
2. Injeção do PersonService via Dependency Injection
3. Implementação dos endpoints:
   - Criação de pessoa (POST)
   - Listagem de pessoas (GET)

###### 5.2 - Implementação do CategoryController:

1. Criação do CategoryController
2. Injeção do CategoryService via Dependency Injection
3. Implementação dos endpoints:
   - Criação de categoria (POST)
   - Listagem de categorias (GET)

###### 5.3 - Implementação do TransactionController:

1. Criação do TransactionController
2. Injeção do TransactionService via Dependency Injection
3. Implementação dos endpoints:
   - Criação de transação (POST)
   - Listagem de transações (GET)

###### 5.4 - Testes realizados via swagger:

1. Execução da aplicação
2. Acesso ao Swagger para visualização dos endpoints
3. Testes realizados para:
   - Criação de registros
   - Listagem de dados
   - Validação das regras de negócio (erros e sucessos)

---

### Status atual

- Projeto criado e estruturado
- Entidades e enums implementados
- Banco de dados configurado com Entity Framework
- Migration inicial criada e aplicada
- PersonService implementado com operações de CRUD
- CategoryService implementado com criação (create) e listagem (read)
- TransactionService implementado com regras de negócio
- Injeção de dependência configurada
- Controllers implementados
- Endpoints funcionando
- Testes realizados via Swagger

---

## Front-end

### Estrutura do projeto (Front-end)

O projeto foi organizado de forma simples, separando responsabilidades:

- **pages** → Responsáveis pelas telas da aplicação
- **services** → Comunicação com a API
- **types** → Definição de tipagens TypeScript

---

### Etapas de desenvolvimento do Front-end

#### Etapa 1 - Criação do projeto

Nesta etapa foi criado o projeto base utilizando o Vite com React e TypeScript.

##### Passos realizados:

###### 1.1 - Projeto e Estrutura Inicial

1. Criação do projeto "controle-gastos-web" utilizando Vite
2. Seleção do template React com TypeScript
3. Instalação das dependências e execução do projeto
4. Acesso à aplicação no navegador para validação inicial

---

#### Etapa 2 - Organização da estrutura

Nesta etapa foi organizada a estrutura do projeto para facilitar a manutenção e escalabilidade.

##### Passos realizados:

###### 2.1 - Estrutura criada:

1. Criação das pastas:
   - pages
   - services
   - types
2. Separação das responsabilidades entre as camadas

---

#### Etapa 3 - Configuração da comunicação com a API

Nesta etapa foi configurada a comunicação com o back-end.

##### Passos realizados:

###### 3.1 - Criação do service base:

1. Criação do arquivo de serviço para requisições HTTP
2. Definição da URL base da API
3. Utilização de fetch/axios para comunicação com o backend

---

#### Etapa 4 - Tipagem inicial

Nesta etapa foram definidas as tipagens iniciais para garantir maior segurança no desenvolvimento.

##### Passos realizados:

###### 4.1 - Criação de tipos:

1. Criação dos tipos Transaction e CreateTransaction
2. Separação dos tipos para representar dados completos e dados de criação
3. Definição dos campos conforme esperado pela API
4. Utilização das tipagens nos services garantindo consistência e segurança

---

#### Etapa 5 - Implementação do TransactionService

Nesta etapa foi criada a camada responsável pela comunicação com os endpoints de transações.

##### Passos realizados:

###### 5.1 - Métodos implementados:

1. Método para listar transações (GET)
2. Método para criar transação (POST)
3. Conversão e tratamento dos dados antes do envio para API

---

### Status atual

- Projeto criado com React + TypeScript (Vite)
- Estrutura inicial organizada (pages, services, types)
- Métodos para listagem e criação de transações implementados
- Tratamento de erro nas requisições da API
- Tipagens criadas para representação de dados (Transaction e CreateTransaction)
- Comunicação com API configurada utilizando fetch
