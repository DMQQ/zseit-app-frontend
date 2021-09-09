import { API } from "assets/constants/consts";

export default function DownloadFiles({ name }: { name: string }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${API}/posts/files/name=${name}`}
      style={{
        textDecoration: "none",
        color: "white",
        backgroundColor: "#111111",
        padding: 10,
      }}
    >
      Pobierz
    </a>
  );
}
