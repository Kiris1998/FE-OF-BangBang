import ajax from './ajax'
const getUserInfor = (data)=>{
    return ajax('https://bang.zhengsj.top/login/user','POST',data)
}
const getAddrList = (id)=>{
    return ajax(`https://bang.zhengsj.top/user/addresses/${id}`,'GET')
}
const submitHelpSend = (data)=>{
    return ajax(`https://bang.zhengsj.top/indent`,'POST',data)
}
const addAddress = (data)=>{
    return ajax('https://bang.zhengsj.top/user/address','POST',data)
}
export {
    getUserInfor,
    getAddrList,
    submitHelpSend,
    addAddress
}