
using ControleGastos.Api.Models.Enums;

namespace ControleGastos.Api.Models.Entities;

    public class Category
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public CategoryPurpose Purpose { get; set; }
    }
