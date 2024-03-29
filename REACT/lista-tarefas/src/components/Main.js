import React, { Component } from "react";

import Form from "./Form";
import Tarefas from "./Tarefas";

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({ tarefas: [...novasTarefas] });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index: index,
      novaTarefa: tarefas[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index, novaTarefa } = this.state;
    const trimmedTarefa = novaTarefa.trim();

    // Verifica se a nova tarefa não é vazia ou apenas espaços
    if (trimmedTarefa === "") {
      return;
    }

    if (tarefas.indexOf(trimmedTarefa) !== -1) {
      return; // Sai da função se a nova tarefa já existir na lista
    }

    const novasTarefas = [...tarefas];

    if (index === -1) {
      // Se não existir na lista, cria
      novasTarefas.push(trimmedTarefa);
    } else {
      // Caso exista, edita ele
      novasTarefas[index] = trimmedTarefa;
    }

    this.setState({
      novaTarefa: "",
      tarefas: novasTarefas,
      index: -1,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
