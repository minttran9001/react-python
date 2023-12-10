"use client";
import LeadsTable from "./components/LeadsTable";
import { Grid } from "@mui/material";
import { DialogTitle } from "@mui/material";
import useLeads from "./hooks/useLeads";
import AddLeadForm from "./components/AddLeadForm";

export default function Home() {
  const { leads, addLead } = useLeads();

  return (
    <Grid container padding={10}>
      <Grid item xs={12} marginBottom={10}>
        <DialogTitle>Leads</DialogTitle>
      </Grid>
      <Grid item xs={12}>
        <AddLeadForm onSubmit={addLead} />
        <LeadsTable leads={leads} />
      </Grid>
    </Grid>
  );
}
