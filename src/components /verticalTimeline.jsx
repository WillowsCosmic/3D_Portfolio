
import React, { useState, useEffect, useRef } from "react"; // Added missing imports
import { motion } from "framer-motion";
import { styles } from "../styles";

const VerticalTimeline = ({ children, animate = true }) => {
    return (
      <div className="relative">
        {/* Main vertical line */}
        <div 
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-0.5"
          style={{ zIndex: 1 }}
        />
        
        {/* Timeline items container - REDUCED spacing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderRadius: '19px'}}> 
          {children}
        </div>
      </div>
    );
  };

  const VerticalTimelineElement = ({ 
    date = "",
    iconStyle = { background: '#1d1836', color: '#fff' },
    contentStyle = { background: '#1d1836', color: '#fff' },
    contentArrowStyle = { borderRight: '7px solid #232631' },
    icon = null,
    position = "right",
    children
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3, rootMargin: '50px' }
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div 
        ref={elementRef}
        className={`relative flex items-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Icon circle */}
        <div 
          className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
          style={iconStyle}
        >
          {icon}
        </div>
        
        {/* Content container */}
        <div className="ml-8 flex-1">
          {/* Arrow pointing to the icon */}
          <div 
            className="absolute left-12 top-6 w-4 h-4 transform -translate-y-1/2"
            style={{
              
              borderTop: '7px solid transparent',
              borderBottom: '7px solid white',
              ...contentArrowStyle
            }}
          />
          
          
          <div 
            className="p-7 rounded-lg shadow-lg relative" 
            style={contentStyle}
          >
            {/* Date */}
            {date && (
              <div className="text-gray-400 text-sm mb-1 font-medium"> {/* Reduced mb-2 to mb-1 */}
                {date}
              </div>
            )}
            
            {/* Content */}
            <div className="text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };

// Export both components
export { VerticalTimeline, VerticalTimelineElement };
export default VerticalTimeline;
