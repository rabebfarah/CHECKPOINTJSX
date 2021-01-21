
import './Style/style.css'
import './App.css'
import pic from './images/img1.jpg'


function App() {
  return (
    <div className="App" style={{backgroundImage: `url(https://image.freepik.com/free-vector/stone-background-with-golden-strokes_125540-130.jpg)`}} >
    <div >
      <h1 className="title red">PROJECT checkpoint-jsx</h1>
      <br /><br />
      <i><img className="img" src={pic}  alt="img1"/></i>
      <i><img className="img" src="/img2.jpg" alt="img2"/></i>
    </div>
    <br /><br />
    <video className="video" width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  );
}





export default App;
