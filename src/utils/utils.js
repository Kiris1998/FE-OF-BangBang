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

const ajax = ()=>{
    wx.request({
      url: 'https://bang.zhengsj.top/login/user', 
      method:'POST',
      data: {
        code:code,
        encryptedData: encryptedData,
        iv: iv
      },
      success (res) {
        console.log(res.data)
      },
      fail(){

      }
    })
}



export{
    jumpTo,
    getSettings,
    getUserInfo,
    switchTab,
    login,
    ajax
}