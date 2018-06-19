FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

# Copy create config file to user bin (treating it like a binary)
COPY ./createConfig.sh /usr/local/bin/createConfig.sh

# add executable permission
RUN chmod +x /usr/local/bin/createConfig.sh

# Call create config to create serviceAccount.json from env variables
CMD ["/usr/local/bin/createConfig.sh"]

# If you are building for development
# RUN npm install
# If you are building your code for production
RUN npm install --only=production

CMD [ "npm", "start" ]
