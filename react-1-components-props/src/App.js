import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Alex" age={33} email="alex@example.com" />
      <User name="Jim" age={23} email="jim@example.com" />
      <Job salary={20000} position="Senior Developer" company="Amazon" />
      <Job salary={34000} position="Senior Developer" company="Google" />
      <FoodOrder main="Steak" side="Caesar's Salad" drink="Wine" />
    </div>
  );
}

const User = (props) => {
  return (
        <div>
           <h1>{props.name}</h1>
           <h1>{props.age}</h1>
           <h1>{props.email}</h1>
        </div>
      );
}

const Job = (props) => {
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}

const FoodOrder = (props) => {
  return(
    <div>
      <h1>{props.main}</h1>
      <h1>{props.side}</h1>
      <h1>{props.drink}</h1>
    </div>
  )
}

export default App;
