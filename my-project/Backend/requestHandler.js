import caseSchema from './models/case.model.js'
import userSchema from './models/user.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
// import cartSchema from './models/cart.model.js'
import Cart from './models/cart.model.js'
import adminSchema from './models/admin.model.js'
import nodemailer from 'nodemailer'
import cartSchema from './models/cart.model.js'
import addressSchema from './models/address.model.js'
import { set } from 'mongoose'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import  PaymentOrder from './models/order.model.js'
import PaymentVerification from './models/payment.schema.js'


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

  const {username,email,password,cpassword,otp,role}=req.body

  if(!(username&&email&&password&&cpassword&&role))
      return res.status(404).send("fields are empty")

  if(password!==cpassword)
      return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
  adminSchema.create({username,password:hpassword,email,otp:"",role}).then(()=>{
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
    const { email, password,role } = req.body;
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

    return res.status(200).send({ token,role });
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

export async function orderCount(req, res) {
  try {
    const orderCounts = await PaymentOrder.countDocuments({});
      res.status(200).json({ count: orderCounts });
  } catch (error) {
    console.error('Error fetching order count:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export async function fullRevenue(req, res) {
  try {
     const allOrders = await PaymentOrder.find(); 
    const totalAmount = allOrders.reduce((sum, order) => sum + order.amount, 0);
    res.status(200).json({ totalRevenue: totalAmount });
  } catch (error) {
    console.error("Error calculating total amount:", error);
    res.status(500).json({ error: "Error calculating total revenue" });
  }
}





// CHECKOUT

export async function addAddress(req,res){
  try{
     const {userId,name,lastname,addressLine,city,state,zipCode,phone}=req.body
       console.log(req.body);
       
     if(!(userId,name,lastname,addressLine,city,state,zipCode,phone))
      return res.status(400).send("form error")

     const data= await addressSchema.create({userId,name,lastname,addressLine,city,state,zipCode,phone}).then((data)=>{
      return res.status(201)
     }).send("created successfully",data)
        console.log(data);
        
    }catch(error){
      res.status(500).send(error)
  }
}


export async function getAddress(req, res) {
  try {
    
    const userId = req.user?.userId || req.params.userId;

  
    const data = await addressSchema.find({ userId: userId });

    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(404).send({ message: "Address not found" });
    }

  } catch (error) {
       console.error(error);
    return res.status(500).send({ message: "Server error", error });
  }
}


export async function deleteAddress(req,res){
  try {
    const {id}=req.params
    console.log(id);
    const data=await addressSchema.deleteOne({_id:id}).then((data)=>{
      return res.status(201).send("Deleted succesfully")
    })
    
  } catch (error) {
    return res.status(500).send("error in Deleting address")
  }
}

export async function updateAddress(req,res){
  try {
    const {id}=req.params
    console.log(id);
    const {...address}=req.body
    const data=await addressSchema.updateOne({_id:id},{$set:{...address}}).then((data)=>{
      return res.status(200).send("updated succusfully")
    })
    
  } catch (error) {
    return res.status(500).json({ message: "An error occurred while updating the address", error: error.message });
  }
}



export async function upiPayment(req, res) {
  try {
        const { upiId, amount, name } = req.body;

       if (!upiId || !amount || !name) {
          return res.status(400).json({ message: 'All fields are required' });
      }

      const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

      res.status(200).json({ upiUrl });
  } catch (error) {
      console.error("Error generating UPI URL:", error);
      res.status(500).json({ message: 'Server error while generating UPI URL' });
  }
}




export async function getUserData(req,res){
  try {
    const {id}=req.params;
    console.log(id);
    

    const data=await userSchema.findOne({_id:id}).then((data)=>{
      return res.status(201).send(data)

    })
  } catch (error) {
    return res.status(500).send("error in getting")
  }
}
// PAYMENTS


export async function razorpayPayment(req, res) {
  try {
    const {userId, amount, currency = "INR", items,address } = req.body;
    if (!amount || !items || !Array.isArray(items)) {
      return res.status(400).json({ message: "Invalid request data. Amount and items are required." });
    }
    console.log("Request Body:", req.body);

       const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

      const orderOptions = {
      amount: amount * 100, 
      currency,
      receipt: crypto.randomBytes(10).toString("hex"), 
      payment_capture: 1,
    };
    instance.orders.create(orderOptions, async (error, order) => {
      if (error) {
        console.error("Razorpay Order Creation Error:", error);
        return res.status(500).json({ message: "Error creating Razorpay order." });
      }

      console.log("Razorpay Order:", order);
      const paymentOrder = new PaymentOrder({
        razorpayOrderId: order.id,
        amount: order.amount,
        currency: order.currency,
        userId,
        items,
        address,
        receipt: order.receipt,
        status: order.status,
      });

      try {
        const savedOrder = await paymentOrder.save();
        console.log("Saved Order:", savedOrder);
        return res.status(200).json({ order });
      } catch (dbError) {
        console.error("Database Save Error:", dbError);
        if (dbError.errors) {
          console.error("Validation Errors:", dbError.errors);
        }

        return res.status(500).json({ message: "Error saving order to the database." });
      }
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
}


export async function verifyPayment(req, res) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      await PaymentOrder.updateOne(
        { razorpayOrderId: razorpay_order_id },
        { status: 'paid', paymentId: razorpay_payment_id }
      );
      res.status(200).json({ message: "Payment verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid signature" });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
}


export async function viewOrdersByUserId(req, res) {
  try {
    const { userId } = req.params; 
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const orders = await PaymentOrder.find({ userId }).sort({ createdAt: -1 });
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user." });
    }

    return res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
}

export async function getOrdersAdmin(req,res){
  try {
    const data=await PaymentOrder.find({}).then((data)=>{
      return res.status(201).send(data)
    })
  } catch (error) {
    return res.status(400).send("No data found")
  }
}

export async function updateStatus(req,res){
  const { orderId } = req.params; 
  const { status } = req.body;  
  if (!status) {
    return res.status(400).json({ message: "Status is required." });
  }

  try {
     const updatedOrder = await PaymentOrder.findByIdAndUpdate(
      orderId,
      { status },
      { new: true } 
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }

    res.status(200).json({
      message: "Order status updated successfully.",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Failed to update order status." });
  }
}


export async function deleteFromCart(req,res){
  const { userId } = req.params; 
  try {
   
    const cart = await cartSchema.findOneAndDelete({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for this user." });
    }

    res.status(200).json({ message: "Cart cleared successfully after payment." });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Failed to clear the cart." });
  }
}

// ADMIN REQ


export async function userlist(req,res){
  try {
   const data= await userSchema.find({}).then((data)=>{
      return res.status(201).send(data)
    })
  } catch (error) {
    return res.status(500).send("Internal error")
  }
}

export async function deleteUser(req,res){
  try {
    const {id}=req.params
    const data=await userSchema.deleteOne({_id:id}).then((data)=>{
      return res.status(200).send("Susscusfully deleted")
    })
  } catch (error) {
    return res.status(500).send("internal error in deleting")
  }
}