import PostArea from "./components/space/PostArea";
import ReelsArea from "./components/space/ReelsArea";

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-items-center min-h-screen p-8 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <div className="flex-auto">leftbar</div>
      <div className="flex flex-col flex-none gap-4 w-3/5 items-center justify-center py-1.5 px-32">
        <PostArea />
        <ReelsArea />
      </div>
      <div className="flex-auto">rightbar</div>
    </div>
  );
}
