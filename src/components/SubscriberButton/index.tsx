import React from "react";

import styles from "./styles.module.scss";

interface SubscriberButtonProps {
  priceId: string;
}

export const SubscriberButton = ({ priceId }: SubscriberButtonProps) => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
