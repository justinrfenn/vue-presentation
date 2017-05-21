* Install vue-cli to scaffold project
  * `npm install -g vue-cli`
  * `vue init <template-name> <project-name>`

* Let's make a simple message stream that we can post a message to. This will require wiring up socket.io. Let's do that first.
  * As a note, I will be using port 8081 for the client application and 8082 for the server.
  * The focus of this is not the server, but let me briefly explain what it does.
  * `npm install fetch --save`

* Let's set a data property to be a list for the messages
* let's create a computed property to get the list of messages
  * include start up wiring and show pitfall 
  * move on to beforeCreate to wire up socket.io room

What's the difference between computed and method? 
* Computed properties are cache based and will only reevaluate when some it's dependencies change
* methods will always run