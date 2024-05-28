import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../Context/PizzaProvider";

export const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, addCarrito } = useContext(PizzaContext);
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) return <p>Pizza no encontrada</p>;

  return (
    <div className="container-card">
      <div className="card-carrito">
        <div className="card-content">
          <img src={pizza.img} className="card-img-top" alt={pizza.name} />
          <div className="card-body">
            <h4 className="card-title">{pizza.name}</h4>
            <h3 className="card-text">${pizza.price}</h3>
            <h4 className="card-text">{pizza.ingredients.join(", ")}</h4>
            <h5 className="card-desc">{pizza.desc}</h5>
            <button
              className="btn btn-success"
              onClick={() => addCarrito(pizza)}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
