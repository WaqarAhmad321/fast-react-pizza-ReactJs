import { getMenu } from "../../utils/apiRestaurant";

export async function loader() {
  const menu = await getMenu();
  return menu;
}
