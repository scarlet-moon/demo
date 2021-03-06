import React, {Component} from 'react';
import {NavLink,Link} from "react-router-dom";


import  "./index.scss";



class Header extends Component {

    render() {
        return (
            <div className={'header'}>
                <div className="logo">
                    <Link exact="true" to={"/"}>
                        <img src={require("../../assets/img/header/logo.png")} alt="98加盟网"/>
                    </Link>

                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink activeClassName="selected" exact to='/'>首页</NavLink></li>
                        <li><NavLink activeClassName="selected" to='/serve'>服务内容</NavLink></li>
                        <li><NavLink activeClassName="selected" to='/cooperation'>合作优势</NavLink></li>
                        <li><NavLink activeClassName="selected" to='/classic/one'>经典案例</NavLink></li>
                        <li><NavLink activeClassName="selected" to='/recommend'>98介绍</NavLink></li>
                        <li><NavLink activeClassName="selected" to='/rare'>快速资源</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;