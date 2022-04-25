import React, { useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { ButtonRounded } from "../../Buttons";
import styles from "./mobile.module.css";
import { useTransition, animated, config } from "react-spring";
import ItemNavbarProduct from "../Components/ItemNavbarProduct";
import ItemNavBar from "../Components/ItemNavBar";
import { OptionsMenu, ProductsOptions } from "../content";
import Link from "next/link";
export default function mobile({ style, logo, width }) {
  const [isOpen, setOpen] = useState(false);

  const FadeIn = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOpen,
    config: config.slow,
  });
  const SlideIn = useTransition(isOpen, {
    from: { translate: "-700px" },
    enter: { translate: "0px" },
    leave: { translate: "-700px" },
    reverse: isOpen,
    config: config.slow,
  });

  return (
    <>
      <div className={style["nav-container"]}>
        <div
          style={isOpen ? { opacity: 0 } : { width: 250, cursor: "pointer" }}
        >
          <Link href={"/"} replace>
            <Image
              className="nav-iconLogo"
              src={logo}
              alt="Nova Launch Logo"
              layout="responsive"
            />
          </Link>
        </div>
        <div className={isOpen ? style["nav-hamburger"] : ""}>
          <Hamburger
            toggled={isOpen}
            size={25}
            color="black"
            toggle={setOpen}
            rounded
          />
        </div>
      </div>
      {FadeIn(
        (animStyle, item) =>
          item && (
            <animated.div
              style={{ ...animStyle }}
              className={style["nav-slideContainer-blur"]}
            />
          )
      )}
      {SlideIn(
        (animStyle, item) =>
          item && (
            <animated.div
              style={{ ...animStyle }}
              className={style["nav-slideContainer-content"]}
            >
              <ButtonRounded text="Launch your nft mint" />
              <div style={{ paddingTop: "2.2rem", width: "90%" }}>
                {ProductsOptions.map(
                  ({ title, description, icon, link }, index) => (
                    <ItemNavbarProduct
                      key={title}
                      title={title}
                      description={description}
                      icon={icon}
                      style={
                        index === 0
                          ? { paddingTop: 0 }
                          : index === ProductsOptions.length - 1
                          ? { border: "none", paddingBottom: 0 }
                          : {}
                      }
                      link={link}
                      setOpen={setOpen}
                    />
                  )
                )}
              </div>
              <div style={{ paddingTop: "2.2rem", width: "90%" }}>
                {OptionsMenu.map(({ label, to }, index) => (
                  <ItemNavBar
                    key={label}
                    to={to}
                    text={label}
                    setOpen={setOpen}
                    index={index}
                  />
                ))}
              </div>
            </animated.div>
          )
      )}
    </>
  );
}
