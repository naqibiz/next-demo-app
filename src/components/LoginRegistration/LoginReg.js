import React, { useState } from "react";
import Container from "../Container";
import Styles from "./LoginReg.module.scss";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginRegComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <div className={Styles.login_reg_main}>
        <h1>Anmelden oder Kundenkonto erstellen</h1>
        <div className={Styles.login_reg_content}>
          <div className={`login_box ${Styles.login_reg_box}`}>
            <div className={Styles.login_box_inner}>
              <h3>Willkommen zurück!</h3>
              <div className={Styles.login_box_inner_content}>
                <p>
                  Wenn Sie bereits ein Benutzerkonto bei uns besitzen, melden
                  dich bitte hier an.
                </p>
                <form>
                  <div className={Styles.form_group}>
                    <label>
                      E-Mail-Adresse<span>*</span>
                    </label>
                    <input type="email" />
                  </div>

                  <div className={Styles.form_group}>
                    <label>
                      Passwort<span>*</span>
                    </label>
                    <div className={Styles.pass_input}>
                      <input type={showPassword ? "text" : "password"} />
                      {showPassword ? (
                        <FaEye onClick={() => setShowPassword(false)} />
                      ) : (
                        <FaEyeSlash onClick={() => setShowPassword(true)} />
                      )}
                    </div>
                  </div>
                </form>
                <div className={Styles.login_info_area}>
                  <p>
                    Diese Website ist durch reCAPTCHA geschützt und es gelten
                    die <a>Datenschutzbestimmungen</a> von Google.
                  </p>
                  <span>Passwort vergessen?</span>
                </div>
                <button>Anmelden</button>
              </div>
            </div>
          </div>
          {/* ========================= */}

          <div className={`registration_box ${Styles.login_reg_box}`}>
            <div className={Styles.login_box_inner}>
              <h3>Ich bin neu hier</h3>
              <div className={Styles.reg_box_inner_content}>
                <p className={Styles.reg_info_para}>
                  <span>Profitieren</span> Sie von den <span>Vorteilen</span>{" "}
                  des Kundenkontos, indem Sie sich <span>jetzt</span>{" "}
                  registrieren.
                </p>
                <div className={Styles.reg_detail_section}>
                  <p>Ihre Vorteile:</p>
                  <span>
                    <img src="/assets/tick-icon.svg" />
                    Übersicht aller Bestellungen
                  </span>
                  <span>
                    <img src="/assets/tick-icon.svg" />
                    Wunschliste von Ihren Lieblingsprodukten
                  </span>
                  <span>
                    <img src="/assets/tick-icon.svg" />
                    Schnellerer Bestellvorgang
                  </span>
                  <span>
                    <img src="/assets/tick-icon.svg" />
                    u.v.m.
                  </span>
                </div>

                <button>Zur Registrierung</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default LoginRegComponent;
