import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import PropTypes from "prop-types";

import "./Tarefas.css";

export default function Tarefas({ handleDelete, handleEdit, tarefas }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => {
                handleEdit(e, index);
              }}
            />
            <FaWindowClose
              className="delete"
              onClick={(e) => {
                handleDelete(e, index);
              }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
