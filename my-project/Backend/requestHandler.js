import caseSchema from './models/case.model.js'
import userSchema from './models/user.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
// import cartSchema from './models/cart.model.js'
import Cart from './models/cart.model.js'


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




//   ------------------------------------Authentication---------------------------------

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
      const user = await userSchema.findOne({ email });
  
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


  export async function Logout(req, res) {
    try {
      
      req.session = null; 
  
      res.status(200).send({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
  
  
  
  
  export async function Home(req, res) {
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



// Get Cart


export async function getCart(req,res){
  try{

      const data=await Cart.find();
      res.status(200).send(data)
      console.log(data);
  }catch (error){
      res.status(500).send(error)
  }
}