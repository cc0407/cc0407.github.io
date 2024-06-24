import React from 'react';
import * as DATATYPES from '../../data/types';
import { Button } from 'antd';
import { FaGithub } from 'react-icons/fa';

// Defines the props for the Featured component
interface PCI {
    project: DATATYPES.project;
    ariaLabel?: string;
}

// The Featured component displays detailed information about a project
export const Featured: React.FC<PCI> = ({ project, ariaLabel }) => {
    // Error checking: Render an error message if project is null or undefined
    if (!project) {
        return <div>Project data unavailable.</div>;
    }

    return (
        <div
            className="flex h-full gap-16 lg-max:flex-col lg-max:gap-8 lg-max:justify-start justify-center sm-max:overflow-y-auto overflow-hidden"
            aria-roledescription="slide"
            aria-label={ariaLabel || 'Featured Project Slide'}
        >
            <>
                {/* Poster Image (desktop view) (if available) */}
                {project.poster !== undefined && (
                    <img
                        src={project.poster}
                        alt={`Poster for ${project.name}`}
                        className="lg-max:!hidden lg:!block lg-max:max-w-[600px] sm-max:flex-grow-0 shrink object-contain border-solid border-8 border-darkBlue min-w-0"
                    />
                )}
                {/* Banner Image (mobile view) (if available)*/}
                {project.banner !== undefined && (
                    <img
                        src={project.banner}
                        alt={`Banner for ${project.name}`}
                        className="lg-max:!block lg:!hidden mx-auto shrink object-contain border-solid border-8 border-darkBlue min-w-0 max-w-[85vw] box-border"
                    />
                )}
            </>
            {/* Container for project details */}
            <div className="flex flex-col gap-8 justify-start my-8 lg-max:gap-4 lg-max:my-4 basis-96 flex-grow max-w-[800px] shrink-0">
                {/* Project name */}
                <div className="font-bold sm-max:text-3xl text-6xl order-1">
                    {project.name || 'Project Name Unavailable'}
                </div>
                {/* Project description */}
                <div className="sm-max:text-lg text-xl font-normal order-2 lg-max:order-3">
                    {project.description || 'Description Unavailable.'}
                </div>

                {/* Container for project links */}
                <div className="flex gap-8 order-3 lg-max:order-2">
                    {/* Button to learn more about project (if available) */}
                    {project.learnLink && (
                        <Button
                            className="max-w-[150px] flex-1 flex justify-center no-underline"
                            href={project.learnLink}
                            target="_blank"
                            rel="noopener noreferrer" // Improve security for _blank links
                            aria-label={`Learn more about ${project.name}`}
                            icon={<FaGithub className="h-6" />}
                        >
                            Repository
                        </Button>
                    )}
                    {/* Button to view live project (if available) */}
                    {project.prodLink && (
                        <Button
                            className="max-w-[150px] flex-1 flex justify-center no-underline"
                            href={project.prodLink}
                            target="_blank"
                            rel="noopener noreferrer" // Improve security for _blank links
                            aria-label={`View live version of ${project.name}`}
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
