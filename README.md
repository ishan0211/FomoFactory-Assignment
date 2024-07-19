# FomoFactory-Assignment

# for backend

# Service

This is an Service built in Python 3.10 using the FastAPI framework. the service contains the api's provided in the problem statement and also some extra apis and fuctionalities.

## Components

- **FastAPI**: Utilizes the FastAPI framework for building high-performance APIs with Python 3.10.
- **MongoDB**: Stores events in a MongoDB database for efficient and scalable data storage.
- **Beanie ODM**: Implements Beanie, an async ODM (Object Document Mapper), on top of the Motor driver for MongoDB.
- **pipenv**: Handles Python dependencies and virtual environment management.
- **cronjob**: hadnles the interval for api calling
- **docker**: for connecting to mongodb

## Prerequisites

Before running the Service, make sure you have the following installed:

- Python 3.10 or later
- MongoDB (with connection details available)
- 'uvicorn[standard]'
- beanie
- docker

## Getting Started

* Clone the repository:

 - i have added the .yml file for docker 
 -  use the command docker-compose up -d to up mongo
 - docker-compose down to stop mongo.

```bash
git clone https://github.com/ishan0211/FomoFactory-Assignment.git

cd backend 
cd app
```

* Install `pipenv` if you don't have it:

```bash
pip install pipenv
```

* Create a virtual environment and install the required dependencies:

```bash
pipenv install --python 3.10
```

* Activate the virtual environment:

```bash
pipenv shell
```

* Configure the environment variables:

```ini
MONGODB_URL=mongodb://root:root@localhost:27017
```

* Run the FastAPI server:

```bash
uvicorn src.server:app --port 8001 --reload
```

The server will start running at `http://localhost:8001`. You can access the interactive API documentation at `http://localhost:8001/docs`.

## Structure

actions - it has all the main code logic 

api/endpoints - it contains all the endpoints

api/schema - it contains all pre-defined model so that tha input format of api's can be genralized

constants - it has contants as enums

models - it has the schema for the model which i have used 


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

# for frontend

## Components

- **Next.js**: this is the framework for building the application.
- **typescript**: for adding script in frontend.
- **redux**: for implementing the data storage.

## Prerequisites

- next.js
- typescript
- redux

## Getting Started

 * Clone the repository:

```bash
git clone https://github.com/ishan0211/FomoFactory-Assignment.git

cd fomofactory

npm i for installing node modules

npm run dev to get started 
```

## Structure

components - it has all components used in the frontend 

store - it has the redux logic.
