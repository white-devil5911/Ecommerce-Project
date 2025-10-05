import dayjs from 'dayjs';
import axios from 'axios';
import { DeliveryOptions } from './DeliveryOptions';
import { formatMoney } from '../../utils/money';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  // 🧠 function to delete an item
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/cart-items/${productId}`);
      await loadCart(); // refresh cart after deleting
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) =>
              deliveryOption.id === cartItem.deliveryOptionId
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{' '}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  'dddd, MMMM D'
                )}
              </div>

              <div className="cart-item-details-grid">
                {/* 🖼️ Product Image */}
                <img
                  className="product-image"
                  src={cartItem.product.image}
                  alt={cartItem.product.name}
                />

                {/* 🧾 Product Details */}
                <div className="cart-item-details">
                  <div className="product-name">
                    {cartItem.product.name}
                  </div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{' '}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    {/* 🗑️ Delete link triggers handleDelete */}
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={() => handleDelete(cartItem.productId)}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                {/* 🚚 Delivery Options */}
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
