/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region_cl` (
  `id_re` int(11) NOT NULL COMMENT 'ID unico',
  `str_re` varchar(60) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Nombre extenso',
  `str_romano` varchar(5) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Número de región',
  `num_provincias` int(11) NOT NULL COMMENT 'total provincias',
  `num_comunas` int(11) NOT NULL COMMENT 'Total de comunas',
  PRIMARY KEY (`id_re`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci COMMENT='Lista de regiones de Chile';
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40000 ALTER TABLE `region_cl` DISABLE KEYS */;
INSERT INTO `region_cl` VALUES 	(1,'ARICA Y PARINACOTA','XV',2,4),
				(2,'TARAPACÁ','I',2,7),
				(3,'ANTOFAGASTA','II',3,9),
				(4,'ATACAMA ','III',3,9),
				(5,'COQUIMBO ','IV',3,15),
				(6,'VALPARAÍSO ','V',8,38),
				(7,'DEL LIBERTADOR GRAL. BERNARDO O\'HIGGINS ','VI',3,33),
				(8,'DEL MAULE','VII',4,30),
				(9,'DEL BIOBÍO ','VIII',4,54),
				(10,'DE LA ARAUCANÍA','IX',2,32),
				(11,'DE LOS RÍOS','XIV',2,12),
				(12,'DE LOS LAGOS','X',4,30),
				(13,'AISÉN DEL GRAL. CARLOS IBAÑEZ DEL CAMPO ','XI',4,10),
				(14,'MAGALLANES Y DE LA ANTÁRTICA CHILENA','XII',4,11),
				(15,'METROPOLITANA DE SANTIAGO','RM',6,52);


DROP TABLE IF EXISTS `provincia_cl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincia_cl` (
  `id_pr` int(11) NOT NULL COMMENT 'ID provincia',
  `id_re` int(11) NOT NULL COMMENT 'ID region asociada',
  `str_pr` varchar(30) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Nombre descriptivo',
  `num_comunas` int(11) NOT NULL COMMENT 'Numero de comunas',
  PRIMARY KEY (`id_pr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci COMMENT='Lista de comunas por regiones';
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40000 ALTER TABLE `provincia_cl` DISABLE KEYS */;
INSERT INTO `provincia_cl` VALUES 	(1,1,'ARICA',2),
					(2,1,'PARINACOTA',2),
					(3,2,'IQUIQUE',2),
					(4,2,'TAMARUGAL',5),
					(5,3,'ANTOFAGASTA',4),
					(6,3,'EL LOA',3),
					(7,3,'TOCOPILLA',2),
					(8,4,'COPIAPÓ',3),
					(9,4,'CHAÑARAL',2),
					(10,4,'HUASCO',4),
					(11,5,'ELQUI',6),
					(12,5,'CHOAPA',4),
					(13,5,'LIMARÍ',5),
					(14,6,'VALPARAÍSO',7),
					(15,6,'ISLA DE PASCUA',1),
					(16,6,'LOS ANDES',4),
					(17,6,'PETORCA',5),
					(18,6,'QUILLOTA',5),
					(19,6,'SAN ANTONIO',6),
					(20,6,'SAN FELIPE DE ACONCAGUA',6),
					(21,6,'MARGA MARGA',4),
					(22,7,'CACHAPOAL',17),
					(23,7,'CARDENAL CARO',6),
					(24,7,'COLCHAGUA',10),
					(25,8,'TALCA',10),
					(26,8,'CAUQUENES',3),
					(27,8,'CURICÓ',9),
					(28,8,'LINARES',8),
					(29,9,'CONCEPCIÓN',12),
					(30,9,'ARAUCO',7),
					(31,9,'BIOBÍO',14),
					(32,9,'ÑUBLE',21),
					(33,10,'CAUTÍN',21),
					(34,10,'MALLECO',11),
					(35,11,'VALDIVIA',8),
					(36,11,'RANCO',4),
					(37,12,'LLANQUIHUE',9),
					(38,12,'CHILOÉ',10),
					(39,12,'OSORNO',7),
					(40,12,'PALENA',4),
					(41,13,'COIHAIQUE',2),
					(42,13,'AISÉN',3),
					(43,13,'CAPITÁN PRAT',3),
					(44,13,'GENERAL CARRERA',2),
					(45,14,'MAGALLANES',4),
					(46,14,'ANTÁRTICA CHILENA',2),
					(47,14,'TIERRA DEL FUEGO',3),
					(48,14,'ULTIMA ESPERANZA',2),
					(49,15,'SANTIAGO',32),
					(50,15,'CORDILLERA',3),
					(51,15,'CHACABUCO',3),
					(52,15,'MAIPO',4),
					(53,15,'MELIPILLA',5),
					(54,15,'TALAGANTE',5);

