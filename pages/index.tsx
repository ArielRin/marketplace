import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";

const Home: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const { contract: marketplace } = useContract(
    "0x71c54a390Dd797ECf2f622Cd92b4be16D83F2467", // Your marketplace contract address here
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/logo.gif`}
              alt="Sirens Treasure Trove"
              width={600}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <p className={styles.h1}>
          Trade in-game collectables with SirensTreasure. List your unwanted gear or buy more items.
        </p>

        <hr className={styles.divider} />

        <p className={styles.explain}>
        Check our{" "}
        <b>
         {" "}
        <a
             href="https://twitter.com/SirenTrove_DEX/"
             target="_blank"
             rel="noopener noreferrer"
             className={styles.cyan}
           >
           Twitter
        </a>
        </b>{" "}
        for latest features and news at Sirens Treasure.
         Please Note that all successful sales through our marketplace have a fee of 2% sent to the Sirens Treasure Trove Treasury.
         Add this into consideration when listing your NFT.
        </p>
        <p className={styles.explain}>
         Thanks for using our NFT Marketplace.
        </p>
        <p className={styles.explain}>
         Ariel Ryn
        </p>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create">
            <a className={styles.mainButton} style={{ textDecoration: "none" }}>
              Create A Listing
            </a>
          </Link>
        </div>

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`}>
                        <a className={styles.name}>{listing.asset.name}</a>
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>

                  </div>
                ))}
              </div>
            )
          }
        </div>
        <div className={styles.left}>
          <div>
            <Link href="/" passHref role="button">
              <img
                src={`/ArielRynStand.gif`}
                alt="Sirens Treasure Trove"
                width={400}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
