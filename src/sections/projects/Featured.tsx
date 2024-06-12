import React from 'react';
import * as DATATYPES from '../../data/types';
import { Button } from 'antd';

interface PCI {
    project: DATATYPES.project;
}
export const Featured: React.FC<PCI> = ({ project }) => {
    return (
        <div className="flex h-full gap-16 lg-max:flex-col lg-max:gap-8 justify-center">
            {project.image !== undefined && (
                <img
                    src={project.image}
                    className="sm-max:w-90vw sm-max:h-90vw sm-max:flex-grow-0 flex-shrink object-contain border-solid border-8 border-darkBlue"
                />
            )}
            <div className="flex flex-col gap-8 justify-around my-8 lg-max:gap-4 lg-max:my-4 basis-96 flex-grow max-w-[800px]">
                <div className="font-bold sm-max:text-3xl text-6xl">
                    {project.name}
                </div>
                <div className="sm-max:text-lg text-xl flex-grow font-normal">
                    {project.description}
                </div>

                {project.link && (
                    <Button
                        className="max-w-[150px]"
                        onClick={() => {
                            if (project.link !== undefined)
                                window.location.href = project.link;
                            return;
                        }}
                    >
                        Learn More
                    </Button>
                )}
            </div>
        </div>
    );
};
