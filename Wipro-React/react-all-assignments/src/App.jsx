import GroceryList from "./components/grocery/GroceryList";
import Car from "./components/car/Car";
import Phone from "./components/phone/Phone";
import SweetsList from "./components/sweets/SweetsList";
import Electronics from "./components/electronics/Electronics";
import CanteenMenu from "./components/canteen/CanteenMenu";
import JuiceList from "./components/juice/JuiceList";
import Restaurant from "./components/restaurant/Restaurant";
import TempleList from "./components/temple/TempleList";
import TailorShop from "./components/tailor/TailorShop";

function GroceryLab() {
  const items = ["Rice", "Wheat", "Sugar", "Milk", "Oil"];
  return (
    <div>
      <h1>GroceryList</h1>
      <GroceryList items={items} />
    </div>
  );
}

function CarLab() {
  return (
    <div>
      <h1>Car Component</h1>
      <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
    </div>
  );
}

function PhoneLab() {
  return (
    <div>
      <h1>Phone Component</h1>
      <Phone />
    </div>
  );
}

function SweetsLab() {
  return (
    <div>
      <h1>SweetsList</h1>
      <SweetsList />
    </div>
  );
}

function ElectronicsLab() {
  return (
    <div>
      <h1>Electronics Component</h1>
      <Electronics />
    </div>
  );
}

function CanteenLab() {
  return (
    <div>
      <h1>Canteen Menu</h1>
      <CanteenMenu />
    </div>
  );
}

function JuiceLab() {
  return (
    <div>
      <h1>Juice Menu</h1>
      <JuiceList />
    </div>
  )
}

function RestaurantLab() {
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <Restaurant />
    </div>
  )
}

function TempleLab() {
  return (
    <div>
      <h1>Temple List</h1>
      <TempleList />
    </div>
  )
}

function TailorLab() {
  return (
    <div>
      <h1>Tailoring Shop</h1>
      <TailorShop />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <GroceryLab />
      <hr />
      <CarLab />
      <hr />
      <PhoneLab />
      <hr />
      <SweetsLab />
      <hr />
      <ElectronicsLab />
      <hr />
      <CanteenLab />
      <hr />
      <JuiceLab />
      <hr />
      <RestaurantLab />
      <hr />
      <TempleLab />
      <hr />
      <TailorLab />
    </div>
  );
}
