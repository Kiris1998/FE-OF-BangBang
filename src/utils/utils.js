
const jumpTo = (url) => {
    wx.navigateTo({
        url: url
    })
}

const showLoading = ({name,age,sex,school}) => {
    age = age || 'hai'
    console.log(name,age)
    // wx.showLoading({
    //   title: str,
    //   mask:true
    // })
}

export{
    jumpTo,
    showLoading
}