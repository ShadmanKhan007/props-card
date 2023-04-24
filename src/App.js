import logo from './logo.svg';
import './App.css';
import Card from './components/card'

function App() {
  return (
    <div className="App">
     <Card 
     imgsrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
     position="UI / UX DEVELOPER"
     name="Shadman khan"
     description="Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all
        the professions dealing with the universe of communication "
        />

    <Card 
     imgsrc="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
     position="BACKEND DEVELOPER"
     name="Alex Guzman"
     description="Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all
        the professions dealing with the universe of communication "
        />



   <Card 
     imgsrc="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
     position="IOS DEVELOPER"
     name="John Wick"
     description="Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all
        the professions dealing with the universe of communication "
        />
    </div>
  );
}

export default App;
