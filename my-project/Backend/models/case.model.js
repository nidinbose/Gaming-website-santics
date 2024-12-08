
import mongoose, { Mongoose, model } from "mongoose";

const caseSchema= new mongoose.Schema({
  

    imagelink: { type: String},
    hoverimagelink: { type: String},
    name: { type: String},
    specifications: { type: String },
    description: { type: String },
    price: { type:Number},
    keyUses: { type: String },
   linkvf: { type: String },
  linkvf2: { type: String },
   link1: { type: String },
   link2: { type: String },
   link3: { type: String },
   link4: { type: String },
   link5: { type: String },
   link6: { type: String },
   btnlink: { type: String },
   videotitle:{type:String},
   video: { type: String },
   bnn1title:{type:String},
   bnn1: { type: String },
   bnn2title:{type:String},
   bnn2: { type: String },
   bnn3title:{type:String},
   bnn3: { type: String },
   category:{type:String},
   stock:{type:Number}
   
})

export default mongoose.model.case || mongoose.model('case',caseSchema)