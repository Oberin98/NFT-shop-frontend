import { ChangeEvent, FC, FormEvent, useState } from "react";

import { LayoutHeader } from "../../components/LayoutHeader";
import { LayoutFooter } from "../../components/LayoutFooter";
import { LayoutHeading } from "../../components/LayoutHeading";
import useCreateNft from "../../api/nft/hooks/useCreateNft";
import useGetUser from "../../api/user/hooks/useGetUser";
import { useRouter } from "next/router";

const CreatePage: FC = () => {
  const router = useRouter();

  const { user } = useGetUser(1);
  const { create } = useCreateNft();

  const [formState, setFormState] = useState({
    title: "",
    price: "",
    src: "",
  });

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (user) {
      create({
        title: formState.title,
        price: Number.parseInt(formState.price, 10),
        src: formState.src,
        authorId: user.id,
      }).then((nft) => {
        setFormState({
          title: "",
          price: "",
          src: "",
        });

        if (nft?.id) {
          router.push(`/nft/${nft.id}`, undefined, { scroll: false });
        }
      });
    }
  };

  return (
    <>
      <LayoutHeader />
      <LayoutHeading title="Create Your NFT Now" />

      <div className="item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h2>
                  Apply For <em>Your Item</em> Here.
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <form id="contact" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="title">Title</label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="NFT title"
                        autoComplete="off"
                        required
                        value={formState.title}
                        onChange={onChange}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="price">Price</label>
                      <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Price depends on quality. Ex. 0.06 ETH"
                        required
                        value={formState.price}
                        onChange={onChange}
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="src">File link</label>
                      <input
                        id="src"
                        name="src"
                        type="text"
                        placeholder="File link"
                        required
                        value={formState.src}
                        onChange={onChange}
                      />
                    </fieldset>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Submit Your Applying
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
};

export default CreatePage;
