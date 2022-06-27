blog-website-backend-nodejs-REST-API

This project is a blog website &amp; it's backend is a REST API developed using nodejs. This is one of my personal projects. This repo holds the backend code of the project.
Features:
bloggers can create their profiles (token-based authentication)
bloggers can edit their profile
bloggers can write blogs. They can set the category of their blog (i.e. travel, medical, tech etc)
registered bloggers can comment on their own or others blog
registered bloggers can also react on others blog. They can react like, love, sad, haha, informative to blogs
unregistered public users can read blogs but can't comment or react n blogs
Blogs of a particular category can be viewed
Tech used:
Runtime environment

 Node.js
API for movies & their metadata

 OMDB API
Database

 MongoDB
Dependencies

 bcrypt: ^5.0.1,
 cors: ^2.8.5,
 dotenv: ^8.2.0,
 express: ^4.17.1,
 http-errors: ^1.8.0,
 joi: ^17.4.0,
 jsonwebtoken: ^8.5.1,
 mongoose: ^5.12.2
How to install & run:
Using Git (recommended)
Navigate & open CLI into the directory where you want to put this project & Clone this project (will be cloned inside myProject folder) using this command.
git clone repositorylink
Using manual download ZIP
Download repository
Extract the zip file, navigate into it & copy the folder to your desired directory
Install npm dependencies after cloning or downloading
npm install
Setting up environments
There is a file named .env.example on the root directory of the project
Create a new file by copying & pasting the file on the root directory & rename it to just .env
The .env file is already ignored, so your credentials inside it won't be committed
Change the values of the file. Make changes of comment to the .env.example file while adding new constants to the .env file.
Run the project
npm start
You can be sure that the server is running by checking this output in the command window

server running at port 3000...
mongodb successfully connected...
mongodb connected...
Press CTRL + C to stop the server.

API endpoints:
Indication
 Authentication required
 Authentication not required
User related

 Edit user profile: PUT localhost:3000/todo/id
 Get blogger's info: GET localhost:3000/todo/bloggerProfile/:bloggerId
Category related
 Create a new category: POST localhost:3000/category
 Get list of all categories: GET localhost:3000/category
 Get list of all categorized blog counts of user: GET localhost:3000/category/categorizedBlogs/:bloggerId
Blog related
 Create a new blog: POST localhost:3000/blog
 Get list of all blogs with pagination of certain category of a user: GET localhost:3000/blog/:bloggerId?/:categoryId?
 Get details of a blog: GET localhost:3000/blog/:blogId
 Get list of all blogs of a selected category: GET localhost:3000/todos
 React to a blog: PUT localhost:3000/todo/id
 Comment to a blog: POST localhost:3000/todos/
 Delete a comment: DELETE localhost:3000/todo/id
