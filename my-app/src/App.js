import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = { 
    name:"dr mahfuzur rahman",
    job: "singer"
}
var style = {
  color:'red',
  backgroundColor: 'white'
}
const nayoks = ['anawar', 'janowar', 'banoar', 'sanowar', 'bappy', 'shuvo', 'hagu']
const gf = ['sushmita', 'pushpita', 'farhana', 'forever single']

const products = [
  {name:'photoshop', price:'$90.99'},
  {name:'illustrator', price:'$69.99'},
  {name:'pdf reader', price:'$9.99'},
  {name:'pdf hagu', price:'$9.99'}

]

const productNames = products.map(product => product.name);
console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
       {/* <li>{nayoks[0]}</li>
       <li>{nayoks[1]}</li>
       <li>{nayoks[2]}</li>
       <li>{nayoks[3]}</li> */}
        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
{/* 
          <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
         


  <Person name={nayoks[0]} gf={gf[0]}></Person>
  <Person name={nayoks[1]} gf={gf[1]}></Person>
  <Person name={nayoks[2]} gf={gf[2]}></Person>
  <Person name={nayoks[3]} gf={gf[3]}></Person>

      </header>
    </div>
  );
}


function Counter(){
  const [count, setCount] = useState(0);
  //const handleIncrease = () =>  setCount(count + 1);
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button  onClick={ () => setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
     
    </div>
  )
}


function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border:'1px solid white',
    margin:'10px',
    padding:'5px'
  }
  return(
    <div style={personStyle}>
<h1>name: {props.name}</h1>
  <h2>gf: {props.gf}</h2>
  </div>
  )
}

export default App;
