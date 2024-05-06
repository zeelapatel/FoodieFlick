import mongoose from "mongoose"


const connection  =async (USERNAME,PASSWORD)=>{
    const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@foodieflick.sguhqhp.mongodb.net/?retryWrites=true&w=majority&appName=FoodieFlick`;
    try {
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting with the database',error);
    }
}

export default connection;