import React, { useRef, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import "../../styles/animated-button.styles.css";

type AnimatedButtonProps = {
  isSending: boolean;
  formData: { name: string; email: string; message: string };
  formRef: React.RefObject<HTMLFormElement>;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  isSending,
  formData,
  formRef,
}) => {
  const buttonElementRef = useRef<HTMLButtonElement>(null);

  // button animation effect
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (formRef.current?.checkValidity()) {
        // Add active class if not active
        if (!buttonElementRef.current?.classList.contains("active")) {
          buttonElementRef.current?.classList.add("active");

          // Animation
          gsap.to(buttonElementRef.current, {
            keyframes: [
              {
                "--left-wing-first-x": 50,
                "--left-wing-first-y": 100,
                "--right-wing-second-x": 50,
                "--right-wing-second-y": 100,
                duration: 0.2,
                onComplete() {
                  gsap.set(buttonElementRef.current, {
                    "--left-wing-first-y": 0,
                    "--left-wing-second-x": 40,
                    "--left-wing-second-y": 100,
                    "--left-wing-third-x": 0,
                    "--left-wing-third-y": 100,
                    "--left-body-third-x": 40,
                    "--right-wing-first-x": 50,
                    "--right-wing-first-y": 0,
                    "--right-wing-second-x": 60,
                    "--right-wing-second-y": 100,
                    "--right-wing-third-x": 100,
                    "--right-wing-third-y": 100,
                    "--right-body-third-x": 60,
                  });
                },
              },
              {
                "--left-wing-third-x": 20,
                "--left-wing-third-y": 90,
                "--left-wing-second-y": 90,
                "--left-body-third-y": 90,
                "--right-wing-third-x": 80,
                "--right-wing-third-y": 90,
                "--right-body-third-y": 90,
                "--right-wing-second-y": 90,
                duration: 0.2,
              },
              {
                "--rotate": 50,
                "--left-wing-third-y": 95,
                "--left-wing-third-x": 27,
                "--right-body-third-x": 45,
                "--right-wing-second-x": 45,
                "--right-wing-third-x": 60,
                "--right-wing-third-y": 83,
                duration: 0.25,
              },
              {
                "--rotate": 60,
                "--plane-x": -8,
                "--plane-y": 40,
                duration: 0.2,
              },
              {
                "--rotate": 40,
                "--plane-x": 45,
                "--plane-y": -300,
                "--plane-opacity": 0,
                duration: 0.375,
                onComplete() {
                  // Cleanup
                  setTimeout(() => {
                    buttonElementRef.current?.removeAttribute("style");
                    gsap.fromTo(
                      buttonElementRef.current,
                      {
                        opacity: 0,
                        y: -8,
                      },
                      {
                        opacity: 1,
                        y: 0,
                        clearProps: true,
                        duration: 0.3,
                        onComplete() {
                          buttonElementRef.current?.classList.remove("active");
                        },
                      }
                    );
                  }, 1800);
                },
              },
            ],
          });

          gsap.to(buttonElementRef.current, {
            keyframes: [
              {
                "--text-opacity": 0,
                "--border-radius": 0,
                "--left-wing-background": "#3b82f6",
                "--right-wing-background": "#3b82f6",
                duration: 0.11,
              },
              {
                "--left-wing-background": "#3b82f6",
                "--right-wing-background": "#3b82f6",
                duration: 0.14,
              },
              {
                "--left-body-background": "#3b82f6",
                "--right-body-background": "#3b82f6",
                duration: 0.25,
                delay: 0.1,
              },
              {
                "--trails-stroke": 171,
                duration: 0.22,
                delay: 0.22,
              },
              {
                "--success-opacity": 1,
                "--success-x": 0,
                duration: 0.2,
                delay: 0.15,
              },
              {
                "--success-stroke": 0,
                duration: 0.15,
              },
            ],
          });
        }
      }
    };

    // Attach the event listener
    buttonElementRef.current?.addEventListener("click", handleClick);

    // Clean up event listener on component unmount
    return () => {
      buttonElementRef.current?.removeEventListener("click", handleClick);
    };
  }, [buttonElementRef, formRef]);

  return (
    <button
      ref={buttonElementRef}
      disabled={
        isSending || !formData.name || !formData.email || !formData.message
      }
      type="submit"
      className="mx-auto animated-button"
    >
      <span className="font-semibold text-lg">
        Send
        <FaLongArrowAltRight color="white" size={20} className="inline ml-2" />
      </span>
      <span className="success">
        <svg viewBox="0 0 16 16">
          <polyline points="3.75 9 7 12 13 5"></polyline>
        </svg>
        Sent
      </span>
      <svg className="trails" viewBox="0 0 33 64">
        <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
        <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
      </svg>
      <div className="plane">
        <div className="left" />
        <div className="right" />
      </div>
    </button>
  );
};

export default AnimatedButton;