DROP TABLE IF EXISTS `comuna_cl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comuna_cl` (
  `id_co` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID unico de la comuna',
  `id_pr` int(11) NOT NULL COMMENT 'ID de la provincia asociada',
  `str_co` varchar(30) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Nombre descriptivo de la comuna',
  PRIMARY KEY (`id_co`,`id_pr`)
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci COMMENT='Lista de comunas por provincias';
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40000 ALTER TABLE `comuna_cl` DISABLE KEYS */;
INSERT INTO `comuna_cl` VALUES 	(1,1,'ARICA'),
				(2,1,'CAMARONES'),
				(3,2,'PUTRE'),
				(4,2,'GENERAL LAGOS'),
				(5,3,'IQUIQUE'),
				(6,3,'ALTO HOSPICIO'),
				(7,4,'POZO ALMONTE'),
				(8,4,'CAMIÑA'),
				(9,4,'COLCHANE'),
				(10,4,'HUARA'),
				(11,4,'PICA'),
				(12,5,'ANTOFAGASTA'),
				(13,5,'MEJILLONES'),
				(14,5,'SIERRA GORDA'),
				(15,5,'TALTAL'),
				(16,6,'CALAMA'),
				(17,6,'OLLAGÜE'),
				(18,6,'SAN PEDRO DE ATACAMA'),
				(19,7,'TOCOPILLA'),
				(20,7,'MARÍA ELENA'),
				(21,8,'COPIAPÓ'),
				(22,8,'CALDERA'),
				(23,8,'TIERRA AMARILLA'),
				(24,9,'CHAÑARAL'),
				(25,9,'DIEGO DE ALMAGRO'),
				(26,10,'VALLENAR'),
				(27,10,'ALTO DEL CARMEN'),
				(28,10,'FREIRINA'),
				(29,10,'HUASCO'),
				(30,11,'LA SERENA'),
				(31,11,'COQUIMBO'),
				(32,11,'ANDACOLLO'),
				(33,11,'LA HIGUERA'),
				(34,11,'PAIGUANO'),
				(35,11,'VICUÑA'),
				(36,12,'ILLAPEL'),
				(37,12,'CANELA'),
				(38,12,'LOS VILOS'),
				(39,12,'SALAMANCA'),
				(40,13,'OVALLE'),
				(41,13,'COMBARBALÁ'),
				(42,13,'MONTE PATRIA'),
				(43,13,'PUNITAQUI'),
				(44,13,'RÍO HURTADO'),
				(45,14,'VALPARAÍSO'),
				(46,14,'CASABLANCA'),
				(47,14,'CONCÓN'),
				(48,14,'JUAN FERNÁNDEZ'),
				(49,14,'PUCHUNCAVÍ'),
				(50,14,'QUINTERO'),
				(51,14,'VIÑA DEL MAR'),
				(52,15,'ISLA DE PASCUA'),
				(53,16,'LOS ANDES'),
				(54,16,'CALLE LARGA'),
				(55,16,'RINCONADA'),
				(56,16,'SAN ESTEBAN'),
				(57,17,'LA LIGUA'),
				(58,17,'CABILDO'),
				(59,17,'PAPUDO'),
				(60,17,'PETORCA'),
				(61,17,'ZAPALLAR'),
				(62,18,'QUILLOTA'),
				(63,18,'CALERA'),
				(64,18,'HIJUELAS'),
				(65,18,'LA CRUZ'),
				(66,18,'NOGALES'),
				(67,19,'SAN ANTONIO'),
				(68,19,'ALGARROBO'),
				(69,19,'CARTAGENA'),
				(70,19,'EL QUISCO'),
				(71,19,'EL TABO'),
				(72,19,'SANTO DOMINGO'),
				(73,20,'SAN FELIPE'),
				(74,20,'CATEMU'),
				(75,20,'LLAILLAY'),
				(76,20,'PANQUEHUE'),
				(77,20,'PUTAENDO'),
				(78,20,'SANTA MARÍA'),
				(79,21,'LIMACHE'),
				(80,21,'QUILPUÉ'),
				(81,21,'VILLA ALEMANA'),
				(82,21,'OLMUÉ'),
				(83,22,'RANCAGUA'),
				(84,22,'CODEGUA'),
				(85,22,'COINCO'),
				(86,22,'COLTAUCO'),
				(87,22,'DOÑIHUE'),
				(88,22,'GRANEROS'),
				(89,22,'LAS CABRAS'),
				(90,22,'MACHALÍ'),
				(91,22,'MALLOA'),
				(92,22,'MOSTAZAL'),
				(93,22,'OLIVAR'),
				(94,22,'PEUMO'),
				(95,22,'PICHIDEGUA'),
				(96,22,'QUINTA DE TILCOCO'),
				(97,22,'RENGO'),
				(98,22,'REQUÍNOA'),
				(99,22,'SAN VICENTE'),
				(100,23,'PICHILEMU'),
				(101,23,'LA ESTRELLA'),
				(102,23,'LITUECHE'),
				(103,23,'MARCHIHUE'),
				(104,23,'NAVIDAD'),
				(105,23,'PAREDONES'),
				(106,24,'SAN FERNANDO'),
				(107,24,'CHÉPICA'),
				(108,24,'CHIMBARONGO'),
				(109,24,'LOLOL'),
				(110,24,'NANCAGUA'),
				(111,24,'PALMILLA'),
				(112,24,'PERALILLO'),
				(113,24,'PLACILLA'),
				(114,24,'PUMANQUE'),
				(115,24,'SANTA CRUZ'),
				(116,25,'TALCA'),
				(117,25,'CONSTITUCIÓN'),
				(118,25,'CUREPTO'),
				(119,25,'EMPEDRADO'),
				(120,25,'MAULE'),
				(121,25,'PELARCO'),
				(122,25,'PENCAHUE'),
				(123,25,'RÍO CLARO'),
				(124,25,'SAN CLEMENTE'),
				(125,25,'SAN RAFAEL'),
				(126,26,'CAUQUENES'),
				(127,26,'CHANCO'),
				(128,26,'PELLUHUE'),
				(129,27,'CURICÓ'),
				(130,27,'HUALAÑÉ'),
				(131,27,'LICANTÉN'),
				(132,27,'MOLINA'),
				(133,27,'RAUCO'),
				(134,27,'ROMERAL'),
				(135,27,'SAGRADA FAMILIA'),
				(136,27,'TENO'),
				(137,27,'VICHUQUÉN'),
				(138,28,'LINARES'),
				(139,28,'COLBÚN'),
				(140,28,'LONGAVÍ'),
				(141,28,'PARRAL'),
				(142,28,'RETIRO'),
				(143,28,'SAN JAVIER'),
				(144,28,'VILLA ALEGRE'),
				(145,28,'YERBAS BUENAS'),
				(146,29,'CONCEPCIÓN'),
				(147,29,'CORONEL'),
				(148,29,'CHIGUAYANTE'),
				(149,29,'FLORIDA'),
				(150,29,'HUALQUI'),
				(151,29,'LOTA'),
				(152,29,'PENCO'),
				(153,29,'SAN PEDRO DE LA PAZ'),
				(154,29,'SANTA JUANA'),
				(155,29,'TALCAHUANO'),
				(156,29,'TOMÉ'),
				(157,29,'HUALPÉN'),
				(158,30,'LEBU'),
				(159,30,'ARAUCO'),
				(160,30,'CAÑETE'),
				(161,30,'CONTULMO'),
				(162,30,'CURANILAHUE'),
				(163,30,'LOS ALAMOS'),
				(164,30,'TIRÚA'),
				(165,31,'LOS ANGELES'),
				(166,31,'ANTUCO'),
				(167,31,'CABRERO'),
				(168,31,'LAJA'),
				(169,31,'MULCHÉN'),
				(170,31,'NACIMIENTO'),
				(171,31,'NEGRETE'),
				(172,31,'QUILACO'),
				(173,31,'QUILLECO'),
				(174,31,'SAN ROSENDO'),
				(175,31,'SANTA BÁRBARA'),
				(176,31,'TUCAPEL'),
				(177,31,'YUMBEL'),
				(178,31,'ALTO BIOBÍO'),
				(179,32,'CHILLÁN'),
				(180,32,'BULNES'),
				(181,32,'COBQUECURA'),
				(182,32,'COELEMU'),
				(183,32,'COIHUECO'),
				(184,32,'CHILLÁN VIEJO'),
				(185,32,'EL CARMEN'),
				(186,32,'NINHUE'),
				(187,32,'ÑIQUÉN'),
				(188,32,'PEMUCO'),
				(189,32,'PINTO'),
				(190,32,'PORTEZUELO'),
				(191,32,'QUILLÓN'),
				(192,32,'QUIRIHUE'),
				(193,32,'RÁNQUIL'),
				(194,32,'SAN CARLOS'),
				(195,32,'SAN FABIÁN'),
				(196,32,'SAN IGNACIO'),
				(197,32,'SAN NICOLÁS'),
				(198,32,'TREGUACO'),
				(199,32,'YUNGAY'),
				(200,33,'TEMUCO'),
				(201,33,'CARAHUE'),
				(202,33,'CUNCO'),
				(203,33,'CURARREHUE'),
				(204,33,'FREIRE'),
				(205,33,'GALVARINO'),
				(206,33,'GORBEA'),
				(207,33,'LAUTARO'),
				(208,33,'LONCOCHE'),
				(209,33,'MELIPEUCO'),
				(210,33,'NUEVA IMPERIAL'),
				(211,33,'PADRE LAS CASAS'),
				(212,33,'PERQUENCO'),
				(213,33,'PITRUFQUÉN'),
				(214,33,'PUCÓN'),
				(215,33,'SAAVEDRA'),
				(216,33,'TEODORO SCHMIDT'),
				(217,33,'TOLTÉN'),
				(218,33,'VILCÚN'),
				(219,33,'VILLARRICA'),
				(220,33,'CHOLCHOL'),
				(221,34,'ANGOL'),
				(222,34,'COLLIPULLI'),
				(223,34,'CURACAUTÍN'),
				(224,34,'ERCILLA'),
				(225,34,'LONQUIMAY'),
				(226,34,'LOS SAUCES'),
				(227,34,'LUMACO'),
				(228,34,'PURÉN'),
				(229,34,'RENAICO'),
				(230,34,'TRAIGUÉN'),
				(231,34,'VICTORIA'),
				(232,35,'VALDIVIA'),
				(233,35,'CORRAL'),
				(234,35,'LANCO'),
				(235,35,'LOS LAGOS'),
				(236,35,'MÁFIL'),
				(237,35,'MARIQUINA'),
				(238,35,'PAILLACO'),
				(239,35,'PANGUIPULLI'),
				(240,36,'LA UNIÓN'),
				(241,36,'FUTRONO'),
				(242,36,'LAGO RANCO'),
				(243,36,'RÍO BUENO'),
				(244,37,'PUERTO MONTT'),
				(245,37,'CALBUCO'),
				(246,37,'COCHAMÓ'),
				(247,37,'FRESIA'),
				(248,37,'FRUTILLAR'),
				(249,37,'LOS MUERMOS'),
				(250,37,'LLANQUIHUE'),
				(251,37,'MAULLÍN'),
				(252,37,'PUERTO VARAS'),
				(253,38,'CASTRO'),
				(254,38,'ANCUD'),
				(255,38,'CHONCHI'),
				(256,38,'CURACO DE VÉLEZ'),
				(257,38,'DALCAHUE'),
				(258,38,'PUQUELDÓN'),
				(259,38,'QUEILÉN'),
				(260,38,'QUELLÓN'),
				(261,38,'QUEMCHI'),
				(262,38,'QUINCHAO'),
				(263,39,'OSORNO'),
				(264,39,'PUERTO OCTAY'),
				(265,39,'PURRANQUE'),
				(266,39,'PUYEHUE'),
				(267,39,'RÍO NEGRO'),
				(268,39,'SAN JUAN DE LA COSTA'),
				(269,39,'SAN PABLO'),
				(270,40,'CHAITÉN'),
				(271,40,'FUTALEUFÚ'),
				(272,40,'HUALAIHUÉ'),
				(273,40,'PALENA'),
				(274,41,'COIHAIQUE'),
				(275,41,'LAGO VERDE'),
				(276,42,'AISÉN'),
				(277,42,'CISNES'),
				(278,42,'GUAITECAS'),
				(279,43,'COCHRANE'),
				(280,43,'O\'HIGGINS'),
				(281,43,'TORTEL'),
				(282,44,'CHILE CHICO'),
				(283,44,'RÍO IBÁÑEZ'),
				(284,45,'PUNTA ARENAS'),
				(285,45,'LAGUNA BLANCA'),
				(286,45,'RÍO VERDE'),
				(287,45,'SAN GREGORIO'),
				(288,46,'CABO DE HORNOS'),
				(289,46,'ANTÁRTICA'),
				(290,47,'PORVENIR'),
				(291,47,'PRIMAVERA'),
				(292,47,'TIMAUKEL'),
				(293,48,'NATALES'),
				(294,48,'TORRES DEL PAINE'),
				(295,49,'SANTIAGO'),
				(296,49,'CERRILLOS'),
				(297,49,'CERRO NAVIA'),
				(298,49,'CONCHALÍ'),
				(299,49,'EL BOSQUE'),
				(300,49,'ESTACIÓN CENTRAL'),
				(301,49,'HUECHURABA'),
				(302,49,'INDEPENDENCIA'),
				(303,49,'LA CISTERNA'),
				(304,49,'LA FLORIDA'),
				(305,49,'LA GRANJA'),
				(306,49,'LA PINTANA'),
				(307,49,'LA REINA'),
				(308,49,'LAS CONDES'),
				(309,49,'LO BARNECHEA'),
				(310,49,'LO ESPEJO'),
				(311,49,'LO PRADO'),
				(312,49,'MACUL'),
				(313,49,'MAIPÚ'),
				(314,49,'ÑUÑOA'),
				(315,49,'PEDRO AGUIRRE CERDA'),
				(316,49,'PEÑALOLÉN'),
				(317,49,'PROVIDENCIA'),
				(318,49,'PUDAHUEL'),
				(319,49,'QUILICURA'),
				(320,49,'QUINTA NORMAL'),
				(321,49,'RECOLETA'),
				(322,49,'RENCA'),
				(323,49,'SAN JOAQUÍN'),
				(324,49,'SAN MIGUEL'),
				(325,49,'SAN RAMÓN'),
				(326,49,'VITACURA'),
				(327,50,'PUENTE ALTO'),
				(328,50,'PIRQUE'),
				(329,50,'SAN JOSÉ DE MAIPO'),
				(330,51,'COLINA'),
				(331,51,'LAMPA'),
				(332,51,'TILTIL'),
				(333,52,'SAN BERNARDO'),
				(334,52,'BUIN'),
				(335,52,'CALERA DE TANGO'),
				(336,52,'PAINE'),
				(337,53,'MELIPILLA'),
				(338,53,'ALHUÉ'),
				(339,53,'CURACAVÍ'),
				(340,53,'MARÍA PINTO'),
				(341,53,'SAN PEDRO'),
				(342,54,'TALAGANTE'),
				(343,54,'EL MONTE'),
				(344,54,'ISLA DE MAIPO'),
				(345,54,'PADRE HURTADO'),
				(346,54,'PEÑAFLOR');

CREATE TABLE Categorias(
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre_categoria VARCHAR(64)
);

CREATE TABLE Materiales (
    id_material INT PRIMARY KEY AUTO_INCREMENT,
    precio_venta INT,
    precio_compra INT,
    inventario INT,
    nombre_material VARCHAR(64),
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_Categoria)
);

