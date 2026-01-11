// import { Connect } from 'vite';
// import './App.css'
// //import ListGroup from "./components/ListGroup";
// //import Alert from "./Alert";
// import Button from "./Button";
// function App(){
//   let items = ["london", "new york", "san francisco", "tokyo", "berlin"];

//   const handleSelectItem = (item) => {
//     console.log(item);

//   }
//   return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
// }

// function App(){
//   return <div>
//     <Alert>
//       This is an alert <span>message.</span>
//     </Alert>
//   </div>
// }

// export default App;

// function App(){
//   return (
//     <div>
//       <Button color = "primary" onClick={() => console.log("click")}>
//         Press Me!!
//       </Button>
//     </div>
//   );

// }

// export default App;

//Code.io reffer
import './index.css'
import Content from "./content.jsx";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";
function App(){
  return (
    <>
      <Navbar />
      <Content name = "HTML" price = "100" ratinng = "⭐⭐⭐⭐ "/>
      <Content name = "CSS" price = "200" ratinng = "⭐⭐⭐ "/>
      <Content name = "JavaScript" price = "300" ratinng = "⭐⭐ "/>
      <Footer />
    </>
  );
}

export default App;