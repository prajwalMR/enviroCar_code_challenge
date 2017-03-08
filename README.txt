This web page is built using NodeJS for the backend and JS,HTML,Jquery for the frontend.

To run this this app we need :
1) The MongoDB database;
2) NodeJS server;
3) Internet connection ( as the frontend uses Jquery CDN );

To set up the NodeJS server :
1) NodeJS has to be installed;
2) Once NodeJS has been installed , required node modules for the app need to be installed. To do this :
	a)open the terminal and navigate to the folder where the package.json is located and type in " npm install ". 
	  This will install all the required NodeJS modules. 
	b)This will create a folder called "node_modules" , which are required to be in the same folder as the server code("server.js").

Once the server has been setup , Open a terminal and navigate to the folder where the server code , named as " server.js " is present ,
and type in "node server". This will start the server.

Then , in the browser we can open the application by typing in "http://localhost:8000/index.html"

The UI has lowerLimit and upperLimit fields , Which are to be filled in and press "Execute" Button.
The results of the query will be displayed under the "Query results"

**NOTE**
1) This application has been written and tested on a windows machine. The procedure to setup the NodeJS server might   
   slightly vary with the OS.
2) The name of the mongoDB database has to be changed in the server code on line number 21 , in 
   accordance with the local name of the database dump folder.
********	           