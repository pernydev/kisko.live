import styles from "./page.module.css"
import background_image from "./background.jpg"
import Image from "next/image"

export default function Index() {
  return (
    <>
      <Image
        src={background_image}
        alt="background"
        className={styles.background}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <input type="text" placeholder="Search for a station" />
            <button>Nearest station</button>
          </div>
          <div className={styles.results}>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
            <div>
              <h3>Helsinki</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}