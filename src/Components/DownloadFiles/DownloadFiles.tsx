import { API } from "assets/constants/consts";
import AttachmentIcon from "@material-ui/icons/Attachment";

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
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        position: "fixed",
        bottom: 10,
        right: 10,
      }}
    >
      <AttachmentIcon style={{ marginRight: 10 }} /> Pobierz
    </a>
  );
}
