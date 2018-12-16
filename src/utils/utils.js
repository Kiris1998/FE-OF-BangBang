const jumpTo = (url) => {
    wx.navigateTo({
        url: url
    })
}
const switchTab = (url)=>{
    wx.switchTab({
        url:url
    })
}
const redirectTo = (url)=>{
    wx.redirectTo({
        url: url
    })
}
const getSettings = ()=>{
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}
const getUserInfo = ()=>{
    return new Promise((resolve,reject)=>{
        wx.getUserInfo({
            success: function (res) {
                resolve(res)

            },
            fail: function (err) {
                reject(err)
            }
        })
    })
}

const login = ()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            success (res) {
                if(res.code)
                    resolve(res)
                else
                    reject(res)
            }
        })
    })
}

const setStorage = (key,data)=>{
    return new Promise((resolve,reject)=>{
        wx.setStorage({
            key:key,
            data:data,
            success(res){
                resolve(res)
            },
            fail(){
                reject()
            }
        })
    })
}

const getStorage = (key)=>{
    return new Promise((resolve,reject)=>{
        wx.getStorage({
            key:key,
            success(res){
                resolve(res)
            },
            fail(){
                reject()
            }
        })
    })
}
const getStorageSync = (key)=>{
    return wx.getStorageSync(key)
}
//函数防抖
const throttle = (method,delay)=>{
    var last = 0;
    return function (){
        var now = +new Date();
        if(now - last > delay){
            method.apply(this,arguments);
            last = now;
        }
    }
}


export{
    jumpTo,
    getSettings,
    getUserInfo,
    switchTab,
    login,
    setStorage,
    getStorage,
    redirectTo,
    getStorageSync,
    throttle
}