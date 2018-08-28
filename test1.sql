/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100129
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 100129
File Encoding         : 65001

Date: 2018-08-28 16:49:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `art_id` int(100) NOT NULL AUTO_INCREMENT,
  `art_name` varchar(255) DEFAULT NULL,
  `class_id` int(100) DEFAULT NULL,
  `tag_id` int(100) DEFAULT NULL,
  `art_text` varchar(255) DEFAULT NULL COMMENT '正文',
  `create_date` int(255) DEFAULT NULL,
  `update_date` int(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`art_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '学习react', '1', '1', '123445', '2147483647', '2147483647', '118');
INSERT INTO `article` VALUES ('2', '测试', '2', '1', '<p>React Umeditor</p>', '1535080408', '1535080408', '118');
INSERT INTO `article` VALUES ('3', '测试', '2', '1', '<p>React Umeditor</p>', '1535080426', '1535080426', '118');
INSERT INTO `article` VALUES ('4', '测试', '1', '2', '<p>React Umeditor123</p>', '1535080447', '1535080447', '118');
INSERT INTO `article` VALUES ('5', '测试', '1', '2', '<p>React Umeditor</p>', '1535080493', '1535080493', '118');
INSERT INTO `article` VALUES ('6', '测试', '1', '2', '<p>React Umeditor</p>', '1535080510', '1535080510', '118');
INSERT INTO `article` VALUES ('7', '测试', '1', '2', '<p>React Umeditor</p>', '1535080534', '1535080534', '118');
INSERT INTO `article` VALUES ('8', '测试', '1', '2', '<p>React Umeditor</p>', '1535080539', '1535080539', '118');
INSERT INTO `article` VALUES ('9', '测试', '1', '2', '<p>React Umeditor</p>', '1535080555', '1535080555', '118');
INSERT INTO `article` VALUES ('10', '123', '1', '2', '<p>React Umeditor</p>', '1535101094', '1535101094', '118');
INSERT INTO `article` VALUES ('11', '学习vue难度大', '1', '2', '<p>React Umeditor大萨达</p>', '1535101418', '1535101418', '118');
INSERT INTO `article` VALUES ('12', '123', '1', '2', '<p>React Umeditor</p>', '1535101573', '1535101573', '118');
INSERT INTO `article` VALUES ('13', '123', '1', '2', '<p>React Umeditor</p>', '1535101794', '1535101794', '118');
INSERT INTO `article` VALUES ('14', '大叔大婶多', '1', '2', '<p>React Umeditor</p>', '1535101896', '1535101896', '118');
INSERT INTO `article` VALUES ('15', '大叔大婶', '2', '1', '<p>React Umeditor</p>', '1535101978', '1535101978', '118');

-- ----------------------------
-- Table structure for art_class
-- ----------------------------
DROP TABLE IF EXISTS `art_class`;
CREATE TABLE `art_class` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '文章类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of art_class
-- ----------------------------
INSERT INTO `art_class` VALUES ('1', '学习');
INSERT INTO `art_class` VALUES ('2', '生活');

-- ----------------------------
-- Table structure for art_tag
-- ----------------------------
DROP TABLE IF EXISTS `art_tag`;
CREATE TABLE `art_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of art_tag
-- ----------------------------
INSERT INTO `art_tag` VALUES ('1', 'react');
INSERT INTO `art_tag` VALUES ('2', 'vue');
INSERT INTO `art_tag` VALUES ('3', '烹饪');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL DEFAULT '' COMMENT '用户名',
  `gender` char(1) CHARACTER SET latin1 DEFAULT '0' COMMENT '0、未知 1、男 2、女',
  `age` int(11) DEFAULT NULL,
  `province` varchar(60) DEFAULT NULL,
  `city` varchar(60) DEFAULT NULL,
  `area` varchar(60) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf32 DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('118', 'lqy', '0', null, null, null, null, null, '1', 'lqy');
INSERT INTO `user` VALUES ('121', '123', '0', null, null, null, null, null, '1', '123');
