# build environment
FROM node:14.17-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
ARG REACT_APP_OPENWEATHERMAP_API_KEY
ENV REACT_APP_OPENWEATHERMAP_API_KEY $REACT_APP_OPENWEATHERMAP_API_KEY
RUN rm -rf node_modules && yarn install
RUN yarn global add react-scripts@3.4.1 --silent
COPY . ./
RUN yarn run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
