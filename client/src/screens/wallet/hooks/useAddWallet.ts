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
        watch
    } = useForm({
        defaultValues: isEdit ? walletData : defaultWalletValues
    });



    // const params = 


    const onSubmit = (data: WalletDataType) => {
        if (isEdit) {
            console.log("Updating Wallet ", data);
            // API call to update wallet
        } else {
            console.log("created == ", data);
            // API call to create wallet
        }
    };

    return {
        control, handleSubmit, reset, onSubmit,
    }
}

export default useAddWallet