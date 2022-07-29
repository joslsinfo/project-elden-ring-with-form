import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const ProfileHeader = ({ profileImage, alt, backTo, backToName, name }) => {
  return (
    <>
      <Nav className="mb-5">
        <Nav.Item>
          <Nav.Link as={Link} to={backTo}>
            {backToName}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Image
        className="border border-5"
        roundedCircle
        src={profileImage}
        alt={alt}
      />
      <h1>{name}</h1>
    </>
  );
};

export default ProfileHeader;
