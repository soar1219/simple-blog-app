import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 Blog</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] py-12 text-white">
        <div className="container px-4 mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
             <span className="text-[hsl(280,100%,70%)]">T3</span> App BLOG
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="https://create.t3.gg/en/usage/first-steps">
              <div className="rounded-xl bg-white/10 p-6 mt-10">
                <h3 className="text-2xl font-bold mb-4">Blog Title</h3>
                <div className="mb-4 text-lg">Blog description</div>
                <span className="text-base text-gray-400">2023/10/20</span>
              </div>
            </Link>
            <Link href="https://create.t3.gg/en/usage/first-steps">
              <div className="rounded-xl bg-white/10 p-6 mt-10">
                <h3 className="text-2xl font-bold mb-4">Blog Title</h3>
                <div className="mb-4 text-lg">Blog description</div>
                <span className="text-base text-gray-400">2023/10/20</span>
              </div>
            </Link>
            <Link href="https://create.t3.gg/en/usage/first-steps">
              <div className="rounded-xl bg-white/10 p-6 mt-10">
                <h3 className="text-2xl font-bold mb-4">Blog Title</h3>
                <div className="mb-4 text-lg">Blog description</div>
                <span className="text-base text-gray-400">2023/10/20</span>
              </div>
            </Link>
          </div>
          
        </div>
      </main>
    </>
  );
}
