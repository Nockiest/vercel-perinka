import React, { ReactNode } from 'react';

interface SectionProps {
  color?: string;
  children: ReactNode;
  classNames?: string; // Optional classNames
  style?: React.CSSProperties; // Optional inline styles
}

const Section: React.FC<SectionProps> = ({ color, children, classNames, style }) => {


    const sectionStyle: React.CSSProperties = {
      padding: '2em 8em', // Add your desired padding
      ...style,
    };

    return (
      <section className={classNames} style={sectionStyle}>
        {children}
      </section>
    );
  };

export default Section;
