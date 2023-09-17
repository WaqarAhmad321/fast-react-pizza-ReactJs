import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getTotalQuantity,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQuantity(id))} type="round">
        -
      </Button>
      <span className="flex items-center gap-2 md:gap-3">
        {currentQuantity}
      </span>
      <Button onClick={() => dispatch(increaseItemQuantity(id))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
