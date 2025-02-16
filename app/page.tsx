import AnimatedWord from "./_components/animated-word";
import RedirectButton from "./_components/redirect-button";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-1">
      <h1 className="font-bold text-3xl text-neutral-600 flex items-center gap-2">
        Mini Website <AnimatedWord />
      </h1>
      <p className="text-base">Design your website with ease.</p>
      <RedirectButton href="/new">Start</RedirectButton>
    </div>
  );
}
