# 11ty Project  

## Overview  
This is a static site built using [11ty](https://www.11ty.dev/), a flexible and simple static site generator. The project is designed to deliver a fast and optimized website with serverless capabilities for specific backend tasks like sending emails.

## Live Demo  
Explore the live version of the project here: [11ty Project Live Link](https://design10.vercel.app/)

## Folder Structure  
For a detailed view of the folder structure and project organization, refer to this document:  
[Folder Structure Document](https://docs.google.com/document/d/1l9vgwOTbM9ylvNtlhHS6c4tprNFLc1myEq5QX0-BUqs/edit?tab=t.0)

## Features  
- **Static Site Generation:** Powered by 11ty, ensuring quick load times and SEO optimization.  
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.  
- **Serverless Email API:** A backend functionality implemented using Vercel's serverless API to send emails via form submission.  

## Serverless Functionality  
The project utilizes Vercel's serverless infrastructure for its backend API located in the api/ folder. This allows the form submission to send emails seamlessly in the deployed environment.  

### Important Notes:  
- **Local Environment:** The email-sending feature will not work in a local environment because it depends on Vercel's serverless functions.  
- **Deployment Requirements:** Ensure the project is deployed on Vercel for full functionality.  

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/HarshitSharma-h8/design10.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the project with npm start
   ```sh
   npm start
   ```
5. Run the CSS watch script using 
   ```sh
   npm run dev
   ```

### Sending an Email using Nodemailer

**What is Nodemailer?**

Nodemailer is a popular Node.js module used to send emails from a Node.js application. It allows you to send emails easily and securely through different transport services like SMTP, Gmail, etc. Nodemailer is often used in applications for functionalities like account verification, password recovery, and notifications.

**Why are we using Nodemailer?**

We use Nodemailer in this context because it provides a simple and efficient way to send emails from our Node.js application. By using this package, we can send emails programmatically, making it ideal for tasks like user registration confirmations, alerts, and automated notifications.

**Steps to Set Up Email with Nodemailer:**

1. **Create a `.env` file**  
   In the root directory of your project, create a `.env` file to securely store sensitive information like email credentials. This file should contain the following variables:

   ```env
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   RECEIVER_EMAIL=receiver_email@example.com

These variables will store your email account information and the receiver's email address. You can access them in your application using the `dotenv` package, ensuring that sensitive data is not hard-coded into your application.

### Create a password for your user email
To generate an app-specific password for Gmail:

1. Go to your [Google Account](https://myaccount.google.com/).
2. If you haven’t already activated 2-Step Verification, enable it.
3. Search for "App Passwords" in the Google Account settings.
4. Select "Generate New App Password," choose the app (e.g., Mail), and generate a password.
5. Add this newly generated password to your `.env` file under `EMAIL_PASS`.

**Note:**

- The `from` email address in your Nodemailer configuration will always be the same as the authentication email `EMAIL_USER` . This is how Gmail security works, ensuring that emails are sent from the same account used to authenticate the request.
  
- For the `RECEIVER_EMAIL`, keep it as the email address where you want to receive customer queries, ideally the same as the `EMAIL_USER` for simplicity and consistency.

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Markdown-it](https://github.com/markdown-it/markdown-it) - A fast and powerful Markdown parser done right.
* [npm](https://www.npmjs.com) - For managing dependencies and packages.
* [Node.js](https://nodejs.org/en/) - The JavaScript runtime environment used for building the application.
