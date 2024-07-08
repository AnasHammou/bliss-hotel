"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React from "react";
import styles from "./BlissHotel.module.css";

export const Explore = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    alert("You have successfully subscribed to our mailing list!");
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Navigation Bar */}
      <div
        className="d-flex justify-content-center"
        style={{
          width: "100%",
          height: "60px",
          position: "absolute",
          top: "16px",
        }}
      >
        <div
          style={{
            margin: "0 20px",
            color: "black",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
          onClick={() => router.push("/")}
        >
          Home
        </div>
        <div
          style={{
            margin: "0 20px",
            color: "#7C6A46",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
          onClick={() => router.push("/explore")}
        >
          Explore
        </div>
        <div
          style={{
            margin: "0 20px",
            color: "black",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
          onClick={() => router.push("/rooms")}
        >
          Rooms
        </div>
        <div
          style={{
            margin: "0 20px",
            color: "black",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
          onClick={() => router.push("/about")}
        >
          About
        </div>
        <div
          style={{
            margin: "0 20px",
            color: "black",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
          onClick={() => router.push("/contact")}
        >
          Contact
        </div>
      </div>
      {/* Book Now Button */}
      <div style={{ position: "absolute", right: "20px", top: "16px" }}>
        <button
          style={{
            background: "#7C6A46",
            borderRadius: "5px",
            color: "white",
            fontSize: "15px",
            fontFamily: "Poppins",
            fontWeight: "500",
            padding: "10px 20px",
          }}
          onClick={() => router.push("/booking")}
        >
          Book now
        </button>
      </div>
      {/* Main Image Placeholder */}
      <div
        className={styles.mainImage}
        style={{
          width: "100%",
          height: "80vh",
          background: "rgba(124, 106, 70, 0.50)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <img
          src="/explore.png"
          alt="Main Image"
          style={{
            position: "absolute",
            top: 70,
            left: 160,
            width: "80%",
            height: "650px",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Image */}
        <img
          src="/mainImageFilter.png"
          alt="Main Image Filter"
          style={{
            position: "absolute",
            top: 70,
            left: 160,
            width: "80%",
            height: "650px",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "60px",
            fontFamily: "Mulish",
            fontWeight: "800",
            wordWrap: "break-word",
            zIndex: 1,
          }}
        >
          Learn More!
        </div>
        {/* Subtitle */}
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "30px",
            fontFamily: "Mulish",
            fontWeight: "600",
            wordWrap: "break-word",
            zIndex: 1,
          }}
        >
          Experience Comfort and Luxury at Bliss Hotel
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "40px 0",
          minHeight: "2000px",
        }}
      >
        {/* Title */}
        <div
          style={{
            color: "#1C1C1C",
            fontSize: 40,
            fontFamily: "Raleway",
            fontWeight: "600",
            wordWrap: "break-word",
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "40px",
          }}
        >
          Lots to Explore!
        </div>

        {/* Content Sections */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "60px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Section 1 */}
          <div style={{ width: "45%", minWidth: "500px" }}>
            {/* Image */}
            <img
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(0deg, #7C6A46 0%, #7C6A46 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 212,
              }}
              src="/luxRooms.png"
            />
            {/* Text */}
            <div
              style={{
                width: "70%",
                height: "200px",
                background: "white",
                boxShadow: "0px 4px 30px -5px rgba(0, 0, 0, 0.15)",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: "20px",
                margin: "0 auto",
                marginBottom: "100px",
              }}
            >
              <div
                style={{
                  color: "#7C6A46",
                  fontSize: 24,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Luxurious rooms
              </div>
              <br />
              <br />
              <div
                style={{
                  width: "70%",
                  textAlign: "justify",
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Mulish",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Treat yourself with any of our rooms. They are all deemed to be
                Luxurious, displayed for a great price.
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div style={{ width: "45%", minWidth: "300px" }}>
            {/* Image */}
            <img
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(0deg, #7C6A46 0%, #7C6A46 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 212,
              }}
              src="/gym.png"
            />
            {/* Text */}
            <div
              style={{
                width: "70%",
                height: "200px",
                background: "white",
                boxShadow: "0px 4px 30px -5px rgba(0, 0, 0, 0.15)",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: "20px",
                margin: "0 auto",
                marginBottom: "100px",
              }}
            >
              <div
                style={{
                  color: "#7C6A46",
                  fontSize: 24,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                State-of-the-art gym
              </div>
              <br />
              <br />
              <div
                style={{
                  width: "70%",
                  textAlign: "justify",
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Mulish",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Welcome to Bliss Hotel, your premier destination for comfort,
                relaxation, and fitness in Ottawa, Ontario. We offer a variety
                of beverage in the morning for those at the gym.
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div style={{ width: "45%", minWidth: "300px" }}>
            {/* Image */}
            <img
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(0deg, #7C6A46 0%, #7C6A46 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 212,
              }}
              src="/services.png"
            />
            {/* Text */}
            <div
              style={{
                width: "70%",
                height: "200px",
                background: "white",
                boxShadow: "0px 4px 30px -5px rgba(0, 0, 0, 0.15)",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: "20px",
                margin: "0 auto",
                marginBottom: "100px",
              }}
            >
              <div
                style={{
                  color: "#7C6A46",
                  fontSize: 24,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Premium services
              </div>
              <br />
              <br />
              <div
                style={{
                  width: "70%",
                  textAlign: "justify",
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Mulish",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Please contact the management team for Spa, City Tours, and
                other arrangments. We are proudly closely tied with Ottawa and
                would love to help better your stay in this lovely city.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.additionalSection}>
        <div className={styles.bottomSection}>
          <div className={styles.leftColumn}>
            <div className={styles.hotelName}>Bliss Hotel</div>
            <div className={styles.quickLinks}>Quick links</div>
            <div className={styles.quickLinkItem}>Room booking</div>
            <div className={styles.quickLinkItem}>Rooms</div>
            <div className={styles.quickLinkItem}>Contact</div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.company}>Company</div>
            <div className={styles.companyItem}>About</div>
          </div>
          <div className={styles.leaveReview}>
            <div className={styles.reviewTitle}>Leave Us a Review</div>
            <div className={styles.reviewItem}>Google Maps</div>
            <div className={styles.reviewItem}>Facebook</div>
            <div className={styles.reviewItem}>Instagram</div>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.newsletterTitle}>Newsletter</div>
            <div className={styles.newsletterSubtitle}>
              Kindly subscribe to our newsletter to get the most out of your
              stay!
            </div>
            <div className={styles.newsletterForm}>
              <input
                type="text"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <Button
                onClick={handleSubscribe}
                variant="secondary"
                className={styles.newsletterButton}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
