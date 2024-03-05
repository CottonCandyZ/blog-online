import Header from "~/components/header";
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
    <div>
      <div className="col-span-full h-64 bg-primary-extralight">
        <div className="h-14"></div>
        <div className="sticky top-0 mx-auto max-w-6xl bg-primary-extralight px-10 py-3">
          <Header />
        </div>
      </div>
      <main className="mx-auto grid max-w-6xl grid-cols-[2fr_1fr] gap-10 px-10 py-20">
        <section className="col-span-1">
          <h1 className="text-xl font-medium tracking-widest text-primary">
            最新序
          </h1>
          <div className="h-10"></div>
          <div className="flex flex-col gap-8">
            <PostsList props={latestPostsListInfo} />
          </div>
        </section>
        <section className="col-span-1"></section>
      </main>
    </div>
  );
}
