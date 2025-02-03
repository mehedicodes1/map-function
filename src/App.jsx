import "react"
import Contacts from "./components/contacts.js";
import Card from "./components/card.jsx";


const createCards = (contact) => {
  return <Card key={contact.id} name={contact.name} image={contact.image} url={contact.url}
               about={contact.description}/>;
}

const App = () => {
  return (
    <main>
      <div>
        <Card name={Contacts[0].name} image={Contacts[0].image} url={Contacts[0].url}
              about={Contacts[0].description}/>
      </div>
      <div>
        {Contacts.map(createCards)}
      </div>
    </main>
  );
};

export default App;