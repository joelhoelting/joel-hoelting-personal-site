import React from 'react';

import ResumePDF from '~/assets/pdf/joel_hoelting_resume.pdf';

const ResumeLink = props => {
  return (
    <a href={ResumePDF} target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
};

export default ResumeLink;
