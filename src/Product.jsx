import "./Product.css";

function Product({ title, price, features }) {
  let styles = { backgroundColor: price > 5000 ? "red" : "" };

  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      {price > 7000 && <p>Discount 5%</p>} 
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
