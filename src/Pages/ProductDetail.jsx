import  {useParams} from "react-router-dom";
import product from "../data/db.json"

function ProductDetail() {
    const { id } = useParams()
    return (
        <div>
            {`ProductDetail + ${id}`}
            <h2>{`${product[0].title}`}</h2>
            
        </div>
    );
}

export default ProductDetail;
