import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import * as DATATYPES from '../data/types';
import { ProjectCard, Featured } from '../sections';

const projects = require('../data/projects.json');

export const Projects = () => {
    const [selected, setSelected] = useState<number>(0);
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    let sliderRef1 = useRef<Slider | undefined>(null);
    let sliderRef2 = useRef<Slider | undefined>(null);

    useEffect(() => {
        //@ts-ignore
        setNav1(sliderRef1);
        //@ts-ignore
        setNav2(sliderRef2);
    }, []);
    return (
        <>
            <Slider
                className="featured-list"
                asNavFor={nav2}
                ref={(
                    slider //@ts-ignore
                ) => (sliderRef1 = slider)}
            >
                {projects.map((p: DATATYPES.project, i: number) => {
                    return <Featured project={p} />;
                })}
            </Slider>
            {/* <Featured project={projects[selected]} /> */}
            {/* Slider Selector */}
            <div className="max-w-[calc(100%-5rem)] lg:max-w-[calc(100%-10rem)] w-full mx-auto mb-8 mt-auto">
                <Slider
                    asNavFor={nav1}
                    ref={(
                        slider //@ts-ignore
                    ) => (sliderRef2 = slider)}
                    className="projectSlider"
                    afterChange={idx => setSelected(idx)}
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={3}
                    initialSlide={0}
                    focusOnSelect={true}
                    centerMode={true}
                    responsive={[
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
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
                    {projects.map((p: DATATYPES.project, i: number) => {
                        return <ProjectCard project={p} />;
                    })}
                </Slider>
            </div>
        </>
    );
};
