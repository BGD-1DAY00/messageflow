# Use an official Node runtime as the parent image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install --frozen-lockfile

# Copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Build the app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Serve the app
CMD ["yarn", "serve", "--host", "0.0.0.0", "--no-open"]