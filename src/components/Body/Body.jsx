import { Routes,Route } from "react-router-dom";
import  * as All from '../Pages/index';

function Body() {
  return (
    <div style={{ paddingTop: 50, paddingLeft:20}}>
      <main> 
      <Routes>
            {/* <Route path='/' element={<Header />}></Route> */}
            <Route path='/' element={<All.Home />}></Route>
            <Route path='/about' element={<All.About />}></Route>
            <Route path='/contact' element={<All.Contact />}></Route>
      </Routes>
      </main>
    </div>
  );
}

export default Body;
