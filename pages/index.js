import styles from "./index.module.css";
import Navbar from "../components/Navbar/Navbar";
import { HomeScreen, VisionScreen } from "../components/Sections";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <HomeScreen />
      <VisionScreen />
    </div>
  );
}
