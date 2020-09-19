

import React from 'react';
import qs from 'querystring';

export default class Crossomain extends React.Component{

    constructor(){
        super();
        this.state= {
            songList: []
        }
    }

    componentDidMount() {

        /**
         * 2020.08.23 miki 跨域解决方案
         *      开发模式下：
         *          利用环境解决：react，vue常用框架都提供了解决方案(增加proxy之后要重启)
         *      生产模式下：
         *          jsonp cors iframe postMessage....
         */

        //http://tingapi.ting.baidu.com/v1/restserver/ting?fortmat=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0
        //get方式  //http://tingapi.ting.baidu.com
        //开发环境下跨域方式：
        fetch('/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0')
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                console.log(data);
                this.setState({
                    songList: data.song_list
                })
            })
            //处理失败请求
            .catch(error =>{
            console.log(new Error(error));
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

        const {songList} = this.state;

        return(
            <div>
                <h1>demo2-fetch跨域</h1>
                <ul>
                    {
                        songList.map((element, index)=>{
                            return <li key={index}>{element.album_title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}