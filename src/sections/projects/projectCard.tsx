import React from 'react';
import * as DATATYPES from '../../data/types';

interface PCI {
    project: DATATYPES.project;
}
export const ProjectCard: React.FC<PCI> = ({ project }) => {
    return <div className="text-center">{project.name}</div>;
};
