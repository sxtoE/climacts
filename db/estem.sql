-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-08-2018 a las 15:03:14
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `estem`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `temperatura` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `humedad` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `presion` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `uv` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `viento` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `lluvia` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `dioxido` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `monoxido` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `amoniaco` varchar(3) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `time`, `temperatura`, `humedad`, `presion`, `uv`, `viento`, `lluvia`, `dioxido`, `monoxido`, `amoniaco`) VALUES
(517, '2018-08-16 16:27:53', '28', '56', '780', '30', '12', '0', '0', '0', '1'),
(518, '2018-08-16 16:33:02', '44', '45', '4', '2', '1', '0', '124', '532', '2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=519;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
