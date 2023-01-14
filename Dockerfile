FROM node:16
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
EXPOSE 3001
CMD ["npm","start"]