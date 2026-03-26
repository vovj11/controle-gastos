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

#### Ajustes no back-end:

##### 1 - Ajustes no backend para integração

1. Configuração de CORS no Program.cs com AddCors
2. Aplicação do middleware com UseCors
3. Liberação de requisições do frontend (localhost:5173)

##### 2 - Inclusão de dados relacionados nas transações

1. Utilização do Include no TransactionService para trazer dados da entidade Person
2. Remoção do JsonIgnore das propriedades de navegação (Person e Category) da entidade Transaction
3. Configuração da serialização JSON no Program.cs para evitar loops de referência
4. Ajuste no retorno da API para incluir dados completos das entidades relacionadas

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
- CORS configurado para permitir requisições do frontend
- Retorno de dados relacionados (Person) nas transações
- Configuração de serialização para evitar ciclos (loops) no JSON

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

#### Etapa 6 - Criação da tela de transações e integração com API

Nesta etapa foi criada a interface para exibição e cadastro de transações, integrando o front-end com o back-end.

##### Passos realizados:

###### 6.2 - Implementação do formulário de criação:

1. Criação de formulário controlado
2. Captura dos dados de entrada (descrição, valor e tipo)
3. Envio dos dados para API utilizando o TransactionService
4. Atualização automática da lista após criação

###### 6.3 - Integração com o App:

1. Importação do componente Transactions no App.tsx
2. Renderização da página principal com

###### 6.4 - Ajustes na comunicação com API:

1. Alteração da API_URL para utilizar HTTPS
2. Correção de erro de conexão (Failed to fetch)
3. Adequação ao redirecionamento automático do backend (HTTP → HTTPS)

###### 6.5 - Ajustes de dados para testes:

1. Definição de valores padrão para PersonId
2. Definição de valores padrão para CategoryId
3. Garantia de compatibilidade com dados existentes no banco

###### 6.6 - Exibição de dados relacionados:

1. Ajuste da tipagem Transaction para incluir o objeto Person
2. Utilização de optional chaining para acesso seguro (person?.name)
3. Exibição do nome da pessoa na lista de transações

#### Etapa 7 - Estilização da interface

Nesta etapa foi realizada a melhoria visual da aplicação, focando em organização e UX.

##### Passos realizados:

##### 7.1 - Estrutura de estilos:

1. Criação de pasta styles para organização dos arquivos CSS (reset e global)
2. Separação dos estilos por responsabilidade

##### 7.2 - Layout e componentes:

1. Criação de container principal centralizado
2. Definição de background global com cor mais suave
3. Estilização da lista de transações com cards

##### 7.3 - Exibição das transações:

1. Criação de layout com informações organizadas:
   - Nome da pessoa
   - Tipo da transação (Receita/Despesa)
   - Descrição
   - Valor formatado
2. Aplicação de cores para diferenciação de valores e tipo
3. Criação de elementos visuais com bordas e hierarquia de informação

##### 7.4 - Interações visuais:

1. Definição de cores padrão da aplicação
2. Implementação de hover em botões
3. Melhoria da legibilidade e contraste

---

### Status atual

- Projeto criado com React + TypeScript (Vite)
- Estrutura inicial organizada (pages, services, types)
- Métodos para listagem e criação de transações implementados
- Tratamento de erro nas requisições da API
- Tipagens criadas para representação de dados (Transaction e CreateTransaction)
- Comunicação com API configurada utilizando fetch
- Tela de transações implementadas
- Integração front-end e back-end funcionando
- Criação e listagem de transações
- Comunicação via HTTPS corrigida
- Estrutura de estilos css organizadas
- Reset de estilos aplicado
- Exibição do nome da pessoas nas transações
- Tipagem atualizada para suportar dados relacionados
- Interface melhorada com layout em cards
