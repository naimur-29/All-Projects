import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// local components:
const ChangeVisibility = ({ isVisibilityOn, setIsVisibilityOn }: any) => {
  const handleVisibilityChange = () => {
    setIsVisibilityOn(!isVisibilityOn);
  };

  return isVisibilityOn ? (
    <VisibilityIcon
      onClick={handleVisibilityChange}
      style={{ cursor: "pointer" }}
    />
  ) : (
    <VisibilityOffIcon
      onClick={handleVisibilityChange}
      style={{ cursor: "pointer" }}
    />
  );
};

export const MuiTextField = () => {
  const [isVisibilityOn, setIsVisibilityOn] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Helper prop"
          required
          helperText={"Don't show your password to anywone"}
        />
        <TextField label="Password" type="password" />
        <TextField label="Disabled" disabled />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />

        <TextField
          label="Password"
          type={isVisibilityOn ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ChangeVisibility
                  isVisibilityOn={isVisibilityOn}
                  setIsVisibilityOn={setIsVisibilityOn}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={2}>
        <TextField
          label="Email"
          required
          error={value === ""}
          helperText={!value ? "required!" : "please enter a valid email"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Stack>
    </Stack>
  );
};
