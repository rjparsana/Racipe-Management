const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');  
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch((err) => console.log('MongoDB connection failed:', err));


app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);  

app.get('/', (req, res) => {
    res.send('Recipe Management API is running...');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
