import React, { ReactNode } from 'react';

interface SectionProps {
  color?: string;
  children: ReactNode;
  classNames?: string; // Optional classNames
  style?: React.CSSProperties; // Optional inline styles
}

const Section: React.FC<SectionProps> = ({ color, children, classNames, style }) => {


    const sectionStyle: React.CSSProperties = {
      // padding: '2em 4em', // Add your desired padding
      ...style,
    };

    return (
      <section className={`p-2 md:p-4 ${classNames}`} style={sectionStyle}>
        {children}
      </section>
    );
  };

export default Section;
