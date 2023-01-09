import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, getProducts } from "../redux/Slice/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { message, Spin } from "antd";

import Header from "../common/header";

const Category = () => {
  const params = useParams();

  const products = useSelector((state) => state.product.products);

  const [limit, setLimit] = useState(4);
  const [sort, setSort] = useState("asc");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.category) {
      setLoader(true);
      dispatch(
        getProducts({
          category: params.category,
          limit: limit,
          sort: sort,
        })
      )
        .then((res) => {
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
        });
    }
  }, [params]);

  const handleChange = (e) => {
    if (e) {
      setLimit(e.target.value);
      setLoader(true);
      dispatch(
        getProducts({
          category: params.category,
          limit: e.target.value,
          sort: sort,
        })
      )
        .then((res) => {
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
        });
    }
  };

  const handleSort = (e) => {
    if (e) {
      setSort(e.target.value);
      setLoader(true);
      dispatch(
        getProducts({
          category: params.category,
          limit: limit,
          sort: e.target.value,
        })
      )
        .then((res) => {
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
        });
    }
  };

  const handleCart = (data) => {
    dispatch(addToCart(data));
    message.success("Product added to cart successfully");
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="font-bold">Category : {params.category}</h1>
        <hr />
      </div>
      {loader ? (
        <Spin />
      ) : (
        <>
          <div className="flex justify-between p-4">
            <div>
              <b>Show Fixed number of products per page</b>
              <select
                className="ml-2 border"
                value={limit}
                onChange={(e) => handleChange(e)}
              >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <b>Sort</b>
              <select
                className="ml-2 border"
                value={sort}
                onChange={(e) => handleSort(e)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <div className="p-4">
            <ul className="flex flex-wrap justify-between">
              {products?.length > 0 &&
                products?.map((data) => {
                  return (
                    <li
                      className="flex-col w-72 my-4 justify-between content-between border rounded text-center"
                      key={data.id}
                    >
                      <div className="w-full h-32">
                        <img
                          className="m-auto"
                          width="80px"
                          height="80px"
                          src={data.image}
                          alt="product"
                        />
                      </div>
                      <div className="p-4 border h-32 align-middle">
                        {data.title}
                      </div>
                      <div className="p-2 border rounded">
                        Price: {data.price}
                      </div>
                      <button
                        className="bg-blue-200 hover:bg-blue-300 rounded p-2 w-full"
                        onClick={() => handleCart(data)}
                      >
                        Add to Cart
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
export default Category;
