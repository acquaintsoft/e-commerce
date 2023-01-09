import { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAllCategories } from "../redux/Slice/productsSlice";
import Header from "../common/header";

import { Spin } from "antd/es";
import Sidebar from "../common/sidebar";

const AllCategory = () => {
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    setLoader(true);
    dispatch(getAllCategories())
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <div className="px-4 py-4 border border-gray-200">
        <h1 className="font-bold">Choose Category to Select Products From</h1>
        <hr />
        {loader ? (
          <Spin />
        ) : (
          <ul>
            {categories.length > 0 &&
              categories?.map((data, index) => {
                return (
                  <Fragment key={index}>
                    <li className="hover:underline text-1xl">
                      <Link to={`/getAllCategory/${data}`}>{data}</Link>
                    </li>
                  </Fragment>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
};

export default AllCategory;
