# Tutorial: Deploying a basic Scully app on Jekyo

Demo app [here](https://scully-demo.jekyo.app/)

### Prerequisites

Make sure you have [NodeJS](https://nodejs.org/en/download/), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [git](https://github.com/git-guides/install-git) installed.

If it's your first time using **Jekyo**, you can **install** it by running the following command in your terminal:

`npm install -g jekyo`

### Sign in to Jekyo

You can sign in to Jekyo by running `jekyo user:signin`

```
➜  ~ jekyo user:signin 
Your email?: **************
Your password?: **********
You have successfully signed in!
```
If you don't have a Jekyo account, you can create one in the terminal by running `jekyo user:signup`. 

## 1. Create a basic Scully app

You can start your Scully project by using `jekyo create`

Using the **arrows** on your keyboard, select **scully** and press **enter**.  
```
? Select template
  None Creates only the application
  expressjs A basic app skeleton using [Express](https://expressjs.com/)     
  nuxt-js A boilerplate SSR application using [Nuxt.js](https://nuxtjs.org/) 
❯ scully A basic starter app using [Scully](https://scully.io/)
```
When prompted, enter the desired name for your Scully app. 

`Application name?: scully-tutorial`

This will create a basic Scully app in the current directory by cloning this [Scully starter app](https://github.com/jekyo/scully-getting-started) repository.

```
Cloning source code... OK
Application created!
```

### Deploy the Scully app on Jekyo

To deploy the app, first navigate to the newly created directory:

`cd scully-tutorial`

Now you can deploy this app to Jekyo by running: 

`jekyo deploy`

After a while, you should see something like this:

```
➜  Fetching source code ... OK
➜  Building application, this might take a while ... OK
➜  Publishing application, this might take a while  ... OK
➜  Deploying application ... OK        
➜  Waiting for application to start ... OK
➜  Visit your app on: https://scully-tutorial.jekyo.app ... OK
```

You can now browse to your Scully app on https://scully-tutorial.jekyo.app (replace 'scully-tutorial' with your app name)

## 2. Deploying an existing Scully app

Navigate to your local Scully app directory

`cd my-scully-app`

Initialize a git repository if you haven't already done so by running `git init`. 

### Edit package.json

In your **package.json** file, edit the **start** line under **scripts** to look like this: 

```
"start": "ng serve --host $HOST --port $PORT --disable-host-check",
```
This specifies necessary host and port variables for Jekyo and disables Angular's host-check.

[Commit](https://github.com/git-guides/git-commit) the new change:

```
git add package.json
git commit -m "modified start line in package.json"
```

### Create an empty Jekyo app:

`jekyo create` 

Select 'none' using the **arrows** on your keyboard and press **enter**. This will create an app using your current directory. 

```
? Select template (Use arrow keys)
❯ None Creates an application from your current directory
```

Name your app: 

`Application name?: my-scully-app`

Run `jekyo link` to link your local app to the remote Jekyo app. Select 'my-scully-app' using the **arrows** on your keyboard and press **enter**.

```
? Select application (Use arrow keys)
❯ my-scully-app
```
### Now you can deploy this app to Jekyo by running: 

`jekyo deploy`

After a while, you should see something like this:

```
➜  Fetching source code ... OK
➜  Building application, this might take a while ... OK
➜  Publishing application, this might take a while  ... OK
➜  Deploying application ... OK        
➜  Waiting for application to start ... OK
➜  Visit your app on: https://my-scully-app.jekyo.app ... OK
```

You can now browse to your Scully app on https://my-scully-app.jekyo.app (replace 'my-scully-app' with your app name)

## Pushing local changes to Jekyo 

Add the newly modified file(s) to the git index by using [git add](https://www.atlassian.com/git/tutorials/saving-changes)

`git add filename`

Create a [git commit](https://github.com/git-guides/git-commit)

`git commit -m "your commit message"`

Now, simply deploy your app again:

`jekyo deploy`

You will see your changes on your live app after a short while. 





