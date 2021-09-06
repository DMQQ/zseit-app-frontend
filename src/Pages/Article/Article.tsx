import { API } from "assets/constants/consts";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

import * as Styled from "./styles.d";

/* const text = `
# *Welcome in react-markdown*

---

* Planning
* Designing
* Creating
* Testing 
* Seling

---

## Starting Code 

copy the code below to start codding along with me

~~~tsx
import React from "react";

export default function App(){
  return <div></div>
}

~~~

## Todo Component
~~~tsx
export default function Todo(){
  return {
    <li>
    name
    <button>Remove</button>
    </li>
  }
}

~~~



`;
 */
export default function Article() {
  const { token } = useSelector((state: any) => state.user);
  const { id } = useParams<{ id: string }>();

  const [result, setResult] = useState<any>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, status } = await axios.get(`${API}/post/postId=${+id}`, {
          headers: {
            token,
          },
        });
        if (data !== undefined && status == 200) {
          setResult(data);
          setLoading(false);
        }
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Styled.Article>
      <section style={{ paddingTop: 100 }} className="content-section">
        <ReactMarkdown
          children={result?.content}
          remarkPlugins={[remarkGfm]}
          components={{
            em: ({ node, ...props }) => (
              <span className="span-styles" {...props} />
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
                  wrapLongLines={true}
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
    </Styled.Article>
  );
}
