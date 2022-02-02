import React from "react";
import { FeaturedRequirements } from "./FeaturedGame.styles";

export const FeaturedGameRequirements = ({requirements}) => {
    if(requirements) {
        return (
            <FeaturedRequirements>
                <h3>Minimum System Requirements</h3>
                <p>OS: {requirements.os}</p>
                <p>Graphics: {requirements.graphics}</p>
                <p>Memory: {requirements.memory}</p>
                <p>Processor: {requirements.processor}</p>
                <p>Storage: {requirements.storage}</p>
            </FeaturedRequirements>
        )
    } else {
        return <></>;
    }
}