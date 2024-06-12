import React from 'react';
import * as DATATYPES from '../../data/types';
import { Button } from 'antd';

interface PCI {
    project: DATATYPES.project;
}
export const Featured: React.FC<PCI> = ({ project }) => {
    return (
        <div className="flex h-full gap-16 lg-max:flex-col lg-max:gap-8">
            {project.image !== undefined && (
                <img
                    src={project.image}
                    className="sm-max:w-90vw sm-max:h-90vw sm-max:flex-grow-0 flex-shrink-[1] object-contain"
                />
            )}
            <div className="flex flex-col gap-8 justify-around my-8 lg-max:gap-4 lg-max:my-4 basis-96 flex-grow">
                <div className="font-bold sm-max:text-3xl text-6xl">
                    {project.name}
                </div>
                <div className="text-xl flex-grow font-normal">
                    {project.description}
                </div>

                <Button className="max-w-[150px]">Learn More</Button>
            </div>
        </div>
    );
};
