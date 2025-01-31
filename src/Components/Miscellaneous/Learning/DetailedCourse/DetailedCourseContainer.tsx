"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { DetailedCourses, Learning } from "@/utils/Constant";
import BlogSingle from "./BlogSingle/BlogSingle";
import CourseFilter from "../LearningList/CourseFilter/CourseFilter";

const DetailedCourseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DetailedCourses} parent={Learning} title={DetailedCourses} />
      <Container fluid>
        <Row>
          <BlogSingle />
          <CourseFilter />
        </Row>
      </Container>
    </>
  );
};

export default DetailedCourseContainer;
