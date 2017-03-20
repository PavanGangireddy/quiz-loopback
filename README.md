#quiz-loopback

### Features

##### Basic:
  - Loopback + mongodb
  - Configuration files:
 	- Application-wide configuration files - server/config.json
  	- Data source configuration files - server/datasources.json
  	- Application-level configuration of Models - server/model-config.json
  	- Middleware configuration files - server/middleware.json
  	- Configuration files for LoopBack components - server/component-config.json
  (For More info: https://loopback.io/doc/en/lb3/Environment-specific-configuration.html#ensure-stack-traces-are-not-returned)
  - Additional boot scripts - server/boot
  - DataModels - common/models
  - Express server
  - Database seeding - using "loopback-boot" API

***

### Requirements
  - `node 6.6` and higher!
    - [*you can use a version manager like `n`*](https://github.com/tj/n)

***

### Usage

##### Getting Started:

For Windows OS:


1) To begin, fork this repo and then clone those contents down!

    Ideally, fork this boilerplate, then clone.
    ```
    $ git clone <repo-url>
    ```

    Install required dependencies.
    (*Did you make sure you have the right version of Node?*)
    ```
    npm i
    ```
    **Note:** You could use `yarn` for faster install time

2) Mongodb setup locally
	- Download & install mongodb .msi file from "https://www.mongodb.com/download-center?jmp=nav#community"
	- Go to C:\ and Create a new folder named 'data'
	- Go to C:\Program Files\MongoDB\Server\3.4\bin and run mongod Application 
	  (Now the mongodb server started on 127.0.0.1:27017)
 
3) Seed the sample Customer Data model
    ```
    npm start
    ```

    Run development server 
    ```
    npm run dev
    ```
    You're now ready to get working! *(enter command or visit via browser directly)*
    ```
    open http://localhost:3000/
    ```
    Browse your REST API at http://localhost:3000/explorer
    
    ***

### Database Seeding

- To reset all data models to original mode, Run
    ```
    npm start
    ``` 

### Changing SampleData for an existing data model

- For every model created, the sampledata resides in reset-script/create-{modelname}.js

	- Ex: For Customer model, it is in "reset-script/create-customers.js"

### How to add Custom SampleData to a newly generated data model 'CoffeeShop'

1) Create a new persistent datamodel and associate it to "mongodb" datasource by running
    ```
    lb model
    ```

2) Modify the boot configuration of CoffeeShop model in 'reset-script/reset-config.json':
      - Update "models" object value by appending newly generated model value in "server/model-config.json"
      - Update "modelDefinitions" object value by appending newly generated model value in "common/models/ 
        coffee-shop.json"

        **Note:** Also add "definition":{"name":"CoffeeShop"} to "modelDefinitions" object

3) Create a file named "reset-script/create-coffeeshops.js" and Add sampledata, Automigrate function accordingly.

4) Update "reset-script/index.js" by requiring create-coffeeshops.js into variable "create-coffeeshops" and
    append object:
            CoffeeShop: async.apply(create-coffeeshops)
    to async parallel process.

5) Run npm start and new collection CoffeeShop is created inside "sapient_quiz_data" database. 
