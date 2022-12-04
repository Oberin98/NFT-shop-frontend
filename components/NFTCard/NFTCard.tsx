/* eslint-disable @next/next/no-img-element */
import { FC, HTMLAttributes } from "react";
import Link from "next/link";

import styles from "./NFTCard.module.scss";
import User from "../../api/user/types/User";

interface NFTCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  author: User;
  onDeleteClick: () => void;
}

export const NFTCard: FC<NFTCardProps> = ({
  title,
  price,
  imageSrc,
  imageAlt,
  author,
  onDeleteClick,
  ...props
}) => {
  return (
    <div className="item" {...props}>
      <div className="left-image">
        <img src={imageSrc} alt="" className={styles.image} />
      </div>

      <div className="right-content">
        <h4>{title}</h4>

        <span className="author">
          <h6>
            Liberty Artist
            <br />
            <Link href="#" scroll={false}>@{author.nickname}</Link>
          </h6>
        </span>

        <div className="line-dec" />

        <span className="bid">
          Current Bid
          <br />
          <strong>{price} ETH</strong>
        </span>

        <div className="text-button">
          <button type="button" onClick={onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
