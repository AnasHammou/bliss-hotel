"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import React from "react";
import styles from "./BlissHotel.module.css";

export const AboutUsSpanish = () => {
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
          Hogar
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
          Explorar
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
          Habitaciones
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
          Acerca de
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
          Contacto
        </div>
        <button
          style={{
            background: "#7C6A46",
            borderRadius: "5px",
            color: "white",
            fontSize: "15px",
            fontFamily: "Poppins",
            fontWeight: "500",
            padding: "10px 20px",
            margin: "0 20px",
          }}
          onClick={() => router.push("/about")}
        >
          English
        </button>
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
          Reservar ahora
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
          Sobre nosotras
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
          Experimente la comodidad y el lujo en Bliss Hotel
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
              Jessica Bliss (Gerente)
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
            Bienvenido a Bliss Hotel, su principal destino de comodidad y
            relajación en Ottawa, Ontario. Ofrecemos una variedad de
            habitaciones hechas a medida. para satisfacer las necesidades de
            solteros, parejas y familias.
            <br />
            <br />
            Cada habitación está equipada con comodidades modernas, incluyendo
            conexión Wi-Fi gratuita, Televisores de pantalla plana y ropa de
            cama de lujo para garantizar una estancia tranquila.
            <br />
            <br />
            Nuestro hotel cuenta con una gama de instalaciones diseñadas para
            mejorar su experiencia. Disfrute de nuestro gimnasio de última
            generación, relájese en nuestro tranquilo spa y darse un chapuzón en
            la piscina cubierta. Tenga en cuenta que el spa los servicios
            requieren arreglos previos; póngase en contacto con nuestra
            dirección equipo en persona para programar sus citas.
            <br />
            <br />
            En Bliss Hotel, nos dedicamos a brindarle una estancia inolvidable,
            combinando elegancia, confort y excepcional servicio. Ya sea que
            esté aquí por negocios o por placer, buscamos Estamos encantados de
            darle la bienvenida y garantizar que su estancia sea realmente
            maravillosa.
          </div>
        </div>
      </div>

      <div className={styles.additionalSection}>
        <div className={styles.bottomSection}>
          <div className={styles.leftColumn}>
            <div className={styles.hotelName}>Bliss Hotel</div>
            <div className={styles.quickLinks}>Enlaces rápidos</div>
            <div className={styles.quickLinkItem}>Reserva de habitacion</div>
            <div className={styles.quickLinkItem}>Habitaciones</div>
            <div className={styles.quickLinkItem}>Contacto</div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.company}>Compañía</div>
            <div className={styles.companyItem}>About</div>
          </div>
          <div className={styles.leaveReview}>
            <div className={styles.reviewTitle}>Déjanos una reseña</div>
            <div className={styles.reviewItem}>mapas de Google</div>
            <div className={styles.reviewItem}>Facebook</div>
            <div className={styles.reviewItem}>Instagram</div>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.newsletterTitle}>Boletin informativo</div>
            <div className={styles.newsletterSubtitle}>
              Suscríbete a nuestro boletín para aprovechar al máximo tu
              ¡permanecer!
            </div>
            <div className={styles.newsletterForm}>
              <input
                type="text"
                placeholder="Introduce tu correo electrónico"
                className={styles.newsletterInput}
              />
              <Button
                onClick={handleSubscribe}
                variant="secondary"
                className={styles.newsletterButton}
              >
                Suscribir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
