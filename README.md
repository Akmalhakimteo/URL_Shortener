
# URL_Shortener

Hello! This is a repository for the Shortener assignment.




## Installation
How to run the application locally

### Prerequisites:
  - docker engine
  - docker compose
If you do not have them, you may install them [here](https://docs.docker.com/get-docker/).

### Running the application

1. Clone this repository
`git clone https://github.com/Akmalhakimteo/URL_Shortener`

2. Go into the parent directory
`cd URL_Shortener`

3. Run the application! (`Note`: Please ensure that you have ports 8080 & 3306 free)
`docker-compose up -d`




The application should be running for you on http://localhost:8080/

## Tech Stack 

Frontend: **React**

Backend: **Node, Express, with Sequelize**

Database: **MySQL**

Unit Testing: **Jest**

Integration testing: **Cypress**

CI/CD: **CircleCI**

Container service: **Docker**


## API Reference

#### Get to actual URL that you want
This will redirect you to the actual URL.
```http
  GET /:code
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `code` | `string` | **Required**. This is the shortened version of the actual URL |

Example use: `GET http://localhost:8080/hj28dnm3`


#### POST URL that you want to shorten

This will shorten your URL.

```http
  POST /api/url/shorten
```

| Request Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `longURL`      | `string` | **Required**. URL that you want to shorten |

Example use: 
```
POST 
http://localhost:8080/api/url/shorten
Content-Type: application/json

{
    "longURL":"https://developer.ibm.com/tutorials/docker-dev-db/"
}
```

Example response:
```
200 OK

{
  "shortURL": "http://localhost:8080/V1Bf3sG",
  "actualURL": "https://developer.ibm.com/tutorials/docker-dev-db/"
}
```



## Database Schema
A database of named `testdb` is created with the Table `Shorts`.

| Field   | Type    | Null  | Key   |  Default|
|---|---|---|---|---|
| `shortURL`  | `varchar(255)`  | `NO`  | `PRI`  |  `NULL` |
|`actualURL`   |  `varchar(255)`   | `YES`   |   |   `NULL`|
| `createdAt`   | `datetime`   | `NO`  |   |  `NULL` |
| `updatedAt`   | `datetime`  |  `NO` |   | `NULL`  |



# Running Tests

### Prerequisites:
  - node 

If you do not have node, please install it [here](https://nodejs.org/en/download/)!

### Unit tests with Jest

1. Go into the backend directory
`cd backend`

2. Install necessary node packages
`npm install`

3. Run the jest test scripts
`npm run test`


### Integration testing with Cypress

1. Go into the backend directory
`cd frontned`

2. Install necessary node packages
`npm install`

3. Run the cypress test scripts
`npm run cypress:open`

`Note`:Please Ensure that you run `docker-compose up -d` before running the Cypress tests 





## Deployment

CircleCI was used for a CI/CD pipeline. Testing will be done automatically and updates the 
docker image at each new update in the master branch.

The page can be viewed here: https://akmalteo.xyz

Lastly, thank you very much for considering me to be part of Team GovTech.

