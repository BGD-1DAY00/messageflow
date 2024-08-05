# Use an official Node runtime as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json
COPY package.json ./

# Install project dependencies and TypeScript
RUN yarn install && \
    yarn global add typescript

# Copy the rest of your application's code
COPY . .

# Build your app
RUN yarn build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["yarn", "start"]