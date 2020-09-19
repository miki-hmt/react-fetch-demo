
import React from 'react'

//demo3 #3 封装http请求
import api from '../api'

export default class Request extends React.Component{

    constructor(){
        super();
    }

    componentDidMount() {
        api.getUsers().then(res => res.json()).then(data =>{
            console.log('封装http获取的结果：'+data);
        })
    }

    render() {
        return(
            <div>
                <h1>demo3- 封装http请求</h1>

            </div>
        )
    }
}