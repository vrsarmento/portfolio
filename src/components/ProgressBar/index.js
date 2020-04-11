import React from 'react';
import styled from 'styled-components';

import ColorBySkillPercent from '../../helpers/ColorBySkillPercent';

const Wrapper = styled.div`
  width: 90%;
  padding-left: 1rem;
  text-align: left;
  margin-top: 0.5rem;
`

const Bar = styled.div`
  background-color: #e0e0e0;
  padding: 0.2rem;
  border-radius: 3px;
  box-shadow: inset 0 3px 3px rgba(0, 0, 0, .2);
  text-align: center;
`

const Progress = styled.span`
  display: block;
  height: 1rem;
  background-color: ${props => props.color};
  border-radius: 3px;
  width: ${props => props.percent};
  transition: width 500ms ease-in-out;
`

const NameBar = styled.span`
  color: #1599db;
`

function ProgressBar({ skill_name, percent }) {
  return (
    <>
      <Wrapper>
        <NameBar>{ skill_name }</NameBar>
        <Bar>
          <Progress percent={percent + "%"} color={ColorBySkillPercent(percent)} />
        </Bar>
      </Wrapper>
    </>
  )
}

export default ProgressBar;