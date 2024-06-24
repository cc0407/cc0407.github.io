import React from 'react';
import * as DATATYPES from '../../data/types';
import { Button } from 'antd';
import { FaGithub } from 'react-icons/fa';

interface PCI {
    project: DATATYPES.project;
}
export const Featured: React.FC<PCI> = ({ project }) => {
    return (
        <div className="flex h-full gap-16 lg-max:flex-col lg-max:gap-8 lg-max:justify-start justify-center sm-max:overflow-y-auto overflow-hidden">
            <>
                {/* Poster Image */}
                {project.poster !== undefined && (
                    <img
                        src={project.poster}
                        className="lg-max:!hidden lg:!block lg-max:max-w-[600px] sm-max:flex-grow-0 shrink object-contain border-solid border-8 border-darkBlue min-w-0"
                    />
                )}
                {/* Banner Image */}
                {project.banner !== undefined && (
                    <img
                        src={project.banner}
                        className="lg-max:!block lg:!hidden mx-auto shrink object-contain border-solid border-8 border-darkBlue min-w-0 max-w-[85vw] box-border"
                    />
                )}
            </>
            <div className="flex flex-col gap-8 justify-start my-8 lg-max:gap-4 lg-max:my-4 basis-96 flex-grow max-w-[800px] shrink-0">
                <div className="font-bold sm-max:text-3xl text-6xl order-1">
                    {project.name}
                </div>
                <div className="sm-max:text-lg text-xl font-normal order-2 lg-max:order-3">
                    {project.description}
                </div>

                <div className="flex gap-8 order-3 lg-max:order-2">
                    {project.learnLink && (
                        <Button
                            className="max-w-[150px] flex-1 flex justify-center no-underline"
                            href={project.learnLink}
                            target="_blank"
                            icon={<FaGithub className="h-6" />}
                        >
                            Repository
                        </Button>
                    )}
                    {project.prodLink && (
                        <Button
                            className="max-w-[150px] flex-1 flex justify-center no-underline"
                            href={project.prodLink}
                            target="_blank"
                            type="primary"
                        >
                            View Live
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
