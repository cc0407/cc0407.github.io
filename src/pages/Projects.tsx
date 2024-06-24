import { projects } from '../data/projects'; // data source
import { ProjectSlider } from '../sections/projects';

// Renders a slider of projects
export const Projects = () => {
    return <ProjectSlider datasrc={projects} aria-label="Project Gallery" />;
};
