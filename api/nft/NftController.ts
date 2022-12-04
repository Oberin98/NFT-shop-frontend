import CreateNftInput from "./types/CreateNftInput";
import NFT from "./types/NFT";
import UpdateNftInput from "./types/UpdateNftInput";

class NftController {
  protected api: string = "http://localhost:8000/api/nft";

  /**
   * Get nft
   */
  async get(id: string | number): Promise<NFT> {
    const request = await fetch(`${this.api}/${id}`, {
      method: "GET",
      headers: {
        ["Content-Type"]: "application/json",
        ["Accepts"]: "application/json",
      },
    });

    const response = await request.json();

    return {
      id: response.id,
      title: response.title,
      price: response.price,
      src: response.src,
      author: response.author,
    };
  }

  /**
   * Get all nfts
   */
  async getAll(): Promise<NFT[]> {
    const request = await fetch(this.api, {
      method: "GET",
      headers: {
        ["Content-Type"]: "application/json",
        ["Accepts"]: "application/json",
      },
    });

    const response = await request.json();

    return response.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      src: item.src,
      author: item.author,
    }));
  }

  /**
   * Create nft
   */
  async post(input: CreateNftInput): Promise<NFT> {
    const request = await fetch(this.api, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        ["Content-Type"]: "application/json",
        ["Accepts"]: "application/json",
      },
    });

    const response = await request.json();

    return {
      id: response.id,
      title: response.title,
      price: response.price,
      src: response.src,
      author: response.author,
    };
  }

  /**
   * Update nft
   */
  async put(id: string | number, input: UpdateNftInput): Promise<NFT> {
    const request = await fetch(`${this.api}/${id}`, {
      method: "PUT",
      body: JSON.stringify(input),
      headers: {
        ["Content-Type"]: "application/json",
        ["Accepts"]: "application/json",
      },
    });

    const response = await request.json();

    return {
      id: response.id,
      title: response.title,
      price: response.price,
      src: response.src,
      author: response.author,
    };
  }

  /**
   * Delete nft
   */
  async delete(id: string | number) {
    const request = await fetch(`${this.api}/${id}`, {
      method: "DELETE",
      headers: {
        ["Content-Type"]: "application/json",
        ["Accepts"]: "application/json",
      },
    });

    const response = await request.text();

    return Number.parseInt(response, 10);
  }
}

export default new NftController();
