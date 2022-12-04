import { FC } from "react";

import { NFTCard } from "../components/NFTCard";
import { LayoutHeader } from "../components/LayoutHeader";
import { LayoutFooter } from "../components/LayoutFooter";
import { CreateSteps } from "../components/CreateSteps";
import useGetNfts from "../api/nft/hooks/useGetNfts";
import useDeleteNft from "../api/nft/hooks/useDeleteNft";

const Home: FC = () => {
  const { nfts, setNfts } = useGetNfts();
  const { deleteOne } = useDeleteNft();

  return (
    <>
      <LayoutHeader />

      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6>Liberty NFT Market</h6>
                <h2>Create, Sell &amp; Collect Top NFT’s.</h2>
                <p>
                  Liberty NFT Market is a really cool and professional design
                  for your NFT websites. This HTML CSS template is based on
                  Bootstrap v5 and it is designed for NFT related web portals.
                  Liberty can be freely downloaded from TemplateMo&apos;s free
                  css templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateSteps />

      <div className="currently-market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>NFTs Currently In The Market.</h2>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row grid">
                {nfts?.map((nft) => {
                  return (
                    <div
                      key={nft.id}
                      className="col-lg-6 currently-market-item all"
                    >
                      <NFTCard
                        title={nft.title}
                        price={nft.price}
                        author={nft.author}
                        imageSrc={nft.src}
                        imageAlt=""
                        onDeleteClick={() => {
                          deleteOne(nft.id);

                          setNfts(
                            (prev) =>
                              prev?.filter(({ id }) => nft.id !== id) || []
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
};

export default Home;
