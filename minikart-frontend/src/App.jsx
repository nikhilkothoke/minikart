import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const loadProducts = () => {
    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = () => {
    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        price: Number(price),
        quantity: Number(quantity)
      })
    })
      .then(response => response.json())
      .then(() => {
        setName("");
        setPrice("");
        setQuantity("");
        loadProducts();
      });
  };

  return (
    <div>
      <h1>MiniKart</h1>

      <h2>Add Product</h2>

      <input
        placeholder="Product name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      <h2>Product List</h2>

      {products.map(product => (
        <p key={product.id}>
          {product.name} - ₹{product.price} - Quantity: {product.quantity}
        </p>
      ))}
    </div>
  );
}

export default App;