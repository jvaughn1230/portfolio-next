import React, { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

type ProjectType = {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: string[];
  url: string;
  tech: string[];
};

type ProjectCardProps = {
  project: ProjectType;
  classes: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, classes }) => {
  const { name, image, blurImage, description, gradient, url } = project;
  const projectCard = useRef(null);

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    const tiltOptions = {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    };

    if (projectCard.current) {
      VanillaTilt.init(projectCard.current, tiltOptions);
    }
  }, [projectCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl ${additionalClasses}`}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: "calc(100vw-2rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`project-card h-[25rem] w-[38rem] bg-black  rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="project"
          width={38}
          height={25}
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
        />
        <Image
          src={image}
          alt={name}
          fill
          placeholder="blur"
          blurDataURL={blurImage}
          className="project-image z-0"
        />
        <div
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <h1
          className="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
        <div className="tech-Icons w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden">
          <div className="flex flex-col pb-8">
            {project.tech.map((el, i) => (
              <Image
                className={`${i % 2 === 0 && "ml-16"} mb-4`}
                src={`/skills/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
        </div>
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </h2>
      </div>
    </a>
  );
};

export default ProjectCard;
