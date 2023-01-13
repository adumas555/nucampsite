import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};
