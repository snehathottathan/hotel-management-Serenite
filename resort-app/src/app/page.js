// app/page.js
// Ensure correct relative paths from app/page.js
import Hero from '../../src/app/pages/Hero/Hero' // Assuming Hero is in app/components/Hero
import BodyContext from "./gallery/page"; // Assuming gallery/page.js is relative to app/page.js
import styles from "./page.module.css"; // Your page-specific CSS module

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero is rendered here because it's specific to the home page content */}
     {/* <Hero/> */}
      <BodyContext/>
      {/* Footer is removed from here as it's now in layout.js */}
    </div>
  );
}