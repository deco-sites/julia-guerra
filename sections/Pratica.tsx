import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Paragraph {
  label: string;
  /** @format rich-text */
  text: string;
}

export interface CTA {
  id?: string;
  href: string;
  label: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  placement?: "left" | "right" | "center";
  title?: string;
  tagline?: string;
  /** @format rich-text */
  description?: string;
  paragraphs: Paragraph[];
  image?: ImageWidget;
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col md:flex-row",
  right: "flex-col md:flex-row-reverse",
  center: "flex-row justify-center",
};

export default function ImageWithParagraph({
  title = "Title",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  tagline = null,
  image = null,
  placement = "left",
  paragraphs = [
    {label: "Title", text: "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit."},
  ],
  cta = [],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4">
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10`}
      >
        
          { image && <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
            <Image
              width={640}
              height={480}
              class="object-fit z-10"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
        </div> }
        <div class="w-full gap-4 z-10 md:max-w-xl md:w-1/2 md:space-y-4 space-y-2">
          <h2 class="text-2xl leading-snug">
            {title}
          </h2>
          {tagline ? <p class="text-sm text-secondary">
            {tagline}
          </p>
          : ''}
          <div
            class="grid gap-4 leading-[1.6]"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          >
          </div>
          <div class={`flex flex-col gap-6 pt-4`}>
            {paragraphs?.map((item) => (
              <div>
                <h3 class="mb-2 text-xl leading-snug">{item.label}</h3>
                <div
                  class="grid gap-4 leading-[1.6]"
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                >
                </div>
              </div>
            ))}
          </div>
          <div class={`flex gap-3 pt-4`}>
            {cta?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary
                  ${!item.style || item.style == "Outline" && "btn-outline"}
                  ${item.style == "Ghost" && "btn-ghost"}
                `}
              >
                {item?.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
