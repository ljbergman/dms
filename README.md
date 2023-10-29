# J-DMS (J Document Management System)

![Version](https://img.shields.io/badge/version-1.0.1-brightgreen)
![License](https://img.shields.io/badge/license-Private-blue)

J-DMS (J Document Management System) is a project built with Next.js (with API routes), React, Mysql and React Quill, with a focus on very basic document management stored in a MySQL Database.

## Installation

Before you begin, ensure you have Node.js and npm installed on your system.

1. Clone the repository:
   git clone https://github.com/ljbergman/dms

2. cd dms

3. npm install

## Development usage

1. Install MySQL. I used MAMP with MySQL Version 5.7.39 on port 8889 during development.
2. Create the dms database on the MySQL Server (for example using PhpMyAdmin) and set your own username and password.
3. Import our posts table (posts.sql) in the dms database or run the following SQL Query:

```plaintext
CREATE TABLE `posts` (
  `pid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `posts`
  ADD PRIMARY KEY (`pid`);

ALTER TABLE `posts`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
```

4. Make sure to set the correct settings for your MySQL Database in your .env.local file, including your username and password from step 2 above.

```plaintext
MYSQL_HOST=localhost   
MYSQL_PORT=xxx
MYSQL_DATABASE=xxx
MYSQL_USER=xxx  
MYSQL_PASSWORD=xxx
```

5. Start the MySQL Server.

6. Go to the dms project folder and run it with: 

npm run dev

7. Default port is 30000, so you should be able to access it with:

http://localhost:3000/

### This project is still under development. It worked well during initial testing, but bugs may still exist. New features will be added in the near future.


