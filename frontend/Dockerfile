FROM node:16-alpine
WORKDIR /react
ENV PATH /react/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
CMD ["npm", "run", "build"]