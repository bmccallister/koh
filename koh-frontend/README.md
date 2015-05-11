koh
============


## Development

To start developing in the project run:

npm install
bower install
gulp serve

Then head to `http://localhost:3000` in your browser.

## Tests

Tests require xvdm to be installed for ubuntu or other headless browser.  This will use selenium as well

	# TODO: Add mac configuratio
	# Note: this only works with headless firefox currently, not chrome

	### Ubuntu
		sudo apt-get install default-jre 	- Ensure you have java installed
		sudo apt-get install xvfb		- Install xvfb
		Xvfb :1 -screen 5 1024x768x8   		- This is a sample way to start xvf, note, your display in the next line corresponds
		
		(Separate console)
		export DISPLAY=1:5
		webdriver-manager start

	### Mac
		#TODO
		

	### All
	In a separate console window:

	# This should run against the headless browser with no errors
	gulp test
	

	Folder Structure:
	/gulpfile.js						- Configuration and start point
	/package.jso						- Packages and requirements
	/bower-components 					- installed libaries and packages
	/node-modules 						- Installed packages
	/test
		/test/conf.js					- Configuration for the headless browser as it sends it to selenium
		/test/findUser.js				- A sample test that displays how to connect/test the user interface
		/runtests.js					- Configured to 
	/src
	    /src/app
		/src/app
			/src/app/controllers			- Folder with all controllers
				/src/app/todo 			- Folder for the todo controller
				/src/app/todo/todo.html		- Template Html
				/src/app/todo/TodoCtrl.js	- Todo Controller Code
	
				/src/app/users 			- Folder for the users controller
				/src/app/users/users.html	- Template Html
				/src/app/users/UsersCtrl.js	- Uses Controller Code

		/src/app/libs
			/src/libs/helpers.js			- Commonly used helper methods

		/src/app/styles
			/src/styles/bootstrap			- Folder for bootstrap angular files
			/src/styles/_*				- Generated scss files

		/src/app/app.js					- Application Start file and routes
		/src/app/app.scss				- Main css file
		/src/app/index.html				- SPA Index file
		/kohcore.js					- Bundled/Browserified file
