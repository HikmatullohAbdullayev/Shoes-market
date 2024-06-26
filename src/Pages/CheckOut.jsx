import { useState } from 'react';
import './style/checkout.css';
import Summary from './components/Summary';

function CheckOut() {
  const [cartProduct, setCartProduct] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });
  // Mahsulotning sonini oshirish
  const inc = (id) => {
    const updatedProducts = cartProduct.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    setCartProduct(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  // Mahsulotning sonini kamaytirish
  const dec = (id) => {
    const updatedProducts = cartProduct.map((product) => {
      if (product.id === id && product.count > 1) {
        return { ...product, count: product.count - 1 };
      }
      return product;
    });
    setCartProduct(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  // Mahsulotni olib tashlash
  const removeProduct = (id) => {
    const updatedProducts = cartProduct.filter((product) => product.id !== id);
    setCartProduct(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  return (
    <section className="container  checkout">
      <div className="target_product_block ">
        <h2 className="target_product_title">Your Bag</h2>
        {cartProduct.map((item) => (
          <div key={item.id} className="target_product">
            <img
              className="target_product_img"
              src={item.img}
              alt={item.info}
            />
            <div className="target_product_detail">
              <h3 className="target_product_name">{item.title}</h3>
              <p className="target_product_info"> {item.info}</p>
              <div className="target_product_control">
                <div className="product_btns">
                  <button
                    className="target_product_btn"
                    onClick={() => dec(item.id)}
                  >
                    -
                  </button>
                  <span className="target_product_count">{item.count}</span>
                  <button
                    className="target_product_btn"
                    onClick={() => inc(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="target_product_remove"
                  onClick={() => removeProduct(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="target_product_price">${item.price}</div>
          </div>
        ))}
      </div>
      <Summary cartProduct={cartProduct} />
    </section>
  );
}

export default CheckOut;
