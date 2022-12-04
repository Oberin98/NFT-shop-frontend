/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import { LayoutHeader } from "../../components/LayoutHeader";
import { LayoutFooter } from "../../components/LayoutFooter";
import { CreateSteps } from "../../components/CreateSteps";
import { LayoutHeading } from "../../components/LayoutHeading";
import { useRouter } from "next/router";
import useGetNft from "../../api/nft/hooks/useGetNft";
import useUpdateNft from "../../api/nft/hooks/useUpdateNft";
import authorPlaceholderAvatar from "../../assets/images/author.jpg";
import Image from "next/image";
import NFT from "../../api/nft/types/NFT";

const NFTItemPage: FC = () => {
  const router = useRouter();
  const nftId = router.query.nftId as string;

  const { nft, setNft } = useGetNft(nftId);
  const { update } = useUpdateNft();
  const [formState, setFormState] = useState(nft);

  useEffect(() => {
    if (nft && nft.id !== formState?.id) {
      setFormState(nft);
    }
  }, [nft, formState?.id]);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFormState((prev: NFT) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (formState) {
      const { id, ...state } = formState;
      const resp = await update(id, state);

      if (resp) {
        setNft(resp);
      }
    }
  };

  return (
    <>
      <LayoutHeader />
      <LayoutHeading title="View Item Details" />

      <div className="item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h2>
                  View Details <em>{nft?.title}</em> Here.
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="left-image">
                <img src={nft?.src} alt="" style={{ borderRadius: "20px" }} />
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <h4>{nft?.title}</h4>
              <span className="author">
                <Image
                  src={nft?.author.avatarSrc || authorPlaceholderAvatar}
                  alt=""
                  width={50}
                  height={50}
                  style={{ maxWidth: "50px", borderRadius: "50%" }}
                />
                <h6>
                  Liberty Artist
                  <br />
                  <a href="#">@{nft?.author.nickname}</a>
                </h6>
              </span>
              <div className="row">
                <span className="owner">
                  Owner
                  <br />
                  <strong>
                    {nft?.author.firstName} {nft?.author.lastName}
                  </strong>
                </span>
              </div>

              <div className="col-lg-12">
                <form id="contact" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="title">Title</label>
                        <input
                          id="title"
                          name="title"
                          type="text"
                          placeholder="NFT title"
                          autoComplete="off"
                          required
                          value={formState?.title}
                          onChange={onChange}
                        />
                      </fieldset>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="price">Price</label>
                        <input
                          id="price"
                          name="price"
                          type="number"
                          placeholder="Price depends on quality. Ex. 0.06 ETH"
                          required
                          value={formState?.price}
                          onChange={onChange}
                        />
                      </fieldset>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="src">File link</label>
                        <input
                          id="src"
                          name="src"
                          type="text"
                          placeholder="File link"
                          required
                          value={formState?.src}
                          onChange={onChange}
                        />
                      </fieldset>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="orange-button"
                        >
                          Update
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateSteps />
      <LayoutFooter />
    </>
  );
};

export default NFTItemPage;
