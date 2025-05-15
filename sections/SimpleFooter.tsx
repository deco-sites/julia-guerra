export interface Props {
  copyrightText?: string; // @format text
  facebookLink?: string;
  twitterLink?: string;
  instagramLink?: string;
}

export default function Footer({ 
  copyrightText = "© 2023 Company Name. All rights reserved.",
  facebookLink = "#",
  twitterLink = "#", 
  instagramLink = "#",
}: Props) {
  return (
    <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div class="grid grid-flow-col gap-4">
        <a href={facebookLink} class="link link-hover">Facebook</a> 
        <a href={twitterLink} class="link link-hover">Twitter</a> 
        <a href={instagramLink} class="link link-hover">Instagram</a>
      </div> 
      <div>
        <p class="font-bold">
          Company Name
        </p> 
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}