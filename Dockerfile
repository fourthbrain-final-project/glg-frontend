# stage1 as builder
FROM node:18-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# --------
# Steps to run the container locally to ensure it's working correctly
# // install and start the dependencies
# npm install
# npm start
# // build the docker image
# docker build -t react-ui .
# // run the app
# docker run -d --name reactui -p 80:80 react-ui

# --------
# Steps to push the container to container registry
# IMAGE_URI="gcr.io/fouthbrain-capstone-2022/glg-frontend:v1"
# docker build -t react-ui .
# docker tag react-ui $IMAGE_URI
# docker push $IMAGE_URI