insert into Materiales (id_material, precio_venta, precio_compra, inventario, nombre_material,id_categoria) values
(1, 3990,2500,5000,'Cemento Melon especial 25kg',1),
(2, 3990,2490,4500,'Cemento Polpaico 25kg',1),
(3, 3500,2250,2000,'Estuco Interior 25kg',1),
(4, 2590,2000,2300,'Estuco Exterior 25kg',1),
(5, 19580,15000,1200,'Terciado Ranurado 9 mm 122x244 cm',2),
(6, 22590,18600,1150,'Terciado estructural pino 18mm 1,22x2,44.',2),
(7, 11990,9550,1500,'Tablero OSB 9 mm 122x244 cm',2),
(8, 2990,2400,3000,'Pino Dimensionado Verde 2x3 cm 3,2 m',2),
(9, 12580,2000,5000,'Aglomerado Estructural Cierre Perimetral 8 mm 122x244 cm',2),
(10, 1390,980,5250,'Pino Certificado Seco Cepillado 1x2 cm 3,2 m',2),
(11, 6090,4780,1400,'Yeso Cartón 10 mm 120x240 cm',3),
(12, 7990,6100,1400,'Yeso Cartón 15 mm 120x240 cm',3),
(13, 15690,12500,2200,'Plancha Fibrocemento Base Cerámico 6 mm 120x240 cm',3),
(14, 13490,11700,1570,'Yeso Cartón Borde Rebajado 12.5 mm 120x240 cm',3),
(15, 2590,2100,5000,'Cinta Malla 48mm x 45 m',3),
(16, 3490,3000,800,'Bloque vidrio incoloro 19x19x8cm New Wave',4),
(17, 1620,1180,4600,'Bloque liso gris 14x19x39 cm',4),
(18, 1790,1250,4200,'Bloque liso gris 19x19x39 cm',4),
(19, 310,130, 6000,'28.5x14x4.5 cm Ladrillo Fiscal Especial',4),
(20, 10790,8600,4400,'23x6.5x2.5 cm Refractario Fachada Lisa 12 unidades',4),
(21, 3390,3000,2500,'BLOQ VID SEAWAVE 19X19X8CM',4),
(22, 1595,1170,3000,'Solerilla canto redondo 50x20x6 cm',4),
(23, 36990,29670,3200,'Melamina Blanco 15 mm 183x250 cm',2),
(24, 47890,42500,3000,'Melamina Blanco 18 mm 183x250 cm',2),
(25, 35990,27000,2700,'Terciado Moldaje Pino Natural 15 mm 122x244 cm',2),
(26, 55690,46900,1700,'Melamina Caramel 15 mm 183x250 cm',2),
(27, 12122,7800,1500,'Cadena de Eslabón Corto 8 mm Metro Lineal',5),
(28, 5590,4300,2800,'1000 gr, Alambre galvanizado corriente',5),
(29, 3910,2200,4200,'Fierro 0 10 mm A-63 unidad 6 metros',5),
(30, 21990,16950,2000,'2.60 x 5m. Malla Acma C- 92 Con economía de borde',5),
(31, 2520,1790,3830,'Fierro 8 MM A-63 unidad, 6 Metros',5),
(32, 15990,11810,2100,'Metalcon Acero 170x8 mm 4.5 m',5),
(33, 2290,1750,2500,'1 kg Alambre negro recocido',5),
(34, 12290,9000,3100,'100 m Alambre galvanizado',5),
(35, 14410,10000,1000,'0.35 x 851 x 3660 mm, Plancha zinc acanalada prepintada negra',6),
(36, 18290,13690,700,'Lana de vidrio R122 libre 50mm 0,6x10m 1 rollo',6),
(37, 46450,38000,2300,'2.40x15 m Aislante térmico y absorbente acústico Especial',6),
(38, 16380,12680,2200,'Espuma 3 mm con goma eva y aluminio. Aislante resistente, 1 x 10 m',6),
(39, 7190,4500,1500,'0.35 x 895 x 2000 mm. Plancha 5V gris Recubrimiento AZM150',6);

