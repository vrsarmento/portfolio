import React from 'react';
import styled from 'styled-components';

import { AVATAR_URL } from '../../settings/constants';

const Image = styled.img`
  border-radius: 50%;
  width: 20rem;
  text-align: center;

  border: 5px solid #1599db;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
`

function Avatar() { 
  return (
    <Image src={AVATAR_URL} alt="Allef Gomes" />
  )
}

export default Avatar;
