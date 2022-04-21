const config = require('./utils/config');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const citasMedicasRouter = require('./controllers/citasMedicas');
const path = require('path');
const app = express();

const mongooseURI = process.env.DATABASE_URI;
mongoose.connect(mongooseURI)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch(err => {
        console.error('error connecting to MongoDB', err);
    })

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public/views')));
app.use(express.static(path.join(__dirname, '/public/styles')));
app.use(express.static(path.join(__dirname, '/public/scripts')));
app.use(express.static(path.join(__dirname, '/public/img')));

app.use('/api/citas-medicas', citasMedicasRouter);
// app.use('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/views/index.html'));
// });

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred');
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
