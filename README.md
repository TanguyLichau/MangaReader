# MangaReader Backend

This is the API which will be used in the upcoming MangaReader Frontend project.  
It is a simple CRUD API that allows the user to interact with a MongoDB Cloud database in order to retrieve information about mangas stored there.  
This API includes a local strategy to login and a JWT strategy to access protected routes.

---

## Requirements

For development, you will need Node.js and a node global package. You will also need to have a MongoDb Cloud database. You can put the credentials in the .env.example file and then rename it without the .example

## Installation

    git clone https://github.com/TanguyLichau/MangaReader-Backend
    cd MangaReader-Backend
    npm install
