import User from "../modle/user.js";
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch'); 


const saveUser = (user) =>{

    const users = JSON.parse(localStorage.getItem('users')) || []
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
}

//  Create user

export const createUser =(req,res)=>{
    const {name,email} = req.body
     
    if (name == "" || email == ""){
        return res.status(403).json({ Status:403,message: 'Please your input is not empty' });
    }

    
    try {

        const users = JSON.parse(localStorage.getItem('users')) || [];
         const userExists = users.some(u => u.email === email);

         if (userExists) {
           return res.status(400).json({ message: 'User already exists' });
          }
        const newUser = new User({name,email})
          saveUser(newUser)
        return res.status(201).json({ message: 'User created', newUser });
    } catch (error) {
        return res.status(500).json({message:`Internal server error ${error}`})
    }

    
}

//  Get all user

export const getUser = (req,res)=>{

    const users =JSON.parse(localStorage.getItem("users")) || []

    if(!users){
       return res.status(404).json({message:"User not found"})
    }else{
        return res.status(201).json({message:"all user retrived",users})
    }
    
}


// Get user by id

export const getUserById = (req, res) => {
    const { id } = req.params;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
};