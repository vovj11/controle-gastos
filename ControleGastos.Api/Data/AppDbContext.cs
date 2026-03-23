using Microsoft.EntityFrameworkCore;
using ControleGastos.Api.Models.Entities;

namespace ControleGastos.Api.Data;

    public class AppDbContext : DbContext
    {
        // Construtor que recebe as opções de configuração do DbContext
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
                
        }

        // Cria as tabelas do banco de dados a partir das classes de entidade
        public DbSet<Person> Persons { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
}

