-- create user with name bookstore
CREATE USER 'apmdev'@'localhost' IDENTIFIED BY 'apmdev';

-- provide all the permission
GRANT ALL PRIVILEGES ON * . * TO 'apmdev'@'localhost';

-- create password bookstore
ALTER USER 'apmdev'@'localhost' IDENTIFIED WITH mysql_native_password BY 'apmdev';