"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import styles from "./BlissHotel.module.css"; 

export const RoomFourSingle = () => {
  const router = useRouter();

  const [checkedBoxes, setCheckedBoxes] = useState({
    "Single Room": false,
    "Couples Room": false,
    "Room for 3": false,
    "Room for 4": false,
  });

  const handleBoxClick = (roomType) => {
    setCheckedBoxes((prev) => ({
      ...prev,
      [roomType]: !prev[roomType],
    }));
  };

  const handleSubscribe = () => {
    alert("You have successfully subscribed to our mailing list!");
  };

  const handleFacetedSearchClick = () => {
    const selectedRooms = Object.keys(checkedBoxes)
      .filter((room) => checkedBoxes[room])
      .sort()
      .join("-");

    const routes = {
      "": "/rooms", 
      "Couples Room": "/rooms/roomcouple",
      "Room for 3": "/rooms/room3",
      "Room for 4": "/rooms/room4",
      "Single Room": "/rooms/roomsingle",
      "Couples Room-Room for 3": "/rooms/couples-room3",
      "Couples Room-Room for 4": "/rooms/couples-room4",
      "Couples Room-Single Room": "/rooms/couples-single",
      "Room for 3-Room for 4": "/rooms/room3-room4",
      "Room for 3-Single Room": "/rooms/room3-single",
      "Room for 4-Single Room": "/rooms/room4-single",
      "Couples Room-Room for 3-Room for 4": "/rooms/couples-room3-room4",
      "Couples Room-Room for 3-Single Room": "/rooms/couples-room3-single",
      "Couples Room-Room for 4-Single Room": "/rooms/couples-room4-single",
      "Room for 3-Room for 4-Single Room": "/rooms/room3-room4-single",
      "Couples Room-Room for 3-Room for 4-Single Room": "/rooms/all",
    };

    router.push(routes[selectedRooms]);
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
            color: "#7C6A46",
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "700",
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
          src="/mainImage.png"
          alt="Main Image"
          style={{
            position: "absolute",
            top: 70,
            left: 160,
            width: "80%",
            height: "35%",
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
            height: "35%",
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
          Bliss Hotel
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
          Your serene escape in the heart of Ottawa
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
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {["Single Room", "Couples Room", "Room for 3", "Room for 4"].map(
            (room, index) => (
              <div
                key={index}
                style={{
                  alignSelf: "stretch",
                  height: 98,
                  position: "relative",
                }}
                onClick={() => handleBoxClick(room)}
              >
                <div
                  style={{
                    width: 341,
                    height: 0,
                    left: 0,
                    top: 98,
                    position: "absolute",
                    border: "2px #F2F4F8 solid",
                  }}
                ></div>
                <div
                  style={{
                    width: 297.11,
                    height: 98,
                    left: 25.88,
                    top: 0,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      position: "relative",
                      background: "#F2F4F8",
                      borderRadius: 4,
                      border: "2px solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {checkedBoxes[room] && (
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          background: "#7C6A46",
                          borderRadius: "2px",
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    style={{
                      width: 224,
                      height: 74,
                      color: "black",
                      fontSize: "24px",
                      fontFamily: "Mulish",
                      fontWeight: "500",
                      lineHeight: "26px",
                      wordWrap: "break-word",
                    }}
                  >
                    {room}
                  </div>
                </div>
              </div>
            )
          )}
          <button
            //onClick={() => router.push("/booking")}
            style={{
              padding: "10px 2px",
              left: 36,
              top: 1200,
              position: "absolute",
              textAlign: "justify",
              color: "white",
              fontSize: 15,
              fontFamily: "Poppins",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
            onClick={handleFacetedSearchClick}
          >
            Search now
          </button>
        </div>

        {/* New room details */}
        <div
          style={{
            width: 390,
            height: 414,
            left: 325,
            bottom: 500,
            position: "absolute",
            background: "white",
            boxShadow: "0px 4px 30px -5px rgba(0, 0, 0, 0.10)",
            margin: "20px 0",
          }}
        >
          <img
            src="/room1.png"
            alt="Room 1"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "60%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              width: 390,
              height: "0.50",
              position: "absolute",
              bottom: 73,
              background: "#7C6A46",
            }}
          />
          <div
            style={{
              left: 15,
              top: 304,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            $90/night
          </div>
          <div
            style={{
              left: 298,
              top: 270,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 12,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Available: Yes
          </div>
          <div
            style={{
              left: 15,
              top: 262,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 25,
              fontFamily: "Mulish",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Room for Singles
          </div>
          <div
            style={{
              width: 150,
              height: 32,
              left: 15,
              top: 363,
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              width: 143,
              height: 47,
              left: 232,
              top: 353,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 143,
                height: 47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#7C6A46",
              }}
            />
            <button
              onClick={() => router.push("/booking")}
              style={{
                left: 36,
                top: 12,
                position: "absolute",
                textAlign: "justify",
                color: "white",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Book now
            </button>
          </div>
        </div>

        <div
          style={{
            width: 390,
            height: 414,
            left: 725,
            bottom: 500,
            position: "absolute",
            background: "white",
            boxShadow: "0px 4px 30px -5px rgba(0, 0, 0, 0.10)",
            margin: "20px 0",
          }}
        >
          <img
            src="/room2.png"
            alt="Room 2"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "60%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              width: 390,
              height: "0.50",
              position: "absolute",
              bottom: 73,
              background: "#7C6A46",
            }}
          />
          <div
            style={{
              left: 15,
              top: 304,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            $120/night
          </div>
          <div
            style={{
              left: 298,
              top: 270,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 12,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Available: Yes
          </div>
          <div
            style={{
              left: 15,
              top: 262,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 25,
              fontFamily: "Mulish",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Room for 4
          </div>
          <div
            style={{
              width: 150,
              height: 32,
              left: 15,
              top: 363,
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              width: 143,
              height: 47,
              left: 232,
              top: 353,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 143,
                height: 47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#7C6A46",
              }}
            />
            <button
              onClick={() => router.push("/booking")}
              style={{
                left: 36,
                top: 12,
                position: "absolute",
                textAlign: "justify",
                color: "white",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Book now
            </button>
          </div>
        </div>

        <div
          style={{
            width: 390,
            height: 414,
            left: 1125,
            bottom: 500,
            position: "absolute",
            background: "white",
            boxShadow: "0px 4px 30px -5px rgba(0, 0, 0, 0.10)",
            margin: "20px 0",
          }}
        >
          <img
            src="/room3.png"
            alt="Room 3"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "60%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              width: 390,
              height: "0.50",
              position: "absolute",
              bottom: 73,
              background: "#7C6A46",
            }}
          />
          <div
            style={{
              left: 15,
              top: 304,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            $80/night
          </div>
          <div
            style={{
              left: 298,
              top: 270,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 12,
              fontFamily: "Mulish",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Available: Yes
          </div>
          <div
            style={{
              left: 15,
              top: 262,
              position: "absolute",
              textAlign: "justify",
              color: "#7C6A46",
              fontSize: 25,
              fontFamily: "Mulish",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Room for 3-4
          </div>
          <div
            style={{
              width: 150,
              height: 32,
              left: 15,
              top: 363,
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              width: 143,
              height: 47,
              left: 232,
              top: 353,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 143,
                height: 47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#7C6A46",
              }}
            />
            <button
              onClick={() => router.push("/booking")}
              style={{
                left: 36,
                top: 12,
                position: "absolute",
                textAlign: "justify",
                color: "white",
                fontSize: 15,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Book now
            </button>
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

// export const Room = () => {
//     const router = useRouter();

//   const handleClick = () => {
//     router.push('/room');
//   };

//   return (
//     <Button variant="primary" onClick={handleClick}>
//       Go to Room
//     </Button>
//   );
// }
