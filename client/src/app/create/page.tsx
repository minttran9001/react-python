"use client";
import axios from "axios";
import CreateRoomForm from "../components/CreateRoomForm";
import { useEffect, useState } from "react";

const CreateRoomPage = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8000/api/room/me");

      setCode(data.code);
    })();
  }, []);

  return <CreateRoomForm code={code} />;
};

export default CreateRoomPage;
