import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const cart = fakeCart;
  const isSubmitting = navigation === "submitting";
  const formErrors = useActionData();

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="customer"
            id="name"
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <div>
            <input
              type="tel"
              className="input"
              name="phone"
              id="phone"
              required
            />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <div>
            <input
              type="text"
              name="address"
              id="address"
              required
              className="input"
            />
          </div>
        </div>

        <div>
          <input
            className="cursor- h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
