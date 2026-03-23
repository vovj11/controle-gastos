using System.Collections.Generic;
using ControleGastos.Api.Models.Entities;

namespace ControleGastos.Api.Models.Entities;

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Age { get; set; }

        //Relacionamento
        public List<Transaction> Transactions { get; set; } = new();
    }
