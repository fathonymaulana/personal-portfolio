"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaXTwitter, FaLinkedin, FaReddit } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

type Testimonial = {
  name: string;
  handle: string;
  text: string;
  platform: "twitter" | "linkedin" | "reddit";
  verified: boolean;
};

const col1: Testimonial[] = [
  {
    name: "Rizky Fauzan",
    handle: "@rizkyfzn_",
    text: "Gila sih kerjanya parah, rapi banget asli! Kemaren minta buatin landing page, eh selesainya cepet bgt plus warnanya jg pas banget sama branding. Highly recommended! 🔥",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Bayu Aji Pangestu",
    handle: "Product Manager at Tokopedia",
    text: "Bener-bener ga nyesel kerja bareng dia. Requirement yang dikasih dikit eh dia langsung paham maksudnya. Hasil kerjanya juga clean dan gampang di-maintain.",
    platform: "linkedin",
    verified: false,
  },
  {
    name: "Anindya Putri",
    handle: "@anindyaptr",
    text: "Fix ini dev idaman sih. Desainnya super clean & elegan, ga norak sama sekali. Suka banget sama transisi animasinya yang smooth parah 💯",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Daffa Arkananta",
    handle: "@daffaark",
    text: "Kerjaannya sat set sat set, no drama. Komunikasi juga lancar banget gampang dihubungi. Mantap lah pokoknya!",
    platform: "twitter",
    verified: false,
  },
  {
    name: "Ratna Kumalasari",
    handle: "CEO & Founder at Ruangguru",
    text: "Sangat puas dengan hasil kerjanya! Proses dari awal sampai akhir sangat profesional. Feedback kita juga langsung di-implement dengan cepat.",
    platform: "linkedin",
    verified: true,
  },
  {
    name: "Galih Pratama",
    handle: "@galihprtm",
    text: "Asli keren banget! Udah nyari dev kemana-mana baru kali ini nemu yang se-click ini sama style yang gw mau. Awesome job bro! ✨",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Nabila Azzahra",
    handle: "UI/UX Designer at Gojek",
    text: "Kolaborasi yang sangat menyenangkan. Dia ngerti banget soal design system dan cara implementasinya jadi kode yang pixel-perfect.",
    platform: "linkedin",
    verified: false,
  },
];

const col2: Testimonial[] = [
  {
    name: "Arief Budiman",
    handle: "@ariefbdmn",
    text: "Gak nyangka hasilnya bisa sekeren ini! UX-nya dapet banget dan aplikasinya jalan lancar tanpa ngebug. Best dev experience so far. 🚀",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Wildan Maulana",
    handle: "Lead Engineer at Traveloka",
    text: "Kualitas kodenya top tier. Clean code, komponennya reusable, dan struktur foldernya rapi. Sangat terbantu buat pengembangan ke depannya.",
    platform: "linkedin",
    verified: true,
  },
  {
    name: "Fikri Haikal",
    handle: "@fikrihkl",
    text: "Buset dah cepet amat kelarnya! Padahal gw kira bakal makan waktu berminggu-minggu, eh taunya beberapa hari doang kelar. Gokil!",
    platform: "twitter",
    verified: false,
  },
  {
    name: "Dewi Anggraeni",
    handle: "Marketing Director at Bukalapak",
    text: "Website baru kita kelihatan jauh lebih profesional dan konversinya naik drastis sejak di-redesign sama dia. Thanks a lot! 🙏",
    platform: "linkedin",
    verified: true,
  },
  {
    name: "Raka Aditya",
    handle: "@rakaadit_",
    text: "Wah parah sih ini, responsif abis desainnya. Dibuka di HP atau desktop tetep kece badai. Recommended banget pokoknya!",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Salsabila Zahra",
    handle: "Startup Founder at KitaBisa",
    text: "Sangat membantu buat MVP kita. Paham banget sama kebutuhan bisnis dan ngasih solusi teknis yang paling efisien.",
    platform: "linkedin",
    verified: false,
  },
  {
    name: "Naufal Ghifari",
    handle: "@naufalghf",
    text: "Gue kasih rate 10/10 deh buat hasil kerjanya. Detail kecil aja diperhatiin banget sama dia. Keren cuy! 👏",
    platform: "twitter",
    verified: true,
  },
];

