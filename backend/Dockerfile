FROM node:latest
# create the directory to hold the app
RUN mkdir -p /usr/src/weatherapp/backend
WORKDIR /usr/src/weatherapp/backend

# install the npm dependencies
COPY package.json /usr/src/weatherapp/backend
RUN npm install

# copy weatherapp source code
COPY . /usr/src/weatherapp/backend

# expose the port that the backend uses
EXPOSE 9000

CMD [ "npm", "start" ]
