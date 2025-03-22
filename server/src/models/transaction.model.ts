import mongoose from "mongoose";

interface ITransaction extends mongoose.Document {
    walletId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    description: String,
    type: "debit" | "credit",
    amount: Number,
    date: Date
}


const transactionSchema = new mongoose.Schema<ITransaction>({
    walletId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wallet",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        enum: ["debit", "credit"],
        required: true
    },
},
    { timestamps: true }
);

const TransactionModel = mongoose.model<ITransaction>("Transaction", transactionSchema);
export default TransactionModel;
