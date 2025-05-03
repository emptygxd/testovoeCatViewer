import { Checkbox } from './Checkbox';
import { Button } from './Button';

import { ControlsWrapper } from './ControlsStyles';

type Props = {
  isEnabled: boolean;
  toggleIsEnabled: () => void;
  isAutoRefresh: boolean;
  toggleIsAutoRefresh: () => void;
  loadCat: () => void;
};

export const Controls = ({
  isEnabled,
  toggleIsEnabled,
  isAutoRefresh,
  toggleIsAutoRefresh,
  loadCat,
}: Props) => {
  return (
    <ControlsWrapper>
      <Checkbox
        isChecked={isEnabled}
        handleCheckedChange={toggleIsEnabled}
        text="Enabled"
      />

      <Checkbox
        isChecked={isAutoRefresh}
        handleCheckedChange={toggleIsAutoRefresh}
        text="Auto-refresh every 5 seconds"
      />

      <Button isEnadled={isEnabled} loadCat={loadCat} />
    </ControlsWrapper>
  );
};
