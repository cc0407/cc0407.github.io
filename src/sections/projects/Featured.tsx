import React from 'react';
import * as DATATYPES from '../../data/types';
import { Button } from 'antd';

interface PCI {
    project: DATATYPES.project;
}
export const Featured: React.FC<PCI> = ({ project }) => {
    return (
        <div className="flex h-full gap-16 flex-wrap lg-max:flex-col lg-max:gap-8">
            <div className="flex-1 bg-black basis-[300px] sm-max:w-90vw sm-max:h-90vw sm-max:flex-grow-0"></div>
            <div className="flex-[2] flex flex-col gap-8 justify-around my-8 lg-max:gap-4 lg-max:my-4">
                <div className="font-bold text-6xl">{project.name}</div>
                <div className="text-xl flex-grow">{project.description}</div>

                <Button className="max-w-[150px]">Learn More</Button>
            </div>
        </div>
    );
};
