
import React from 'react'

//解决post提交参数，必须得是name=&password=&token=形式得问题    2020.08.20 miki
import qs from 'querystring'

//暂时使用类声明式组件
export default class User extends React.Component{

    constructor(){
        super();
        this.state= {
            banners: []
        }
    }

    componentDidMount() {

        //get方式
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
            .then(res =>{
                return res.json();
            }).then(data =>{
                console.log(data);
                this.setState({
                    banners: data.banner
                })
            })

        //post方式
        fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Accept":"application/json,text/plain,*/*"
            },
            body:qs.stringify({
                user_id:"iwen@qq.com",
                password:"iwen123",
                verification_code:"crfvw"
            })
        }).then(res =>res.json())
            .then(data =>{
                console.log(data);
            })
    }

    render() {
        const {banners} = this.state ;
        return(
            <div>
                <h1>demo1- 测试get请求</h1>
                {
                    banners.length > 0 ?
                        <div>
                            <ul>
                                {
                                    banners.map((element, index)=>{
                                        return <li key={index}>{element.title}</li>
                                    })
                                }
                            </ul>
                        </div> : <div>等到数据加载....</div>
                }
            </div>
        )
    }
}