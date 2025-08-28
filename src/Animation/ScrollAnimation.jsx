// import React, { useEffect, useRef, useState } from "react";

// const ScrollAnimation = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 } // 20% of element must be visible
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   const animations = {
//     "fade-up": { transform: isVisible ? "translateY(0)" : "translateY(50px)" },
//     "fade-down": {
//       transform: isVisible ? "translateY(0)" : "translateY(-50px)",
//     },
//     "fade-left": {
//       transform: isVisible ? "translateX(0)" : "translateX(-50px)",
//     },
//     "fade-right": {
//       transform: isVisible ? "translateX(0)" : "translateX(50px)",
//     },
//     "zoom-in": { transform: isVisible ? "scale(1)" : "scale(0.8)" },
//     rotate: { transform: isVisible ? "rotate(0deg)" : "rotate(15deg)" },
//   };

//   return (
//     <div
//       ref={elementRef}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(50px)",
//         transition: "all 0.8s ease-out",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollAnimation;

import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ children, type = "fade-up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animations = {
    "fade-up": { transform: isVisible ? "translateY(0)" : "translateY(50px)" },
    "fade-down": {
      transform: isVisible ? "translateY(0)" : "translateY(-50px)",
    },
    "fade-left": {
      transform: isVisible ? "translateX(0)" : "translateX(-50px)",
    },
    "fade-right": {
      transform: isVisible ? "translateX(0)" : "translateX(50px)",
    },
    "zoom-in": { transform: isVisible ? "scale(1)" : "scale(0.8)" },
    rotate: { transform: isVisible ? "rotate(0deg)" : "rotate(15deg)" },
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        ...animations[type],
        transition: `all 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
