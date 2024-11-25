import PropTypes from "prop-types";

const Product = ({ product }) => {

    const { productTitle, image, category, rating, des, price } = product;
    
    return (
        <div className="border-2 rounded-xl p-4">
            <div className="w-full h-[200px] rounded-xl mb-2">
                <img className="w-full h-full rounded-xl" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">{productTitle}</h1>
                <h2>Price: { price}$</h2>
                <h2>Category: {category}</h2>
                <p>Rating: {rating}</p>
                <p>Description: { des}</p>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
}

export default Product;