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
    <footer class="footer footer-center p-10 bg-base-100 text-base-content">
      <div class="grid grid-flow-col gap-4">
        {cta?.map((item) => (
          <a
            key={item?.id}
            id={item?.id}
            href={item?.href}
            target={item?.href.includes("http") ? "_blank" : "_self"}
            class={`font-normal btn btn-primary
              ${!item.style || item.style == "Ghost" && "btn-ghost"}
              ${item.style == "Outline" && "btn-outline"}
            `}
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