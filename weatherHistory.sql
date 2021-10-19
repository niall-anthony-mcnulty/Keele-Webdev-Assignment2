-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2021 at 06:01 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WEATHER`
--

-- --------------------------------------------------------

--
-- Table structure for table `weatherHistory`
--

CREATE TABLE `weatherHistory` (
  `id` int(11) NOT NULL,
  `weatherMain` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `weatherDate` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `weatherTemp` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `weatherIconUrl` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `city` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `weatherHistory`
--

INSERT INTO `weatherHistory` (`id`, `weatherMain`, `weatherDate`, `weatherTemp`, `weatherIconUrl`, `city`) VALUES
(11, 'Rain', 'Tue, 19/10/2021, 12:52 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(12, 'Clouds', 'Tue, 19/10/2021, 12:51 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Beijing'),
(13, 'Clear', 'Tue, 19/10/2021, 12:50 UTC', '10 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'New York'),
(14, 'Clouds', 'Tue, 19/10/2021, 12:53 UTC', '8 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'San Fransisco'),
(15, 'Clouds', 'Tue, 19/10/2021, 12:49 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Beijing'),
(16, 'Rain', 'Tue, 19/10/2021, 12:51 UTC', '18 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shanghai'),
(17, 'Clouds', 'Tue, 19/10/2021, 12:53 UTC', '15 C', 'http://openweathermap.org/img/wn/03d@2x.png', 'Aberdeen'),
(18, 'Clear', 'Tue, 19/10/2021, 12:53 UTC', '7 C', 'http://openweathermap.org/img/wn/01n@2x.png', 'Dublin'),
(19, 'Clear', 'Tue, 19/10/2021, 12:53 UTC', '35 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'Doha'),
(20, 'Clouds', 'Tue, 19/10/2021, 12:53 UTC', '27 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Nairobi'),
(21, 'Clear', 'Tue, 19/10/2021, 12:50 UTC', '7 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'Toronto'),
(22, 'Clouds', 'Tue, 19/10/2021, 12:52 UTC', '24 C', 'http://openweathermap.org/img/wn/02d@2x.png', 'Melbourne'),
(23, 'Clouds', 'Tue, 19/10/2021, 12:54 UTC', '13 C', 'http://openweathermap.org/img/wn/02n@2x.png', 'Sydney'),
(24, 'Clouds', 'Tue, 19/10/2021, 12:53 UTC', '12 C', 'http://openweathermap.org/img/wn/02n@2x.png', 'Auckland'),
(25, 'Clouds', 'Tue, 19/10/2021, 12:54 UTC', '5 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Moscow'),
(26, 'Clouds', 'Tue, 19/10/2021, 12:50 UTC', '16 C', 'http://openweathermap.org/img/wn/03d@2x.png', 'Houston'),
(27, 'Clouds', 'Tue, 19/10/2021, 12:55 UTC', '21 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'BrasÃ­lia'),
(28, 'Rain', 'Tue, 19/10/2021, 13:19 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(29, 'Clouds', 'Tue, 19/10/2021, 13:19 UTC', '10 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Beijing'),
(30, 'Clear', 'Tue, 19/10/2021, 13:18 UTC', '11 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'New York'),
(31, 'Rain', 'Tue, 19/10/2021, 13:22 UTC', '17 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shanghai'),
(32, 'Rain', 'Tue, 19/10/2021, 13:20 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(33, 'Rain', 'Tue, 19/10/2021, 13:25 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(34, 'Rain', 'Tue, 19/10/2021, 13:26 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(35, 'Rain', 'Tue, 19/10/2021, 13:22 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(36, 'Clouds', 'Tue, 19/10/2021, 13:24 UTC', '10 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Beijing'),
(37, 'Clear', 'Tue, 19/10/2021, 13:29 UTC', '23 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'Paris'),
(38, 'Clear', 'Tue, 19/10/2021, 13:28 UTC', '23 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'Madrid'),
(39, 'Clouds', 'Tue, 19/10/2021, 13:29 UTC', '10 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Beijing'),
(40, 'Clouds', 'Tue, 19/10/2021, 13:38 UTC', '27 C', 'http://openweathermap.org/img/wn/03n@2x.png', 'Phuket'),
(41, 'Clouds', 'Tue, 19/10/2021, 13:40 UTC', '27 C', 'http://openweathermap.org/img/wn/03n@2x.png', 'Phuket'),
(42, 'Clouds', 'Tue, 19/10/2021, 13:40 UTC', '27 C', 'http://openweathermap.org/img/wn/03n@2x.png', 'Phuket'),
(43, 'Clouds', 'Tue, 19/10/2021, 13:40 UTC', '10 C', 'http://openweathermap.org/img/wn/03n@2x.png', 'Beijing'),
(44, 'Clouds', 'Tue, 19/10/2021, 13:40 UTC', '27 C', 'http://openweathermap.org/img/wn/03n@2x.png', 'Phuket'),
(45, 'Rain', 'Tue, 19/10/2021, 13:45 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(46, 'Rain', 'Tue, 19/10/2021, 13:45 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(47, 'Rain', 'Tue, 19/10/2021, 13:51 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(48, 'Rain', 'Tue, 19/10/2021, 13:46 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(49, 'Rain', 'Tue, 19/10/2021, 13:52 UTC', '26 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(50, 'Rain', 'Tue, 19/10/2021, 14:07 UTC', '27 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Kolkata'),
(51, 'Rain', 'Tue, 19/10/2021, 14:07 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(52, 'Rain', 'Tue, 19/10/2021, 14:13 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(53, 'Rain', 'Tue, 19/10/2021, 14:12 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(54, 'Rain', 'Tue, 19/10/2021, 14:12 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(55, 'Rain', 'Tue, 19/10/2021, 14:17 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(56, 'Rain', 'Tue, 19/10/2021, 14:19 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(57, 'Rain', 'Tue, 19/10/2021, 14:17 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(58, 'Rain', 'Tue, 19/10/2021, 14:23 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(59, 'Rain', 'Tue, 19/10/2021, 14:31 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(60, 'Rain', 'Tue, 19/10/2021, 14:38 UTC', '25 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shenzhen'),
(61, 'Clouds', 'Tue, 19/10/2021, 14:43 UTC', '19 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(62, 'Haze', 'Tue, 19/10/2021, 14:41 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(63, 'Haze', 'Tue, 19/10/2021, 14:44 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(64, 'Haze', 'Tue, 19/10/2021, 14:44 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(65, 'Haze', 'Tue, 19/10/2021, 14:49 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(66, 'Haze', 'Tue, 19/10/2021, 14:52 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(67, 'Clouds', 'Tue, 19/10/2021, 14:48 UTC', '19 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(68, 'Clouds', 'Tue, 19/10/2021, 14:51 UTC', '19 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(69, 'Haze', 'Tue, 19/10/2021, 14:57 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(70, 'Clear', 'Tue, 19/10/2021, 15:02 UTC', '6 C', 'http://openweathermap.org/img/wn/01n@2x.png', 'Seoul'),
(71, 'Clear', 'Tue, 19/10/2021, 14:58 UTC', '7 C', 'http://openweathermap.org/img/wn/01n@2x.png', 'Seoul'),
(72, 'Clouds', 'Tue, 19/10/2021, 15:00 UTC', '16 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Istanbul'),
(73, 'Clouds', 'Tue, 19/10/2021, 15:00 UTC', '16 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Istanbul'),
(74, 'Clouds', 'Tue, 19/10/2021, 15:01 UTC', '16 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Istanbul'),
(75, 'Clear', 'Tue, 19/10/2021, 15:11 UTC', '8 C', 'http://openweathermap.org/img/wn/01n@2x.png', 'Incheon'),
(76, 'Clear', 'Tue, 19/10/2021, 15:11 UTC', '8 C', 'http://openweathermap.org/img/wn/01n@2x.png', 'Incheon'),
(77, 'Clear', 'Tue, 19/10/2021, 15:11 UTC', '8 C', 'http://openweathermap.org/img/wn/01n@2x.png', 'Incheon'),
(78, 'Clouds', 'Tue, 19/10/2021, 15:12 UTC', '14 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Munich'),
(79, 'Clouds', 'Tue, 19/10/2021, 15:12 UTC', '14 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Munich'),
(80, 'Clouds', 'Tue, 19/10/2021, 15:12 UTC', '14 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Munich'),
(81, 'Haze', 'Tue, 19/10/2021, 15:13 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(82, 'Haze', 'Tue, 19/10/2021, 15:18 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(83, 'Haze', 'Tue, 19/10/2021, 15:15 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(84, 'Haze', 'Tue, 19/10/2021, 15:15 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(85, 'Haze', 'Tue, 19/10/2021, 15:18 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(86, 'Haze', 'Tue, 19/10/2021, 15:18 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(87, 'Haze', 'Tue, 19/10/2021, 15:21 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(88, 'Haze', 'Tue, 19/10/2021, 15:21 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(89, 'Haze', 'Tue, 19/10/2021, 15:26 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(90, 'Haze', 'Tue, 19/10/2021, 15:23 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(91, 'Haze', 'Tue, 19/10/2021, 15:26 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(92, 'Haze', 'Tue, 19/10/2021, 15:26 UTC', '29 C', 'http://openweathermap.org/img/wn/50n@2x.png', 'Mumbai'),
(93, 'Clouds', 'Tue, 19/10/2021, 15:28 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(94, 'Clouds', 'Tue, 19/10/2021, 15:25 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(95, 'Clouds', 'Tue, 19/10/2021, 15:29 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(96, 'Clouds', 'Tue, 19/10/2021, 15:28 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(97, 'Clouds', 'Tue, 19/10/2021, 15:29 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(98, 'Rain', 'Tue, 19/10/2021, 15:35 UTC', '16 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shanghai'),
(99, 'Rain', 'Tue, 19/10/2021, 15:37 UTC', '16 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shanghai'),
(100, 'Rain', 'Tue, 19/10/2021, 15:37 UTC', '16 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shanghai'),
(101, 'Rain', 'Tue, 19/10/2021, 15:37 UTC', '16 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Shanghai'),
(102, 'Clouds', 'Tue, 19/10/2021, 15:38 UTC', '15 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Istanbul'),
(103, 'Clouds', 'Tue, 19/10/2021, 15:47 UTC', '13 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Tokyo'),
(104, 'Rain', 'Tue, 19/10/2021, 15:43 UTC', '13 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Tokyo'),
(105, 'Clouds', 'Tue, 19/10/2021, 15:43 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(106, 'Clouds', 'Tue, 19/10/2021, 15:46 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(107, 'Clouds', 'Tue, 19/10/2021, 15:48 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(108, 'Clouds', 'Tue, 19/10/2021, 15:47 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(109, 'Clouds', 'Tue, 19/10/2021, 15:48 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(110, 'Clouds', 'Tue, 19/10/2021, 15:48 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(111, 'Clouds', 'Tue, 19/10/2021, 15:48 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(112, 'Clouds', 'Tue, 19/10/2021, 15:48 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(113, 'Clouds', 'Tue, 19/10/2021, 15:53 UTC', '11 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Sydney'),
(114, 'Clouds', 'Tue, 19/10/2021, 15:53 UTC', '3 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'Oslo'),
(115, 'Rain', 'Tue, 19/10/2021, 15:53 UTC', '3 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Moscow'),
(116, 'Clouds', 'Tue, 19/10/2021, 15:55 UTC', '18 C', 'http://openweathermap.org/img/wn/04d@2x.png', 'London'),
(117, 'Rain', 'Tue, 19/10/2021, 15:53 UTC', '3 C', 'http://openweathermap.org/img/wn/10n@2x.png', 'Moscow'),
(118, 'Clouds', 'Tue, 19/10/2021, 15:51 UTC', '2 C', 'http://openweathermap.org/img/wn/04n@2x.png', 'Saint Petersburg'),
(119, 'Clear', 'Tue, 19/10/2021, 15:54 UTC', '15 C', 'http://openweathermap.org/img/wn/01d@2x.png', 'New York');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `weatherHistory`
--
ALTER TABLE `weatherHistory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `weatherHistory`
--
ALTER TABLE `weatherHistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
