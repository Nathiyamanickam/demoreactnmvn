function App(props)
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies

  return(<>
  <h2>Type of rno: {typeof(a)}</h2>
  <h2>Type of sname: {typeof(b)}</h2>
  <h2>Type of issingle: {typeof(c)}</h2>
  <h2>Type of mark: {typeof(d)}</h2>
   <h3>{Array.isArray(d)?"It is Array":"It is object json"}</h3>
  <h3>{Array.isArray(e)?"It is Array":"It is object json"}</h3>
  

  </>)
}
export default App

// import parse from "html-react-parser"

// function App(props) {

//   var ans = "";

//   for (var s in props.data) {
//     ans = ans + `<li>${s} : ${props.data[s]}</li>`;
//     console.log(s);
//   }

//   return (
//     <>
//       {parse(`<ol> ${ans}</ol>`)}
//     </>
//   )
// }
// export default App

// import React from "react";

// import parse from "html-react-parser";

// class App extends React.Component
// {
//   constructor(props)
//   {
//     var ans = ""
//     super(props)

//     for (var s in props.data)
//     {
      
//       ans =ans + `<li> ${s}:${props.data[s]}</li>`;
//       console.log(s);

//     }
// this.state={
//   res:`<ol type="I">${ans} </ol>`
// }
//   }
//   render(){
//     return(
//       <>
//       <h1>Combine react state + props</h1>
// {parse(this.state.res)}
// <div id="res"></div>

//       </>
//     )
//   }
// }

// export default App

// import React from "react";
// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     this.state={
//       studentname:this.props.sname,
//       studentmark:this.props.mark
//     }
//   }
//   render(){
//     return(<>
//     <h1>Combine React State + props</h1>
//     <h2>Student name:{this.state.studentname}</h2>
//      <h2>Student mark:{this.state.studentmark}  / 100</h2>
//     </>)
//   }
// }
// export default App

// import React from "react";
// class App extends React.Component
// {

//   constructor()
//   {
//     super()
//     this.state={
//       sno:111,
//       sname:"Nathiya",
//       marks:[88,99,100,99,76]

//     }

    

//   }
//   show=()=>{
//       this.setState({sname:"Nathiya M"})
//     }

//   showmark = () => {
//   this.setState({marks:["10","20","30","40","50"]});
// }
// dis1=()=>{
//   const newmarks=[...this.state.marks]
//   newmarks[2]=99
//   this.setState({marks:newmarks})
// }

//   render()
//   {
//   return(<>
//       <h1>This is class components</h1>
//       <h2>Serial number: {this.state.sno}</h2>
//       <h2>Name : {this.state.sname}</h2>

//         <h2>Marks</h2>
//         {this.state.marks.map((v,index)=><>Mark:{index+1}=
//           {v} <br></br>
//         </>)}
//         <button onClick={this.show}>Add Initial</button>
//           <button onClick={this.showmark}>Change All mark</button>
//            <button onClick={this.dis1}>Change only one mark</button>

      
      
//     </>)
//   }
// }
// export default App


// import { aadharno,accno,place,sname } from "./mycomponents/commonvar";
// import Dhiya from "./mycomponents/Dhiya";
// function App(){
// return(
//   <>
//   <Dhiya/>
//   <h1>This is Default App Components</h1>
//   <h2>My name is:{sname}</h2>
//   <h2>My city:{place}</h2>
//   <h2>Aadhar num:{aadharno}</h2>
//   <h2>Account num:{accno}</h2>
//   </>
// )
// }
// export default App

// function App(){
//   var arr=[6,9,13,14,23,16,17,33,20,2]
//   var sum=0
//   var manum=arr[0]

//   var order=arr
//   var fans=""

//   return(
//     <>
//     <h1> React Loop Method</h1>
//     {arr.map((v)=><>
//     {v} <br></br>
//     </>)}

//     <h2>Loop Using List</h2>
//         <ol type='I'>
//           {arr.map((v)=><><li>{v}</li></>)}
//           </ol>  

//           <h1>Sum of the Array</h1>  
// <div style={{ display: "none" }}>
  
//   {arr.map(item=> (
//     <>
//       {sum=sum+item}
     
//     </>
//   ))}
// </div>

// <h3>Sum of Array: {sum}</h3>


// <div style={{ display: "none" }}>
//   {arr.map(v => (
//     <>
//       {manum<v && (manum=v)}
//     </>
//   ))}
// </div>

// <h3>Max of Array: {manum}</h3>



// <h2>Ascending order</h2>
// <div style={{display:"none"}}>{order.sort((a,b)=>a-b)}</div>
// {order.map((item)=>(<>{item },</>))}

// <h2>descending order</h2>
// <div style={{display:"none"}}>{order.sort((a,b)=>b-a)}</div>
// {order.map((item)=>(<>{item},</>))}

