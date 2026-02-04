import React from "react";
import ProjectGallery from "../../components/ProjectGallery";

const Project4 = () => {
  const images = [
    {
      id: 1,
      bg: "#e8e8e8",
      width: "380px",
      height: "520px",
      top: "8%",
      gap: "45px",
    },
    {
      id: 2,
      bg: "#d5d5d5",
      width: "420px",
      height: "480px",
      top: "28%",
      gap: "62px",
    },
    {
      id: 3,
      bg: "#ececec",
      width: "340px",
      height: "560px",
      top: "5%",
      gap: "38px",
    },
    {
      id: 4,
      bg: "#dadada",
      width: "400px",
      height: "500px",
      top: "22%",
      gap: "70px",
    },
    {
      id: 5,
      bg: "#e0e0e0",
      width: "360px",
      height: "540px",
      top: "15%",
      gap: "55px",
    },
    {
      id: 6,
      bg: "#d8d8d8",
      width: "390px",
      height: "510px",
      top: "12%",
      gap: "48px",
    },
    {
      id: 7,
      bg: "#e5e5e5",
      width: "410px",
      height: "490px",
      top: "20%",
      gap: "58px",
    },
    {
      id: 8,
      bg: "#dddddd",
      width: "370px",
      height: "530px",
      top: "10%",
      gap: "42px",
    },
  ];

  return (
    <ProjectGallery
      title="project 4"
      subtitle="desc / 2024"
      images={images}
    />
  );
};

export default Project4;
