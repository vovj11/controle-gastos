using System.Text.Json.Serialization;
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
        [JsonIgnore]
        public Person? Person { get; set; }

        // Foreign Key -> Categoria
        public int CategoryId { get; set; }
        [JsonIgnore]
        public Category? Category { get; set; }

    }
