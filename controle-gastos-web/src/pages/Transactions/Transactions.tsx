import { useEffect, useState } from "react";
import { getTransactions, createTransaction } from "../../services/api";
import type { Transaction, CreateTransaction } from "../../types/Transaction";
import "./Transactions.css";
import { getPersons } from "../../services/api";
import { getCategories } from "../../services/api";

// Componente principal para exibir e criar transações
export function Transactions() {
  // Estado que armazena e atualiza a lista de transações
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //Estado que armazena os dados digitados no formulário
  const [form, setForm] = useState<CreateTransaction>({
    personId: 0,
    description: "",
    value: 0,
    type: 1,
    categoryId: 0,
  });

  // Função que busca as transações da API
  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  // Executa apenas na montagem do componente para carregar as transações iniciais
  // Criei a função loadTransactions fora do useEffect para poder reutilizar
  useEffect(() => {
    loadTransactions();
  }, []);

  const [persons, setPersons] = useState<any[]>([]);

  const loadPersons = async () => {
    const data = await getPersons();
    setPersons(data);
  };

  useEffect(() => {
    loadPersons();
  }, []);

  const [categories, setCategories] = useState<any[]>([]);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // Função chamada ao enviar o formulário
  async function handleSubmit(e: React.FormEvent) {
    // Evita recarregar a página enquanto o formulário é enviado
    e.preventDefault();

    if (!form.personId) {
      alert("Selecione uma pessoa");
      return;
    }

    if (!form.categoryId) {
      alert("Selecione uma categoria");
      return;
    }

    if (!form.description) {
      alert("Informe a descrição");
      return;
    }

    if (!form.value || form.value <= 0) {
      alert("Informe um valor válido");
      return;
    }

    try {
      // Envia todos os dados do formulário garantindo que o id da pessoa e da categoria e o valor seja um número
      await createTransaction({
        ...form,
        personId: Number(form.personId),
        categoryId: Number(form.categoryId),
        value: Number(form.value),
      });

      // Atualiza a lista após criar a transação
      loadTransactions();

      // Limpa o formulário
      setForm({
        personId: 0,
        description: "",
        value: 0,
        type: 1,
        categoryId: 0,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao criar transação");
      }
    }
  }

  function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function getTypeLabel(type: number) {
    return type === 1 ? "Receita" : "Despesa";
  }

  const filteredCategories = categories.filter((c) => {
    if (form.type === 1) return c.purpose === 1 || c.purpose === 3;
    if (form.type === 2) return c.purpose === 2 || c.purpose === 3;
    return false;
  });

  return (
    <div className="container">
      <div className="title">Controle de Transações</div>

      {/* Formulário de criação de transação */}
      <form className="form" onSubmit={handleSubmit}>
        <select
          value={form.personId}
          onChange={(e) =>
            setForm({ ...form, personId: Number(e.target.value) })
          }
        >
          <option value="">Selecione uma pessoa</option>

          {persons.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <input
          className="input"
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          className="input"
          type="number"
          placeholder="Valor"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: Number(e.target.value) })}
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: Number(e.target.value) })}
        >
          <option value="">Selecione o tipo de categoria</option>
          <option value={1}>Receita</option>
          <option value={2}>Despesa</option>
        </select>

        <select
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: Number(e.target.value) })
          }
        >
          <option value="">Selecione uma categoria</option>

          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.description}
            </option>
          ))}
        </select>

        <button className="button" type="submit">
          Salvar
        </button>
      </form>

      <hr />

      {/* Lista de transações */}
      <ul className="transaction-list">
        {transactions.map((t) => (
          <li key={t.id} className="transaction-card">
            <div className="transaction-card-header">
              <span className="person">{t.person?.name}</span>
              <span className={`type ${t.type === 1 ? "revenue" : "expense"}`}>
                {getTypeLabel(t.type)}
              </span>
            </div>

            <div className="transaction-card-body">
              <p className="description">{t.description}</p>
              <span className={`value ${t.type === 1 ? "revenue" : "expense"}`}>
                {formatCurrency(t.value)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
