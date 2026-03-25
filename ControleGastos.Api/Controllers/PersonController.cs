using Microsoft.AspNetCore.Mvc;
using ControleGastos.Api.Services;
using ControleGastos.Api.Models.Entities;

namespace ControleGastos.Api.Controllers
{

    // Indica que esta classe é um controller de aPI
    [ApiController]
    // Defie a rota base da API para este controller, onde [controller] será substituído pelo nome da classe sem o sufixo controller
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        // Declaração do service que será usado para acessar as regras de negócio relacionadas a pessoas
        private readonly PersonService _service;

        // Injeção de dependência do service através do construtor
        public PersonController(PersonService service)
        {
            _service = service;
        }

        // Endpoint para criar uma nova transação - POST api/person
        [HttpPost]
        public IActionResult Create(Person person)
        {
            // Chama o service responsável por aplicar regras de negócio e criar a pessoa
            var result = _service.Create(person);
            // Retorna o status HTTP 200 com o objeto criado
            return Ok(result);
        }

        // Endpoint para listar todas as pessoas - GET api/person
        [HttpGet]
        public IActionResult GetAll()
        {
            // Chama o service para buscar todas as pessoas no banco
            var result = _service.GetAll();
            // Retorna o status HTTP 200 com a lista de pessoas
            return Ok(result);
        }
    }
}
