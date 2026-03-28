import type { CreateTransaction } from "../types/Transaction";

// URL base da API que será utilizada em todas as requisições
const API_URL = "https://localhost:7063/api";

// Exporta a função para obter as transações
export async function getTransactions() {
  // Faz uma requisição HTTP GET para a rota/endpoint de transações
  const response = await fetch(`${API_URL}/Transaction`);
  // Converte a resposta para JSON e retorna os dados das transações
  return response.json();
}

// Exporta a função para criar/enviar uma nova transação para a API
export async function createTransaction(data: CreateTransaction) {
  // Faz uma requisição HTTP POST para o endpoint de transações
  const response = await fetch(`${API_URL}/Transaction`, {
    // Defino o método como POST
    method: "POST",
    //Informa que está em formato JSON
    headers: {
      "Content-Type": "application/json",
    },
    // Converte o objeto JS em JSON antes de enviar
    body: JSON.stringify(data),
  });

  // Verifica se a resposta da API não foi bem-sucedida. Status diferente de 200
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  // Se a resposta for bem-sucedida, converte para JSON e retorna os dados da transação criada
  return response.json();
}

export async function createPerson(data: { name: string; age: number }) {
  const response = await fetch(`${API_URL}/Person`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}

export async function getPersons() {
  const response = await fetch(`${API_URL}/Person`);
  return response.json();
}

export async function createCategory(data: {
  description: string;
  purpose: number;
}) {
  const response = await fetch(`${API_URL}/Category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/Category`);
  return response.json();
}
