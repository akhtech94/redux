import { useDispatch, useSelector } from "react-redux";

export const Product = () => {
  const dispatch = useDispatch();
  const productName = useSelector((state) => state.product.productName);

  const handleAddProductClick = () => {
    dispatch({ type: "ADD_PRODUCT", payLoad: { productName: "Product 1" } });
  };

  return (
    <>
      {productName ? (
        <p>{productName}</p>
      ) : (
        <input
          type="button"
          value="Add Product"
          onClick={handleAddProductClick}
        />
      )}
    </>
  );
};
