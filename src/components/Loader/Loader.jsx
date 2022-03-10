import { Rings } from "react-loader-spinner";
import {Loading} from "../Loader/Loader.styled"

export const Loader = () => {
    return (
        <Loading>
            <Rings color="#303f9f" height={80} width={80}  />
        </Loading>
        
    )
};