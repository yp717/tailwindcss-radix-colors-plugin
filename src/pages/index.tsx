import DarkModeToggle from "@/components/DarkModeToggle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-24 p-24 ${inter.className} bg-gray-100`}
    >
      <DarkModeToggle />
      <div className="px-2 py-2 border-2 rounded-md bg-amber-1000 text-amber-100 dark:border-grass-1100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
        eros, lacinia in ligula eu, tincidunt ultricies magna. Donec id tempus
        purus. Nullam sit amet enim neque. Maecenas lacinia suscipit diam, id
        laoreet augue. In non ultrices tellus, luctus cursus diam. Praesent
        convallis nisi vitae mauris mollis, non cursus velit iaculis. Curabitur
        vestibulum accumsan massa, vel dapibus turpis gravida et. Suspendisse eu
        varius elit, id aliquam mi. Donec tincidunt ante massa, nec tempor sem
        lobortis eu.
      </div>
      <div className="text-crimsonDark-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
        eros, lacinia in ligula eu, tincidunt ultricies magna. Donec id tempus
        purus. Nullam sit amet enim neque. Maecenas lacinia suscipit diam, id
        laoreet augue. In non ultrices tellus, luctus cursus diam. Praesent
        convallis nisi vitae mauris mollis, non cursus velit iaculis. Curabitur
        vestibulum accumsan massa, vel dapibus turpis gravida et. Suspendisse eu
        varius elit, id aliquam mi. Donec tincidunt ante massa, nec tempor sem
        lobortis eu.
      </div>
    </main>
  );
}
