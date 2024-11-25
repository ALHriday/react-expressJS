import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {

    const data = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-4xl font-bold px-2 py-12">This is Product Section</h1>
            <div className="grid grid-cols-3 gap-4">
                {data.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Products;