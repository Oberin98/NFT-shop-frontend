import { FC } from "react";

import Link from "next/link";

import icon02 from "../../assets/images/icon-02.png";
import icon04 from "../../assets/images/icon-04.png";
import icon06 from "../../assets/images/icon-06.png";
import { StepCard } from "../StepCard";

export const CreateSteps: FC = () => {
  return (
    <div className="create-nft">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-heading">
              <h2>Create Your NFT & Put It On The Market.</h2>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="main-button">
              <Link href="/nft/create" scroll={false}>Create Your NFT Now</Link>
            </div>
          </div>

          <div className="col-lg-4">
            <StepCard title="Set Up Your Wallet" imageSrc={icon02} imageAlt="">
              NFT means Non-Fungible Token that are used in digital
              cryptocurrency markets. There are many different kinds of NFTs in
              the industry.
            </StepCard>
          </div>

          <div className="col-lg-4">
            <StepCard
              title="Add Your Digital NFT"
              imageSrc={icon04}
              imageAlt=""
            >
              There are 5 different HTML pages included in this NFT
              <a
                href="https://templatemo.com/page/1"
                target="_blank"
                rel="nofollow noreferrer"
              >
                website template
              </a>
              . You can edit or modify any section on any page as you required.
            </StepCard>
          </div>
          <div className="col-lg-4">
            <StepCard
              title="Sell Your NFT & Make Profit"
              imageSrc={icon06}
              imageAlt=""
            >
              If you would like to support our TemplateMo website, please visit
              <a
                href="https://templatemo.com/contact"
                target="_blank"
                rel="nofollow noreferrer"
              >
                our contact page
              </a>
              to make a PayPal contribution. Thank you.
            </StepCard>
          </div>
        </div>
      </div>
    </div>
  );
};
