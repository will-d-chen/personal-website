import dynamic from 'next/dynamic';

const CustomAudioPlayer = dynamic(() => import('./CustomAudioPlayer'));

export default function Personal() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-amber-200">Personal Pursuits</h1>
      <div className="mb-8 text-lg text-amber-100/80">What you won't find on my resume</div>
      <CustomAudioPlayer />
    </div>
  );
}
