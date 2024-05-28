import { PizzaContext } from "../Context/PizzaProvider";
import { useContext } from "react";

export const Carrito = () => {
  const { carrito, incrementar, decrementar } = useContext(PizzaContext);

  const sumaTotal = carrito.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.count,
    0
  );

  return (
    <div className="container">
      <h3>Detalle del Pedido</h3>
      {carrito.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        carrito.map((producto, index) => (
          <div
            className="d-flex justify-content-between align-items-center"
            key={producto.id}
          >
            <div className="d-flex align-items-center">
              <img
                src={producto.img}
                width={100}
                alt={producto.name}
                className="img-carrito"
              />
              <h4 className="mx-3">{producto.name}</h4>
            </div>
            <div>
              <button
                className="btn btn-dark"
                onClick={() => decrementar(index)}
              >
                -
              </button>
              <span className="mx-2">{producto.count}</span>
              <button
                className="btn btn-dark"
                onClick={() => incrementar(index)}
              >
                +
              </button>
            </div>
            <h4 className="mx-3">${producto.count * producto.price}</h4>
          </div>
        ))
      )}
      <h3>Total: ${sumaTotal}</h3>
    </div>
  );
};
