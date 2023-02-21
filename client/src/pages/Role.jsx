import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";

export function Role({ control, setRoleState }) {
  const handleClick = () => {
    setRoleState(true);
  };

  return (
    <div>
      <p>Please choose a role...</p>
      <Controller
        name="role"
        control={control}
        render={({ field: { onChange, value, ref }, fieldState }) => (
          <RadioGroup name="choose-role" value={value} onChange={onChange}>
            <FormControlLabel value="Scout" control={<Radio />} label="Scout" />
            <FormControlLabel value="Client" control={<Radio />} label="Client" />
          </RadioGroup>
        )}
      />
      <p>
        <Button variant="contained" onClick={handleClick}>
          Ok
        </Button>
      </p>
    </div>
  );
}
