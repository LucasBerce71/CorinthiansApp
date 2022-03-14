import styled from "styled-components/native";
import { getDimensions } from "../../utils/getDimensions";

export const Container = styled.View`
    align-items: center;
    justify-content: center;

    width: ${getDimensions({ dimension: 'width', scaledSize: 'screen' })}px;
    height: ${getDimensions({ dimension: 'height', scaledSize: 'screen' }) / 4}px;

    background-color: #ff0000;
`;

export const Title = styled.Text`
    color: #fff;

    font-weight: bold;
    font-size: 28px;
`;

export const Subtitle = styled.Text`
    color: #fff;

    font-weight: bold;
    font-size: 20px;

    margin-top: 20px;
`;