import { Dimensions } from "react-native";

interface IGetDimensinsParameters {
    dimension: 'width' | 'height';
    scaledSize: 'window' | 'screen';
};

export const getDimensions = ({ 
    dimension,
    scaledSize
}: IGetDimensinsParameters) => {
    return dimension === 'width' 
        ? Dimensions.get(scaledSize).width
        : Dimensions.get(scaledSize).height
};