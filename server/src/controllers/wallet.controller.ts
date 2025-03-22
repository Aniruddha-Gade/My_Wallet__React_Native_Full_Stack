import { Request, Response } from "express";
import WalletModel from "../models/wallet.model";

// ========================= CREATE WALLET =========================
export const createWallet = async (req: Request, res: Response) => {
    try {
        const { name, image } = req.body;

        if (!name) {
            return res.status(400).json({ message: "wallet name is required" });
        }

        // create wallet
        const wallet = await WalletModel.create({ _id: req.user._id, name, image });

        return res.status(200).json({
            wallet,
            success: true,
            message: "Wallet is created successfully"
        })
    } catch (error) {
        console.error("Error while creating wallet:", error);
        return res.status(500).json({ success: false, message: "Error while creating wallet" });
    }
};



// ========================= GET WALLETS =========================
export const getWallets = async (req: Request, res: Response) => {
    try {

        // Find all wallets
        const wallets = await WalletModel.find({ userId: req.user._id });
        if (!wallets) {
            return res.status(400).json({ message: "Wallets not found" });
        }

        return res.status(200).json({
            wallets,
            success: true,
            message: "All Wallets fetched successfully"
        })
    } catch (error) {
        console.error("Error while fetching all wallets:", error);
        return res.status(500).json({ success: false, message: "Error while fetching all wallets" });
    }
};




// ========================= UPDATE WALLETS =========================
type IUpdateWalletBody = {
    walletId: string,
    name: string,
    image: string
}
type IToUpdateData = {
    name?: string,
    image?: string
}
export const updateWallet = async (req: Request, res: Response) => {
    try {
        const { walletId, name, image } = req.body as IUpdateWalletBody;
        if (!walletId) {
            return res.status(400).json({ message: "WalletId is required" });
        }

        const toUpdateData: IToUpdateData = {}
        if (name) toUpdateData.name = name;
        if (image) toUpdateData.image = image;


        // Find all wallets
        const wallet = await WalletModel.findOneAndUpdate(
            { _id: walletId, userId: req.user._id },
            { $set: toUpdateData },
            { new: true }
        );
        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found to update" });
        }

        return res.status(200).json({
            wallet,
            success: true,
            message: "Wallet updated successfully"
        })
    } catch (error) {
        console.error("Error while updating wallet :", error);
        return res.status(500).json({ success: false, message: "Error while updating wallet" });
    }
};
