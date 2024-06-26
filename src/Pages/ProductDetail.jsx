import { useParams } from 'react-router-dom';
import product from '../data/db.json';
import '../Pages/style/productDetail.css';
import { useState } from 'react';

function ProductDetail() {
  const [dataProduct, setDataProduct] = useState([]);
  const { id } = useParams();

  let targetProduct = null;

  // Tanlangan maxsulotni topish
  product.forEach((item) => {
    if (item.id === id) {
      targetProduct = { ...item };
    }
  });

  const [count, setCount] = useState(1);

  const inc = () => {
    setCount((prev) => prev + 1);
  };

  const dec = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const addProduct = () => {
    const newProduct = {
      ...targetProduct,
      count: count,
    };

    // localStorage dan mavjud maxsulotlarni olish
    const cartProduct = JSON.parse(localStorage.getItem('cart')) || [];

    // Yangi maxsulotni qo'shish, agar hali mavjud bo'lmasa
    const isProductAdd = cartProduct.find((item) => item.id === newProduct.id);

    if (!isProductAdd) {
      const updatedProducts = [...cartProduct, newProduct];
      localStorage.setItem('cart', JSON.stringify(updatedProducts));
      setDataProduct(updatedProducts);
      console.log(updatedProducts);
    } else {
      console.log('Maxsulot allaqachon saqlangan!');
    }
  };

  return (
    <section className="container">
      <div className="product">
        <div className="product_top">
          <div className="product_img_block">
            <img
              className="product_img"
              src={targetProduct.img}
              alt={targetProduct.title}
            />
          </div>
          <div className="product_cart">
            <div className="product_info_block">
              <h2 className="product_title">{targetProduct.title}</h2>
              <p className="product_info">{targetProduct.info}</p>
              <p className="product_price">${targetProduct.price}</p>
            </div>
            <span className="line"></span>
            <div className="product_counter">
              <p className="product_quanity">Quanity</p>
              <div className="counret">
                <button className="btn" onClick={dec}>
                  -
                </button>
                <p className="product_count">{count}</p>
                <button className="btn" onClick={inc}>
                  +
                </button>
              </div>
            </div>
            <div className="btn_box">
              <button className="add_btn" onClick={addProduct}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="product_detail">
        <div className="description_block">
          <h3 className="description_title">Description</h3>
          <span className="line"></span>
          <p className="description_text">
            Energize your look with a fresh take on heritage adidas style. The
            adidas Daily 3.0 Shoes cut a classic profile with a modern suede
            upper. Your walk across campus or commute across town has never
            looked or felt this good.
          </p>
          <ul className="list">
            <li className="list_item">
              <p className="item_text">Regular fit</p>
            </li>
            <li className="list_item">
              <p className="item_text">Lace closure</p>
            </li>
            <li className="list_item">
              <p className="item_text">Rubber outsole with vulcanized look</p>
            </li>
            <li className="list_item">
              <p className="item_text">Imported</p>
            </li>
          </ul>
        </div>

        <div className="product_detail_img_block">
          <img
            className="product_detail_img"
            src="../../src/assets/img/shoe.png"
            alt="shoe img"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
