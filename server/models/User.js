const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    email: {
        type: String,
        required: "Email is required",
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        min: [4, "Too short. Password must be at least 4 characters"],
        required: "Password is required"
    },
    rentals: [{
        type: Schema.Types.ObjectId,
        ref: "Rental"
    }],
    verificationCode: {
        type: String,
        default: ""
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    memberSince: {
        type: Date,
        default: Date.now
    }
});

//check password


UserSchema.methods.showDetails = function () {
  return {
      email: this.email,
      _id: this._id,
      memberSince: this.memberSince
  }
};


module.exports = mongoose.model("User", UserSchema);