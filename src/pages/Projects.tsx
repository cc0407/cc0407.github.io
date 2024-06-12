import { projects } from '../data/projects';
import { ProjectSlider } from '../sections/projects';

export const Projects = () => {
    return <ProjectSlider datasrc={projects} />;
};
