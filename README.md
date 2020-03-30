yes my read me is a website todo list



make profile image upload 

get a user object by the product

make feedback form *****

incorporate user name into product page display,

give users ability to search by name of artist 

figure out image upload on mobile

make products in cart go back to products page after a certain amount of time. 

**** set up sight mailer for reicipts on purchases. 

give users the ability to rate the art of others.

make a rating page.

make a top rated page. 

move the checkout to the top right corner of the cart page. 













 














_photo from https://stories.wf.com/pony-express-riders-young-fast-fearless/_


In this tutorial, we are going to be setting up a site mailer. 

I think where a lot of devs go wrong with site mailers is trying to make one for an application instead of making a mailing service that thier application can use.

that's why in this tutorial we are going to set up a site mailer that you can be used by any application.

This means that the contact form for your portfolio can also be used as the feedback form for your projects.  

Once you have one of these set up you can do amazing things with your website, like send payment receipts to a users email. Inform a blogger of new followers. 

__What does this tutorial show how to do?__

We are going to set up a contact form that sends what users enter into a form to a specific email using express, node mailer, react as a basic front end. 

__Why use react?__  

You can do the major functionality of this app without a front end framework. React is only going to be the form handling portion but it does provide the ability to scale if you want to do something more complex with a site mailer. 


__prerequisite software__

1.[node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) this is a must for every javascript related thing that happens outside a browser. 

