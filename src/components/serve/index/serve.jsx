import React, {Component} from 'react';


import Header from "../../header";
import Banner from "../../banner";
import SerCon from "../serCon";
import CooAdv from "../coopAdv";
import CooAdvinfo from "../cooAdvinfo";
import Issue from "../issue";
import Case from "../../case";
import Pub from "../pub";
import Contact from "../../contact";
import Footer from "../../footer";





class Serve extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <SerCon />
                <CooAdv />
                <CooAdvinfo />
                <Issue />
                <Case />
                <Pub />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Serve;