insert into Categorias(id_Categoria, nombre_categoria) values
(1, 'Materiales de obra gruesa'),
(2, 'Maderas y tableros'),
(3, 'Tabiqueria'),
(4, 'Ladrillos y bloques'),
(5, 'Fierro'),
(6, 'Techos y aislantes');

create table Usuarios (
rut varchar(12) not null,
str_nombre  varchar(60) COLLATE latin1_spanish_ci NOT NULL,
mail  varchar(60) NOT NULL,
clave  varchar(60) COLLATE latin1_spanish_ci NOT NULL,
rol varchar(30) COLLATE latin1_spanish_ci not null,
str_dir  varchar(60) COLLATE latin1_spanish_ci NOT NULL,
id_co int(11) not null,
primary key (rut),
foreign key (id_co) references comuna_cl(id_co)
);

insert into Usuarios values
('14571589-K', 'Agustín Díaz', 'cliente@gmail.com', 'aux', 'cliente', 'Avenida Portales', 327),
('20824959-2', 'Bernardo Larson', 'blarson1101@gmail.com', 'aux', 'trabajador', 'Almirante Montt', 51),
('17456938-5', 'Arturo Reyes', 'ceo1@gmail.com', 'aux', 'jefe', 'Collao',	146);


create table `Ventas`(
id_venta int not null auto_increment,
rut varchar(12) not null, 
fecha date not null,
hora time not null,
total int not null default 0,
primary key (id_venta)
);

create table `Boletas`(
id int not null auto_increment, -- no utilizado--
id_material int not null, 
rut varchar(12) not null,
cantidad int not null,
precio int,
fecha date not null,
hora datetime not null,
primary key (id),
foreign key (id_material) references Materiales(id_material),
foreign key (rut) references Usuarios(rut)
);


create table `Carritos`(
id_ca int not null auto_increment,
rut varchar(12) not null,
id_material int not null,
cantidad int not null,
precio int not null,
primary key (id_ca),
foreign key (rut) references Usuarios(rut),
foreign key (id_material) references Materiales(id_material)
);