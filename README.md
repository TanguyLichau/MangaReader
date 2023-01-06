# MangaReader Backend

This is the API which is used in the current [MangaReader Frontend project](https://github.com/TanguyLichau/MangaReader-Frontend).  
It is a simple CRUD API that allows the user to interact with a MongoDB Cloud database in order to retrieve information about mangas stored there.  
This API includes a local strategy to login and a JWT strategy to access protected routes.

---

## Requirements

For development, you will need Node.js and a node global package. You will also need to have a MongoDb Cloud database. You can put the credentials in the .env.example file and then rename it without the .example

## Installation

If you wish to run this project using Docker, do not forget to add the port tag (-p) and make it match the port 3000 of the container.

---

```
git clone https://github.com/TanguyLichau/MangaReader-Backend.git cd MangaReader-Backend
npm install
```

After installation you can run the project with

```
node index.js
```

You can then access the api at localhost:3000
