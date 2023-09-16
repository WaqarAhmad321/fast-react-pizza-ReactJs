import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQuantity(id))} type="round">
        -
      </Button>

      <Button onClick={() => dispatch(increaseItemQuantity(id))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
