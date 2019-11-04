/*
SQLyog Community v12.4.2 (64 bit)
MySQL - 10.4.8-MariaDB : Database - auth_test_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`auth_test_db` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `auth_test_db`;

/*Table structure for table `user_list` */

DROP TABLE IF EXISTS `user_list`;

CREATE TABLE `user_list` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(250) NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `group_name` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `user_list` */

insert  into `user_list`(`id`,`user_name`,`full_name`,`group_name`) values 
(1,'Alex1','Json1','Default Group'),
(2,'Alex2','Json2','Default Group'),
(3,'Alex3','json3','Default Group'),
(4,'Alex4','json3','Default Group'),
(5,'Alex5','json3','Default Group'),
(6,'Alex6','json3','Default Group'),
(7,'Alex7','json3','Default Group'),
(8,'Alex8','json3','Default Group'),
(9,'Alex9','json3','Default Group'),
(10,'Alex10','json3','Default Group');

/*Table structure for table `users_login` */

DROP TABLE IF EXISTS `users_login`;

CREATE TABLE `users_login` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `users_login` */

insert  into `users_login`(`id`,`user_name`,`password`) values 
(1,'admin','827ccb0eea8a706c4c34a16891f84e7b'),
(2,'','');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
