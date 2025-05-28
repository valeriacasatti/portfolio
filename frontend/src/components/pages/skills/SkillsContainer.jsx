import { useEffect, useState } from "react";
import data from "../../../data/skills.json";
import Skills from "./Skills";

const SkillsContainer = () => {
  const [skills, setSkills] = useState([]);

  const getSkills = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    getSkills().then((res) => {
      setSkills(res);
    });
  }, []);

  return (
    <>
      <Skills skills={skills} />
    </>
  );
};

export default SkillsContainer;
