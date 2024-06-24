import { experience } from '../data/experience'; // data source
import { ProjectSlider } from '../sections/projects';

// Renders a slider of experiences
export const Experience = () => {
    return (
        <ProjectSlider datasrc={experience} aria-label="Experience Gallery" />
    );
};
