### Step 1. prepare environment
+ clone server repository :  
`git clone https://github.com/Seachaos/NodeMock`  
thts will be our test server.

+ create a `App` folder, copy `package.json` and `webpack.conf.js` from `Material` to there.


+ type `yarn install` in `App` folder to install dependencies.


+ create `src` folder in `App` and write :  
  + index.html
  + index.js  

+ run `yarn build` to check everything is ok.

### Step 2. create post

+ open Terminal and go to NodeMock folder

+ run `yarn install` and `yarn start` to start server, you should see the web page on `http://localhost:8888/public/index.html`

+ press `POST` button should see server log receive data and `NodeMock/data/users` have some data there