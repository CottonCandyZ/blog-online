import PostsList from "~/components/posts/posts-list";
import { getLatestPostsListInfo } from "~/lib/posts";

export const metadata = {
  title: "棉花糖",
  description: "棉花糖的 Blog",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Page() {
  const latestPostsListInfo = await getLatestPostsListInfo();
  return (
    <main className="mx-auto grid max-w-6xl grid-cols-[2fr_1fr] gap-10 px-5 pb-20 md:px-10">
      <section className="col-span-full md:col-span-1">
        <h2 className="text-xl font-medium tracking-widest text-primary">
          最新序
        </h2>
        <div className="h-10"></div>
        <div className="flex flex-col gap-8">
          <PostsList props={latestPostsListInfo} />
        </div>
      </section>
      <section className="col-auto hidden md:col-span-1 md:block">
        <h2 className="text-xl font-medium tracking-widest text-primary">
          Tags
        </h2>
      </section>
    </main>
  );
}
