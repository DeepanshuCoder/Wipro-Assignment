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
import Fruits from "./components1/fruits/Fruits";
import TelevisionManager from "./components1/television/Television";
import MarriageForm from "./components1/marriage/MarriageForm";
import AccessoriesForm from "./components1/accessories/AccessoriesForm";
import BakingForm from "./components1/baking/BakingItem";
import ParentApp from "./components1/flight/FlightBookingForm";
import MovieForm from "./components1/movie/MovieForm";
import ElectronicMain from "./components2/electronicProductDetails/ElectronicMain";
import FurnitureMain from "./components2/furnitureStore/FurnitureMain";
import FestivalApp from "./components2/festival/FestivalApp";
import RestaurantApp from "./components2/restaurantRegistration/RestaurantMain";
import CommunicationApp from "./components2/communication/Communication";
import ChessTournamentForm from "./components3/chessTournament/ChessTournamentForm";
import HockeyRegistrationForm from "./components3/hockeyTournament/HockeyTournamentForm";
import TailoringInventory from "./components4/tailoring/TailoringInventory";


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

function FruitsLab() {
  return (
    <div>
      <h1>Fruits</h1>
      <Fruits />
    </div>
  );
}

function TelevisionLab() {
  return (
    <div>
      <h1>Television</h1>
      <TelevisionManager />
    </div>
  );
}

function MarriageLab() {
  return (
    <div>
      <h1>Marriage Form</h1>
      <MarriageForm />
    </div>
  );
}

function AccessoriesLab() {
  return (
    <div>
      <h1>Accessories Form</h1>
      <AccessoriesForm />
    </div>
  );
}

function BakingLab() {
  return (
    <div>
      <h1>Baking Items</h1>
      <BakingForm />
    </div>
  );
}

function FlightLab() {
  return (
    <div>
      <h1>Flight Booking Form</h1>
      <ParentApp />
    </div>
  );
}

function MovieLab() {
  return (
    <div>
      <h1>Movie Form</h1>
      <MovieForm />
    </div>
  );
}

function ElectronicProductLab() {
  return (
    <div>
      <h1>Electronic Product Details</h1>
      <ElectronicMain />
    </div>
  );
}

function FurnitureStoreLab() {
  return (
    <div>
      <h1>Furniture Store</h1>
      <FurnitureMain />
    </div>
  );
}

function FestivalLab() {
  return (
    <div>
      <h1>Festival React App</h1>
      <FestivalApp />
    </div>
  );
}

function RestaurantFormLab() {
  return (
    <div>
      <RestaurantApp />
    </div>
  );
}

function CommunicationLab() {
  return (
    <div>
      <CommunicationApp />
    </div>
  );
}

function ChessTournamentLab() {
  return (
    <div>
      <ChessTournamentForm />
    </div>
  );
}

function HockeyTournamentLab() {
  return (
    <div>
      <HockeyRegistrationForm />
    </div>
  );
}

function TailoringLab() {
  return (
    <div>
      <TailoringInventory />
    </div>
  );
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
      <hr />
      <FruitsLab />
      <hr />
      <TelevisionLab />
      <hr />
      <MarriageLab />
      <hr />
      <AccessoriesLab />
      <hr />
      <BakingLab />
      <hr />
      <FlightLab />
      <hr />
      <MovieLab />
      <hr />
      <ElectronicProductLab />
      <hr />
      <FurnitureStoreLab />
      <hr />
      <FestivalLab />
      <hr />
      <RestaurantFormLab />
      <hr />
      <CommunicationLab />
      <hr />
      <ChessTournamentLab />
      <hr />
      <HockeyTournamentLab />
      <hr />
      <TailorLab />
    </div>
  );
}
