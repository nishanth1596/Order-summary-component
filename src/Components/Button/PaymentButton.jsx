import styles from "./PaymentButton.module.css";

function PaymentButton() {
  return (
    <div className={styles.btn}>
      <button className={styles.payment}>Proceed to Payment</button>
      <button className={styles.cancel}>Cancel Order</button>
    </div>
  );
}

export default PaymentButton;
