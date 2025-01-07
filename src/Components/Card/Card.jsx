import styles from "./Card.module.css";

import Img from "../../assets/illustration-hero.svg";
import Plan from "../Plan/Plan";
import PaymentButton from "../Button/PaymentButton";

function Card() {
  return (
    <article className={styles.article}>
      <img src={Img} alt="hero image" />
      <div className={styles.info}>
        <h1 className={styles.heading}>Order Summary</h1>
        <p className={styles.details}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <Plan />
      <PaymentButton />
    </article>
  );
}

export default Card;
