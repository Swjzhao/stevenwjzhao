import mongoose from 'mongoose'

const URL = process.env.MONGO_KEY

export default function () {
    mongoose.connect(`${URL}`, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`Mongo connected`);
    }).catch((err) => {
        console.log(`Mongo connect failed: ${err?.message}`);

    });
}