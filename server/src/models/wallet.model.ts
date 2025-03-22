
import mongoose from "mongoose";

interface IWallet extends mongoose.Document {
    userId: mongoose.Schema.Types.ObjectId
    name: String,
    image?: String,
    // transactions: mongoose.Schema.Types.ObjectId[],
}

const WalletSchema = new mongoose.Schema<IWallet>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    // transactions: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Transaction'
    //     }
    // ],
})

const WalletModel = mongoose.model<IWallet>('Wallet', WalletSchema)
export default WalletModel;