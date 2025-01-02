import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa"; // Import directly from 'react-icons/fa'
import { TiArrowRight } from "react-icons/ti";

import "./SeasonalHeader.css";

import { AlertBox } from "../AlertBox/AlertBox";

export const SeasonalHeader = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // State to toggle AlertBox visibility

  const titles = [
    "Cold couldnt hold you back. Keep warm on the go with out winter range.",
  ];

  // Cycle through titles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [titles.length]);

  const toggleAlert = () => setShowAlert((prev) => !prev); // Toggle Alert visibility

  return (
    <>
      <Navbar className="SeasonalHeaderBg" expand="lg">
        <Container className="d-flex justify-content-center align-items-center">
          <div
            className="dropdownTitle"
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <span className="dropdown-title">{titles[currentTitleIndex]} <TiArrowRight /></span>
            <FaCaretDown className="dropdown-icon" />
          </div>
        </Container>
      </Navbar>

      {/* Show AlertBox when toggled */}
      {showAlert && <AlertBox onClose={toggleAlert} />}
    </>
  );
};
