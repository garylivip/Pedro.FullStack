# Pedro.FullStack

Full Stack Web Development ReactJS, NodeJS, Express, MySQL

## [YouTube Video](https://www.youtube.com/watch?v=Hl7diL7SFw8&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=1)

### Apr 2, 2021 #mysql #fullstack #nodejs

Hey everyone, this is the first episode of this series where I will show how to create a full stack web app!

## [Code](https://github.com/machadop1407/FullStack-Course/tree/Episode1/Episode2)

## Technologies:

- ReactJS
- NodeJS
- ExpressJS
- MariaDB 10.x [Permitted Open Source License](https://mariadb.com/kb/en/postdownload/mariadb-server-10-11-10/)
  - if met error "mariadb service failed to start" when installing mariadb,
    - Do not close the installing window, and meanwhile open control panel -> view local services
    - find Maria DB and manually start it
    - if failed, change the log on to Local System account
    - Switch back to mariadb installing window, choose retry
    - it works
  - using mariadb
    - create a db: config the db name, user, password 123456 or just leave it null, host id in config.json
    - all the rest of tables can be defined under folder models, it works pretty much like define the CDS file under the specified folder, sequelite will handle the tables creation
- Sequelize

## Social

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

- Website: [machadopedro.com](https://machadopedro.com)
- Twitter: [@pedrotech](https://twitter.com/pedrotech)
- LinkedIn: [machadop1407](https://linkedin.com/in/machadop1407)
- Instagram: [\_pedro.machado](https://instagram.com/_pedro.machado)
- GitHub: [machadop1407](https://github.com/machadop1407)
- Email: [machadop1407@gmail.com](mailto:machadop1407@gmail.com)

## Equipments I Use

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

- 🌟 [Algorithm Book To Pass Coding Interviews](https://amzn.to/2Z2CirS)
- 🌟 [Microphone](https://amzn.to/2MKAm4V)
- 🌟 [Keyboard](https://amzn.to/3tvU6ZR)
- 🌟 [HD Webcam](https://amzn.to/3tMpJPD)
- 🌟 [Room LED Lights](https://amzn.to/3a5mFGp)

## Tags

- ReactJS Tutorial
- ReactJS and MariaDB
- NodeJS Tutorial

## API Tutorial

- [Permitted usebruno bruno 1.x Open Source License](https://www.usebruno.com/downloads)

#fullstack #react #nodejs #mysql

# Learning Notes

## Initialization

- In the folder of server:

  - `npm init`
  - `npm install express cors`
    - CORS can handle the front-end CORS error
  - `npm install mysql2`
    - node-mysql2 3.11.5: The usage of this component is low license risk.
  - `npm install nodemon`
    - add a new script in package.json "start": "nodemon index.js"
    - it works the similar way like CDS watch
  - `npm install sequelize sequelize-cli`

    - For anyone having issues with Sequelize, follow these steps:

      1. Install Sequelize and Sequelize CLI in the server folder:
         ```bash
         npm install sequelize sequelize-cli
         ```
      2. Install Sequelize and Sequelize CLI globally:
         ```bash
         npm install -g sequelize sequelize-cli
         ```
      3. If you encounter any other issues, they may be related to your path settings.

      If it still doesn't work, try the following commands:

      ```bash
      npm uninstall -g sequelize
      npm install -g sequelize
      npm uninstall sequelize
      npm install sequelize
      npx sequelize init
      ```

- `npx create-react-app .`
  - The final `.` installs the React app in the current folder.
  - If installing template dependencies using npm fails, install them separately:
    ```bash
    npm install --no-audit --save @testing-library/jest-dom@^5.14.1
    npm install --no-audit --save @testing-library/react@^13.0.0
    npm install --no-audit --save @testing-library/user-event@^13.2.1 
    npm install --no-audit --save web-vitals@^2.1.0
    ```
  - If it fails again due to version conflicts, remove the version numbers and install the latest versions. Delete the `node_modules` folder and `package-lock.json`. Next, open `package.json` and change:
    ```json
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
    ```
    to an earlier version, e.g.:
    ```json
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
    ```
    Finally, run `npm install`.
  - Do NOT use npx create-react-app, was Published 3 years ago, there are version conflicts
  - npx create-react-app post_mgt --template @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals

# work around at the moment is to use yarn: [2024-12-8 known issue https://github.com/facebook/create-react-app/issues/13715]
```bash
npm install -g yarn
yarn create react-app my-app
```

- npm install axios //Make http requests from node.js
- - if does not work, as a workaround , yarn add axios [react 19 causes all these issues for who depends on it ]

# cors --  request & response from the same server, we should try add our own computer into the white list

# npm install react-router-dom || yarn add react-router-dom

# Ext:  ES7 React/Redux/GraphQL/React-Native snippets e.g. rfce

# npm i formik  || yarn add formik
# yarn add yup || npm install yup
# npm install bcrypt