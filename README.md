  # "PROTOTYPE API" FOR A RETAIL INDUSTRY WITH JWT AUTHENTICATION
  ## STRUCTURE MVC




    Install Node and NPM
    Run npm install from within this fodler
    Run node server.js to start the application and have it run on localhost:3000

    In the db/connection.js you can change the connection parameters to a mongo instance of your likings.
    The package.json defines the application's dependencies, name, description.
    
    For DataBase Schema Model navigate to folder- /model
    For Routes navigate to folder- /routes
    For Controller navigate to folder - /controller
    
    In the root directory there are four Folder contains several logics . 
      * apimodelSchema/apimodelSchema.js conatains joiSchema validation logic (package version-"@hapi/joi": "^15.1.0")
      * constants/messages.js file has default user response messages
      * middleware/ folder consists validation middlewares
      * services/ folder contains diffrent controller related logics that pass into diffrent controller functions 
    
    
    
