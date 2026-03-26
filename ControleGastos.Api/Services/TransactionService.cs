using ControleGastos.Api.Data;
using ControleGastos.Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Services;

    public class TransactionService
    {
        private readonly AppDbContext _context;
        public TransactionService(AppDbContext context)
        {
            _context = context;
        }

        public Transaction Create(Transaction transaction)
        {
            // Verifica se o valor é válido pois não é permitido ter uma transação com valor negativo ou zero
            if (transaction.Value <= 0)
                throw new Exception("Valor da transação deve ser positivo.");

            // Busca pessoa no banco de dados relacionada a transação
            var person = _context.Persons.FirstOrDefault(p => p.Id == transaction.PersonId);
            // Valida se a pessoa existe pois não é permitido salvar transação com pessoa inexistente
            if (person == null)
                throw new Exception("Pessoa não encontrada.");

            // Verifica se é menor de idade e se está tentando cadastrar receita pois os mesmos não podem possuir receitas
            if (person.Age < 18 && transaction.Type == Models.Enums.TransactionType.Receita)
                throw new Exception("Menor de idade não pode possuir receitas.");

            // Busca categoria no banco de dados relacionada a transação
            var category = _context.Categories.FirstOrDefault(c => c.Id == transaction.CategoryId);
            // Valida se a categoria existe para não salvar transação com categoria inexistente
            if (category == null)
                throw new Exception("Categoria não encontrada.");

            // Valida se a categoria é compatível com o tipo da transação pois não é permitido categoria de despesa em transações do tipo receita
            if (transaction.Type == Models.Enums.TransactionType.Receita &&
                category.Purpose == Models.Enums.CategoryPurpose.Despesa)
                throw new Exception("Categoria de despesa não pode ser usada para receita.");

            // Valida se a categoria é compatível com o tipo da transação pois não é permitido categoria de receita em transações do tipo despesa
            if (transaction.Type == Models.Enums.TransactionType.Despesa &&
                category.Purpose == Models.Enums.CategoryPurpose.Receita)
                throw new Exception("Categoria de receita não pode ser usada para despesa.");

            // Adiciona a transação ao contexto
            _context.Transactions.Add(transaction);
            // Salva as alterações no banco de dados
            _context.SaveChanges();

            // Retorna a transação criada já com o ID gerado pelo banco de dados
            return transaction;
        }

        // Listar todas transações
        public List<Transaction> GetAll()
        {
            return _context.Transactions.Include(t => t.Person).ToList();
        }
        
    }

