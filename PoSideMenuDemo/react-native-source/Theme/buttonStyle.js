/**
 * Created by easy on 16/3/31.
 */

let color = require('./colorStyle');

module.exports = {
    primary : {//主要按钮
        themeColor      : color.Accent,
        fontColor       : color.White,
    },
    secondary : {//次要按钮
        type            : 'stroke',
        themeColor      : color.Accent,
    },
    success :  {//成功
        themeColor      : color.BrGreen,
        fontColor       : color.White,
    },
    warning : {//警告
        themeColor      : color.BgYellow,
        fontColor       : color.White,
    },
    danger : {//警示
        themeColor      : color.BrRed,
        fontColor       : color.White,
    },
    text : {//文本按钮(没有背景)
        themeColor      : color.Grey,
        type            : 'text',
    }
}