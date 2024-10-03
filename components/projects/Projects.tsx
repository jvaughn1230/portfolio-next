import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@/styles/projects.styles.css";
import { MENULINKS, PROJECTSLIST } from "@/lib/constants";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

type ProjectsProps = {
  isDesktop: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ isDesktop }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionTitleRef = useRef<HTMLDivElement | null>(null);

  console.log("proects props", isDesktop);

  useEffect(() => {
    let projectsScrollTrigger: ScrollTrigger | null = null;
    let projectsTimeline: gsap.core.Timeline | null = null;

    if (isDesktop) {
      // Initiating scroll-triggered animations for desktop view
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      // Mobile/Tablet logic: enable horizontal scrolling
      const projectWrapper = sectionRef.current?.querySelector(
        ".project-wrapper"
      ) as HTMLElement | null;
      if (projectWrapper) {
        projectWrapper.style.width = "calc(100vw - 1rem)";
        projectWrapper.style.overflowX = "scroll";
      }
    }

    // Initiate reveal animation for both mobile and desktop
    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      // Cleanup on component unmount
      projectsScrollTrigger?.kill();
      projectsTimeline?.kill();
      revealScrollTrigger?.kill();
      revealTimeline?.progress(1);
    };
  }, [isDesktop]);

  //  reveal animation using ScrollTrigger
  const getRevealSt = (): [gsap.core.Timeline, ScrollTrigger] => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    const staggeredRevealElements =
      sectionRef.current?.querySelectorAll(".staggered-reveal");
    if (staggeredRevealElements && staggeredRevealElements.length > 0) {
      revealTl.from(
        staggeredRevealElements,
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );
    }

    // ScrollTrigger for reveal animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current as HTMLElement,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  // scroll-based project animation using ScrollTrigger (for desktop view)
  const getProjectsSt = (): [gsap.core.Timeline, ScrollTrigger] => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });

    const sidePadding =
      document.body.clientWidth -
      (sectionRef.current?.querySelector(".inner-container") as HTMLElement)
        .clientWidth;
    const elementWidth =
      sidePadding +
      (sectionRef.current?.querySelector(".project-wrapper") as HTMLElement)
        .clientWidth;

    if (sectionRef.current) {
      sectionRef.current.style.width = `${elementWidth}px`;
    }

    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;

    timeline
      .to(sectionRef.current, { x: width }) // Animates horizontal scroll
      .to(sectionTitleRef.current, { x: -width }, "<"); // Moves title in opposite direction

    // ScrollTrigger for horizontal scroll effect
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current as HTMLElement,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
    });

    return [timeline, scrollTrigger];
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className="w-full relative select-none section-container transform-gpu"
    >
      <div className="flex flex-col py- justify-center h-full">
        <div
          ref={sectionTitleRef}
          className="flex flex-col inner-container transform-gpu"
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            PROJECTS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            My Projects
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
            Some things I&apos;ve built with love, expertise, and a pinch of
            magical ingredients.
          </h2>
        </div>

        {/* project scroll section */}
        <div
          className={` flex project-wrapper no-scrollbar w-fit staggered-reveal`}
        >
          {PROJECTSLIST.map((project, index) => (
            <ProjectCard
              classes={
                index === PROJECTSLIST.length - 1
                  ? ""
                  : "mr-10 xs:mr-12 sm:mr-16"
              }
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
