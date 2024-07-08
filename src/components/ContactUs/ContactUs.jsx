// ContactUs.jsx
"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./BlissHotel.module.css";

export const ContactUs = () => {
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
        }}
      >
        {["Home", "Explore", "Rooms", "About", "Contact"].map((item, index) => (
          <div
            key={index}
            style={{
              margin: "0 20px",
              color: item === "Contact" ? "#7C6A46" : "black",
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: item === "Contact" ? "700" : "500",
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
          Contact Us
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
          We would love to hear from you.
        </div>
      </div>

      {/* Contact Form Section */}
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {["Full Name", "Email", "Phone Number", "Notes"].map(
            (label, index) => (
              <div key={index} style={{ marginBottom: "20px", width: "300px" }}>
                <div
                  style={{
                    textAlign: "left",
                    color: "black",
                    fontSize: "20px",
                    fontFamily: "Mulish",
                    fontWeight: "400",
                    marginBottom: "10px",
                  }}
                >
                  {label}
                </div>
                {label === "Notes" ? (
                  <textarea
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    style={{
                      width: "100%",
                      minHeight: "100px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      padding: "5px",
                      fontFamily: "Raleway",
                      fontSize: "16px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  />
                ) : (
                  <input
                    type={
                      label === "Email"
                        ? "email"
                        : label === "Phone Number"
                        ? "tel"
                        : "text"
                    }
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    style={{
                      width: "100%",
                      height: "30px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      padding: "5px",
                      fontFamily: "Raleway",
                      fontSize: "16px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  />
                )}
              </div>
            )
          )}
          <button
            onClick={() =>
              alert(
                "Thank you for contacting Bliss Hotel! Our team will reach out within 2 business days via email."
              )
            }
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
          >
            Submit
          </button>
        </div>
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
        <div className={`${styles.quickLinks} quickLinks`}>
          <div
            style={{
              fontSize: "17px",
              fontFamily: "Raleway",
              fontWeight: "700",
              color: "white",
            }}
          >
            Quick links
          </div>
          {["Room booking", "Rooms", "Contact"].map((link, index) => (
            <div
              key={index}
              style={{
                fontSize: "12px",
                fontFamily: "Raleway",
                fontWeight: "700",
                color: "white",
              }}
            >
              {link}
            </div>
          ))}
        </div>
        <div className={`${styles.company} company`}>
          <div
            style={{
              fontSize: "17px",
              fontFamily: "Raleway",
              fontWeight: "700",
              color: "white",
            }}
          >
            Company
          </div>
          {["About"].map((link, index) => (
            <div
              key={index}
              style={{
                fontSize: "12px",
                fontFamily: "Raleway",
                fontWeight: "700",
                color: "white",
              }}
            >
              {link}
            </div>
          ))}
        </div>
        <div className={`${styles.leaveReview} leaveReview`}>
          <div
            style={{
              fontSize: "17px",
              fontFamily: "Raleway",
              fontWeight: "700",
              color: "white",
            }}
          >
            Leave Us a Review
          </div>
          {["Google Maps", "Facebook", "Instagram"].map((link, index) => (
            <div
              key={index}
              style={{
                fontSize: "12px",
                fontFamily: "Raleway",
                fontWeight: "700",
                color: "white",
              }}
            >
              {link}
            </div>
          ))}
        </div>
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
              fontSize: "17px",
              fontFamily: "Raleway",
              fontWeight: "700",
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
              fontSize: "12px",
              fontFamily: "Raleway",
              fontWeight: "500",
              marginLeft: "-100px",
              marginBottom: "10px",
            }}
          >
            Subscribe to our mailing list for latest updates and news.
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "250px",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              fontFamily: "Raleway",
              fontSize: "16px",
              backgroundColor: "white",
              color: "black",
              marginLeft: "-100px",
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              width: "150px",
              height: "40px",
              background: "black",
              borderRadius: "5px",
              color: "white",
              fontSize: "15px",
              fontFamily: "Poppins",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              marginLeft: "-100px",
              marginTop: "10px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
