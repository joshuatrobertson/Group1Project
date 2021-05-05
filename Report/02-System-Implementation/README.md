[&#8592; Back to Report Landing Page](../README.md)
# System Implementation
## System Design Overview
## Back End (MongoDB) 
## Middle Tier (Express, Node, RESTful API)
## Front End (Angular)
## Docker
### Primer 
Docker is used for running applications in containers making them contain everything needed for running the application: runtimes, system tools, libraries, OS and everything you would otherwise need to install yourself to run the application. It ensures that the runtime environment of your application is constant – a massive advantage that development teams need not worry about setting up work environments and managing dependencies on the client side.

This contrasts more traditional forms of deployment including virtual machines (VMs), which can be infrastructurally expensive, because each VM requires its own underlying OS and a virtual copy of the hardware that the OS needs to run. This quickly adds up to a lot of RAM and CPU cycles. 

<p align="center">
  <img src="images/docker.png" width="800"/>
</p>
<div align="center">
  <em>Figure XX: Docker vs traditional full virtualization for deployment.</em>
</div>

### Implementation
The main idea behind our Docker deployment strategy was to use a docker compose script to spin up two containers that would talk to each other while the application was being served. The following containers were deployed:
1. NodeJS container containing the Angular frontend and ExpressJS server 
2. MongoDB container to persist the data in our application 

#### Container 1: NodeJS Container
The following [`Dockerfile`](../site/../../site/Dockerfile) was used to create an image containing our Angular front end and server using Alpine linux as a parent image that is pulled directly from DockerHub.
The dependences are installed from the [`packages.json`](../../site/package.json) and port 3000 can then be accessed on the host machine to use the application.
```dockerfile
FROM node:10-alpine 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./ 
USER node
RUN npm install
COPY --chown=node:node . .
RUN ./node_modules/.bin/ng build --output-path ./dist
EXPOSE 3000
CMD [ "node", "server.js" ]
```
#### Container 2: MongoDB Container
There was no need to build a custom image for the MongoDB container. We directly used the the official [`mongo:4.1.8-xenial`](https://hub.docker.com/_/mongo) from DockerHub.

#### Container Orchestration
The [`docker-compose.yml`](../../site/docker-compose.yml) script was then used to orchestrate container creation and deployment. 

Every container that is spun up can be thought of as a service. Services can talk to one another over a network based on the ports that have been exposed on each of the containers. The docker daemon creates this network internally and allows communication between containers.

Let us break the process down. 

First, the NodeJS container is built from the [Dockerfile above](#container-1-nodejs-container) and is defined as a `nodejs` service.

```yaml
nodejs:
  build:
    context: .
    dockerfile: Dockerfile
  image: nodejs
  container_name: nodejs
```

Environment variables for this container are stored in the .env file and contain the credentials to login to our `db` service. We ensured that this file was added to our `.gitignore` file since it contained sensitive information of our users login credentials.

```yaml
env_file: .env
environment:
  - MONGO_USERNAME=$MONGO_USERNAME
  - MONGO_PASSWORD=$MONGO_PASSWORD
  - MONGO_HOSTNAME=db
  - MONGO_PORT=$MONGO_PORT
  - MONGO_DB=$MONGO_DB
```

The second container that is spun up is the `db` service, which uses port `27018` internally in the container, and exposes port `27017` on the host machine.

```yaml
  db:
    image: mongo:4.1.8-xenial
    container_name: db
    restart: unless-stopped
    env_file: .env
    environment:
      - MONGO_INITDB_ROOT_USERNAME=$MONGO_USERNAME
      - MONGO_INITDB_ROOT_PASSWORD=$MONGO_PASSWORD
    ports:
      - "27018:27017"
```

The data in our `db` service is persisted as we define a volume called `dbdata` which is shared with the `/data/db` folder in the container.
```yaml
volumes:
  - dbdata:/data/db
```

There was an issue where the `nodejs` service kept restarting when spinning up the containers. This was resolved using the [`wait-for.sh`](../site/../../site/wait-for.sh) script and including the following line in the docker compose script.
```yaml
command: ./wait-for.sh db:27017 -- /home/node/app/node_modules/.bin/nodemon server.js
```

## Additional Components (think User Authentication)

<p align="center">
  <b>Navigation:</b><br>
  <a href="../01-Background/README.md">&#8592; Previous Section: Background and Motivation</a> |
  <a href="#system-implementation">&#8593; Back to the top</a> |
  <a href="../03-UX-Design/README.md">&#8594; Next Section: UX Design</a> 
</p>