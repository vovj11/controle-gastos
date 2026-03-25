using Microsoft.AspNetCore.Mvc;
using ControleGastos.Api.Services;
using ControleGastos.Api.Models.Entities;

namespace ControleGastos.Api.Controllers
{
    // Indica que esta classe é um controller de aPI
    [ApiController]
    // Defie a rota base da API para este controller, onde [controller] será substituído pelo nome da classe sem o sufixo controller
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        // Declaração do service que será usado para acessar as regras de negócio relacionadas a categorias
        private readonly CategoryService _service;

        // Injeção de dependência do service através do construtor
        public CategoryController(CategoryService service)
        {
            _service = service;
        }

        // Endpoint para criar uma nova transação - POST api/category
        [HttpPost]
        public IActionResult Create(Category category)
        {
            // Chama o service responsável por aplicar regras de negócio e criar a categoria
            var result = _service.Create(category);
            // Retorna o status HTTP 200 com o objeto criado
            return Ok(result);
        }

        // Endpoint para listar todas as categorias - GET api/category
        [HttpGet]
        public IActionResult GetAll()
        {
            // Chama o service para buscar todas as categorias no banco
            var result = _service.GetAll();
            // Retorna o status HTTP 200 com a lista de pessoas
            return Ok(result);
        }

    }
}
