
const jumpTo = (url) => {
    wx.navigateTo({
        url: url
    })
}

const showLoading = (str) => {
    wx.showLoading({
      title: str,
      mask:true
    })
}

export{
    jumpTo,
    showLoading
}