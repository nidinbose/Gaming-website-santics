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
                  const token = pkg.sign({
              email: user.email,
              userId: user._id
              
          }, process.env.JWT_KEY, {
              expiresIn: "48h"
          });
          return res.status(200).json({
              msg: "Login successful!",
              token
              
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
  const { productId } = req.body;
  const userId = req.user_id;

  try {
    const existingCartItem = await cartSchema.findOne({ productId, userId });
    const product = await caseSchema.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found.' });
    }

    const availableStock = product.stock;

    if (existingCartItem) {
      if (existingCartItem.count < availableStock) {
        existingCartItem.count += 1;
        await existingCartItem.save();
        return res.status(200).json({ msg: 'Item added to cart successfully!' });
      } else {
        return res.status(400).json({ msg: 'Item count exceeds available stock.' });
      }
    } else {
      if (availableStock > 0) {
        await cartSchema.create({ productId, userId });
        return res.status(200).json({ msg: 'Item added to cart successfully!' });
      } else {
        return res.status(400).json({ msg: 'Item count exceeds available stock.' });
      }
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    return res.status(500).json({ msg: 'Error adding to cart.' });
  }
}
  
export async function getCart(req, res) {
  const { productId, count } = req.body; // Get productId and count from the request body

  try {
      // Find the user's cart
      let cart = await Cart.findOne({ userId: req.user.id });

      // If no cart exists for the user, create one
      if (!cart) {
          cart = new Cart({ userId: req.user.id, items: [] });
      }

      // Check if the item already exists in the cart
      const existingItem = cart.items.find(item => item.productId === productId);

      // If the item exists, update the quantity; otherwise, add a new item
      if (existingItem) {
          existingItem.count += count; // Update the existing item count
      } else {
          cart.items.push({ productId, count }); // Add new item
      }

      // Save the cart
      await cart.save();
      res.status(200).json(cart); // Return the updated cart
  } catch (error) {
      res.status(500).json({ message: error.message }); // Handle errors
  }
}




export async function decrementCart(req, res) {
  const { productId, userId } = req.body;
  console.log(req.body);
  try {
    let cartItem = await cartSchema.findOne({ productId, userId });

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found' });
    }


    if (cartItem.count > 1) {
      cartItem.count -= 1;
      await cartItem.save();

      res.status(200).json({ msg: 'Cart item count decremented successfully!' });
    } else {
      res.status(400).json({ msg: 'Cannot decrement count below 1' });
    }
  } catch (error) {
    console.error('Error decrementing cart item count:', error);
    res.status(500).json({ msg: 'Error decrementing cart item count.' });
  }
}



export async function deleteCartItem(req, res) {
  const { productId, userId } = req.body;

  try {
    const cartItem = await cartSchema.findOne({ productId, userId });

    if (!cartItem) {
      return res.status(404).json({ msg: 'Cart item not found.' });
    }

    await cartSchema.deleteOne({ productId, userId });

    res.status(200).json({ msg: 'Cart item deleted successfully.' });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ msg: 'Error deleting cart item.' });
  }
}


export async function checkCart(req, res) {
  const { productId } = req.params;
  const userId = req.user.id;

  try {
    const cartItem = await cartSchema.findOne({ productId, userId });

    const isAddedToCart = Boolean(cartItem);

    res.status(200).json({ isAddedToCart });
  } catch (error) {
    console.error('Error checking if added to cart:', error);
    res.status(500).json({ msg: 'Error checking if added to cart.' });
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




export async function resetAdminPassword(req, res) {
  const { otp, newPassword } = req.body;
  console.log("Received reset request:", otp);

  try {
    // Check if the admin exists with the given OTP
    const admin = await adminSchema.findOne({ otp: otp });
    if (!admin) {
      return res.status(400).send({ msg: "Invalid OTP or OTP expired" });
    }

    // Hash the new password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the admin's password and clear the OTP
    admin.password = hashedPassword;
    admin.otp = null; // Clear the OTP once it's used for security reasons
    await admin.save();

    // Respond with success if the password is reset
    res.status(200).send({ msg: "Password reset successfully" });
  } catch (error) {
    console.error("Error in resetAdminPassword function:", error.message || error);

    // Handle any other errors
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