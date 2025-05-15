import StoryContainer from "../components/StoryContainer";
export default function Story() {
  return (
    <main className="w-full h-full absolute bg-no-repeat bg-center overflow-hidden bg-[length:100%_100%] p-0 m-0 flex-grow bg-[url('/assets/story_bg.png')]">
      <div className="w-full h-full bg-[#14131381]">
        <StoryContainer />
      </div>
    </main>
  );
}
