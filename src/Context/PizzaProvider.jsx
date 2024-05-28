import React, { createContext, useEffect, useState } from "react";

// Se crea el contexto PizzaContext
export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para obtener los datos de las pizzas
  const getData = async () => {
    const response = await fetch("/pizzas.json");
    const pizzas = await response.json();
    setPizzas(pizzas);
  };

  // Función para añadir pizzas al carrito
  const addCarrito = (pizza) => {
    const { id, price, name, img } = pizza;
    const pEindex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (pEindex >= 0) {
      carrito[pEindex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
    setTotal(total + price); // Actualizar el total
  };

  // Función para incrementar la cantidad de una pizza en el carrito
  const incrementar = (index) => {
    const newCarrito = [...carrito];
    newCarrito[index].count++;
    setCarrito(newCarrito);
    setTotal(total + newCarrito[index].price); // Actualizar el total
  };

  // Función para decrementar la cantidad de una pizza en el carrito
  const decrementar = (index) => {
    const newCarrito = [...carrito];
    if (newCarrito[index].count > 1) {
      newCarrito[index].count--;
      setTotal(total - newCarrito[index].price); // Actualizar el total
    } else {
      setTotal(total - newCarrito[index].price); // Actualizar el total
      newCarrito.splice(index, 1);
    }
    setCarrito(newCarrito);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // Se proporciona el contexto a los componentes hijos
    <PizzaContext.Provider
      value={{ pizzas, addCarrito, carrito, incrementar, decrementar, total }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
