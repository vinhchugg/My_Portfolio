// import React, { userState, useRef, useMemo, useEffect } from "react";

// const animation = (options, targetRef) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const callbackFunction = (entries) => {
//     const [entry] = entries;
//     setIsVisible(entry.isIntersecting);
//   };

//   const options = useMemo(() => {
//     return {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.3,
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (callbackFunction, options) => {
//         const currentTarget = targetRef.current;
//         if (currentTarget) observer.observe(currentTarget);
//         return () => {
//           if (currentTarget) observer.unobserve(currentTarget);
//         };
//       },
//       [targetRef, options]
//     );
//     return isVisible;
//   });
// };

// export default animation;
