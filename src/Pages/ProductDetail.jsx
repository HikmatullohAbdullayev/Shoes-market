import  {useParams} from "react-router-dom";
import product from "../data/db.json"

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
                <div className="product_img_block">
                    <img className="product_img" src={targetProduct.img} alt={targetProduct.title} />
                </div>
            </div>
            
            
            
        </section>
    );
}

export default ProductDetail;
