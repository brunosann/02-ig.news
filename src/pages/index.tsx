import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubscriberButton } from "../components/SubscriberButton";
import { stripe } from "../services/stipe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - Ig.News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> World.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscriberButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JhMR4CBRr405NhQ3O1vkVqr");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
      price.unit_amount / 100
    ),
  };

  return {
    props: {
      product,
    },
  };
};