// <h1>Adding element in an array</h1>
//   <div style={{display:"none"}}>{order.push(999)}</div>
//     <div style={{display:"none"}}>{order.push(70)}</div>
//   {order.map((item)=><>{item},</>)}
//   <br></br>

//   <h1>Removing element in an array</h1>
//   <div style={{display:"none"}}>{order.pop()}</div>
//    <div style={{display:"none"}}>{order.pop()}</div>
//     <div style={{display:"none"}}>{order.pop()}</div>
//   {order.map((item)=><>{item},</>)}
//   <br></br>

// <h2>Remove last comma</h2>
// <div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
// {fans.slice(0,-1)}



//     <h1>Older Loop Method</h1>
//     {arr[0]}
//     {arr[1]}
//     {arr[2]}
//     {arr[3]}
//     {arr[4]}
//     {arr[5]}
//     {arr[6]}
//     {arr[7]}
   
    

//     </>
//   )
// }
// export default App


// function App()
// {
//   var arr = [11,22,33,44,55,66]
//   var [v1,,,v2,...v3]=arr
//   return(
//     <>
//       <h2>spread operator</h2>
//       <h3>index 0: {v1}</h3>
//       <h3>index 1: {v2}</h3>
//       <h3>index 5: {v3}</h3>
      
//     </>
//   )
// }

// export default App

// function App() {
//   var res = "fail";
//   var avg = 85;

//   return (
//     <>
//       <h2>
//         {
//           (res==="pass" &&
//             (
//               (avg>=85 && "Outstanding") ||
//               (avg>=75 && "Excellent") ||
//               (avg>=65 && "Very Good") ||
//               (avg>=50 && "Good") ||
//               "Fair"
//             )
//           )
//           || "No grade because fail"
//         }
//       </h2>
//     </>
//   )
// }

// export default App;



// function App() {
//   var unit = 110;

//   return (
//     <>
//       <h1>Electricity Bill</h1>
//       <h2>100 units Free</h2>

//       <h2>
//         {(unit<=50 && "Minimum bill is ₹50") ||(unit <= 100 && "Amount : ₹0") ||
//          (unit > 100 && unit <= 200 &&
//            `Amount for ${unit} units : ₹${(unit - 100) * 2}`) ||
//           (unit > 200 && unit <= 300 &&
//            `Amount for ${unit} units : ₹${200 + (unit - 200) * 3}`) ||
//           (unit > 300 && unit <= 400 &&
//            `Amount for ${unit} units : ₹${500 + (unit - 300) * 4}`) ||
//           (unit > 400 &&
//            `Amount for ${unit} units : ₹${900 + (unit - 400) * 5}`)}
//       </h2>
//     </>
//   );
// }

// export default App;






// function App() {
//   var avg = 85;

//   return (
//     <>
//       <h1>React Simple if else if statement</h1>
//       <h2>{(avg >= 85 && "Outstanding") ||(avg >= 75 && "Excellent") ||(avg >= 65 && "Very Good") ||(avg >= 50 && "Good") ||"Fair"}
//       </h2>
//     </>
//   );
// }

// export default App;


// function App() {
//   var num = 17;

//   return (
//     <>
//       <h1>Positive num/Negative num/Number is Zero/</h1>
//       <h2>
//         {(num>0 && "Positive Number") || (num<0 && "Negative Number") ||
//          (num===0 && "Given Number is Zero")}
//       </h2>
//     </>
//   );
// }


// export default App;

// function App() {
//   var year = 2025;
//   let result;

//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     result = "Leap Year";
//   } else {
//     result = "Not a Leap Year";
//   }

//   return (
//     <>
//       <h1>Given Year is Leap Year or Not</h1>
//       <h2>Year: {year}</h2>
//       <h2>{result}</h2>
//     </>
//   );
// }

// export default App;



// function App() {
//  var age=17;

//   return (
//     <>
//       <h1>Eligible to vote or not</h1>
//       <h2>{(age>=18 && "Eligible to vote") || "Not Eligible to vote YOU are Under 18"}</h2>
//     </>
//   );
// }
// export default App;


// function App() {
//  var num=33;

//   return (
//     <>
//       <h1>Even or Odd Number</h1>
//       <h2>{((num % 2==0) && "Even Num") || "Odd Number"}</h2>
//     </>
//   );
// }
// export default App;

// function App() {
//   var mark = 34;

//   return (
//     <>
//       <h1>React Simple if statement</h1>
//       <h2>{(mark > 34 && "PASS") || "Fail"}</h2>
//     </>
//   );
// }

// export default App;


// function App()
// {
//   if(true)
//   {
//     var v=100
//     v++
//     let l=200
//     l++
//     console.log("let"+l);

//   }
//    return(
//     <>
//     <h1>Variable  global :{v}</h1>
//     <h1>Let and Const does not work : because local <br></br> Var is Global</h1> 

//     </>
//   )
// }
// export default App


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
  var c="Dhiya"

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
        <h4>
          Edit <code>src/App.js</code> and save to reload.
        </h4>
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