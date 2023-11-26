const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbname = 'mongo-test';

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(url, {});
    console.log('Connected to the database');
    const db = client.db("shool")
    const collection = db.collection("students")
     const document = {
      Name: 'ANNA',
      age: '20',
    };

    const documents = await collection.findOne({Name:"ANNA"});

    console.log(`Anna ma ${documents.age} lat`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

connectToDatabase();
