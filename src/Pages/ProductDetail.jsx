import  {useParams } from "react-router-dom";
import product from "../data/db.json"
import "../Pages/style/productDetail.css"

function ProductDetail() {
    const { id } = useParams()
  

        let targetProduct = null;
    
        product.forEach(item => {
            if (item.id === id) {
                targetProduct = { ...item };
            }
        });
    
    console.log(targetProduct);

    

    return (
        <section>
            <div className="product">
                <div className="product_top">
                <div className="product_img_block">
                    <img className="product_img" src={targetProduct.img} alt={targetProduct.title} />
                </div>
                <div className="product_cart">
                    <div className="product_info_block">
                    <h2>{targetProduct.title}</h2> 
                    <p>{targetProduct.info}</p>
                    <p>{targetProduct.price}</p>
                    </div>
                    <div className="product_counter">
                        <p>Quanity</p>
                        <div className="counret">
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>
                    <button>Add to Cart</button>
                </div>
                </div>
            </div>
            
            
            
        </section>
    );
}

export default ProductDetail;
