import mongoose from "mongoose"

interface IUser extends mongoose.Document {
    name: string,
    email: string,
    googleId: string,
    mpin?: string,
    // wallets: mongoose.Schema.Types.ObjectId[],
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    mpin: {
        type: Number
    },
    // wallets: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Wallet'
    //     }
    // ],
}, { timestamps: true });


const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;