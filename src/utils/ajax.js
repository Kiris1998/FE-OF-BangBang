const ajax = function(url,methods='GET',data={}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: url, 
            method:methods,
            data: data,
            success (res) {
                console.log(res)
                if(res.data.code != 0){
                    reject(res.data.msg)
                }
                else
                    resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}
export default ajax