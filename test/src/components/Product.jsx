import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`} className='product-link'>
          <Card.Title as='div' className='product-title' >
            <strong >{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='h3'>
          ${product.price}
        </Card.Text>

      </Card.Body>
    </Card>
  )
}
export default Product
