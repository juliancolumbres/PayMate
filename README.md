# PayMate! - Creating Friends with Your Purchases 💳

## Tech Stack 💼
- [x] Frontend: React.js
- [X] Middleware: Express.js, BodyParser
- [X] Authentification: Firebase
- [x] Backend: Node.js, Plaid API, RDS MySQL

## Getting Started 🕹

1. Clone the repo
```cmd
$ git clone https://github.com/juliancolumbres/PayMate
```
2. Install the Dependencies
```cmd
$ cd app
$ npm i
```
3. Configure Plaid API
* Copy env.example into the same folder
* Put in Plaid Keys details in the new `env` file

4. Run the Server
```cmd
$ node server.js
```

5. Use an API tester and test the `/` get request
* If all is well you should receive `200` status code
