import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import ProgressBar from '../ProgressBar';

import { SKILLS } from '../../settings/constants';

const Container = styled.div`
  height: 100%;
  width: 20%;
  text-align: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f6f5f5;
  overflow-x: hidden;
  padding-top: 1.5rem;
`

const Name = styled.h1`
  text-align: center;
  color: #1599db;
`

const ContentDescriptions = styled.div`
  text-align: center;
`

const Descriptions = styled.h3`
  color: #1599db;
`

const Skills = styled.div`
  text-align: center;
`

function Sidebar() { 
  return (
    <Container >
      <Avatar />
      <Name>Allef Gomes</Name>
      <ContentDescriptions>
        <Descriptions>
          Analista de Sistemas
        </Descriptions>
      </ContentDescriptions>

      <Skills>
        {
          SKILLS.map(skill =>
            <ProgressBar
              key={skill.key}
              percent={skill.percent}
              skill_name={skill.name}
            />
          )
        }
      </Skills>
    </Container>
  )
}

export default Sidebar;