"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React from "react";
import styles from "./BlissHotel.module.css";

export const AboutUs = () => {
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
            color: "black",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "500",
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
            color: "#7C6A46",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "700",
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
          src="/mainImage.png"
          alt="Main Image"
          style={{
            position: "absolute",
            top: 70,
            left: 160,
            width: "80%",
            height: "40%",
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
            height: "40%",
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
          About us
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
      {/* Room Options with White Background */}
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "40px 0",
          minHeight: "600px",
        }}
      >
        {/* Add square with background color and image placeholder */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              background: "#7C6A46",
              position: "relative",
              flexDirection: "row",
            }}
          >
            <img
              src="/manager.png"
              alt="Manager"
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 30,
                fontFamily: "Mulish",
                fontWeight: "600",
                wordWrap: "break-word",
                marginTop: "350px",
              }}
            >
              Jessica Bliss (Manager)
            </div>
          </div>
          <div
            style={{
              width: "40%",
              textAlign: "justify",
              color: "black",
              fontSize: 15,
              fontFamily: "Mulish",
              fontWeight: "500",
              wordWrap: "break-word",
              marginTop: "100px",
            }}
          >
            Welcome to Bliss Hotel, your premier destination for comfort and
            relaxation in Ottawa, Ontario. We offer a variety of rooms tailored
            to meet the needs of singles, couples, and families.
            <br />
            <br />
            Each room is equipped with modern amenities, including free Wi-Fi,
            flat-screen TVs, and luxurious bedding to ensure a restful stay.
            <br />
            <br />
            Our hotel features a range of facilities designed to enhance your
            experience. Enjoy our state-of-the-art gym, unwind in our tranquil
            spa, and take a dip in the indoor pool. Please note that spa
            services require prior arrangements; kindly contact our management
            team in person to schedule your appointments.
            <br />
            <br />
            At Bliss Hotel, we are dedicated to providing you with an
            unforgettable stay, combining elegance, comfort, and exceptional
            service. Whether you're here for business or leisure, we look
            forward to welcoming you and ensuring your stay is truly blissful.
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
