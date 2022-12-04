import CreateUserInput from "./types/CreateUserInput";
import UpdateUserInput from "./types/UpdateUserInput";
import User from "./types/User";

class UserController {
  protected api: string = "http://localhost:8000/api/user";

  /**
   * Get user
   */
  async get(id: string | number): Promise<User> {
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
      firstName: response.firstName,
      lastName: response.lastName,
      nickname: response.nickname,
      email: response.email,
      avatarSrc: response.avatarSrc,
    };
  }

  /**
   * Create user
   */
  async post(input: CreateUserInput): Promise<User> {
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
      firstName: response.firstName,
      lastName: response.lastName,
      nickname: response.nickname,
      email: response.email,
      avatarSrc: response.avatarSrc,
    };
  }

  /**
   * Update user
   */
  async put(id: string | number, input: UpdateUserInput): Promise<User> {
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
      firstName: response.firstName,
      lastName: response.lastName,
      nickname: response.nickname,
      email: response.email,
      avatarSrc: response.avatarSrc,
    };
  }

  /**
   * Delete user
   */
  async delete(id: string | number): Promise<number> {
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

export default new UserController();
