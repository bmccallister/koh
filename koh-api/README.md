To get the API Running, Run the following:

npm install
npm start


Additionally, mocha will run the individual unit tests on the application.

use "mocha" in the directory to run the unit tests
npm install -g mocha
npm test 


The folder structures is as follows:
	/app.js - Application file to run
	/node_modules - Installed packages
	/package.json - Package data
	/libs/ - Folder for housing libraries
	/routes/index.js - List of routes
	/routes/users.js - Users end point route
	/test/test-routes.js - Sample file to run tests against api
	/data/models/users.js - Users schema
