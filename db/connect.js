const mongoose=require("mongoose");

// uri="mongodb+srv://geetheshkulal84:qEiQhu4553zZiL1z@api.ntke3kd.mongodb.net/Api?retryWrites=true&w=majority";

const connectDB=(uri)=>{

    //console.log("connect db");
 
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

}

module.exports=connectDB;



