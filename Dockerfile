FROM node:20-alpine
RUN apk add --no-cache \
    build-base \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    librsvg-dev \
    curl
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install
ENTRYPOINT ["npm", "run", "start"]