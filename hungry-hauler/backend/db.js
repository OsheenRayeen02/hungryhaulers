// const mongoose = require("mongoose");
// const mongoURI = "mongodb+srv://osheen_rayeen_02:swaummati%4002@cluster0.ibywiy2.mongodb.net/hungryhauler";

// async function fetchDataFromMongoDB() {
//     try {
//         const fetched_data = await mongoose.connection.db.collectionn('food_item');
//         const data = await fetched_data.find({}).toArray();
//         global.food_item = data;
        
//         const fetched_data_categories = mongoose.connection.db.collection('food_category');
//         const data_categories = await fetched_data_categories.find({}).toArray();
//         global.food_category = data_categories;
//         console.log('Fetched food categories:', global.food_category);
//         console.log('Fetched data from MongoDB:', global.food_item);
//     } catch (err) {
//         console.error('Error fetching data from MongoDB:', err);
//         throw err; // Handle the error gracefully or throw it further.
//     }
// }

// async function mongoDB() {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//         await fetchDataFromMongoDB();
//         // Additional logic can be added here
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//         // Handle the error gracefully or throw it further.
//         throw err;
//     } 
// }
// module.exports=mongoDB
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://osheen_rayeen_02:swaummati%4002@cluster0.ibywiy2.mongodb.net/hungryhauler"
async function fetchDataFromMongoDB() {
    try {
        const fetched_data = await mongoose.connection.db.collection('food_item'); // Fix typo here
        const data = await fetched_data.find({}).toArray();
        global.food_item = data;
        
        const fetched_data_categories = mongoose.connection.db.collection('food_category');
        const data_categories = await fetched_data_categories.find({}).toArray();
        global.food_category = data_categories;
        // console.log('Fetched food categories:', global.food_category);
        // console.log('Fetched data from MongoDB:', global.food_item);
    } catch (err) {
        console.error('Error fetching data from MongoDB:', err);
        throw err; // Handle the error gracefully or throw it further.
    }
}

async function mongoDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        await fetchDataFromMongoDB();
        // Additional logic can be added here
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        // Handle the error gracefully or throw it further.
        throw err;
    } 
}

module.exports = mongoDB;
