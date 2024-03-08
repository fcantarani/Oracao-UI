import settings from "../settings.json";

export class CategoryService {
  private baseURL = settings.apiBaseUrl ?? "";

  public getCategories = async () => {
    const url = `${this.baseURL}/v1/Category/category`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
}
