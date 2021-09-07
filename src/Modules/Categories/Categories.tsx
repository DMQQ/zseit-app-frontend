import { Button } from "@material-ui/core";
import * as Styled from "./styles.d";

const CATEGORIES: string[] = [
  "FRONTEND",
  "BACKEND",
  "REACT",
  "JAVASCRIPT",
  "PHP",
  "C++",
  "HTML",
  "CSS",
  "NODE",
];

interface CategoriesProps {
  setCategories: (p: any) => void;
  categories: string[] | [];
}

export default function Categories({
  setCategories,
  categories,
}: CategoriesProps) {
  return (
    <Styled.Categories>
      {CATEGORIES.map((category, i: number) => {
        //@ts-ignore
        const isIn: any = categories.includes(category);

        function ToggleCategories() {
          isIn
            ? setCategories(categories.filter((el) => el !== category))
            : setCategories([...categories, category]);
        }

        return (
          <li key={i} className="category-item">
            <Button
              onClick={ToggleCategories}
              variant={isIn ? "contained" : "outlined"}
              color="primary"
              style={{
                color: isIn ? "white" : "blue",
              }}
            >
              {category}
            </Button>
          </li>
        );
      })}
    </Styled.Categories>
  );
}
