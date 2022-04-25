import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ItemNavbarProduct.module.css";
import Link from "next/link";
export default function ItemNavbarProduct({
	title,
	description,
	icon,
	style,
	link,
	setOpen=()=>{},
}) {
	return (
		<Link href={link || ""} replace>
		<div
		  className={styles["ItemNavbarProduct-container"]}
		  style={style ? style : {}}
		  onClick={() => {
			setOpen(!open);
		  }}
		>
		  <FontAwesomeIcon
			icon={icon}
			className={styles["ItemNavbarProduct-icon"]}
		  />
		  <div className={styles["ItemNavbarProduct-content"]}>
			<h4 className={styles["ItemNavbarProduct-title"]}>{title}</h4>
			<p className={styles["ItemNavbarProduct-description"]}>
			  {description}
			</p>
		  </div>
		</div>
	  </Link>
	);
}
