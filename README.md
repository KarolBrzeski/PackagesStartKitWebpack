# PackagesStartKitWebpack
Startup package for a new project.
Toolkit for automating painful or time-consuming tasks in your development workflow, I used webpack

## ⚙ Setup

### Install Node.js

- Direct download -> [click here](https://nodejs.org/en/)
```
If you have Windows system restart your computer
```
### Install Webpack

- Using `npm`

    ```bash
      npm install --global webpack
    ```
### Install plugins from package.json
  ```bash
      cd project_path
  ```
  ```bash
      npm install
  ```
### Create database in MongoDB and use server's app

- Create new folder `config`
- Create new file `database.js` and add yours properties:
  ```bash
      module.exports = {
    database: `mongodb://username:password@localhost:port/databasename` }
    
###  For example:
  ```bash
      module.exports = {
    database: `mongodb://john:12345@localhost:27017/myDataBase` }
```
