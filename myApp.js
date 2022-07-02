let express = require('express');
let app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World');
	console.log('Hello World');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
