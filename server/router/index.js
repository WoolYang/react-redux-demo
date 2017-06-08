//获取文章列表
exports.articleList = function(req, res) {
  req.setMaxListeners(0)
    res.send({
        ok: true,
        result: result
    })
}

//模拟数据
var result = [
  {
    "_id":"1",
    "title":"this is a title server",
    "secondaryText":"ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
    "avatar":"muidocs-icon-communication-voicemail"
  },
  {
    "_id":"2",
    "title":"this is a title",
    "secondaryText":"ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
    "avatar":"muidocs-icon-communication-voicemail"
  }
 ]