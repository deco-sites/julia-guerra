import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  placement?: "left" | "right" | "center";
  title?: string;
  titlePlacement?: "left" | "right" | "center";
  /** @format rich-text */
  description?: string;
  descriptionPlacement?: "left" | "right" | "center" | "justify";
  tagline?: string;
  image?: ImageWidget;
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
  ctaPlacement?: "left" | "right" | "center";
}

const PLACEMENT = {
  left: "flex-col md:flex-row",
  right: "flex-col md:flex-row-reverse",
  center: "flex-row justify-center",
};

const CTA_PLACEMENT = {
  left: "start",
  right: "end",
  center: "center",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  titlePlacement = "left",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  descriptionPlacement = "left",
  tagline = null,
  image = null,
  placement = "left",
  disableSpacing,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", style: "Outline" },
    { id: "change-me-2", href: "/", text: "Change me", style: "Ghost" },
  ],
  ctaPlacement = "left",
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        
          { image && <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
            <Image
              width={640}
              height={640}
              class="object-fit z-10"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
        </div> }
        <div class="w-full gap-4 z-10 md:max-w-xl md:w-1/2 md:space-y-4 space-y-2">
          {tagline ? <p class="text-sm font-semibold">
            {tagline}
          </p>
          : ''}
          <p class="text-4xl leading-snug" style={`text-align:${titlePlacement}`}>
            {title}
          </p>
          <p class="leading-normal" style={`text-align:${descriptionPlacement}`}>
            {description}
          </p>
          <div class={`flex gap-3 pt-4 justify-${CTA_PLACEMENT[ctaPlacement]}`}>
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
                {item?.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
