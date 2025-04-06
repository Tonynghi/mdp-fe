# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Getting Started

Welcome to the front-end repository of the Multidisciplinary Project - Facial Recognition and Employee Management System.

This project uses React, Typescript as its programming language, and accomodated by Vite.
The packages inside this project are managed by Yarn.

If you haven't had Yarn on your computer yet, please refer to this [link](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to download it before going to the next step.

# Installation

If you are familiar with NPM as a package manager for React project, then it is easy to understand Yarn, which is also a package manager.

First, you will need to install all of the dependencies needed to run this project, please open your terminal, change the directory into this project folder, and then type:

`yarn`

This should install all the packages listed in package.json file for you. I have already added some neccessary packages

In the development, if you need any other package, you can install it by using:

`yarn add package-name`

or

`yarn add -D package-name`

for installing devDependencies.

After that, you can start your app using:

`yarn dev`

A local app will be hosted at port 3000 of localhost as its default port.

Other command from Yarn can be found [here](https://classic.yarnpkg.com/lang/en/docs/cli/).

# TypeScript

In this project, I use TypeScript as the main programming language. TypeScript works almost the same, but it offers a stricter range of rules compared to JavaScript, especially the type as its name suggested.

For example:
In JS, you can append a string with a number and things will work just fine, but in TS, it will raise an error, since the addition between 2 different types are fobidden.

So does it make everything harder? The answer is no, since its strict nature will require your code to make more sense and prevent the unexpected errors from happening.

In conclusion, it's just JavaScript but stricter.

# ESlint, Prettier and Husky Precommit

This project is also supported by ESlint, Prettier and Husky Precommit.

Please download the ESlint and Prettier extensions from VSCode before coming to the next section.

Basically, these tools will set some rules that make your code cleaner and prettier, and your code will undergo a process, called linting process, before it can be commited to make sure that your code always follow the rules, this is run by Husky Precommit.

The extensions from VSCode will help you identify the lint errors without having to run the lint command.

# TanStack File-based Routing

You can read the full document [here](https://tanstack.com/router/latest/docs/framework/react/overview).

If you have already worked with the NextJS, maybe you have been familiar with the file-based routing concept. Basically this means our application will have its routes defined based on the structure of the files in our repository, in contrast to the Code-based Routing, which defines the routes of the website based on logic from your code.

In short, the way you arrange the files in the folder will result in how the routes of your website are defined.

Now for an example, please take a look at the src/features folder. I have made the index.tsx file the base of every route, meaning that at the link http://localhost:3000, you will see the content of it.

Now if I want to create a route at http://localhost:3000/feature1, I will create a folder named `~feature1`, please don't forget the `~` sign, since without it, the route tree won't recognize your file as part of it.

Inside it, we can create another file named `~index.tsx`, now the content of this file will be displayed on http://localhost:3000/feature1.

So how about if you want to have some URL parameters, for example http://localhost:3000/feature1/id, where id is a variable, you can create a file named `~$id.tsx` under the folder `~feature1`. Now everytime you go to the link http://localhost:3000/feature1/a or http://localhost:3000/feature1/b, the structure of the website is the same, but based on their different IDs, you can do different things like make an API query to a specific content based on the id.

Finally, if you can't update the route tree even though you have updated your file structure, please make sure that your app is running using `yarn dev`.
