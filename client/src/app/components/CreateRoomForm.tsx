"use client";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
type TCreateRoomFormProps = {
  code: string;
};
const CreateRoomForm: React.FC<TCreateRoomFormProps> = (props) => {
  const { code } = props;
  console.log(code);

  const [values, setValues] = useState({
    guestCanPause: true,
    votesToSkip: 1,
  });

  const onGuestCanPauseChange = (e: React.ChangeEvent<any>) => {
    setValues({ ...values, guestCanPause: e.target.value === "true" });
  };

  const onVotesToSkipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, votesToSkip: Number(e.target.value) });
  };

  const onCreateRoomButtonPressed = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/room/", {
        guest_can_pause: values.guestCanPause,
        votes_to_skip: values.votesToSkip,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid padding={20} spacing={1}>
      <Grid item xs={12}>
        Create Room Page
      </Grid>
      <Grid item xs={12} spacing={2}>
        <FormControl fullWidth>
          <FormHelperText>Guest controls of playback state</FormHelperText>
          <RadioGroup row defaultValue={true}>
            <FormControlLabel
              value={true}
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="start"
              onChange={onGuestCanPauseChange}
            />
            <FormControlLabel
              value={false}
              control={<Radio color="secondary" />}
              label="No control"
              labelPlacement="start"
              onChange={onGuestCanPauseChange}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField
            label="Votes"
            variant="outlined"
            fullWidth
            required
            type="number"
            inputProps={{
              min: 0,
            }}
            helperText="Number of votes required to skip a song"
            onChange={onVotesToSkipChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={onCreateRoomButtonPressed}
          variant="outlined"
          color="primary"
        >
          Create a Room
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateRoomForm;
