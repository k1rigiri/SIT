lab_2: Routing
Windows:
	cmd: node app.js
	cmd: curl -d "username=example&password=example&website=example.com" -X POST http://localhost:3000/create
Browser:
	http://localhost:3000/list
