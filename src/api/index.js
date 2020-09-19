

import {httpGet, httpPost} from "../utils/http";
import base from "./base"

/**
 * 将所有的请求都封装到这里，方便管理，类似于 redux：action都集中在一起
 */

const api = {

    getUsers(){
        return httpGet(base.origin + base.users);
    },

    getMusics(){
        return httpGet(base.host + base.musics);
    }
};

export default api;
