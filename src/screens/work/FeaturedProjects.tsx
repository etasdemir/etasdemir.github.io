import React from 'react';
import styled from 'styled-components';

import FeaturedProjectItem from '../../components/FeaturedProjectItem';
import { ProjectInfo } from '../../shared/Types';

interface Props {
  featuredProjects: Array<ProjectInfo>;
}

function FeaturedProjects(props: Props) {
  const { featuredProjects } = props;

  const getAlignment = (index: number): "left" | "right" => {
    let align: "left" | "right" = 'left';
    if (index % 2 === 1) {
      align = 'right';
    }
    return align;
  };

  return (
    <ProjectContainer>
      {featuredProjects.map((item, index) => (
        <FeaturedProjectItem key={item.title + index} align={getAlignment(index)} project={item} />
      ))}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
`;

export default FeaturedProjects;