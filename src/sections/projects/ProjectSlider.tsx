import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'; // external carousel library
import * as DATATYPES from '../../data/types'; // for type checking
import { ProjectCard, Featured } from '.'; // for displaying project information

// Interface for component props
interface MI {
    datasrc: DATATYPES.project[];
}

// Component for displaying a carousel of projects. Renders two carousels, one for navigation and one to display
export const ProjectSlider: React.FC<MI> = ({ datasrc }) => {
    // State for tracking currently selected project
    const [selected, setSelected] = useState<number>(0);
    // State for storing references to the two sliders, and the two refs
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    let sliderRef1 = useRef<Slider | undefined>(null);
    let sliderRef2 = useRef<Slider | undefined>(null);

    // Synchronizes the two sliders
    useEffect(() => {
        //@ts-ignore
        setNav1(sliderRef1);
        //@ts-ignore
        setNav2(sliderRef2);
    }, []);
    return (
        <>
            {/* Main featured project slider */}
            <Slider
                className="featured-list"
                asNavFor={nav2} // Synchronize with the second slider
                ref={(
                    slider //@ts-ignore
                ) => (sliderRef1 = slider)}
                aria-label="Featured Projects" // ARIA label for the slider
            >
                {/* Map through datasrc to display each project as a Featured component */}
                {datasrc.map((p: DATATYPES.project, i: number) => {
                    return (
                        <Featured
                            project={p}
                            ariaLabel={`Slide ${i + 1} of ${datasrc.length}`}
                        />
                    );
                })}
            </Slider>
            {/* Slider for selecting projects */}
            <div className="max-w-[calc(100%-5rem)] lg:max-w-[calc(100%-10rem)] w-full mx-auto mb-8 mt-auto">
                <Slider
                    asNavFor={nav1} // Synchronize with the first slider
                    ref={(
                        slider //@ts-ignore
                    ) => (sliderRef2 = slider)}
                    className="projectSlider"
                    afterChange={idx => setSelected(idx)} // Update selected project on slide change
                    dots={true} // Show dot indicators
                    infinite={true} // Enable infinite looping
                    speed={500} // Transition speed
                    slidesToShow={5}
                    slidesToScroll={1}
                    initialSlide={0}
                    focusOnSelect={true}
                    centerMode={false}
                    aria-label="Featured Selector" // ARIA label for the navigation slider
                    // Responsive settings for different breakpoints
                    responsive={[
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                >
                    {/* Map through datasrc to display each project as a ProjectCard component */}
                    {datasrc.map((p: DATATYPES.project, i: number) => {
                        return <ProjectCard project={p} />;
                    })}
                </Slider>
            </div>
        </>
    );
};
