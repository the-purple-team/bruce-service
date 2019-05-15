import * as React from 'react';
import styled from 'styled-components';

// export const Wrapper = styled.div`
//   text-align: center;
// `;

export const Wrapper = ({ children }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
);
