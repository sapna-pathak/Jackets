import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="container" style={{ paddingTop: "100px" }}>
      <h1 style={{ fontSize: "100px", textAlign: "center" }}>Contact Us</h1>
      <div className="row mt-5">
        <div
          class="col-4 me-5 contact"
          style={{ borderRadius: "20px" }}
        >
          <h3 className="mt-2 text-center">Reach Us At</h3>

          <div class="row mb-3 mt-5 ">
            <div class="col-3 fs-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon me-5"
                  style={{ color: "black" }}
                />
              </a>
            </div>
            <div class="col fs-5 pt-2">
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                9650500935
              </a>
            </div>
          </div>
          <br />
          <div class="row mb-3 mt-3">
            <div class="col-3 fs-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="icon me-5"
                  style={{ color: "green" }}
                ></FontAwesomeIcon>
              </a>
            </div>
            <div class="col fs-5 pt-2">
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                9650500935
              </a>
            </div>
          </div>
          <br />
          <div class="row mb-3 mt-3">
            <div class="col-3 fs-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon me-5"
                  style={{ color: "black" }}
                ></FontAwesomeIcon>
              </a>
            </div>
            <div class="col fs-5 pt-2">
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                sapi@gmail.com
              </a>
            </div>
          </div>

          <br />

          <br />

          <div class="row text-center">
            <div class="col-md-4 text-center fs-2">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} style={{ color: "blue" }} />
              </a>
            </div>
            <div class="col-sm-4 text-center fs-2">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "red" }} />
              </a>
            </div>
            <div class="col-sm-4 text-center fs-2">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "blue" }} />
              </a>
            </div>
          </div>
        </div>

        <div class="col-7">
          <div class="mb-3">
            <h2>Get In Touch</h2>
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="enter name"
            />
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="enter email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-success ms-2">Submit</button>
        </div>
      </div>
    </div>
  );
}
