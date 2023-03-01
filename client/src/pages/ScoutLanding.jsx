import { faker } from "@faker-js/faker";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../utils/consts";

export function ScoutLanding() {
  const { checkForUser } = useContext(UserContext);
  checkForUser;

  const status = [
    "In development",
    "On submission",
    "In auction",
    "Sold",
    "Published",
    "International submission",
  ];

  const bool = [true, false];
  // const confidentialValue = bool[Math.floor(Math.random * bool.length)];

  const material = ["None", "Sample pages", "Proposal", "Full ms.", "Partial ms."];

  let seedData = {
    title: faker.music.songName(),
    authorFirstName: faker.name.firstName(),
    authorLastName: faker.name.lastName(),
    status: status[Math.floor(Math.random() * status.length)],
    confidential: bool[Math.floor(Math.random() * bool.length)],
    agency: faker.company.name(),
    publisher: faker.company.name(),
    editor: `${faker.name.firstName()} ${faker.name.lastName()}`,
    currentMaterial: material[Math.floor(Math.random() * material.length)],
    details: faker.random.words(150),
    internalNotes: faker.random.words(60),
    rightsSold: "",
    addToReport: "",
  };

  console.log(faker.helpers.uniqueArray(faker.music.songName));

  const handleClick = async () => {
    try {
      await axios.post(BASE_URL + "titles/add", seedData, { withCredentials: true });
      console.log("title added!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Welcome to the scout landing page...
      </Typography>
      <Button onClick={handleClick} variant="contained">
        Add a placeholder title
      </Button>
    </div>
  );
}
