using ControleGastos.Api.Data;
using ControleGastos.Api.Models.Entities;

namespace ControleGastos.Api.Services;
    public class PersonService
    {
        // Campo privado para acessar o contexto do banco de dados
        private readonly AppDbContext _context;
        public PersonService(AppDbContext context)
        {
            // Injeção de dependência do AppDbContext para acessar o banco de dados
            _context = context;
        }
        
        // Criar/Adicionar uma pessoa no banco de dados
        public Person Create(Person person)
        {
            // Adiciona a Pessoa ao contexto
            _context.Persons.Add(person);
            // Salva as alterações no banco de dados
            _context.SaveChanges();
            
            // Retorna a pessoa criada já com o ID gerado pelo banco de dados
            return person;
        }
        
        // Listar todas as pessoas do banco de dados
        public List<Person> GetAll()
        {
            return _context.Persons.ToList();
        }

        // Buscar uma pessoa pelo ID
        public Person GetById(int id)
        {
            return _context.Persons.FirstOrDefault(p => p.Id == id);
        }

        // Atualizar os dados de uma pessoa
        public void Update(Person person)
        {
            _context.Persons.Update(person);
            _context.SaveChanges();
        }

        // Deletar uma pessoa do banco de dados
        public void Delete(int id)
        {
            var person = _context.Persons.FirstOrDefault(p => p.Id == id);

            if (person == null)
                return;

            _context.Persons.Remove(person);
            _context.SaveChanges();
        }
    }

