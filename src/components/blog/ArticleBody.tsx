import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugifyHeading } from "@/lib/utils";

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const text = String(children);
            const id = slugifyHeading(text);
            return (
              <h2 id={id} className="scroll-mt-28">
                {children}
              </h2>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
