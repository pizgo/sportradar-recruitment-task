import React from "react";
import {Box} from "@mui/material";
import {SingleMatchSchema} from "../../types/types";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    chosenMatch: SingleMatchSchema
}
const CustomTabPanel: React.FC<TabPanelProps> = ({chosenMatch, children, value, index, ...other}) => {

    return (
        <div role="tabpanel"
             className="bg-white border-x border-b border-primary-100 rounded rounded-t-none p-3 md:p-6 text-sm md:text-base"
             hidden={value !== index}
             id={`tabpanel-${index}`}
             aria-labelledby={`tab-${index}`}
             {...other}>
            {value === index && (
                <Box>
                    <div className="grid grid-cols-12 py-4 font-bold text-primary-200 text-center">
                        <div className="col-span-6">
                            <p>{chosenMatch.homeCompetitor.name}</p>
                        </div>
                        <div className="col-span-6">
                            <p>{chosenMatch.awayCompetitor.name}</p>
                        </div>
                    </div>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default CustomTabPanel