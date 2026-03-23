using ControleGastos.Api.Models.Enums;

namespace ControleGastos.Api.Models.Entities;

    public class Transaction
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public decimal Value { get; set; }
        public TransactionType Type { get; set; }

        // Foreign Key -> Pessoa
        public int PersonId { get; set; }
        public Person Person { get; set; } = null!;

        // Foreign Key -> Categoria
        public int CategoryId { get; set; }
        public Category Category { get; set; } = null!;

    }
