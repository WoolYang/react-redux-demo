var mongoose = require('mongoose'); //导入mongoose模块

var {
    getArticleList,
    getArticleDetailById,
    getArticleListByTag,
    getArticleTag
} = require('../model/article'); //导入模型数据模块


//获取文章列表
exports.getArticleList = (req, res) => {
    getArticleList((err, doc) => {
        if (err) {
            res.send({
                ok: false,
                result: err
            })
        } else {
            res.send({
                ok: true,
                result: doc
            })
        }

    })
}

//标签获取文章列表
exports.getArticleListByTag = (req, res) => {
    let tag = req.query.tag === 'all' ? null : {
        tag: req.query.tag
    }
    getArticleListByTag(tag, (err, doc) => {
        if (err) {
            res.send({
                ok: false,
                result: err
            })
        } else {
            res.send({
                ok: true,
                result: doc
            })
        }

    })
}

//获取文章详情
exports.getArticleDetailById = (req, res) => {
    getArticleDetailById(req.query.id, (err, doc) => {
        if (err) {
            res.send({
                ok: false,
                result: err
            })
        } else {
            res.send({
                ok: true,
                result: doc
            })
        }

    })
}

//获取文章标签
exports.getArticleTag = (req, res) => {
    getArticleTag((err, doc) => {
        if (err) {
            res.send({
                ok: false,
                result: err
            })
        } else {
            res.send({
                ok: true,
                result: doc
            })
        }

    })
}