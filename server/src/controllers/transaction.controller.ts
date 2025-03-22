import { Request, Response } from "express";
import WalletModel from "../models/wallet.model";
import TransactionModel from "../models/transaction.model";

// ========================= CREATE TRANSACTION =========================
export const createTransaction = async (req: Request, res: Response) => {
    try {
        const { walletId, type, amount, description } = req.body;
        const userId = req.user._id

        if (!walletId || !type || !amount || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the wallet exists and belongs to the user
        const wallet = await WalletModel.findOne({ _id: walletId, userId });
        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }

        // Create a new transaction
        const transaction = await TransactionModel.create({
            walletId,
            userId,
            type,
            amount,
            description
        });

        return res.status(200).json({
            success: true,
            message: "Transaction added successfully",
            transaction,
        })
    } catch (error) {
        console.error("Error while adding transaction:", error);
        return res.status(500).json({ success: false, message: "Error while adding transaction" });
    }

}
