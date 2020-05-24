import React from 'react';
import ShopIcon from './photo.js';
import BwBlosson from '../scarfphoto/bw_blossom_scarf.jpg';
import FaceMask from '../scarfphoto/facemask.jpg';
import LineDownHat from '../scarfphoto/linedownhat.jpg';
import MixtureHat from '../scarfphoto/mixturehat.jpg';
import OwenBeanHat from '../scarfphoto/owenbeanhat.jpg';
import PinkieScarf from '../scarfphoto/pinkiescarf.jpg';
import QueenOfDiamondsScarf from '../scarfphoto/queen_of_diamonds_scarf.jpg';
import RedRibbingScarf from '../scarfphoto/ribbing_scarf.jpg';
import SplitwayzScarf from '../scarfphoto/splitwayz_scarf.jpg';
import SummerScarf from '../scarfphoto/summer_fade_scarf.jpeg';
import ThreeCable from '../scarfphoto/three_cables_scarf.jpeg';
import Wallet from '../scarfphoto/wallet.jpg';

class Shop extends React.Component {

    render(){
        const Style = {
            Main: {
                width: '100%',
                margin: '128px 0 0 0',
                paddingBottom: '128px'
            },
            IconContainer: {
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
            }
        }

        return(
            <div>
                <main style={Style.Main}>
                    <div style={Style.IconContainer}>
                    <ShopIcon link="/purchase/bw-blossom" title="BW Blossom Scarf" price="$1299.99" image={BwBlosson}/>
                    <ShopIcon link="purchase/queen-of-hearts" title="Queen Of Heart Scarf" price="$1299.99" image={QueenOfDiamondsScarf}/>
                    <ShopIcon link="purchase/splitwayz" title="Splitwayz Scarf" price="$1299.99" image={SplitwayzScarf}/>
                    <ShopIcon link="purchase/summer" title="Summer Scarf" price="$1299.99" image={SummerScarf}/>
                    <ShopIcon link="/purchase/owen-bean" title="Owen Bean Hat" price="$1299.99" image={OwenBeanHat}/>
                    <ShopIcon link="/purchase/line-down" title="Line Down Hat" price="$1299.99" image={LineDownHat}/>
                    <ShopIcon link="/purchase/mixture" title="Mixture Hat" price="$1299.99" image={MixtureHat}/>
                    <ShopIcon link="/purchase/wallet" title="Wallet" price="$1299.99" image={Wallet}/>
                    <ShopIcon link="/purchase/facemask" title="FaceMask" price="$1299.99" image={FaceMask}/>
                    <ShopIcon link="/purchase/pinkie" title="PinkieScarf" price="$1299.99" image={PinkieScarf}/>
                    <ShopIcon link="/purchase/redribbing" title="Red Ribbing Scarf" price="$1299.99" image={RedRibbingScarf}/>
                    <ShopIcon link="/purchase/three-cable" title="Three Cable Scarf" price="$1299.99" image={ThreeCable}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Shop