2.[create-react-app](https://www.npmjs.com/package/create-react-app) you can only do the back end functionality without this but because this is going to help you to do more robust things with this tutorial, we are using it. 

3.[vscode](https://code.visualstudio.com/download) you can use any text editor you want but I will be using vscode, this means it will be easiest to follow if you are too.

4.[git cli](https://git-scm.com/downloads) for keeping versions and changes.

5.[heroku account](https://signup.heroku.com/) this is where we will keep our emailing service on a live server in production. 




__Prerequisite knowledge__

1. basic javascript.

2. curiosity about express and node.js

3. how to [install npm packages on the command line.](https://docs.npmjs.com/downloading-and-installing-packages-locally) 

(optional) bash commandline

__getting started__

go to the directory where you keep your projects and begin by making a new folder, called mail-service

```bash
mkdir mail-service
```

cd into the directory

```bash
cd mail-service
```

make a new npm project by initializing a package.json

```bash
npm init -y
```

the -y means we want to create this without asking questions. 

Open the project.

```bash
code .
```

In the package.json we have the basic setup. Let's install the npm packages.


```bash
npm i express morgan dotenv cors nodemailer
```

[express](https://www.npmjs.com/package/express) is a minimal framework for setting up server-side applications. 

[morgan](https://www.npmjs.com/package/morgan) is an http request logger, this will allow us to see the status of our request without making a function

[dotenv](https://www.npmjs.com/package/dotenv) is a package to save environment wide variables keeping sensitive information off of github. we will use it to hide emails and passwords.

[cors](https://www.npmjs.com/package/cors) this will allow us to set up mailing actions based on site name or any other means of configuring.

[node-mailer](https://www.npmjs.com/package/nodemailer) this is all the helper methods to make our service send emails. 


make a server.js file to house our server

```bash
touch server.js
```

at the top add the back-end imports. 

```javascript
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const port = 4444
```

at the bottom add the app.listen to give our back end a definite port. 

```javascript
app.listen(port, () => {
  console.log(`app is live on ${port}`)
})
```

in the middle of those, make our app use morgan so that we get a better idea of how our app is behaving. 

```javascript
app.use(morgan('dev'))
```

start the app on the commandline with this command. 

```bash
nodemon server
```

if everything went right and you have all the packages installed, you should have a file and terminal looking like this. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/x8mhji3ne2d4os9tiy9d.png)

now we want to add git ability and record our mile stones. for brevity I won't do this in writing.

the outline of this app goes like this. 

make one working route to send an email, make a frontend to use that route with a form, copy and paste most of the route to send an email to our selves, to send an email to the one the user-provides.

Let's start by making a folder.

```bash
mkdir routes
```

Right click the routes folder we will make a sendToMe.js

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vidtefvwkw1lwqo1cak7.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/6ouevql7m5eyqh89b108.png)

add express and nodemailer to this file like so. 

```javascript
const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')
```

add a console.log to that file so that we can make sure we are reaching the file from the server.js

```javascript
console.log("from sendToMe")
```
_sendToMe.js_

export the Router() at the bottom of the file. 

```javascript
module.exports = sendToMeRouter

```

in the server.js have the app use that route file like this.


```javascript
app.use('/sendtome', require('./routes/sendToMe'))
```
turn the server back on and see if the console.log shows up. 

```bash
nodemon server
```

now we can build out the mailers functionality. 

to do this we need to make an email address that this will use. 

with Gmail you have to use the __turn on less secure apps to do this.__

you can use an email you already have but please be careful not to publish your password.

in your google account home, in the top left corner, go to security. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/u9gwl9z5h00dznyfk1o4.png)

scroll down until you reach less secure apps.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2fdn1skxwvntb3w3drf8.png)

the alternative to this is figuring out how to enable your site to use Oauth, that will just be another thing. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/bw7njjs2tet4x70iitak.png)

you should receive an email shortly from google saying that you enabled less secure apps. 

now we need to add the email and password to the .env file and app wide variable. 

```
THE_EMAIL="super secret dont show anyone!!!"

THE_PASSWORD="super secret dont show anyone!!!"
```
_.env_

we are set up to make the transport object and the mailing functions in the sendToMe.js file. 

```javascript
const transport = {
  //all of the configuration for making a site send an email.
  
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD
  }
};
```

now make the transporter function 

```javascript
const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });
```

let's add another function to make this work on a post request.

```javascript
sendToMeRouter.post('/', (req,res, next) => {
    //make mailable object
    const mail = {
      from: process.env.THE_FEEDBACK,
      to: 'tallan.taven@gmail.com',
      subject: req.body.subject,
      text: `
      from:
      ${req.body.name} 
      
      contact: ${req.body.email}

      message: 

      ${req.body.text}`
    }
// error handling goes here. 
  });
```

finish with some error handling. 

```javascript
transporter.sendMail(mail, (err,data) => {
      if(err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
          status: 'success'
        })
      }
    })

//still inside the .post request the next line should be });
```

you can test this in [post man](https://www.postman.com/downloads/) but remember that you have to have text, email, name, and subject defined in order to get this to work. 

ok now we get to my favorite part, the react app.

while still inside the project directory on the command line create-react-app

```bash
create-react-app client
```

go to the package.json and connect the express app to the react app with a proxy like so. 

```json
//dont forget to add the comma after the curly bracket because it's json.
},
  "proxy": "http://localhost:4444/"
```

you will need to run the back and the front end at the same time. 

_on the back end_

```bash
nodemon server
```

_on in the client folder._

```bash
cd client && npm start
```

this should take you to the ordinary boiler-plate react. 

let's add axios to the client folder. 

_in client directory on the command-line_

```bash
npm i axios
```

remove all the code between the div tags. 

your app function should look like this. 

```javascript
function App() {
  return (
    <div className="App">
      
    </div>
  );
}
```

now make a form with 2 inputs and a textarea 

```javascript
<form>
        <input type="text" placeholder="" name="" value={} onChange={} />
        <input type="text" placeholder="" name="" value={} onChange={} />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
```

__dont panic! Our app will run again when we fill in the value and onChange attributes__

we will have the useState hooks keep the string for us. 

we need to import axios

at the top. 

```javascript
import React, {useState} from 'react';
import axios from 'axios'
```

inside the app function. 

```javascript
 const [inputs, setInputs] = useState({email: '', name: '', description: ''})

```

now to make the handleChange and the handleSubmit's 

```javascript
const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    // post request goes here. 
  }
```

add the place holders, name, value and onChange attributes so that our app isn't crashed anymore, add the onSubmit action to the form and a button.  I've also added br tags. 

```javascript
<h1>feed back form. </h1>
      <form>
        <input type="text" placeholder="email" name="email" value={inputs.email} onChange={handleChange} />
        <br />
        <input type="text" placeholder="name" name="name" value={inputs.name} onChange={handleChange} />
        <br />
        <textarea name="description" placeholder="tell us about your experience" value={inputs.description} onChange={handleChange} cols="30" rows="10"></textarea>
        <button>submit</button>
      </form>
```












