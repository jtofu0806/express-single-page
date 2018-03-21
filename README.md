## Usage

### Build

Use express-generator with no view engine config
```
express --no-view my-project
```

### Start express (PORT=8080)
```
npm start
```

## Configuration

### Routing

Currently, put the static pages into ```/public``` folder, and the start page is ```/public/index.html```.
```javascript
app.use(function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});
```

### PORT

By default, load environment variables from ```.env``` file.

Also, can set on the command line,
```
PORT=8080 node ./bin/www
```

**windows cmd**
```cmd
set PORT=8080 && node ./bin/www
```

As setting```NODE_ENV=production```, use PORT defined in the system (default is 3000).
```
NODE_ENV=production node ./bin/www
```

**windows cmd**
```cmd
set NODE_ENV=production && node ./bin/www
```
