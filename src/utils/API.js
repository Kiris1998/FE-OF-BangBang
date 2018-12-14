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
const daleteAddr = (data)=>{
    return ajax('https://bang.zhengsj.top/user/address/delete','GET',data)
}
const modifyAddr = (data)=>{
    return ajax('https://bang.zhengsj.top/user/address/modify','POST',data)
}
const couponList = (id)=>{
    return ajax(`https://bang.zhengsj.top/coupon/list/${id}`,'GET')
}
const getOrderDetails = (data)=>{
    return ajax('https://bang.zhengsj.top/indent/detail','GET',data)
}
export {
    getUserInfor,
    getAddrList,
    submitHelpSend,
    addAddress,
    daleteAddr,
    modifyAddr,
    couponList,
    getOrderDetails
}