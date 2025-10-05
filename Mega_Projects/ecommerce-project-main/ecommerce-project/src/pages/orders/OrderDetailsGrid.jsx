import { Fragment } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';

export function OrderDetailsGrid({order}){
    return (
        <div className="order-details-grid">
        {order.products.map((orderProduct) => {
          return (
            <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
            <img src={orderProduct.product.image} />
          </div>

          <div className="product-details">
            <div className="product-name">
              {orderProduct.product.name}
            </div>
            <div className="product-delivery-date">
              Arriving on: {dayjs(orderProduct.
                estimatedDeliveryTimeMs).format('MMMM D')}
            </div>
            <div className="product-quantity">
              Quantity: {orderProduct.quantity}
            </div>
            <button className="buy-again-button button-primary">
              <img className="buy-again-icon" src={BuyAgainIcon} />
              <span className="buy-again-message">Add to Cart</span>
            </button>
          </div>

          <div className="product-actions">
            <a href="/tracking"></a>
            <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
              <button className="track-package-button button-secondary">
                Track package
              </button>
            </Link>
          </div>
          </Fragment>
          );
        })}
         </div>
    );
}