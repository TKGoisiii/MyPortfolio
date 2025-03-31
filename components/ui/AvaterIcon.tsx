import Image from 'next/image';

export const AvatarIcon = () => (
    <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-white/30 overflow-hidden">
      <Image
        src="/profile.png"
        alt="Profile"
        width={96}
        height={96}
        className="object-cover"
      />
    </div>
  );