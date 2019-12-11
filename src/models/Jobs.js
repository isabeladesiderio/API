import mongoose from 'mongoose';
const mongoose_delete = require('mongoose-delete');


const JobsSchema = new mongoose.Schema(
    
  {
    title: String,
    description: String,
    request: String ,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
JobsSchema.plugin(mongoose_delete);

export default mongoose.model('jobs', JobsSchema);