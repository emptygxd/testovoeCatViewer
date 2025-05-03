import { Label } from './ControlsStyles';

type Props = {
  isChecked: boolean;
  handleCheckedChange: () => void;
  text: string;
};

export const Checkbox = ({ isChecked, handleCheckedChange, text }: Props) => {
  return (
    <Label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckedChange}
      />
      {text}
    </Label>
  );
};
