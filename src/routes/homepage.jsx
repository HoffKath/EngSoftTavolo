import React from "react";
import Footer from "../components/footer";
import Main from "../components/main"
const Homepage = ()=>{
    return (
        <div className="App">

          <p className="imagesHomepage">
            <Main/>
          </p>
          <p className="App-footer">
              <Footer/>
          </p>
        </div>
      );
}
export default Homepage