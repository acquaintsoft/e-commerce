import { useSelector } from "react-redux";
import Header from "../common/header";

const Cart = () => {
  const allProducts = useSelector((state) => state.product.cart);
  //console.log("allProducts", Object.entries(allProducts));

  return (
    <>
      <Header />
      {Object.entries(allProducts).length ? (
        Object.entries(allProducts).map((data) => {
          return (
            <div className="p-4">
              <p className="font-bold mb-2">Orders in Category {data[0]}</p>

              {data[1].map((data1) => {
                return (
                  <div className="p-4 mb-2 border border-gray-200">
                    <p>Title:{data1.title}</p>
                    <p>Quantity:{data1.quantity}</p>
                    <p>Price Per Product:{data1.price}</p>
                    <p className="font-bold">
                      Total Price:{data1.price * data1.quantity}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-bold">No Orders found</p>
        </div>
      )}
    </>
  );
};
export default Cart;
