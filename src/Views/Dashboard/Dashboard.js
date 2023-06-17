import React from "react";
import Header from "../../Model/Header";
import { useAuth0 } from "@auth0/auth0-react";
import Basic from "../../Model/Dashboard/Basic";
import Insights from "../../Model/Dashboard/Insights";
import Newsletter from "../../Model/Shared/Newsletter";

export default function Dashboard() {
  const { logout } = useAuth0();

  return (
    <>
      <Header logoutStatus={true} />
      <Basic />
      <Insights />
      <Newsletter text="Provide Your Email Address For Get Free E-Book  " />
    </>
  );
}
