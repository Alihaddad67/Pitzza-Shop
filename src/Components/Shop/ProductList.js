import { useContext } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { ShopContext } from "../../context/shopContext";

export const ProductList = (props) => {
  const { id, productimage, productName, price, detail } = props.data;

  const popover = (
    <Popover id="popover-basic" className="popover-lg">
      {detail}
    </Popover>
  );

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const item = cartItems?.find((item) => item.id === id);
  const itemCount = item?.count || 0;

  return (
    <div className="col-12 col-md-6 col-lg-3 mx-auto mb-3 d-flex justify-content-center">
      <div className="card h-100" style={{ width: '18rem' }}>
        <OverlayTrigger
          trigger={["hover"]}
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={popover}
        >
          <img src={productimage} className="card-img-top" alt={productName} />
        </OverlayTrigger>
        <div className="card-body bg-secondary text-center  ">
          <h5 className="card-title ">{productName}</h5>
          <p className="card-text ">Price: {price}</p>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <button className="btn btn-sm btn-info mx-1" onClick={() => addToCart(id)}>+</button>
            {itemCount > 0 && <span className="mx-1">{itemCount}</span>}
            {itemCount > 0 && (
              <button className="btn btn-sm btn-info mx-1" onClick={() => removeFromCart(id)}>-</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

    // <div className="col-3 mx-auto text-center">
    //   <OverlayTrigger
    //     trigger={["hover", 'focus']}
    //     placement="right"
    //     delay={{ show: 250, hide: 400 }}
    //     overlay={popover}
    //   >
    //     <img src={productimage} className="w-50" />
    //   </OverlayTrigger>
    //   <h5>Name: {productName}</h5>
    //   <p>PRICE: {price}</p>
    //   <div className="d-flex justify-content-center align-items-center mb-5">
    //     <button className="btn btn-sm btn-info mx-1" onClick={() => addToCart(id)}>+</button>
    //     {itemCount > 0 && <span className="mx-1">{cartItems?.filter((row) => row.id === id)[0]?.count}</span>}
    //     {isInCart && <button className="btn btn-sm btn-info mx-1" onClick={() => removeFromCart(id)}>-</button>}
    //   </div>
    // </div>