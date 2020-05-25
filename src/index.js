import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  useLocation 
} from "react-router-dom";
import { useEffect } from "react";
import './index.scss';
import NavBar from './navbar/navbar.js';
import Content from './content/content.js';
import Shop from './shop/shop.js'
import Footer from './footer/footer.js';
import PatternMaker from './patternmaker/patternmaker.js';
import Purchase from './purchasing/purchase.js';
import BwBlosson from './scarfphoto/bw_blossom_scarf.jpg';
import FaceMask from './scarfphoto/facemask.jpg';
import LineDownHat from './scarfphoto/linedownhat.jpg';
import MixtureHat from './scarfphoto/mixturehat.jpg';
import OwenBeanHat from './scarfphoto/owenbeanhat.jpg';
import PinkieScarf from './scarfphoto/pinkiescarf.jpg';
import QueenOfDiamondsScarf from './scarfphoto/queen_of_diamonds_scarf.jpg';
import RedRibbingScarf from './scarfphoto/ribbing_scarf.jpg';
import SplitwayzScarf from './scarfphoto/splitwayz_scarf.jpg';
import SummerScarf from './scarfphoto/summer_fade_scarf.jpeg';
import ThreeCable from './scarfphoto/three_cables_scarf.jpeg';
import Wallet from './scarfphoto/wallet.jpg';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


class App extends React.Component {
  


  render(){

    const AllStyle ={
      cursor: 'default'
    }

    return (
      <div style={AllStyle}>
        <HashRouter>
        <ScrollToTop />
        <NavBar logo="Beanz" style={{height: 'auto'}}/>
        <Switch>
        <Route path="/" exact> <Content /> </Route>
        <Route path ="/shop"> <Shop /> </Route>
        <Route path ="/purchase/queen-of-hearts"> <Purchase title="Queen Of Diamonds Scarf" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={QueenOfDiamondsScarf} description=""/> </Route>
        <Route path ="/purchase/bw-blossom"> <Purchase title="BW Blossom Scarf" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={BwBlosson} description=""/> </Route>
        <Route path ="/purchase/splitwayz"> <Purchase title="SplitWayz Scarf" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={SplitwayzScarf}description=""/> </Route>
        <Route path ="/purchase/summer"> <Purchase title="Summer Scarf" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={SummerScarf}description=""/> </Route>
        <Route path ="/purchase/owen-bean"> <Purchase title="Owen Bean Hat" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={OwenBeanHat} description=""/> </Route>
        <Route path ="/purchase/line-down"> <Purchase title="Line Down Hat" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={LineDownHat} description=""/> </Route>
        <Route path ="/purchase/mixture"> <Purchase title="Mixture Hat" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={MixtureHat} description=""/> </Route>
        <Route path ="/purchase/wallet"> <Purchase title="Wallet" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={Wallet} description=""/> </Route>
        <Route path ="/purchase/facemask"> <Purchase title="Face Mask" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={FaceMask} description=""/> </Route>
        <Route path ="/purchase/pinkie"> <Purchase title="Pinkie Scarf" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={PinkieScarf} description=""/> </Route>
        <Route path ="/purchase/redribbing"> <Purchase title="Red Ribbing Scarf" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={RedRibbingScarf} description=""/> </Route>
        <Route path ="/purchase/three-cable"> <Purchase title="Three Cable" priceBuy="Item: $129.99" pricePattern="Pattern: $1.99" image={ThreeCable} description=""/> </Route>
        <Route path="/pattern-creator"> <PatternMaker title="hey"/> </Route>
        </Switch>
        <Footer />
        </HashRouter>
      </div>

    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
