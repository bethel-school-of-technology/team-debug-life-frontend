const Java = require('java');
const app = Java();

app.use(java());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on http//localhost:8080/login'));

