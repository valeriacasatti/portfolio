/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Project from "./Project";
import "./projects.css";
import { useTranslation } from "react-i18next";

const ProjectList = ({ projects }) => {
  const { t } = useTranslation();
  return (
    <Box mb="3rem" textAlign="center">
      <Typography variant="h2" mb={5}>
        {t("projects")}
      </Typography>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          1450: { slidesPerView: 3 },
          1100: { slidesPerView: 2, spaceBetween: 0 },
          0: { slidesPerView: 1 },
        }}
      >
        {projects.length > 0 &&
          projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Project project={project} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};
export default ProjectList;
