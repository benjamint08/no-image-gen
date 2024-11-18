# no-image-gen

You know how popular services generate images for profiles with no image? This is a simple implementation of that.

<details>
  <summary>Usage (Docker)</summary>

Clone the repo and run:

```bash
docker build -t no-image-gen .

docker run -d -p 8080:8080 no-image-gen
```

The server will be running on `http://localhost:8080`.

</details>

<details>
  <summary>Usage (Local)</summary>

Check [this link](https://www.npmjs.com/package/canvas#compiling) for the dependencies you need to install for your OS.

Clone the repo and run:

```bash
npm install
npm start
```

The server will be running on `http://localhost:8080`.
</details>

## Endpoints

### `GET /resxres?text&spaces&trim`

Generates a `resxres` image with a random color.

#### Query Params

- `text`: The text to be displayed on the image.
- `spaces`: If you want spaces between the letters. (only when using `trim`)
- `trim`: If you want to trim the text. (Hello world becomes Hw)