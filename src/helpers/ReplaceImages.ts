import { API } from "assets/constants/consts";

export function ReplaceImages(content: string = "", images: any[] = []) {
  let text = content;

  images?.forEach(({ name, original_name }: any) => {
    text = text.replace(original_name, `${API}/posts/images/name=${name}`);
  });

  return text;
}
