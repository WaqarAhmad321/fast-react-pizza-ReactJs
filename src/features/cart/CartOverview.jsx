import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { getTotalQuantity } from "./cartSlice";
import { getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return;
  
  return (
    <div className="sticky bottom-0 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
