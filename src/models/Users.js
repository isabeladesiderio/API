import mongoose from 'mongoose';
const mongoose_delete = require('mongoose-delete');


const UsersSchema = new mongoose.Schema(
    
  {
    name: String,
    email: {
      type:String,
      unique: true
    },
    cpf: {
      type:Number,
      unique: true
    },
    password: String,
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
UsersSchema.plugin(mongoose_delete);

export default mongoose.model('users', UsersSchema);