export interface CTA {
  id?: string;
  href: string;
  label: string;
  style?: "Outline" | "Ghost";
}

export interface Pratica {
  placement?: "left" | "right" | "center";
  label?: string;
  /** @format rich-text */
  description?: string;
  cta?: CTA[];
}
export interface Props {
  praticas?: Pratica[]
}

const PLACEMENT = {
  left: "flex-col md:flex-row",
  right: "flex-col md:flex-row-reverse",
  center: "flex-row justify-center",
};

export default function ImageWithParagraph({
  praticas = [
    {
      label: "Title",
      description:
        "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
      placement: "left",
      cta: [],
    }
  ]
}: Props) {
  return (
    <>
      {
        praticas.length > 0 ? (
          <div class={`flex flex-col gap-6 pt-4`}>
            {praticas?.map((pratica) => (
              <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 mb-6">
                <div
                  class={`flex ${
                    PLACEMENT[pratica.placement]
                  } gap-12 md:gap-20 text-left items-center z-10 pb-4`}
                >
                  <div class="w-full gap-4 z-10 md:max-w-xl md:w-1/2 md:space-y-4 space-y-2">
                    <h2 class="text-2xl leading-snug">
                      {pratica.label}
                    </h2>
                    <div
                      class="grid gap-4 leading-[1.6]"
                      dangerouslySetInnerHTML={{
                        __html: pratica.description,
                      }}
                    >
                    </div>
                    <div class="flex gap-3">
                      {pratica.cta?.map((item) => (
                        <a
                          key={item?.id}
                          id={item?.id}
                          href={item?.href}
                          target={item?.href.includes("http") ? "_blank" : "_self"}
                          class={`font-normal btn btn-primary btn-sm
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
            ))}
          </div>
        ) : ""
      }
    </>
  );
}
