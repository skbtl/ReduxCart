import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartState.cartList);
  const { id, name, price, image } = product;
  const [isInCartlist, setIsInCartlist] = useState(false);

  useEffect(() => {
    const isInCartlist = products.find((item) => item.id === id);
    if (isInCartlist) {
      setIsInCartlist(true);
    } else {
      setIsInCartlist(false);
    }
  }, [products, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCartlist ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
