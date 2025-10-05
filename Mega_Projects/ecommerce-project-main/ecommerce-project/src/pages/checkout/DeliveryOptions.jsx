import dayjs from 'dayjs';
import axios from 'axios';
import { formatMoney } from '../../utils/money';

export function DeliveryOptions({ cartItem, deliveryOptions , loadCart}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>

      {deliveryOptions.map((deliveryOption) => {
        const priceString =
          deliveryOption.priceCents === 0
            ? 'FREE Shipping'
            : `${formatMoney(deliveryOption.priceCents)} - Shipping`;

        const updateDeliveryOptions = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id
          });
          await loadCart()
        };

        return (
          <div key={deliveryOption.id} className="delivery-option"
            onClick={updateDeliveryOptions}>
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              readOnly
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  'dddd, MMMM D'
                )}
              </div>
              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
