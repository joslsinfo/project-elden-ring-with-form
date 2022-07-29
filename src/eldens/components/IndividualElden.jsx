import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader";
import routes from "../../router/routes";
import EldenService from "../service/EldenService";
import EldenMoves from "./EldenMoves";
import { capitalize } from "../../utils";

const eldenService = new EldenService();

const IndividualElden = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getEldenById = async () => {
    if (params.id) {
      setData(await eldenService.getEldenById(params.id));
    }
  };

  useEffect(() => {
    getEldenById();
  }, [params]);

  if (data) {
    return (
      <>
        <ProfileHeader
          profileImage={data.image}
          alt={capitalize(data.name)}
          backTo={routes.home}
          backToName="Home"
          name={capitalize(data.name)}
        />
        <EldenMoves moves={data.moves} />
      </>
    );
  } else {
    return null;
  }
};

export default IndividualElden;
