import cx from 'clsx';
import React, { useEffect } from 'react';

import sharedSectionStyles from '../../styles/pageSectionStyles';
import useStyles from './styles';

const ProjectSection = () => {
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  useEffect(() => {});
  return (
    <div
      className={cx(
        sharedClasses.sectionWrapper,
        sharedClasses.lightWrapper,
        classes.watermarkWrapper
      )}
    ></div>
  );
};

export default ProjectSection;
