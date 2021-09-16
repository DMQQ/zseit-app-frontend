import * as Styled from "./styles.d";

export default function Info() {
  return (
    <Styled.Container>
      <h2 className="heading">Jak pisać posty?</h2>
      <p style={{ padding: 5 }}>
        Posty pisze się jako tekst który jest później konwertowany na html'a
      </p>

      <ul>
        <li>
          <h3>Nagłówki</h3>
          <p>Stosujemy dodając # przed tekstem </p>
          <ul>
            <li># h1</li>
            <li>## h2</li>
            <li>i tak dalej do ######</li>
          </ul>
        </li>
        <li>
          <h3>Zdjęcia</h3>
          <p>![tekst_alternatywny](nazwa.jpg)</p>
        </li>
        <li>
          <h3>Kod</h3>
          <p>~~~język zawartość ~~~</p>
        </li>

        <li>
          <h3>Pogrubienie **tekst**</h3>
        </li>
        <li>
          <h3>Wyróżnienie *tekst*</h3>
        </li>

        <li>
          <a
            href="https://www.npmjs.com/package/react-markdown"
            target="_blank"
            rel="noreferrer"
          >
            Dokumentacja
          </a>
        </li>
      </ul>
    </Styled.Container>
  );
}
