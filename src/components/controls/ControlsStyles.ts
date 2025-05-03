import styled from 'styled-components';

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  gap: 8px;
`;

export const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${props => (props.disabled ? '#ccc' : '#4caf50')};
  color: white;
  padding: 10px;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`;
