import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import AutoLink from "../../components/AutoLink";
import Nav from "../../components/Nav";

interface projectTypes {
    type: "work" | "personal"
}

interface project extends projectTypes {
    name: string;
    link: string;
    target: "_blank" | "_self"
}

export const Project = ({data}) => {
    console.log(data);
    const project = data.project;
    return (
        <div className="min-h-screen column bg-offWhite">
          <Nav 
            active={project.projectType} // Active refers to the position on the nav bar, makes it bolded
          />
            <div className="w-full column items-center pt-12 flex-grow-default">
                <div className="m-4 p-4 bg-main rounded-2 text-white max-w-screen-1280 w-full min-h-128 grid auto-cols-fr grid-flow-row 640:grid-flow-col relative">
                    <AutoLink to={"/" + project.projectType} className="m-4 absolute z-10">
                        Return
                    </AutoLink>
                    {/* Left Half */}
                    <div className="flex justify-center items-center min-w-80">
                        <GatsbyImage 
                            /* @ts-ignore */
                            image={getImage(data.file)}
                            alt={"test"}
                            formats={["webp"]}
                            objectFit="cover"
                            quality={75}
                            outputPixelDensities={[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]}
                            breakpoints={[190,210,260,290,360,400,440,500, 640, 800, 1024, 1280, 1440, 1920]}
                        />
                    </div>

                    {/* Right Half */}
                    <div className="min-w-80 flex flex-col gap-8 items-start p-4">
                        <div className="projectTitle">
                            {project.name}
                        </div>
                        <div className="projectDescription">
                            {project.description}
                        </div>
                        <AutoLink to={project.link} className="">
                            View Project
                        </AutoLink>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export const query = graphql`
  query($id: String, $slug: String) {
    project(id: { eq: $id }) {
        ...content
    }
    file(name: {eq: $slug}, extension: {regex: "/[(png)|(jpg)|(webp)]/"}){
        childImageSharp {
          gatsbyImageData
        }
        name
      }
  }
`

export default Project;