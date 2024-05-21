import React from "react";
import { useAuth } from "./../Hooks/useAuth.jsx";
import { Products } from "../../Data/Product.js";
import { ProductList } from "./ProductList.js";



export const Shop = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <React.Fragment>
      <h1 className="text-center">This is Shop Page{user.firstName}</h1>
      <div className="row">
        {Products.map((productData) => {
          return <ProductList key={productData.id} data={productData} />
        })}
      </div>
    </React.Fragment>
  );
};
