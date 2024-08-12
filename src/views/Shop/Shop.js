import React from "react";
import { useAuth } from "../Hooks/useAuth.jsx";
import { Products } from "../../Data/Product.js";
import { ProductList } from "./ProductList.js";



export const Shop = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <React.Fragment>
      <div className="container mt-5 pt-5">
        <div className="row">
          {Products.map((productData) => {
            return <ProductList key={productData.id} data={productData} />
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
