import React, { useState } from "react";
import "../../App.css";

function TodoAdd({ onAdd }) {
    const [newTodo, setNewTodo] = useState(""); // État local pour suivre le nouvel élément à ajouter

    // Fonction pour gérer la soumission du formulaire d'ajout
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Vérifier si le nouvel élément n'est pas vide
        if (newTodo.trim() !== "") {
            // Appeler la fonction onAdd pour ajouter le nouvel élément
            onAdd(newTodo);
            // Réinitialiser le champ de saisie
            setNewTodo("");
        }
    };

    return (
        <div className="container">
            <form className="add text-center my-4" onSubmit={handleSubmit}>
                <label htmlFor="add" className="add text-light">
                    Add a new todo:
                </label>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </form>
        </div>
    );
}

export default TodoAdd;
