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
const finishOrder = (data)=>{
    return ajax('https://bang.zhengsj.top/indent/finished','POST',data)
}
const deleteOrder = (data)=>{
    return ajax('https://bang.zhengsj.top/indent/canceled','DELETE',data)
}
const takeOrder = (data)=>{
    return ajax('https://bang.zhengsj.top/indent/take','POST',data)
}
const configOrder = (data)=>{
    return ajax('https://bang.zhengsj.top/indent/arrived','POST',data)
}
const getCoupon = (data)=>{
    return ajax('https://bang.zhengsj.top/coupon/get','POST',data)
}
const getCouponInfo = (id)=>{
    return ajax(`https://bang.zhengsj.top/coupon/info/${id}`,'GET')
}
const checkAddr = (userId,data)=>{
    return ajax(`https://bang.zhengsj.top/user/addresses/${userId}`,'GET',data)
}
const getOneSch = (schoolId)=>{
    return ajax(`https://bang.zhengsj.top/user/school/${schoolId}`,'GET')
}
export {
    getUserInfor,
    getAddrList,
    submitHelpSend,
    addAddress,
    daleteAddr,
    modifyAddr,
    couponList,
    getOrderDetails,
    finishOrder,
    deleteOrder,
    takeOrder,
    configOrder,
    getCoupon,
    getCouponInfo,
    checkAddr,
    getOneSch
}