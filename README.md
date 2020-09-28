# Foodora - An app for dietary restrictions. 
By Renata D.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4bfb0281-c2af-470b-ac8b-dc99de00dac2/deploy-status)](https://app.netlify.com/sites/foodora/deploys)

## 📌 Summary:
_Foodora_ was created to make the user's life easier since it searches for healthy dishes within restaurants. It has 17 tags users can use to refine their search. Those tags varies from dietary restrictions and/or food allergies. It also allows to search for dishes using a price range or by typing the name. You can choose between the three ways of search. It filters your criteria, returning just the dishes selected according to your choice. It also shows other tags related to that dish.

As a user, you don't need to have an account in order to use _Foodora_. Only restaurants can register an account, so they can add new dishes. From the restaurant's perspective, a restaurant landing page was created so they can see everything at once! 

## 📌🔗 Links:

* Live: [Foodora](https://foodora.netlify.app/)
* Heroku: [API](https://dry-fjord-49769.herokuapp.com/)
* Client: [Github - Foodora](https://github.com/Seraphyne/foodora-client)
* Server: [Github - Foodora](https://github.com/Seraphyne/foodora-server)

## 📌💻 Technologies used:

#### Front-End: 

![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-ReactRouter-informational?style=flat&logo=react&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-CSS-informational?style=flat&logo=css&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Enzyme-informational?style=flat&logo=enzyme&logoColor=white&color=sucess)

#### Back-End: 

![](https://img.shields.io/badge/Code-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Node-informational?style=flat&logo=node&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Express-informational?style=flat&logo=express&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-JWT-informational?style=flat&logo=jwt&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Mocha&Chai-informational?style=flat&logo=mocha&chait&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Nodemon-informational?style=flat&logo=nodemon&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Code-Supertest-informational?style=flat&logo=supertest&chait&logoColor=white&color=sucess)

#### Deployment:

![](https://img.shields.io/badge/Heroku-informational?style=flat&logo=heroku&logoColor=white&color=sucess)
![](https://img.shields.io/badge/Netlify-informational?style=flat&logo=netlify&logoColor=white&color=sucess)

## 📌📄 API Documentation:

| Method | Path               | Purpose                                                        |
| ------ | ------------------ | -------------------------------------------------------------- |
| POST   | /dish              | Adds a new dish according to that Restaurant ID                |
| GET    | /dish/:id          | Get a dish with an specific ID                                 |
| GET    | /dishSearchResults | Get all dishes and display according to search criteria        |
| GET    | /tag               | Get all tags from the database                                 |
| POST   | /register          | Registers a new Restaurant                                     |
| PATCH  | /restaurant        | Updates Restaurant's Name and Phone                            |
| GET    | /restaurant-dish   | Get dishes from Restaurant's specific ID                       |
|        | -list/:id          |                                                                |
| DELETE | /restaurant-dish   | Deletes a dish from a specific Restaurant ID                   |
|        | -list/:id          |                                                                |

## 📌📇 Contact:
LinkedIn: [Contact](https://www.linkedin.com/in/renatafd/?locale=en_US)