# NewsChat
This is an application that allows for creating chat rooms to discuss recent news events.
Users can create a chat room, give it a title, and pick a topic from a drop down list.
Once users join a chat room the application uses web sockets to allow chatting in real time.
Chat messages are stored in the database to ensure that all messages made prior to logging into the chat room are visible.
Additionally, when inside of a chat room, articles relevant to the chosen topic will load in at the bottom of the page
Users which created the chat room are able to delete a chat room.
This application uses MongoDB for the database with mongoose as it's ODM. The application uses Node to drive it with Express as its web framework, and Angular as for its front-end framework. 
