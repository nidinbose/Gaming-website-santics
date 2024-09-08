import caseSchema from './models/case.model.js'
import userSchema from './models/user.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
// import cartSchema from './models/cart.model.js'
import Cart from './models/cart.model.js'
import adminSchema from './models/admin.model.js'
import nodemailer from 'nodemailer'

// products  CRUD
export async function addCase(req,res){
    try{
        console.log(req.body);
        const {...FormData} = req.body;
  
        await caseSchema
        .create({...FormData})
            .then(()=>{
                res.status(200).send({msg:"sucessfully created"})
            })
            .catch((error)=>{
                res.status(400).send({error:error})
            });
    }catch(error){
        res.status(500).send(error)
    }
  }



  export async function getCase(req,res){
    try{
  
        const data=await caseSchema.find();
        res.status(200).send(data)
        console.log(data);
    }catch (error){
        res.status(500).send(error)
    }
  }
  


  export async function getCaseEdit(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await caseSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
  }


  export async function updateCase(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
    const {...FormData}=req.body
    await caseSchema.updateOne({_id:id},{$set:{...FormData}})
        res.status(201).send({msg:"updated"})
    } catch (error) {
        res.status(400).send(error)
    }
  }



  export async function deleteCase(req, res) {
    try {
        const { id } = req.params;
        console.log(id);    
  
      await caseSchema.deleteOne({_id:id});
       res.status(200).send({msg:"successfully deleted"})
    } catch (error) {
        console.error(error);
        res.status(400).send({ error});
    }
    
  }

//   ------------------------------------Authentication USER---------------------------------

const {sign} = pkg

export async function userRegister(req,res) {

    const {username,email,password,cpassword}=req.body
  
    if(!(username&&email&&password&&cpassword))
        return res.status(404).send("fields are empty")
  
    if(password!==cpassword)
        return res.status(404).send("password not matched")
  
  bcrypt.hash(password,10).then(async(hpassword)=>{
    userSchema.create({username,password:hpassword,email}).then(()=>{
        return res.status(201).send({msg:"successfully created"})
  
    })
    .catch((error)=>{
        return res.status(400).send({error:error})
    })
  }).catch((error)=>{
    res.status(400).send({error:error})
  })
    
  }
  
  

  export async function userLogin(req, res) {
    try {
      const { email, password } = req.body;
      console.log(email);
      const user = await userSchema.findOne({ email });
      const { username } = user;
      if (user == null) return res.status(500).send({ msg: "admin not found" });
      const success = await bcrypt.compare(password, user.password);
      if (success !== true)
        return res.status(401).send("Incorrect username or password");
      const token = await sign({ username }, process.env.JWT_KEY, {
        expiresIn: "24h",
      });
      return res.status(200).send({ msg: "successfully logedin", token });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  
  export async function Home(req,res){
  res.status(200).send(req.user);
  }


  export async function Logout(req, res) {
    try {
      
      req.session = null; 
  
      res.status(200).send({ message: 'Logged out successfully',token });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  
  
  

  

  


  // cart


  export async function addCart(req, res) {
    try {
        const { userID, productID, name, linkvf,price,quantity } = req.body;

       
        const newCart = new Cart({
            userID,
            productID,
            name,
            linkvf,
            price,
            quantity
        });

                const savedCart = await newCart.save(); 

      
        res.status(201).json(savedCart);
    } catch (error) {
       
        res.status(500).json({ message: 'Failed to add to cart', error });
    }
}






export async function getCart(req,res){
  try{

      const data=await Cart.find();
      res.status(200).send(data)
      console.log(data);
  }catch (error){
      res.status(500).send(error)
  }
}


// //   ------------------------------------Authentication ADMIN---------------------------------


export async function adminRegister(req,res) {

  const {username,email,password,cpassword,otp}=req.body

  if(!(username&&email&&password&&cpassword))
      return res.status(404).send("fields are empty")

  if(password!==cpassword)
      return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
  adminSchema.create({username,password:hpassword,email,otp:""}).then(()=>{
      return res.status(201).send({msg:"successfully created"})

  })
  .catch((error)=>{
      return res.status(400).send({error:error})
  })
}).catch((error)=>{
  res.status(400).send({error:error})
})
  
}



export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await adminSchema.findOne({ email });

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    const success = await bcrypt.compare(password, user.password);
    if (!success) {
      return res.status(400).send({ msg: "Password not matched" });
    }

    const { _id: id } = user;
    const token = await sign({ id, email }, process.env.JWT_KEY, { expiresIn: "24h" });

    return res.status(200).send({ token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}


export async function adminLogout(req, res) {
  try {
    
    req.session = null; 

    res.status(200).send({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}




export async function adminHome(req, res) {
  try {
      if (!req.user) {
          return res.status(401).send({ error: "Unauthorized" });
      }

      const { username } = req.user;

      console.log(req.user);
      res.status(200).send({ username });
  } catch (error) {
      console.error('Error in Home function:', error);
      res.status(500).send({ error: "Internal Server Error" });
  }
}

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "b61b6c0d2da033",
    pass: "eadc5f952d3437",
  },
});

export async function adminForget(req, res) {
  const { email } = req.body;
  console.log("Received email:", email);

  try {
    // Check if the email exists in the database
    const data = await adminSchema.findOne({ email: email });
    if (!data) {
      return res.status(400).send({ msg: "User not found" });
    }

    // Generate a random 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);

    // Update the OTP field in the database for the user
    data.otp = otp;
    await data.save();

    // Ensure transporter is defined before trying to send the email
    if (!transporter) {
      console.error("Email transporter is not configured properly.");
      return res.status(500).send({ msg: "Email configuration error" });
    }

    // Send the OTP to the user's email
    const info = await transporter.sendMail({
      from: 'peterspidy5@gmail.com', // Sender's email
      to: data.email, // Receiver's email
      subject: "OTP Verification", // Email subject
      text: `Your OTP is ${otp}`, // Plain text body
      html: `<b>Your OTP is ${otp}</b>`, // HTML body
    });

    console.log("Message sent: %s", info.messageId);

    // Respond with success if OTP is sent
    res.status(200).send({ msg: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in adminForget function:", error.message || error);

    // Handle any other errors
    res.status(500).send({ msg: "An error occurred while processing your request" });
  }
}






export async function adminOtp(req, res) {
  try {
   

    // Validate OTP
    if (password !== user.otp) {
      return res.status(401).send({ error: "Invalid OTP" });
    }

    // OTP is valid; proceed with the rest of your code
    // ... rest of your code

    return res.status(200).send({ message: "OTP validated successfully" });
  } catch (error) {
    console.error("Error in adminOtp:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
}