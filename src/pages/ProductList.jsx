import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Tasty Plastic Shirt",
  },
  {
    id: 2,
    name: "Practical Plastic Salad",
  },
  {
    id: 3,
    name: "Generic Wooden Ball",
  },
  {
    id: 4,
    name: "Rustic Plastic Shirt",
  }
]

function ProductList() {
  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
            </li>
          )})
        }
      </ul>
    </div>
  )
}
export default ProductList