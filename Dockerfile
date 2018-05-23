FROM node:carbon

LABEL MAINTAINER vicky

#Create a new directory to run our app.
RUN mkdir -p /usr/src/myapp

#Set the new directory as our working directory
WORKDIR /usr/src/myapp

#Copy all the content to the working directory
COPY . /usr/src/myapp

#install node packages to node_modules
RUN npm install

#Our app runs on port 8000. Expose it!
EXPOSE 8000

#Run the application.
CMD ["node","index.js"]