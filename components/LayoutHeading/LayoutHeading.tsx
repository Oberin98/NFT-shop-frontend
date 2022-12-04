import { FC, HTMLAttributes } from "react";
import Link from "next/link";

interface LayoutHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const LayoutHeading: FC<LayoutHeadingProps> = ({ title, ...props }) => {
  return (
    <div className="page-heading normal-space" {...props}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6>Liberty NFT Market</h6>
            <h2>{title}</h2>

            <div className="buttons">
              <div className="main-button">
                <Link href="/" scroll={false}>Explore Our Items</Link>
              </div>

              <div className="border-button">
                <Link href="/nft/create" scroll={false}>Create Your NFT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
