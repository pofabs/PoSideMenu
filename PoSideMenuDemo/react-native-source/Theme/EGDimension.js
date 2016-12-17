/*
 * @providesModule EGDimension
 * 该模块主要为尺寸输出提供方便
 * （react-native尺寸不提供按百分比设置）
 * @DEMO
 * let $ = require('HFDimension');
 * let width2 = $(0.8);  // 在375宽度下输出300
 * let width2 = $(-16);  // 在375宽度下输出359
 * @TODO 参数不能为1，有歧义
 * @author liuzhanhong
 */

'use strict';

var SCREEN_WIDTH = require('Dimensions').get('window').width;

module.exports = (width, scareBase) => {
  if (width < 0) {
    return width + SCREEN_WIDTH;
  } else if (width < 1) {
    return width * SCREEN_WIDTH;
  } else if (scareBase) {
    return width / scareBase * SCREEN_WIDTH;
  } else {
    return width;
  }
};
