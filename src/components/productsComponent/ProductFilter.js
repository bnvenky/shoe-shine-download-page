import './ProductFilter.css'
const ProductFilter = ({filteredProducts}) => {
   return (
    <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              {product.id === 0 ? (
                <h2>Product not available</h2>
              ) : (
                <>
                  <img src={product.productImageUrl1} alt={product.productName} className="product-image" />
                  <p>{product.id}</p>
                  <h2>{product.productName}</h2>
                  <p>{product.productCategory}</p>
                  <p>₹{product.productPrice}</p>
                  
                </>
              )}
            </div>
          ))}
        </div>
   );
}

export default ProductFilter