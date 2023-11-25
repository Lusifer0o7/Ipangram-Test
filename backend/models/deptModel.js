const mongoose = require('mongoose')

const deptSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter Department"]
    }
  });