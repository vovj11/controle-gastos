using ControleGastos.Api.Data;
using ControleGastos.Api.Models.Entities;

namespace ControleGastos.Api.Services;

    public class CategoryService
    {
        // Campo privado para acessar o contexto do banco de dados
        private readonly AppDbContext _context;
        
        public CategoryService(AppDbContext context)
        {
            // Injeção de dependência do AppDbContext para acessar o banco de dados
            _context = context;
        }
        
        // Criar/Adicionar uma categoria no banco de dados
        public Category Create(Category category)
        {
            // Valida se a descrição da categoria foi informada
            if(string.IsNullOrWhiteSpace(category.Description))
            throw new Exception("Descrição é obrigatória.");

            // Adiciona a Categoria ao contexto
            _context.Categories.Add(category);
            // Salva as alterações no banco de dados
            _context.SaveChanges();

            // Retorna a categoria criada já com o ID gerado pelo banco de dados
            return category;
        }

        // Listar todas as categorias do banco de dados
        public List<Category> GetAll()
        {
            return _context.Categories.ToList();
        }
    }
