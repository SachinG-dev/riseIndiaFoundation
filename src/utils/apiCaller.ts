import axios, { AxiosResponse, AxiosError } from "axios";

class ApiCaller {
  static async get<T>(
    url: string,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<T> = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 401
      ) {
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else {
        console.error("GET request failed:");
        throw error;
      }
      throw error;
    }
  }

  static async getImage(
    url: string,
    headers: Record<string, string> = {},
  ): Promise<string> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<Blob> = await axios.get(url, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...headers,
        },
      });
      const imageUrl = URL.createObjectURL(response.data);
      return imageUrl;
    } catch (error) {
      console.error("GET request failed:", (error as AxiosError).message);
      throw error;
    }
  }

  static async post<T>(
    url: string,
    data: any = null,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<T> = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("POST request failed:", (error as AxiosError).message);
      throw error;
    }
  }

  static async multiMediaPost<T>(
    url: string,
    data: any = null,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<T> = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          "Content-Type": `multipart/form-data;`,
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("POST request failed:", (error as AxiosError).message);
      throw error;
    }
  }

  static async multiMediaPut<T>(
    url: string,
    data: any = null,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<T> = await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          "Content-Type": `multipart/form-data;`,
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("POST request failed:", (error as AxiosError).message);
      throw error;
    }
  }

  static async put<T>(
    url: string,
    data: any = null,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<T> = await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("PUT request failed:", (error as AxiosError).message);
      throw error;
    }
  }

  static async delete<T>(
    url: string,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response: AxiosResponse<T> = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("DELETE request failed:", (error as AxiosError).message);
      throw error;
    }
  }

  static async patch<T>(
    url: string,
    data: any = null,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.patch(url, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("PATCH request failed:", (error as AxiosError).message);
      throw error;
    }
  }
}

export default ApiCaller;
