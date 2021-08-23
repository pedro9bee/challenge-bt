import mongoose from 'mongoose'

const Project = new mongoose.Schema({

  description: { type: String },
  creation_date: { type: Date },
  finish_date: { type: Date },
  userId:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }, 
  status: {
    type: String,
    enum : ['incomplete', 'complete', 'inative'],
    default: 'incomplete'
  },
  tasks:  [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'task'
  }],
}, {timestamps: true});

export default mongoose.model('project', Project, 'project')