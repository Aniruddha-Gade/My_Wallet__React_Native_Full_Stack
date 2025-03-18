import { useForm } from "react-hook-form"
import { defaultWalletValues } from "../constants";
import { WalletDataType } from "@/src/types/types";


type UseAddWalletProps = {
    isEdit?: boolean;
    walletData?: WalletDataType
};


function useAddWallet({ isEdit, walletData }: UseAddWalletProps) {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue
    } = useForm({
        defaultValues: isEdit ? walletData : defaultWalletValues
    });


    const onSubmit = (data: WalletDataType) => {
        if (isEdit) {
            console.log("Updating Wallet ", data);
            // API call to update wallet
        } else {
            console.log("created == ", data);
            // API call to create wallet
        }
    };

    const onDeleteWallet = async () => {
        console.log('deleting wallet')
    }

    return {
        control, handleSubmit, reset, onSubmit, onDeleteWallet, watch, setValue
    }
}

export default useAddWallet