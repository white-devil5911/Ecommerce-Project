import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

export function DeliveryOptions({ cartItem, deliveryOptions }) {
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

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
          >
            <input
              type="radio"
              className="delivery-option-input"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
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
