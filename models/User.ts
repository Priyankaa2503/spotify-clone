import mongoose, { model } from "mongoose";
import bcrypt, { genSalt } from "bcrypt";
interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
}
interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument, {}, Methods>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw error;
  }
});

//compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(this.password, password);
};

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel as mongoose.Model<UserDocument, {}, Methods>;
