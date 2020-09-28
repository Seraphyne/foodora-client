import React from "react";
import { Link } from "react-router-dom";
import FooterRouter from "../Router/FooterRouter";
import Copyright from "../pages/Copyright";
import "./App.css";
import MainRouter from "../Router/MainRouter";
import Error from '../Error';
import FullLogin from "../Login/FullLogin";
import logo600 from '../Images/foodora-logo600.png';

class App extends React.Component {

  render() {
    return (
      <div className='div-container'>
        <div className="div-main-container">
          <div className='logo-login'>
          {/* Header */}
            <Error>
              <div className='logo'>
                <header>
                  <h1>
                    <Link to="/"><img srcSet={`${logo600} 1400w`} alt="Foodora Logo"/></Link> 
                  </h1>
                </header>
              </div>
            </Error>

              {/* Nav */}
            <Error>
              <div className='login-app'>
                <nav>
                  <FullLogin />
                </nav>
              </div>
            </Error>
          </div>
          {/* Main */}
            <Error>
              <main>
                  <MainRouter />
              </main>
            </Error>

          {/* Footer */}
            <Error>
              <footer>
                  <FooterRouter />
                  <Copyright />
              </footer>
            </Error>
        </div>
      </div>
    );
  }
}

export default App;
