import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [person, setperson] = useState({name:"mohamed", age:"24",    
  imageSrc: "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/284253329_5086809318069132_8546343662241516208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JwxJNF5GT5YAX-YgIFS&_nc_oc=AQk1VVhH2e2oa4BwYsNTEG_NavkyGC-y_k5bVBi6-7v7-OquyGcWADr9FhBCXJlgiv4&_nc_ht=scontent.ftun16-1.fna&oh=00_AT8UgqLBw7Bj4Tyr1ZalTzuarYxK7MxKx7k5H2mJ5pb0Rg&oe=62B8EBEA"})
  const [show, setshow] = useState(false)

  return (
    <div className="App">
    <button onClick={()=>setshow(!show)}>click to show profile</button>
  
  {show?
    <div>
    <img src={person.imageSrc} width="300px" />
    <h1>{person.name}</h1>
    <h1>i have {person.age} years old</h1>
    </div>:null
  }

    </div>
  );
}

export default App;
