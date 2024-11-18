FROM ubuntu:22.04
COPY . .
RUN apt-get update
RUN apt-get install -y \
    build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev \
    npm nodejs \
RUN npm i -g n
RUN n stable
RUN npm i
ENTRYPOINT ["npm", "run", "start"]