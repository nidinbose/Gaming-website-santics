import caseSchema from './models/case.model.js'
import userSchema from './models/user.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
// import cartSchema from './models/cart.model.js'
import Cart from './models/cart.model.js'
import adminSchema from './models/admin.model.js'
import nodemailer from 'nodemailer'
import cartSchema from './models/cart.model.js'


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
    
      if (!email || !password) {
        return res.status(400).json({
          msg: "Email or password cannot be empty!"
        });
      }
  
      const user = await userSchema.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "Invalid email or password!"
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
               const token = pkg.sign(
          {
            email: user.email,
            userId: user._id
          },
          process.env.JWT_KEY,
          {
            expiresIn: "48h"
          }
        );
       
        return res.status(200).json({
          msg: "Login successful!",
          token,
          userId: user._id 
        });
      }
  
      return res.status(400).json({
        msg: "Invalid email or password!"
      });
  
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        msg: "An error occurred during login.",
        error: error.message
      });
    }
  }
  




  export async function Home(req, res) {
    try {
          const token = req.headers.authorization?.split(" ")[1];
  
      if (!token) {
        return res.status(401).json({ msg: 'Unauthorized access. No token provided.' });
      }
        const decoded = pkg.verify(token, process.env.JWT_KEY);
      const { userId, email } = decoded;
  
      const user = await userSchema.findOne({ _id: userId }, { password: 0 });
  
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      const { username } = user;
  
      return res.status(200).json({
        msg: 'User profile found',
        user: {
          email,
          username,
          token
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({
        msg: 'An error occurred!',
        error: error.message
      });
    }
  }
    
  

  export async function userForget(req, res) {
    const { email } = req.body;
    console.log("Received email:", email);
  
    try {
    
      const data = await userSchema.findOne({ email: email });
      if (!data) {
        return res.status(400).send({ msg: "User not found" });
      }
  
      const otp = Math.floor(100000 + Math.random() * 900000);
      console.log("Generated OTP:", otp);
  
      data.otp = otp;
      await data.save();
  
      if (!transporter) {
        console.error("Email transporter is not configured properly.");
        return res.status(500).send({ msg: "Email configuration error" });
      }
  // console.log(transporter);
  
      const info = await transporter.sendMail({
        from: 'peterspidy5@gmail.com',
        to: data.email,
        subject: "OTP Verification", 
        text: `Your OTP is ${otp}`, 
        html: `<b>Your OTP is ${otp}</b>`,
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ msg: "OTP sent successfully" });
    } catch (error) {
      console.error("Error in adminForget function:", error.message || error);
  
      res.status(500).send({ msg: "An error occurred while processing your request" });
    }
  }
  
  
  export async function resetUserPassword(req, res) {
    const { otp, newPassword } = req.body;
    console.log("Received reset request:", otp);
  
    try {
          const user = await userSchema.findOne({ otp: otp });
      if (!user) {
        return res.status(400).send({ msg: "Invalid OTP or OTP expired" });
      }
  
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
  
      user.password = hashedPassword;
      user.otp = null; 
      await user.save();
  
         res.status(200).send({ msg: "Password reset successfully" });
    } catch (error) {
      console.error("Error in resetuserPassword function:", error.message || error);
  
      res.status(500).send({ msg: "An error occurred while resetting the password" });
    }
  }


  export async function Logout(req, res) {
    try {
   
      req.session = null; 
      res.status(200).send({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  // cart


  


  export async function addToCart(req, res) {
    const { userId, productId, quantity, name, price, imageLink } = req.body;
    console.log("Request body:", req.body); 

    try {
        let cart = await cartSchema.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const existingItem = cart.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity, name, price, imageLink });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
}



export async function getCart(req, res) {
  const { userId } = req.params; 
  console.log("Fetching cart for user:", userId); 

  try {
      const cart = await cartSchema.findOne({ userId });
      if (!cart) {
          return res.status(404).json({ msg: 'Cart not found for this user' });
      }

      res.status(200).json(cart);
  } catch (err) {
      res.status(500).json({ msg: 'Server Error', error: err.message });
  }
}

export async function removeFromCart(req, res) {
  const { userId, productId } = req.body;

  try {
    const cart = await cartSchema.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found for this user' });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex === -1) {
      return res.status(404).json({ msg: 'Item not found in the cart' });
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();
    res.status(200).json({ msg: 'Item removed', cart: cart.items });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message });
  }
}






export async function incrementCart(req, res) {
  const { userId, productId } = req.body;

  try {
      const cart = await cartSchema.findOne({ userId });
      if (!cart) {
          return res.status(404).json({ msg: 'Cart not found for this user' });
      }

      const item = cart.items.find(item => item.productId.toString() === productId);
      if (!item) {
          return res.status(404).json({ msg: 'Item not found in the cart' });
      }

      item.quantity += 1;
      await cart.save();
      res.status(200).json({ msg: 'Item quantity incremented', cart: cart.items });
  } catch (err) {
      res.status(500).json({ msg: 'Server Error', error: err.message });
  }
}


export async function decrementCart(req, res) {
  const { userId, productId } = req.body;

  try {
      const cart = await cartSchema.findOne({ userId });
      if (!cart) {
          return res.status(404).json({ msg: 'Cart not found for this user' });
      }

      const item = cart.items.find(item => item.productId.toString() === productId);
      if (!item) {
          return res.status(404).json({ msg: 'Item not found in the cart' });
      }

      if (item.quantity > 1) {
          item.quantity -= 1;
      } else {
                 const itemIndex = cart.items.indexOf(item);
          cart.items.splice(itemIndex, 1);
      }

      await cart.save(); 
      res.status(200).json({ msg: 'Item quantity decremented', cart: cart.items });
  } catch (err) {
      res.status(500).json({ msg: 'Server Error', error: err.message });
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
  secure: false,
  auth: {
    user: "b61b6c0d2da033",
    pass: "eadc5f952d3437",
  },
});

export async function adminForget(req, res) {
  const { email } = req.body;
  console.log("Received email:", email);

  try {
  
    const data = await adminSchema.findOne({ email: email });
    if (!data) {
      return res.status(400).send({ msg: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);

    data.otp = otp;
    await data.save();

    if (!transporter) {
      console.error("Email transporter is not configured properly.");
      return res.status(500).send({ msg: "Email configuration error" });
    }

    const info = await transporter.sendMail({
      from: 'peterspidy5@gmail.com',
      to: data.email,
      subject: "OTP Verification", 
      text: `Your OTP is ${otp}`, 
      html: `<b>Your OTP is ${otp}</b>`,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send({ msg: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in adminForget function:", error.message || error);

    res.status(500).send({ msg: "An error occurred while processing your request" });
  }
}




export async function resetAdminPassword(req, res) {
  const { otp, newPassword } = req.body;
  console.log("Received reset request:", otp);

  try {
        const admin = await adminSchema.findOne({ otp: otp });
    if (!admin) {
      return res.status(400).send({ msg: "Invalid OTP or OTP expired" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    admin.password = hashedPassword;
    admin.otp = null; 
    await admin.save();

       res.status(200).send({ msg: "Password reset successfully" });
  } catch (error) {
    console.error("Error in resetAdminPassword function:", error.message || error);

    res.status(500).send({ msg: "An error occurred while resetting the password" });
  }
}






function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}


export async function userCount(req, res) {
  try {
    const userCount = await userSchema.countDocuments({});
      res.status(200).json({ count: userCount });
  } catch (error) {
    console.error('Error fetching student count:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function productCount(req, res) {
  try {
    const ProductCounts = await caseSchema.countDocuments({});
      res.status(200).json({ count: ProductCounts });
  } catch (error) {
    console.error('Error fetching student count:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}