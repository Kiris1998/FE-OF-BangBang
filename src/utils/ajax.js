const ajax = function(url,methods='GET',data={}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: url, 
            method:methods,
            data: data,
            success (res) {
                resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}
export default ajax