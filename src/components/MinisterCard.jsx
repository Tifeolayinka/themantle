export default function MinisterCard({ name, photo }) {
  return (
    <div className="group relative aspect-[259/330] overflow-hidden rounded-xl bg-neutral-800">
      <img
        src={photo}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-60% to-black to-[98%]" />
      <p className="font-shout absolute inset-x-2 bottom-4 text-center text-[22px] uppercase leading-[1.1] text-white sm:text-[26px] md:text-[32px]">
        {name}
      </p>
    </div>
  );
}
