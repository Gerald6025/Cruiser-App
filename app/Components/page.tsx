import React from "react";
import Link from "next/link";

interface BannerProps {
  div1styles: string;
  div2styles: string;
  div3styles: string;
  title1styles: string;
  title2styles: string;
  title1: string;
  title2: string;
  descriptionstyles: string;
  description: string;
  buttondivstyles: string;
  button1styles: string;
  button1text: string;
  button2styles: string;
  button2text: string;
}

const Banner: React.FC<BannerProps> = (ban) => {
  return (
    <div className={ban.div1styles}>
      <div className={ban.div2styles}>
        <div className={ban.div3styles}>
          <h1 className={ban.title1styles}>{ban.title1}</h1>
          <h1 className={ban.title2styles}>{ban.title2}</h1>
        </div>

        <div>
          <p className={ban.descriptionstyles}>{ban.description}</p>
        </div>

        <div className={ban.buttondivstyles}>
          <button className={ban.button1styles}>
            <Link href="/">{ban.button1text}</Link>
          </button>
          <button className={ban.button2styles}>
            <Link href="/">{ban.button2text}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
