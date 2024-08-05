FROM node:22
WORKDIR /usr/src/app
COPY . .
RUN yarn install
WORKDIR /usr/src/app/packages/messageflow-web-app
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]