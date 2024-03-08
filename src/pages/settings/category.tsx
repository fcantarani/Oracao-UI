import { useEffect, useState } from "react";
import { Category as CategoryModel } from "../../models/Category";
import settings from "../../settings.json";

export default function Category() {
  const [categories, setCategories] = useState<CategoryModel[]>();

  const baseURL = settings.apiBaseUrl ?? "";
  const url = `${baseURL}/api/v1/Categories`;

  const loadCategories = () => {
    console.log("....🔥....");
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    loadCategories();
  });

  if (categories)
    return (
      <>
        <h1>{categories.map((x) => x.name)}</h1>
      </>
    );
}
