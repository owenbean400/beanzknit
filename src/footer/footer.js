import React from 'react';
import Links from './link.js';
import LinkTitle from './linktitle.js';
import SocialMedia from './socialmedia.js';

class Footer extends React.Component{

    render(){
        return(
            <div>
                <footer>
                    <div className="socialmedias">
                        <SocialMedia sociallink="#" socialicon="fa fa-instagram"/>
                        <SocialMedia sociallink="#" socialicon="fa fa-pinterest"/>
                        <SocialMedia sociallink="#" socialicon="fa fa-snapchat"/>
                        <SocialMedia sociallink="#" socialicon="fa fa-facebook"/>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <LinkTitle title="Links Around Website"/>
                            <Links too="/shop" name="Shop" />
                            <Links too="/blog" name="Blog" />
                            <Links too="/pattern-creator" name="Pattern Creator" />
                            <Links too="/about" name="About" />
                            <Links too="/contact" name="Contact" />
                        </ul>
                        <ul>
                            <LinkTitle title="Scarves"/>
                            <Links too="/purchase/queen-of-hearts" name="Queen of Diamonds" />
                            <Links too="/purchase/splitwayz" name="SplitWayz" />
                            <Links too="/purchase/summer" name="Summer Fade" />
                            <Links too="/purchase/bw-blossom" name="BW Blossom" />
                            <Links too="/purchase/pinkie" name="Pinkie" />
                            <Links too="/purchase/redribbing" name="Ribbing Red" />
                            <Links too="/purchase/three-cable" name="Three Cable" />
                        </ul>
                        <ul>
                            <LinkTitle title="Other Knit Items"/>
                            <Links too="/purchase/owen-bean" name="Owen Bean Hat" />
                            <Links too="/purchase/mixture" name="Mixture Disrupt" />
                            <Links too="/purchase/line-down" name="Line In" />
                            <Links too="/purchase/wallet" name="Wallet" />
                            <Links too="/purchase/facemask" name="BW Facemask" />
                        </ul>
                    </div>
                    <p className="copyrighttag">Copyright © 2020 Beanz Inc. All rights reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Footer