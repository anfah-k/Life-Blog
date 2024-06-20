
# Life Blogs

Welcome to the Life Blog project! This is a web application built with Node.js, Express.js, and EJS that allows users to create, view, edit, and delete blog posts. The application does not persist data between sessions as it doesn't use a database in this version.


## Features

- Post Creation: Users can create new blog posts.
- Post Viewing: Users can view all their blog posts on the home page.
- Post Update/Delete: Users can edit and delete their blog posts.
- Responsive Design: The application is styled to be responsive and user-friendly on both desktop and mobile devices.


## Installation

Clone the repository:

```bash
  git clone https://github.com/yourusername/life-blog.git
  cd life-blog
```
Install the dependencies:

```bash
  npm install

```
Start the application:

```bash
  node index.js
```
Open your browser and navigate to http://localhost:3000 to see the application in action.


    
## Project Structure


```bash
   life-blog-project

   public
   │  └── style
   │      └── main.css
   views
   │  ├── Partials
   │  │    ├── footer.ejs
   │  │    └── header.ejs
   │  ├── create.ejs
   │  ├── edit.ejs
   │  ├── index.ejs
   │  ├── post.ejs
   │  └── submit.ejs  
   │
   index.js
   package.json
   package-lock.json
```
