-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2022 at 10:09 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frdb2`
--

-- --------------------------------------------------------

--
-- Table structure for table `fr_detail`
--

CREATE TABLE `fr_detail` (
  `id` int(11) NOT NULL,
  `list_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` int(4) NOT NULL,
  `colour` varchar(50) NOT NULL,
  `interior_colour` varchar(50) NOT NULL,
  `odometer_reading` int(7) NOT NULL,
  `remaining_period` varchar(20) NOT NULL,
  `power` varchar(100) NOT NULL,
  `transmission` varchar(300) NOT NULL,
  `engine` varchar(50) NOT NULL,
  `max_speed` int(4) NOT NULL,
  `slug` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fr_list`
--

CREATE TABLE `fr_list` (
  `id` int(11) NOT NULL,
  `slug` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fr_slug`
--

CREATE TABLE `fr_slug` (
  `id` int(11) NOT NULL,
  `slug` varchar(200) NOT NULL,
  `region` varchar(20) NOT NULL,
  `country` varchar(50) NOT NULL,
  `cou_slug` varchar(20) NOT NULL,
  `count` int(5) NOT NULL,
  `created_at` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fr_detail`
--
ALTER TABLE `fr_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fr_list`
--
ALTER TABLE `fr_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fr_slug`
--
ALTER TABLE `fr_slug`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fr_detail`
--
ALTER TABLE `fr_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fr_list`
--
ALTER TABLE `fr_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fr_slug`
--
ALTER TABLE `fr_slug`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
