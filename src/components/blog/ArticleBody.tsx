import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxComponents } from "@/components/mdx/mdx-components";

export async function ArticleBody({ content }: { content: string }) {
  return (
    <div className="article-prose">
      <MDXRemote
        source={content}
        components={getMdxComponents()}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  );
}
