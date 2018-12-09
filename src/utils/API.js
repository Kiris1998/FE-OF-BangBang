import ajax from './ajax'
const getUserInfor = (data)=>{
    return ajax('https://bang.zhengsj.top/login/user','POST',data)
}

export {
    getUserInfor
}