import React from "react";
import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props => props.fontSize ? css`
          font-size: props.fontSize;             
`: ''}
${props => props.color ? css`
color: props.color;             
`: ''}
`