"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React from "react";
import styles from "./BlissHotel.module.css";

export const Booking = () => {
  const router = useRouter();

  const handleSubscribe = () => {
    alert("You have successfully subscribed to our mailing list!");
  };
  const handleSubmit =() => {

      alert(
        "You have successfully booked! Our team will reach out within 2 business days via email."
      );

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
          Booking Page
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
          Please fill in the required fields to finalize your booking.
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "40px 0",
          minHeight: "800px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: "40px 0",
            minHeight: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Full Name */}
          <div
            style={{
              textAlign: "left",
              color: "black",
              fontSize: 20,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
              marginBottom: "20px",
            }}
          >
            Full Name
          </div>
          <input
            type="text"
            placeholder="Enter your full name"
            style={{
              width: "300px",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "20px",
              fontFamily: "Raleway",
              fontSize: "16px",
              backgroundColor: "white",
              color:"black"
            }}
          />

          {/* Email */}
          <div
            style={{
              textAlign: "left",
              color: "black",
              fontSize: 20,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
              marginBottom: "20px",
            }}
          >
            Email
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "300px",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "20px",
              fontFamily: "Raleway",
              fontSize: "16px",
              backgroundColor: "white",
              color:"black"

            }}
          />

          {/* Date From */}
          <div
            style={{
              textAlign: "left",
              color: "black",
              fontSize: 20,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
              marginBottom: "20px",
            }}
          >
            Date From
          </div>
          <input
            type="date"
            placeholder="Select start date"
            style={{
              width: "300px",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "20px",
              fontFamily: "Raleway",
              fontSize: "16px",
              backgroundColor: "white",
              color:"black"

            }}
          />

          {/* Date To */}
          <div
            style={{
              textAlign: "left",
              color: "black",
              fontSize: 20,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
              marginBottom: "20px",
            }}
          >
            Date To
          </div>
          <input
            type="date"
            placeholder="Select end date"
            style={{
              width: "300px",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              marginBottom: "20px",
              fontFamily: "Raleway",
              fontSize: "16px",
              backgroundColor: "white",
              color:"black"

            }}
          />

          {/* Submit Button */}
          <button
            style={{
              width: "150px",
              height: "40px",
              background: "#7C6A46",
              borderRadius: "5px",
              color: "white",
              fontSize: "15px",
              fontFamily: "Poppins",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              
            }}
            onClick={handleSubmit}

          >
            Submit
          </button>
        </div>

        {/* add here */}
      </div>
      {/* Image Placeholder */}
      <img
        src="/ottawa.png"
        alt="Ottawa sign"
        style={{ width: "100%", marginTop: "40px" }}
      />
      {/* Bottom Placeholder */}
      <div
        className={styles.bottomPlaceholder}
        style={{
          width: "100%",
          height: "300px",
          position: "absolute",
          backgroundColor: "#7C6A46",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
        }}
      >
        {/* Left Column Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 30,
              fontFamily: "Dancing Script",
              fontWeight: "700",
              wordWrap: "break-word",
              marginBottom: "90px",
            }}
          >
            Bliss Hotel
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 17,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "300px",
              marginTop: "-200px",
            }}
          >
            Quick links
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "300px",
            }}
          >
            Room booking
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "300px",
            }}
          >
            Rooms
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "300px",
            }}
          >
            Contact
          </div>
        </div>
        {/* Right Column Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 17,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "290px",
              marginTop: "-75px",
            }}
          >
            Company
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "290px",
            }}
          >
            About
          </div>
        </div>
        {/* Leave Us a Review */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 17,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "-75px",
              marginLeft: "-700px",
            }}
          >
            Leave Us a Review
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "-700px",
            }}
          >
            Google Maps
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "-700px",
            }}
          >
            Facebook
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginLeft: "-700px",
            }}
          >
            Instagram
          </div>
        </div>
        {/* Newsletter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 17,
              fontFamily: "Raleway",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "-75px",
              marginLeft: "-100px",
            }}
          >
            Newsletter
          </div>
          <div
            style={{
              textAlign: "justify",
              color: "white",
              fontSize: 12,
              fontFamily: "Raleway",
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: "-100px",
              marginBottom: "10px",
            }}
          >
            Kindly subscribe to our newsletter to get the most out of your stay!
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Enter your email"
              style={{
                width: "200px",
                height: "30px",
                color: "black",
                borderRadius: "5px",
                border: "1px solid #ccc",
                padding: "5px",
                marginRight: "10px",
                fontFamily: "Raleway",
                fontSize: "12px",
                fontWeight: "500",
                backgroundColor: "white",
              }}
            />
            <Button
              onClick={handleSubscribe}
              style={{
                background: "#D9D9D9",
                border: "none",
                borderRadius: "5px",
                fontFamily: "Poppins",
                fontWeight: "500",
                padding: "10px 20px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
