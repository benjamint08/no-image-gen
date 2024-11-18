FROM ubuntu:22.04
RUN apt-get update
RUN apt-get install -y \
    build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev curl \
    npm nodejs
RUN hash -r
RUN npm i -g n
RUN n stable
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm i
ENTRYPOINT ["npm", "run", "start"]