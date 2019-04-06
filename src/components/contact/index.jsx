import React, {Component} from 'react';
import {
    Input, Button,
} from 'antd';
import "./index.scss"
import "antd/lib/input/style/css"
import "antd/lib/button/style/css"


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            tel: null,
            email: "",
            message: "",
        };
    }

    handleNameChange = (e) =>{
        this.setState({
            name : e.target.value
        })
    }

    handleTelChange = (e) =>{
        this.setState({
            tel : e.target.value
        })
    }

    handleEmailChange = (e) =>{
        this.setState({
            email : e.target.value
        })
    }

    handleMessageChange = (e) =>{
        this.setState({
            message : e.target.value
        })
    }

    //提交
    handleSub = () => {
        if(!(this.state.name&&this.state.tel&&this.state.email&&this.state.message)) return alert("请填写完整")
    }

    //重置
    hangleReset = () => {
        this.setState({
            name:"",
            tel: null,
            email: "",
            message: "",
        })
    }





    render() {

        return (
            <div className="contact">
                <div className="tit">
                    <h2>CONTACT US</h2>
                    <h2>联系我们</h2>
                </div>
                <div className="form">
                    <div className="foLeft">
                        <div className="rx">
                            <i className="iconfont icon-phone"></i>
                            <div className="pro">
                                <p>咨询热线：</p>
                                <p>021-0202020288</p>
                            </div>
                        </div>
                        <div className="email">
                            <i className="iconfont icon-email2"></i>
                            <div className="pro">
                                <p>邮 箱：</p>
                                <p>258158@qq.com</p>
                            </div>
                        </div>
                        <div className="wxPic">
                            <img src={require("../../assets/img/wx/wx_01.png")} alt="公众号"/>
                            <img src={require("../../assets/img/wx/wx_02.png")} alt="小程序"/>
                        </div>
                    </div>
                    <div className="foRight">
                        <div className="formTxt">
                            <div className="foLeft">
                                <Input placeholder="姓名：" value={this.state.name} onChange={this.handleNameChange}/>
                                <Input placeholder="电话：" value={this.state.tel} onChange={this.handleTelChange}/>
                                <Input placeholder="邮箱：" value={this.state.email} onChange={this.handleEmailChange}/>

                            </div>
                            <div className="foRight">
                                <Input.TextArea placeholder="留言：" value={this.state.message} onChange={this.handleMessageChange}/>
                            </div>
                        </div>
                        <div className="btn">
                            <Button className="reset" onClick={this.hangleReset}>重置</Button>
                            <Button type="primary" className="sub" onClick={this.handleSub}>提交</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;