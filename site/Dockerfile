# We use the official image as a parent image.
FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the working directory.
WORKDIR /home/node/app

# Copy the file(s) from your host to your current location.
COPY package*.json ./

# Change the user to node. This will apply to both the runtime user and the following commands.
USER node

# Install the dependencies on the target image
RUN npm install

# Copy the files from the current directory
COPY --chown=node:node . .

# Build the angular site
RUN ./node_modules/.bin/ng build --output-path ./dist

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "node", "server.js" ]
