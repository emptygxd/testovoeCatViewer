import { StyledButton } from './ControlsStyles';

type Props = {
  isEnadled: boolean;
  loadCat: () => void;
};

export const Button = ({ isEnadled, loadCat }: Props) => {
  return (
    <>
      <StyledButton onClick={loadCat} disabled={!isEnadled}>
        Get cat
      </StyledButton>
    </>
  );
};
