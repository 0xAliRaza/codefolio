<h1 align="center">Codefolio</h1>

<p align="center">
  <a href="https://github.com/0xAliRaza/codefolio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/0xaliraza/codefolio?sanitize=true" alt="License"></a>
  <a href="https://github.com/0xAliRaza/codefolio/actions/workflows/ci.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/0xaliraza/codefolio/CI" alt="Build Status"></a>
  <a href="https://github.com/0xAliRaza/codefolio/actions/workflows/cd.yml"><img src="https://github.com/0xAliRaza/codefolio/actions/workflows/cd.yml/badge.svg" alt="Build Status"></a>
  
</p>

<p align="center">
	<a href="https://0xali.com/codefolio">Live Demo</a> |
	<a href="#deployment">Deployment</a> |
	<a href="#about">About</a> |
	<a href="#features">Features</a> |
	<a href="#contribution">Contribution</a>
</p>

<p align="center">A deployment ready web app to showcase your coding portfolio.</p>

![Preview image](https://i.imgur.com/t0foCYQ.png)

## About

Codefolio is a Jamstack portfolio web application for programmers. It is built using [Nuxt.js](https://nuxtjs.org/) and leverages [@nuxt/content](https://content.nuxtjs.org/) module to use user data placed in `/content` directory and generate production ready static assets.

## Features

The entire code is written keeping modules and reusability in mind.

The primary feature of this app is it supporting static deployment. Coding portfolios doesn't require that many changes so a static site is a better choice than a normal SPA or a Full-Stack app.

### User Interface

Codefolio's user interface is designed while keeping user friendliness in mind. It is completely responsive and uses mobile-first approach.

The design is based on the [7-1 Sass pattern](https://sass-guidelin.es/#the-7-1-pattern) and leverages partially loaded [Bootstrap 5](https://getbootstrap.com/docs/5.0) for layout and utilities.

The **assets/aprite/svg** directory contains individual svg icon files. You can use these icons (or place your own svg icons in this directory) to reference icon name in `<icon>` vue component.

### Content

Codefolio supports custom user data. Apart from the personal details, users can also customize other cool thins such as external links and the resume button URL in the top navbar.

## Content Guide

Static site generators take raw user data (usually in markdown or JSON format) to generate production ready HTML, so you'll be needing this guide as a reference while adding your content to Codefolio.

Here's how the structure of content folder looks like.
```
content
|	navbar.json
|	skills.json
|	user.json
|
└───projects
		project1.json
		project2.json
		project3.json
		/* so on... */
```
Let's see what each file or folder is for.

### **navbar.json**

This file is used for optional data related to top navbar.

| Property | Type | Description |
| --- | --- | --- |
| **resumeUrl** | `string` | Resume file URL for navbar resume button. |
| **externalLinks** | `array` | An array containing objects to generate external links in the top navbar. Each external link object needs to have `text` and `url` string properties to function properly.

### **skills.json**

This file is used for user skills.

| Property | Type | Description |
| --- | --- | --- |
| **skills** | `array` | An array containing all the skills (strings) to generate skills page. |

### **user.json**

This file is used for user details required for the home page.

| Property | Type | Description |
| --- | --- | --- |
| **fullname** | `string` | User name. |
| **about** | `string` | A little bit about the user. |
| **image** | `string` | User image URL, preferably a `500x500` cropped image. |
| **title** | `string` | User position or role. |

### **contact.json**
This file is used to generate contact page.

| Property | Type | Description |
| --- | --- | --- |
| **formAction** | `string` | Custom form action for the contact form. Check [formspree.io](https://formspree.io). |
| **socialIcons** | `array` | An array containing objects to generate social icons in the contact page. Each object needs to have `name` and `url` properties(strings). The `name` property should have a matching svg file in **/assets/sprite/svg/** directory. Most of the social icons are already there but feel free to add your custom svg icons.

### **projects**
This folder contains all the projects as individual files in **json** format. Each file in this folder will represent a different project.

Following table contains the format of each file in the projects folder.

| Property | Type | Description |
| --- | --- | --- |
| **id** | `integer` | A unique identifier for the ordering. |
| **title** | `string` | Project name. |
| **description** | `string` | Details about the project. |
| **image** | `string` | Project image URL. |
| **links** | `object` | An object that contains external links of the project. It can has optional `liveDemo`, `videoDemo` and `sourceCode` properties for URLs. |
| **technologies** | `array` | An array containing all the technologies (strings) used in the project. |

Note: Create new files to add more projects and name them as project name. 

See existing dummy files in the content folder for reference.

## Deployment
After customizing the content according to your needs, you need to deploy the app to production.

### Manual deployment

Let's see how to generate build files.

Start by cloning the repository on your local machine using git (or download it manually):

```git clone https://github.com/0xaliraza/codefolio```

Install the dependencies

```npm install```

Generate build files

```npm run generate```

At this point you'll have a `./build` folder containing all the production ready files for deployment. You can deploy these files to some hosting server or CDN.

If you want to see the app locally run

```npm run dev```

### CI/CD
You need prior github/coding experience to deploy this using github actions or some other CI/CD platform. 

This is a template repository so you can just click the "Use this template" button at the top right to clone this repository. Customize content files according to your needs and head to actions tab to add required workflows.
You can reuse existing [ci.yml](https://github.com/0xAliRaza/codefolio/blob/main/.github/workflows/ci.yml) and [cd.yml](https://github.com/0xAliRaza/codefolio/blob/main/.github/workflows/cd.yml) files.

See [github actions](https://docs.github.com/en/actions) to learn more.

## Contribution
Feel free to create a pull-request or an issue if you need anything changed or fixed. Or you can just directly contact me using below links.

## Find Me Online

Feel free to contact me for any kind of help or information. Let's get connected! :)

- [Website](https://0xali.com)

- [Github](https://github.com/0xaliraza)

- [Twitter](https://twitter.com/0xaliraza)

- [Medium](https://0xali.medium.com)

- [Linkedin](https://www.linkedin.com/in/ali-raza-061130202/)

## License

See the [LICENSE](https://github.com/0xAliRaza/codefolio/blob/master/LICENSE) file for license rights and limitations (MIT).
