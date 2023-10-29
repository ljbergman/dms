-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 29, 2023 at 08:51 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dms`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `pid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`pid`, `title`, `content`, `date`, `deleted`) VALUES
(1, 'En Lorem Ipsum Titel X', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna ut tristique lacinia, justo nisi fringilla metus, ac condimentum urna felis eu eros. Sed vel pulvinar justo. Quisque dictum vel odio sit amet hendrerit. Fusce euismod, justo ac condimentum dignissim, ligula metus feugiat felis, sit amet consequat mauris metus eget erat. Maecenas vel tristique erat. Integer fermentum, eros non rhoncus convallis, urna sapien bibendum nulla, id sodales erat ligula a leo. Vivamus a condimentum nunc, id fringilla nunc. Sed auctor in odio in tincidunt. Cras dapibus euismod justo, ac varius arcu auctor a. Sed vel dui vestibulum, sollicitudin mi vel, pharetra ipsum. Sed posuere orci a arcu malesuada, id aliquet dui commodo. Vivamus vel nunc tristique, convallis urna eget, euismod libero. Proin non justo eget augue bibendum laoreet. Suspendisse non efficitur ligula. Sed viverra tincidunt libero, nec euismod urna. X', '2023-10-26 21:48:00', 0),
(2, 'Test title', 'Test content text', '2023-10-29 15:45:55', 0),
(3, 'HTML Test (WYSIWYG Editor)', '<h2>Hello</h2><p><br></p><blockquote>a quote text to <span style=\"color: rgb(0, 138, 0);\">see</span> what a quote looks like <span style=\"color: rgb(230, 0, 0);\">Promising!</span></blockquote><p><br></p><p><a href=\"http://www.gogle.com\" rel=\"noopener noreferrer\" target=\"_blank\">Google Link</a></p>', '2023-10-29 16:18:29', 0),
(4, 'Grocery List Test', '<p><strong style=\"color: rgb(230, 0, 0);\">Make a Great Grocery List in Minutes</strong></p><p><br></p><ul><li>Bakery and Bread.</li><li>Meat and Seafood.</li><li>Pasta and Rice.</li><li>Oils, Sauces, Salad Dressings, and Condiments.</li><li><strong>Cereals and Breakfast Foods!!!!!</strong></li><li>Soups and Canned Goods.</li><li>Frozen Foods.</li><li>Dairy, Cheese, and Eggs.</li><li><a href=\"http://www.google.se\" rel=\"noopener noreferrer\" target=\"_blank\">Link to Google!</a></li></ul><p><br></p><blockquote>The blockquote displays in standards-compliant browsers with the “big quotes before” effect, and in IE with a thick left border and a light grey background.</blockquote>', '2023-10-29 19:59:08', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
