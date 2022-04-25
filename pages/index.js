import styles from "./index.module.css";
import { HomeScreen, VisionScreen, ClaimScreen } from "../components/Sections";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <HomeScreen />
      <ClaimScreen />
      <VisionScreen />
    </div>
  );
}
