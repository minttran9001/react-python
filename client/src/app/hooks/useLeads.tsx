"use client";
import { useEffect } from "react";
import { TLead, useGlobalContext } from "../Context/store";
import axios from "axios";

export type TAddLeadValues = {
  name: TLead["name"];
  email: TLead["email"];
  message: TLead["message"];
};

const useLeads = () => {
  const { leads, setLeads } = useGlobalContext();

  useEffect(() => {
    const fetchLeads = async () => {
      const { data } = await axios.get<TLead[]>(
        "http://localhost:8000/api/leads/"
      );
      setLeads(data);
    };
    fetchLeads();
  }, []);

  const addLead = async (values: TAddLeadValues) => {
    const { data } = await axios.post<TLead>(
      "http://localhost:8000/api/leads/",
      values
    );
    setLeads([...leads, data]);
  };

  return { leads, addLead };
};

export default useLeads;
