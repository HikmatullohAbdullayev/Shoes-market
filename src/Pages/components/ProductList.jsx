import { Link } from 'react-router-dom';
import product from '../../data/db.json';
import { Fragment } from 'react';

function ProductList() {
  console.log(product);
  return (
    <section className="product container">
      <h3 className="product_title">Explore our latest drops</h3>

      <div className="card_list">
        {product.map((item) => (
          <Fragment key={item.id}>
            <Link to={`product-detail/${item.id}`}>
              <div className="card_item">
                <div className="card_img_block">
                  <img className="card_img" src={item.img} alt={item.info} />
                </div>
                <h4 className="card_item_title">{item.title}</h4>
                <p className="card_item_info">{item.info}</p>
                <p className="card_item_price">{item.price}</p>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
