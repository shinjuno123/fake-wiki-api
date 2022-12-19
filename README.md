# 📖 Fake Wiki REST API

## 📖 Technical Stack
- Node.js
- Express.js
- RESTful API


## 📖 Overview

You can create and update and delete and read information using this Restful API.

## 📖 Preview

### :one: GET /articles
![wiki articles get](https://user-images.githubusercontent.com/72008909/208438541-0d001099-f0a0-4a42-8b57-6bca1b9da970.gif)

You can get whole data in the DB.

### :two: POST /articles
![wiki articles post](https://user-images.githubusercontent.com/72008909/208438630-6aaf1846-065e-4599-834f-16d141403699.gif)

You can create a new data and save it to DB.
Sending data has to be urlencoded.
```js
// Data Structure
{
  "title" : "",
  "content" : ""
}
```

### :three: DELETE /articles

![wiki articles delete](https://user-images.githubusercontent.com/72008909/208438756-6d034f78-1ed9-4d29-81ca-11d6b2c4e380.gif)

You can delete all data in DB

### :four: GET /articles/:articleTitle

![wiki articles findone get](https://user-images.githubusercontent.com/72008909/208438868-febd7a69-59f3-41a4-a10a-401cadc37ade.gif)


You can get a row of data that the title matches with :articleTitle

### :five: PUT /articles/:articleTitle

![wiki articles findone put](https://user-images.githubusercontent.com/72008909/208438911-6fe13ed4-7298-47f5-aa20-1ad8f0aa218d.gif)


You can select a row of data that matches with :articleTitle and update the whole columns.

### :six: PATCH /articles/:articleTitle

![wiki articles findone patch](https://user-images.githubusercontent.com/72008909/208438937-3081b012-d196-436d-b4f5-e0d9ee620a0d.gif)

You can select a row of data that matches with :articleTitle and update only its content.

### :seven: DELETE /articles/:articleTitle

![wiki articles findone delete](https://user-images.githubusercontent.com/72008909/208438988-0c8913d0-a038-4b3e-a284-b70bd956d19c.gif)

You can delete a row of data that matches with :articleTitle.

## 📖 How to start
```
node app.js
// Test it in postman environment or in any other similar apps.
```


