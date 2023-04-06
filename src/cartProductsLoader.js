import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  // if cart data is is database, you have to async await
  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  // if you want to send two thing
  //   return [products, savedCart];
  // another option
  //   return { products, savedCart };

  return savedCart;
};

export default cartProductsLoader;
