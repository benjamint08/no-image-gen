# no-image-gen

You know how popular services generate images for profiles with no image? This is a simple implementation of that.

## Usage (Docker)

Clone the repo and run:

```bash
docker build -t no-image-gen .

docker run -d -p 8080:8080 no-image-gen
```

The server will be running on `http://localhost:8080`.

## Usage (Local)

Check [this link](https://www.npmjs.com/package/canvas#compiling) for the dependencies you need to install for your OS.

Clone the repo and run:

```bash
npm install
npm start
```