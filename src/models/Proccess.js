import mongoose from 'mongoose';
import Jobs from './Jobs';
const mongoose_delete = require('mongoose-delete');


const ProccessSchema = new mongoose.Schema(
    
  {
    name: String,
    maturity: String,
    jobs : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jobs'
    }],
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
ProccessSchema.plugin(mongoose_delete);

export default mongoose.model('proccess', ProccessSchema);