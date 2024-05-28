import { useContext } from "react";
import { PizzaContext } from "../Context/PizzaProvider";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { pizzas, addCarrito } = useContext(PizzaContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        {pizzas && pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-3">
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">${pizza.price}</p>
                <div className="d-flex">
                  <button
                    className="btn btn-dark text white"
                    onClick={() => navigate(`/pizza/${pizza.id}`)}
                  >
                    Ver Más
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => addCarrito(pizza)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};


