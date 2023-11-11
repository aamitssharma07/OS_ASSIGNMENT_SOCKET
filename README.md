# Socket Client/Server Authentication Portal

## Overview

This project implements a socket client/server authentication portal in JavaScript. The server manages client communication and allows authenticated clients to view their profiles and change passwords.

## Files

- **client.js**: Client implementation using Node.js and the 'net' module.
- **server.js**: Server implementation using Node.js and the 'net' module.

## How to Run

1. **Install Node.js:**
   - Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

2. **Run the Server:**
   - Open a terminal and navigate to the directory containing `server.js`.
   - Run the following command to start the server:
     ```
     node server.js
     ```
   - The server will start listening on port 12345.

3. **Run the Client:**
   - Open another terminal and navigate to the directory containing `client.js`.
   - Run the following command to start the client:
     ```
     node client.js
     ```
   - The client will connect to the server.

4. **Authenticate:**
   - [username- Amit pswd- greatpassword], [username- Cillian pswd-canttellu]. Use any of these two credentials.
   - Enter your username and password when prompted by the client.
   - If authentication is successful, you will see "Authentication successful!".

6. **Interact with the Server:**
   - Choose an action by entering one of the following commands:
     - `view_profile`: View your profile information.
     - `change_password:newPassword`: Change your password (replace `newPassword` with your desired password).
     - `exit`: Disconnect from the server and exit the client.

## Notes

- **Authentication:**
  - Use valid usernames and passwords from the predefined users in the server file.

- **Profile Data:**
  - Profile information is predefined for each user in the server file.

- **Exit:**
  - Type `exit` at any time to disconnect from the server and exit the client.

- **Invalid Commands:**
  - If you enter an invalid command, the server will respond with "Invalid command".


