-- create database book-store
DROP SCHEMA IF EXISTS `apm-dev`;
CREATE SCHEMA `apm-dev`;

-- select the database
USE `apm-dev` ;

-- create category table tbl_category
CREATE TABLE IF NOT EXISTS `apm-dev`.`apm_products` (
  `productId` BIGINT(20) DEFAULT NULL ,
  `productName` VARCHAR(255) DEFAULT NULL,
  `productCode` VARCHAR(255) DEFAULT NULL,
  `releaseDate` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `price` DECIMAL(6,2) DEFAULT NULL,
  `starRating`DECIMAL(2,1) DEFAULT NULL,
  `imageUrl` VARCHAR(255) DEFAULT NULL
  );



-- insert sample data to product 
INSERT INTO apm_products 
(
	productId, 
	productName, 
    productCode, 
    releaseDate, 
    description, 
    price,
    starRating, 
    imageUrl
)
VALUES 
(
	1, 
    'Leaf Rake', 
    'GDN-0011',
    'March 19, 2019',
    'Leaf rake with 48-inch wooden handle.',
    19.95,
    3.2,
    'assets/images/leaf_rake.png'
);

INSERT INTO apm_products 
(
	productId, 
	productName, 
    productCode, 
    releaseDate, 
    description, 
    price,
    starRating, 
    imageUrl
)
VALUES 
(
	5, 
    'Hammer', 
    'TBX-0048',
    'May 21, 2019',
    'Curved claw steel hammer',
    8.9,
    4.8,
    'assets/images/hammer.png'
);
INSERT INTO apm_products 
(
	productId, 
	productName, 
    productCode, 
    releaseDate, 
    description, 
    price,
    starRating, 
    imageUrl
)
VALUES 
(
	8, 
    'Saw', 
    'GDN-0022',
    'May 15, 2019',
    '15-inch steel blade hand saw',
    11.55,
    3.7,
    'assets/images/saw.png'
);
INSERT INTO apm_products 
(
	productId, 
	productName, 
    productCode, 
    releaseDate, 
    description, 
    price,
    starRating, 
    imageUrl
)
VALUES 
(
	10, 
    'Video Game Controller', 
    'GMG-0042',
    'October 15, 2018',
    'Standard two-button video game controller',
    35.95,
    4.6,
    'assets/images/xbox-controller.png'
);
INSERT INTO apm_products 
(
	productId, 
	productName, 
    productCode, 
    releaseDate, 
    description, 
    price,
    starRating, 
    imageUrl
)
VALUES 
(
	2, 
    'Garden Cart', 
    'GDN-0023',
    'March 18, 2019',
    '15 gallon capacity rolling garden cart',
    32.99,
    4.2,
    'assets/images/garden_cart.png'
);
