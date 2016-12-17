/**
 * @providesModule Theme
 */


var Color = {
    // 以下旧标版定义的key后续可能会移除掉
    // 顶部深棕色
    "common_bg_brown": "#63534e",
    // 浅灰色
    "common_bg_lightGrey": "#f7f7f7",
    // 底部tab背景颜色
    "common_bottomTab_bg": "#ffffff",
    // 文字一般颜色
    "common_bottomTab_text_nor": "#999999",
    // 文字选中颜色
    "common_bottomTab_text_selected": "#6a534f",
    // 按钮背景-深棕色-一般颜色（带切图）
    "common_btnBg_darkBrown_nor": "#63534e",
    // 按钮背景-深棕色-按下颜色（带切图）
    "common_btnBg_darkBrown_pre": "#4d413e",
    // 按钮背景-浅黄色-一般颜色（带切图）
    "common_btnBg_lightYellow_nor": "#ffe7bc",
    // 按钮背景-浅黄色-按下颜色（带切图）
    "common_btnBg_lightYellow_pre": "#fddca1",
    // 按钮背景-红色-一般颜色（ 带切图）
    "common_btnBg_red_nor": "#e43523",
    // 按钮背景-红色-按下颜色（ 带切图）
    "common_btnBg_red_pre": "#db2000",
    // 按钮文字-深棕色
    "common_btnText_darkBrown": "#63534e",
    // 按钮文字-浅黄色
    "common_btnText_lightYellow": "#ffe7bc",
    // 按钮文字-白色
    "common_btnText_white": "#ffffff",
    // 深灰色字
    "common_detailText_darkGrey": "#333333",
    // 浅灰色字
    "common_detailText_lightGrey": "#999999",
    // 中灰色字
    "common_detailText_midGrey": "#666666",
    // 橙色描述字
    "common_detailText_orange": "#ff7800",
    // 红色描述字
    "common_detailText_red": "#e43523",
    // 红色描述字（多用于“用户协议”数字、等）
    "common_detailText_red02": "#e73315",
    // 超浅灰色描述字（用于输入文本前的提示语）
    "common_detailText_supperLightGrey": "#dddddd",
    // 灰色 
    "common_line_Grey": "#dddddd",
    // 白色
    "common_listBg_white_nor": "#ffffff",
    // 按下颜色
    "common_listBg_white_pre": "#eeeeee",
    // 棕色标题字
    "common_text_brown": "#6a534f",
    // 深棕色文字(标题字、或用于输入框文字及左边的提示语)
    "common_text_darkBrown": "#63534e",
    // 棕色字
    "common_topInforText_brown": "#b59792",
    // 浅黄色字
    "common_topInforText_lightyellow": "#ffe7bc",
    // 白色字
    "common_topInforText_white": "#ffffff",
    // tost的提示语颜色背景色  （带切图）
    "common_tostBg_black": "rgba(0,0,0,0.60)",
    // tost的提示语颜色-白色
    "common_tostText_white": "#ffffff",
    // button的背景颜色-红色
    "common_btn_bg": '#b7242c',

    // 泸州新标版主题色，手动添加
    // 主题/点缀色
    "Accent": "#E60012",
    "DkAccent": "#CF0010",
    "BrAccent": "#F38089",
    "Decoration1": "#FF9933",
    // 区域色
    "Red": "#CC0000",
    "SubGrey": "#999999",
    "blue": "#3399FF",
    "BgYellow": "#FCF8E2",
    "BgGrey": "#F9F9F9",
    "DvGrey": "#D7D7D7",
    // 文字色
    "Black": "#333333",
    "Grey": "#666666",
    "DisGrey": "#DDDDDD",
    "White": "#FFFFFF",
    "BrRed": "#B7171C",
    "BrGreen": "#00AD49",
};

let colorStyle = require('./colorStyle');
let fontStyle = require('./fontStyle');
let layoutStyle = require('./layoutStyle');
let imageStyle = require('./imageStyle');

module.exports = {
    Color : {...Color,...colorStyle},      //即将过期

    //font
    Font : fontStyle.Font,
    FontWeight : fontStyle.FontWeight,

    //layout
    Grid : layoutStyle.Grid,

    //components
    Button : require('./buttonStyle'),

    Image: imageStyle.Image
}