function App()
{
  if(true)
  {
    var v=100
    v++
    let l=200
    l++
    console.log("let"+l);
   
  }
  return(
    <>
    <h1>Variable  global :{v}</h1>
    <h1>Let and Const does not work : because local <br></br> Var is Global</h1>
    </>
  )
}
export  default App

// function App()
// {
//   let myfun=(a,b,c)=>{
//     var tot=a+b+c
//       document.getElementById("res").innerHTML=`<h2>Total:</h2>${tot}`;
//   }
//   return(<>


//    <h2>Arrow function with parameter</h2>
//   <h3> onClick "c" must be capital <br></br> Dont use double quotes <br></br> While Calling Function dont use parenthesis without passing args</h3>
//   <button onClick={()=>myfun(10,20,30)}>Click me</button>
//   <div id="res"></div>


//   </>)
// }
// export default App

// import myimg from './Images/Dora.jpeg'
// function App(){
//   return(<>
//   <center>
//   <h2> Image Demo using Path as Expression</h2>
//   <img src={myimg} width="60%" height="500px" margin-left="25%" alt="Path is Wrong"></img>
//   </center>
//   </>)

// }
// export default App
// function App(){
//   var a=3000
//   var b=200
//   var c=400
//   return(
//     <>
//     <h2>Largest Amoung 3 Numbers</h2>
//     <h2>Largest Number:{a>b?(a>c?a:c):(b>c?b:c)}</h2>
    

//     </>
//   )
// }
// export default App

/*function App(){
  //Javascript learned code
  var a=10
  var b=30
  var c="Sneha"

  return(<>
       <h1>Total:{a+b}</h1>
       <marquee bgcolor='blue'><font size='7'>{c}</font></marquee>
  </>)
}
export default App
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/