
import mongoose, { Mongoose, model } from "mongoose";

const categorySchema= new mongoose.Schema({
  

    imagelink: { type: String},
    hoverimagelink: { type: String},
    name: { type: String},
    specifications: { type: String },
    descrition: { type: String },
    price: { type:Number},
    keyUses: { type: String },
   linkvf: { type: String },
  linkvf2: { type: String },
   link1: { type: String },
   link2: { type: String },
   link3: { type: String },
   link4: { type: String },
   link6: { type: String },
   link4: { type: String },
   btnlink: { type: String },
   video: { type: String },
   bnn1: { type: String },
   bnn2: { type: String },
   bnn3: { type: String }
   
})

export default mongoose.model.case || mongoose.model('case',categorySchema)