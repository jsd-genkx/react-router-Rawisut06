import { useParams } from "react-router-dom"


function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h3>Product Detail</h3>
      <p>Detail for Product ID: { id }</p>
    </div>
  )
}
export default ProductDetail