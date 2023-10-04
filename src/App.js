
import './App.css';

function App() {
  const data=[{
    image : "https://thumbs.dreamstime.com/b/cute-man-face-cart…-vector-illustration-graphic-design-135024353.jpg",
    name : "Sudharson",
    Batch : "B43E"
   },
   {image : "https://thumbs.dreamstime.com/b/cute-man-face-cart…-vector-illustration-graphic-design-135024353.jpg",
   name : "Raju",
   Batch : "B43E"},
   {image : "https://thumbs.dreamstime.com/b/cute-man-face-cart…-vector-illustration-graphic-design-135024353.jpg",
   name : "Kumar",
   Batch : "B43E"}]
  
  
  return (
    <div className="App">
     {data.map((indexobj, idxvalue)=>(
     <Student
     key = {idxvalue}
     image = {indexobj.image}
     name = {indexobj.name}
     Batch = {indexobj.Batch}
      />
     ))}
     </div>
    
  );
}

export default App;

function Student(props)
{
  
return (
  <div className='homecomp'>
    <img src={props.image} alt={props.name}/>
    <h1>{props.name}</h1>
    <h3>{props.Batch}</h3>
   </div>
)
}

