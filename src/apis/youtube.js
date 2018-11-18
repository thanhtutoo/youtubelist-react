import axios from 'axios';

const KEY =  "AIzaSyA4p_z0ShimAadngUsNMdc02pIw0jW-HEg";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:'5',
        key:KEY
    }
});