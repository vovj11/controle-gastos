using ControleGastos.Api.Data;
using Microsoft.EntityFrameworkCore;
using ControleGastos.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
            policy.WithOrigins("" +
                "http://localhost:5173",
                "https://localhost:5173"
            )
                  .AllowAnyMethod()
                  .AllowAnyHeader());
});

// Add services to the container.
builder.Services.AddControllers();
// Configura o EF para usar o SQL Server com a string de conexão definida no appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Registra o serviço de pessoa para injeção de dependência
builder.Services.AddScoped<PersonService>();
// Registra o serviço de categoria para injeção de dependência
builder.Services.AddScoped<CategoryService>();
// Registra o serviço de transação para injeção de dependência
builder.Services.AddScoped<TransactionService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowFrontend");

app.MapControllers();

app.Run();
