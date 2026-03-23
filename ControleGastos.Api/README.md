# Controle de Gastos Residenciais

## Sobre o projeto

Este projeto está sendo desenvolvido com o intuito de ser um sistema de controle de gastos residenciais.

A aplicação permite o gerenciamento de pessoas, categorias e transações financeiras, além da geração de relatórios simples.

---

## Tecnologias utilizadas

- Back-end: C# com .NET Web API
- Front-end: React com TypeScript (a ser implementado)
- Banco de dados: SQL Server com Entity Framework (a ser configurado)

---

## Estrutura do projeto (Back-end)

O projeto foi organizado de forma simples, separando responsabilidades:

- **Controllers** → Responsáveis por receber as requisições HTTP
- **Models** → Representação das entidades do sistema
- **Services** → Regras de negócio
- **Data** → Contexto do banco de dados

---

## Etapa 1 - Criação do projeto

Nesta etapa foi criado o projeto base utilizando o template de API do ASP.NET Core.

### Passos realizados:

#### 1 - Projeto e Estrutura Inicial

1. Criação do projeto "ControleGastos.Api" no Visual Studio
2. Criação das pastas:
   - Controllers
   - Models
   - Services
   - Data
3. Execução da aplicação para verificar se está funcionando
4. Acesso ao Swagger para testes iniciais efetuado com sucesso

## Etapa 2 - Modelagem das entidades

Nesta etapa foram criadas as entidades principais do sistema e seus respectivos enums.

### Passos realizados:

#### 2 - Estrutura criada:

1. Entities:
  - Person
  - Category
  - Transaction

2. Enums:
  - TransactionType (Receita, Despesa)
  - CategoryPurpose (Receita, Despesa, Ambas)

As entidades foram modeladas considerando os relacionamentos entre pessoa, categoria e transações.

---

## Status atual

✔ Projeto criado e estruturado
✔ Entidades e Enums implementados
