import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

import * as Styled from "./styles.d";

const text = `

# HI **DEVELOPERS** *React*
## h2
### h3

**FAT**

*highlighted*

----

 1. Element
 2. Element
 3. Element
 4. Element

---

[link](https://example.com)

![test-img](img)



~~~jsx

const main = new App()

main.listen(PORT,( )=> console.log('App listen on port PORT'))

~~~

~~~ts

{
    provide: 'ASYNC_CONNECTION',
    useFactory: async () => {
      const connection = await createConnection(options);
      return connection;
    },
}

~~~



`;

export default function Article() {
  return (
    <Styled.Article>
      <section style={{ paddingTop: 100 }} className="content-section">
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkGfm]}
          components={{
            em: ({ node, ...props }) => (
              <span
                style={{
                  color: "white",
                  background: "#3E4044",
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
                {...props}
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
                  wrapLongLines={true}
                  showLineNumbers={true}
                  customStyle={{}}
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
