"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React from "react";
import styles from "./BlissHotel.module.css";

export const HomePage = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    alert("You have successfully subscribed to our mailing list!");
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Navigation Bar */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "60px",
          position: "absolute",
          top: "16px",
          zIndex: 10,
        }}
      >
        {["Home", "Explore", "Rooms", "About", "Contact"].map((item, index) => (
          <div
            key={index}
            style={{
              margin: "0 20px",
              color: item === "Home" ? "#7C6A46" : "black",
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: item === "Home" ? "700" : "500",
              cursor: "pointer",
            }}
            onClick={() =>
              item.toLowerCase() === "home"
                ? router.push("/")
                : router.push(`/${item.toLowerCase()}`)
            }
          >
            {item}
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <div
        style={{ position: "absolute", right: "20px", top: "16px", zIndex: 20 }}
      >
        <Button
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
        </Button>
      </div>

      {/* Main Image Placeholder */}
      <div className={styles.mainImage}>
        <img
          src="/mainImage.png"
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
          Book Today!
        </div>
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
          We are excited to welcome you!
        </div>
      </div>

      {/* Facilities Section */}
      <div className={styles.facilitiesSection}>
        <div className={styles.facilitiesTitle}>Our Facilities</div>
        <div className={styles.facilitiesSubtitle}>
          We offer modern (5 star) hotel facilities for your comfort.
        </div>
        <div className={styles.facilitiesGrid}>
          <div className={styles.facilityItem}>
            <img src="/icon1.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Wifi</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon2.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Swimming Pool</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon3.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Breakfast</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon4.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Gym</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon5.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Game Center</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon6.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>24/7 Light</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon7.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Laundry</div>
          </div>
          <div className={styles.facilityItem}>
            <img src="/icon8.png" alt="Icon" className={styles.facilityIcon} />
            <div className={styles.facilityName}>Parking</div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className={styles.additionalSection}>
        <img
          src="/ottawa.png"
          alt="Ottawa sign"
          className={styles.additionalImage}
        />
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
