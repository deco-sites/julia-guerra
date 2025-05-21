import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content lg:container md:max-w-6xl lg:mx-auto mx-4 flex gap-8 items-center justify-center py-4 mt-2 mb-6">
        <a href="/" class="block lg:py-6 flex-auto">
          <Image src={logo.src || ""} width={200} alt={logo.alt} />
        </a>

        {
          navigation.links.length > 0 ? (
            <div class="justify-end lg:flex w-full hidden md:block">
              <ul class="flex mt-2">
                {navigation.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="block link no-underline hover:underline px-4 py-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul class="flex gap-3">
                {navigation.buttons?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href ?? "#"}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${item.outline && "btn-outline"
                      }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </ul>
            </div>
          ) : ""
        }

        <label
          htmlFor="mobile-drawer-nav"
          class="huddeflex lg:hidden drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50 md:hidden">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-2 min-h-full w-80 bg-base-100 text-base-content pt-4">
          <a class="p-6" href="/">
            <Image
              src={logo.src || ""}
              width={140}
              height={50}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a class="text-xl" href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
