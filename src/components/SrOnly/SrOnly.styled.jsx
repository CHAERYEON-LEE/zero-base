import styled from 'styled-components/macro';

export const SrOnly = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  caption& {
    position: static;
  }

  ${({ $focusable }) => {
    return $focusable
      ? /* css */ `
      &:focus {
        overflow: initial;
        clip: auto;
        clip-path: unset;
        width: initial;
        height: initial;
        margin: initial;
        border: initial;
        padding: initial;
        white-space: initial;
      }
    `
      : null;
  }}
`;
