import React from 'react';
import '../style/summary.css';

function Summary({ cartProduct }) {
  const subtotal = cartProduct.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const shipping = 20.0;
  const discount = 6.0;
  const taxRate = 0.06;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping - discount + tax;

  return (
    <div className="summary">
      <h3 className="summary_title">Summary</h3>
      <div className="summary_container">
        <div className="price_box">
          <p className="summary_subtotal">Subtotal: </p>
          <span className="span_price">${subtotal.toFixed(2)}</span>
        </div>
        <div className="price_box">
          <p className="summary_shipping">Shipping and delivery: </p>
          <span className="span_price">${shipping.toFixed(2)}</span>
        </div>
        <div className="price_box">
          <p className="summary_tax">Tax:</p>
          <span className="span_price">${tax.toFixed(2)}</span>
        </div>
        <div className="price_box">
          <p className="summary_discount">Discount: </p>
          <span className="span_price_discount">-${discount.toFixed(2)}</span>
        </div>
      </div>
      <span className="line"></span>
      <div className="price_box">
        <h3 className="summary_total">Total: </h3>
        <span className="span_price">${total.toFixed(2)}</span>
      </div>
      <button className="summary_checkout">
        <p className="btn_Text">Checkout</p>
      </button>
    </div>
  );
}

export default Summary;
