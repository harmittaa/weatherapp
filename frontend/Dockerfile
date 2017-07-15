FROM node:latest
# create the directory to hold the app
RUN mkdir -p /usr/src/weatherapp/frontend
WORKDIR /usr/src/weatherapp/frontend

# install the npm dependencies
COPY package.json /usr/src/weatherapp/frontend
RUN npm install

# copy weatherapp source code
COPY . /usr/src/weatherapp/frontend

# expose the frontend port
EXPOSE 8000

CMD [ "npm", "start" ]