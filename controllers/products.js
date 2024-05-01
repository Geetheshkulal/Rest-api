const product=require("../models/product");


const getAllproducts=async(req,res)=>{
    const {company,name}=req.query;
    const queryObject={};

    if(company){
        queryObject.company=company;
       
    }
    if(name){
        queryObject.name={$regex:name, $options:"i"};
    }
    console.log(queryObject);


    const myData=await product.find(queryObject);
    res.status(200).json({myData});

};


const getAllproductsTesting=async(req,res)=>{
    const myData= await product.find(req.query);

    res.status(200).json({myData});

};


module.exports={getAllproducts,getAllproductsTesting};


// const myData=await product.find(req.query);    for searching anything in query eg;  ?company=apple. if we want to add more objects insert &