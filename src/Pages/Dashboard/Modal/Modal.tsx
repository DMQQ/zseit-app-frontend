export default function Modal({
  text,
  style = {},
}: {
  text: string;
  style?: any;
}) {
  return (
    <div
      style={{
        position: "fixed",
        left: 20,
        bottom: 20,
        background: "green",
        padding: 10,
        color: "white",
        width: 300,
        borderRadius: 10,
        ...style,
      }}
    >
      {text}
    </div>
  );
}
