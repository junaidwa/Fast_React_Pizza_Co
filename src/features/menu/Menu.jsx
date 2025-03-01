import getMenu from '../../Services/apiRestaurant';
import { useLoaderData } from 'react-router';
import MenuItem from './MenuItem';
function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />

        ))}
      </ul>
    </div>
  );
  
}

export  async function loader(){
  const menu = await getMenu();
  return menu;
}


export default Menu;
