About:
Backend - Spring Boot Framework with Java
Frontend - React Framework with JavaScript
Database - SQL

Repository Links:
Backend - https://github.com/lyrador/login-app-qn-backend
Frontend - https://github.com/lyrador/login-app-qn-frontend

Programs Used:
1. Visual Studio Code
2. IntelliJ IDEA CE
3. MySQL Workbench

Prerequisites:
1. Database: Install SQL Database
2. Backend: Install Java 17
3. Frontend: Install NPM, Node.js etc.
4. You may configure the SQL database properties in src/main/resources/application.properties accordingly to your system set up (datasource url, username, password). I am using the schema "dxcloginappdb" which I have created in MySQL Workbench.

Video:
You may refer to the screen recording for the demo.

Usage Instructions:
1. Create a schema called "dxcloginappdb" using MySQL Workbench.
2. For backend, open up dxc-login-app project on IntelliJ IDEA CE. 
3. Configure the SQL database properties in src/main/resources/application.properties accordingly to your system set up (datasource username, password etc).
4. Create any additional Users in src/main/java/com/javaapp/dxcloginapp/config/DataLoader.java. I have created the sample users as follows:

	FIRST USER			SECOND USER
	username: manager123		username: user123
	password: password		password: password
	name: Alex			name: Bob
	role: Manager			role: User

5. Run DxcLoginAppApplication.
6. For frontend, open up "login-app-qn-frontend" using Visual Studio Code.
7. Open terminal in the current path and type "npm run start", making sure app is in development mode.
8. Open http://localhost:3000 to view it in your browser.