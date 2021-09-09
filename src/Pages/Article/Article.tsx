import { API } from "assets/constants/consts";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { ReplaceImages } from "helpers/ReplaceImages";

import * as Styled from "./styles.d";
import DownloadFiles from "Components/DownloadFiles/DownloadFiles";

export default function Article() {
  const { token } = useSelector((state: any) => state.user);
  const params = useParams<any>();

  const [result, setResult] = useState<any>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, status } = await axios.get(
          `${API}/posts/postId=${params.id}`,
          {
            headers: {
              token,
            },
          }
        );

        if (typeof data === "string") {
          return history.push("*");
        }

        if (data !== undefined && status === 200) {
          setResult(data);
          setLoading(false);
          document.title = data.title;
        }
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, [params.id, token, history]);

  console.log({ loading, error });

  return (
    <Styled.Article>
      <section style={{ paddingTop: 100 }} className="content-section">
        <ReactMarkdown
          children={
            result ? ReplaceImages(result.content || "", result.images) : ""
          }
          remarkPlugins={[remarkGfm]}
          components={{
            em: ({ node, ...props }) => (
              <span
                className="span-styles"
                {...props}
                style={{ color: "white" }}
              />
            ),
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                //@ts-ignore
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers={true}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </section>
      {result && result?.files?.length > 0 && (
        <DownloadFiles name={result.files[0].name} />
      )}
    </Styled.Article>
  );
}
