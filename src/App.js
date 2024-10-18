import logo from './logo.svg';
import './App.css';
import Image  from './image';

function App() {
  return (
    <div className="App" style={{}}>

   <Image src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPhtturC0dd-ROTXNMbiCLcKbzoJCcNQoIw&s"  height= {250} width = {250} title={"Batman"}>

   </Image>

    
   
  
   <Image src = "https://thumbs.dreamstime.com/b/superman-logo-superhero-best-quality-illustration-famous-superman-logo-isolated-transparent-background-high-version-vector-127102100.jpg" height= {250} width = {250} title={"super"} ></Image>
   
   <Image src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/72415d97689855.5ecb715e2e65b.jpg" height= {450} width = {350} title={"bella"}></Image>
   
   <Image src = "https://i.pinimg.com/736x/78/f4/30/78f4303282baacfc47938739b7c5cd3e.jpg" height= {400} width = {400} title={"squit game"}></Image>
  
   <Image src =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREg9--V9Bzahtodjmat1zeziVyAFBzsz8CAQ&s" height= {300} width = {300} title={"hulk"}></Image>

    </div>
  );
}

export default App; 