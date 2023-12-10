import { Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { TAddLeadValues } from "../hooks/useLeads";

type TAddLeadFormProps = {
  onSubmit: (values: TAddLeadValues) => void;
};

const AddLeadForm: React.FC<TAddLeadFormProps> = (props) => {
  const { onSubmit } = props;
  const [values, setValues] = useState<TAddLeadValues>({
    name: "",
    email: "",
    message: "",
  });

  const onChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: e.target.value });
    };

  const handleSubmit = () => {
    onSubmit(values);
  };
  return (
    <Grid spacing={3} marginBottom={10}>
      <Grid item xs={12} marginBottom={1}>
        Add Lead
      </Grid>
      <Grid item xs={12} marginBottom={2}>
        <FormControl>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            onChange={onChange("name")}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} marginBottom={2}>
        <FormControl>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            onChange={onChange("email")}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} marginBottom={2}>
        <FormControl>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            onChange={onChange("message")}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="outlined" color="primary">
          Add Lead
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddLeadForm;