const col3: Testimonial[] = [
  {
    name: "Zahra Aulia",
    handle: "@zahraul_",
    text: "Pekerjaannya detail banget, sampe accessibility juga diurusin bener-bener. Puas banget sama outputnya yang melebihi ekspektasi!",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Aditya Nugroho",
    handle: "Tech Lead at Shopee ID",
    text: "Selalu deliver on-time dan kualitas kerjanya selalu konsisten. Problem solver abis kalo ada isu teknikal yang lumayan rumit.",
    platform: "linkedin",
    verified: true,
  },
  {
    name: "Keisya Ramadhani",
    handle: "@keisyarmdn",
    text: "Sumpah ini devnya pinter banget! Request fitur yang lumayan ribet tetep dibuatin dengan santai dan hasilnya flawless.",
    platform: "twitter",
    verified: false,
  },
  {
    name: "Hafidz Rasyid",
    handle: "Freelance Designer",
    text: "Enak diajak diskusi. Kalau menurut dia ada flow yang kurang oke, dia bakal ngasih saran yang masuk akal banget.",
    platform: "linkedin",
    verified: true,
  },
  {
    name: "Tiara Kusuma",
    handle: "@tiaraksmw",
    text: "Ampun dah bagus banget desainnya 😭 Bikin betah lama-lama di aplikasinya. Keren banget lu bang!",
    platform: "twitter",
    verified: true,
  },
  {
    name: "Irfan Habibie",
    handle: "Business Owner at Sociolla",
    text: "Investasi yang sangat sepadan. Website bisnis jadi naik kelas dan keliatan jauuuh lebih modern dibanding kompetitor.",
    platform: "linkedin",
    verified: false,
  },
  {
    name: "Raditya Dika",
    handle: "@radityadk_",
    text: "Gokil bener dah, abis meeting bentar langsung gas ngoding dan tau tau udah kelar aja. Edan emang skillnya! 🔥",
    platform: "twitter",
    verified: true,
  },
];

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  const avatarId = `0${(data.name.length % 5) + 1}.png`;

  const getPlatformIcon = () => {
    switch (data.platform) {
      case "twitter":
        return (
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-semibold">
            <div className="bg-foreground/5 p-1 rounded-full text-foreground/80">
              <FaXTwitter className="w-3.5 h-3.5" />
            </div>
            <span>x.com</span>
          </div>
        );
      case "linkedin":
        return (
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-semibold">
            <div className="bg-[#0A66C2]/10 p-1 rounded-full text-[#0A66C2]">
              <FaLinkedin className="w-3.5 h-3.5" />
            </div>
            <span>LinkedIn</span>
          </div>
        );
      case "reddit":
        return (
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-semibold">
            <div className="bg-[#FF4500]/10 p-1 rounded-full text-[#FF4500]">
              <FaReddit className="w-3.5 h-3.5" />
            </div>
            <span>Reddit</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background shadow-sm w-full mb-6 relative">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border border-border">
            <AvatarImage
              src={`https://ui.shadcn.com/avatars/${avatarId}`}
              alt={data.name}
              className="object-cover"
            />
            <AvatarFallback>
              {data.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-foreground leading-tight">
                {data.name}
              </span>
              {data.verified && (
                <MdVerified className="w-4 h-4 text-[#1D9BF0] flex-shrink-0" />
              )}
            </div>
            <span className="text-xs text-muted-foreground">{data.handle}</span>
          </div>
        </div>
        {getPlatformIcon()}
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed font-medium">
        {data.text}
      </p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 flex flex-col items-center justify-center gap-12 w-full border-b border-border bg-muted/20"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl px-4">
        <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          The Wall of Love
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Here's what some of our users have to say about my work.
        </p>
      </div>

      {/* Marquee Columns Container */}
      <div
        className="w-full max-w-7xl px-4 h-[600px] md:h-[800px] overflow-hidden relative flex justify-center gap-4 md:gap-6 mt-8"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Column 1 (Moves Down) */}
        <div className="flex-1 max-w-sm flex flex-col relative h-full">
          <div className="flex flex-col min-w-full animate-marquee-down hover:[animation-play-state:paused]">
            {/* Original */}
            {col1.map((item, i) => (
              <TestimonialCard key={`col1-1-${i}`} data={item} />
            ))}
            {/* Duplicated for loop */}
            {col1.map((item, i) => (
              <TestimonialCard key={`col1-2-${i}`} data={item} />
            ))}
          </div>
        </div>

        {/* Column 2 (Moves Up) */}
        <div className="flex-1 max-w-sm hidden sm:flex flex-col relative h-full">
          <div className="flex flex-col min-w-full animate-marquee-up hover:[animation-play-state:paused]">
            {/* Original */}
            {col2.map((item, i) => (
              <TestimonialCard key={`col2-1-${i}`} data={item} />
            ))}
            {/* Duplicated for loop */}
            {col2.map((item, i) => (
              <TestimonialCard key={`col2-2-${i}`} data={item} />
            ))}
          </div>
        </div>

        {/* Column 3 (Moves Down) */}
        <div className="flex-1 max-w-sm hidden lg:flex flex-col relative h-full">
          <div className="flex flex-col min-w-full animate-marquee-down hover:[animation-play-state:paused]">
            {/* Original */}
            {col3.map((item, i) => (
              <TestimonialCard key={`col3-1-${i}`} data={item} />
            ))}
            {/* Duplicated for loop */}
            {col3.map((item, i) => (
              <TestimonialCard key={`col3-2-${i}`} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
