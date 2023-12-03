import React, { ReactNode } from 'react';

interface SectionProps {
  color?: string;
  children: ReactNode;
  classNames?: string; // Optional classNames
  style?: React.CSSProperties; // Optional inline styles
}

const Section: React.FC<SectionProps> = ({ color, children, classNames, style }) => {


    const sectionStyle: React.CSSProperties = {
      ...style,
    };

    return (
      <section className={`px-8 mt-4 py-4 mx-auto md:p-4 md:px-32 ${classNames}`} style={sectionStyle}>
        {children}
      </section>
    );
  };

export default Section;
