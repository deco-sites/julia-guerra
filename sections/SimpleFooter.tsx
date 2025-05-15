export interface Props {
  copyrightText?: string; // @format text
  cta?: CTA[];
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export default function Footer({ 
  copyrightText = "©2025 All rights reserved.",
  cta = [],
}: Props) {
  return (
    <footer class="footer footer-center center text-center grid gap-8 p-10 mb-4 text-sm">
      <div class="flex gap-2 center justify-center">
        {cta?.map((item) => (
          <a
            key={item?.id}
            id={item?.id}
            href={item?.href}
            target={item?.href.includes("http") ? "_blank" : "_self"}
          >
            {item?.text}
          </a>
        ))}
      </div> 
      <div>
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}