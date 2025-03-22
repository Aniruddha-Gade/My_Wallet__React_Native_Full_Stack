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



// ========================= GET WALLET TRANSACTION =========================
export const getWalletTransactions = async (req: Request, res: Response) => {
    try {
        const { walletId } = req.params;
        const userId = req.user._id;

        if (!walletId) {
            return res.status(400).json({ message: "walletId is required" });
        }

        // Find all transactions of wallet with specific user
        const transactions = await TransactionModel.find({ walletId, userId }).sort({ date: -1 });
        if (!transactions) {
            return res.status(404).json({ message: "Transactions not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Transaction fetched successfully",
            transactions,
        })
    } catch (error) {
        console.error("Error while fetching transactions:", error);
        return res.status(500).json({ success: false, message: "Error while fetching transactions" });
    }
};




// ========================= GET WALLET SUMMARY =========================
export const getWalletSummary = async (req: Request, res: Response) => {
    try {
        const { walletId } = req.params;
        const userId = req.user._id;

        if (!walletId) {
            return res.status(400).json({ message: "walletId is required" });
        }

        // Find all transactions of wallet with specific user
        const transactions = await TransactionModel.find({ walletId, userId });
        if (!transactions) {
            return res.status(404).json({ message: "Transactions not found" });
        }

        let totalDebit = 0, totalCredit = 0;
        transactions?.forEach(txn => {
            if (txn?.type === "debit") totalDebit += Number(txn?.amount);
            else if (txn?.type === "credit") totalCredit += Number(txn?.amount);
        });

        const balance = totalCredit - totalDebit;

        return res.status(200).json({
            success: true,
            message: "Wallet summary fetched successfully",
            totalDebit,
            totalCredit,
            balance,
        })
    } catch (error) {
        console.error("Error while fetching wallet summary:", error);
        return res.status(500).json({ success: false, message: "Error while fetching wallet summary" });
    }
};





// ========================= GET WALLET SUMMARY =========================
export const getAllWalletsSummary = async (req: Request, res: Response) => {
    try {
        const userId = req.user._id;

        // Get all wallet IDs of the user
        const wallets = await WalletModel.find({ userId }, "_id"); // Fetch only _id fields
        const walletIds = wallets?.map(wallet => wallet?._id);

        if (walletIds?.length === 0) {
            return res.status(404).json({ message: "No wallets found for this user" });
        }

        // Find all transactions of the user's wallets
        const transactions = await TransactionModel.find({ walletId: { $in: walletIds } });

        if (transactions?.length === 0) {
            return res.status(404).json({ message: "No transactions found" });
        }

        // Calculate total credit, debit, and balance
        let totalDebit = 0, totalCredit = 0;

        transactions?.forEach(txn => {
            if (txn?.type === "debit") totalDebit += Number(txn?.amount);
            else if (txn?.type === "credit") totalCredit += Number(txn?.amount);
        });

        const balance = totalCredit - totalDebit;

        return res.status(200).json({
            success: true,
            message: "All Wallet summary fetched successfully",
            totalDebit,
            totalCredit,
            balance,
        });
    } catch (error) {
        console.error("Error while fetching all wallet summary:", error);
        return res.status(500).json({ success: false, message: "Error while fetching all wallet summary" });
    }
};