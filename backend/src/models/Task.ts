import mongoose from 'mongoose'

const Task = new mongoose.Schema({

    projectId:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'project'
  }, 
  userId:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
   }, 
    description: { type: String },
    creation_date: { type: Date },
    finish_date: { type: Date },
    status: {
      type: String,
      enum : ['incomplete', 'complete', 'inative'],
      default: 'incomplete'
  }
}, {timestamps: true});

export default mongoose.model('task', Task, 'task')