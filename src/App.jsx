import { About } from "./About";
import "./App.css";
import Button from "react-bootstrap/Button";
import Cards from "./Cards";
import img1 from './image1.jpg'
import img2 from './image2.jpg'

function App() {

  let value=[{
    title:'abc',
    body:'first body',
    img:img1,
    class:'bg-black text-white'
  },
{
  title:'second title',
  body:'second body',
  img:img2
},
{
  title:'third title',
  body:'third body'
}]


  return (
    <>
      <h2 className="bg-black text-white">welcome</h2>
      <Button variant="primary">Primary</Button> <h2>welcome</h2>
      <h2>welcome</h2>
      <About />
      <div className="d-flex g-4 flex-wrap ">
        {value.map((item)=>(

          <Cards title={item.title} body={item.body} class={item.class} img={item.img} />
        ))}
      </div>
      {value.map((item)=>(
        <>
        <h2>{item.title}</h2>
        <h2>{item.body}</h2>
        </>
      ))}
    </>
  );
}

export default App;
