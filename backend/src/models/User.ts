import mongoose from 'mongoose'
 
const UserModel = new mongoose.Schema({

  email: { type: String,
    unique : true, 
    required : true 
  },
    userName: { 
      type: String, 
      required : true 
    },  
    password: { type: String },
    type: { type: String },
    status: {
      type: String,
      enum : ['active', 'inactive'],
      default: 'active'
  }


}, {timestamps: true});

export default  mongoose.model('user', UserModel, 'user')