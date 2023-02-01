import cn from "classnames";
import Link from "next/link";
import s from "./Logo.module.scss";

export interface iLogo {
  className?: string;
}

export const Logo = ({ className }: iLogo) => {
  return (
    <Link href="/" className={cn(s.logo, className)}>
      <svg width="449" height="62" viewBox="0 0 449 62" fill="#1F1F1F">
        {/* <!-- C --> */}
        <rect
          className="letter1"
          x="0.5"
          y="16.8174"
          width="10.5692"
          height="44.3904"
        />
        <path
          className="letter1"
          d="M44.8906 16.8174L37.9452 27.3865L0.500175 27.3865L0.500175 16.8174L44.8906 16.8174Z"
        />
        <path
          className="letter1"
          d="M44.8906 61.2075L37.9452 50.6384L0.500175 50.6384L0.500175 61.2075L44.8906 61.2075Z"
        />

        {/* <!-- T --> */}
        <rect x="65.4258" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="92.9062"
          y="16.8174"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 92.9062 16.8174)"
        />

        {/* <!-- R --> */}
        <rect x="130.352" y="16.8174" width="10.5692" height="31.1035" />
        <rect x="96.5273" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="140.918"
          y="16.8174"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 140.918 16.8174)"
        />
        <rect
          x="140.918"
          y="37.3521"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 140.918 37.3521)"
        />

        {/* <!-- O --> */}
        <rect x="144.543" y="16.8174" width="10.5692" height="44.3904" />
        <rect x="178.363" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="188.934"
          y="16.8174"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 188.934 16.8174)"
        />
        <rect
          x="188.934"
          y="50.6382"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 188.934 50.6382)"
        />
        {/* <!-- i --> */}
        <rect x="192.559" y="16.8174" width="10.5692" height="44.3904" />
        <rect x="226.379" y="16.8174" width="10.5692" height="44.3904" />
        <path d="M226.378 16.8175L234.389 22.6011L203.131 61.1856L194.93 54.4961L226.378 16.8175Z" />
        <path d="M226.379 5.19059L226.379 12.589L203.127 12.589L203.127 5.19058L214.753 0.208007L226.379 5.19059Z" />
        <rect x="220.035" y="0.812988" width="3.32173" height="3.92569" />
        {/* <!-- G --> */}
        <path d="M284.961 16.8174L274.845 27.3865L240.57 27.3865L240.57 16.8174L284.961 16.8174Z" />
        <path d="M240.57 61.2075L251.139 50.1854L251.139 16.8171H240.57V61.2075Z" />
        {/* <!-- R --> */}
        <rect x="322.406" y="16.8174" width="10.5692" height="31.1035" />
        <rect x="288.586" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="332.977"
          y="16.8174"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 332.977 16.8174)"
        />
        <rect
          x="332.977"
          y="37.3521"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 332.977 37.3521)"
        />
        {/* <!-- A --> */}
        <rect x="336.598" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="380.988"
          y="16.8174"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 380.988 16.8174)"
        />
        <rect x="370.418" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="380.988"
          y="37.6543"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 380.988 37.6543)"
        />

        {/* <!-- D --> */}
        <rect x="394.277" y="16.8174" width="10.5692" height="44.3904" />
        <rect x="428.098" y="16.8174" width="10.5692" height="44.3904" />
        <rect
          x="438.668"
          y="16.8174"
          width="10.5692"
          height="44.3904"
          transform="rotate(90 438.668 16.8174)"
        />
        <rect
          x="448.328"
          y="50.6396"
          width="10.5692"
          height="63.7169"
          transform="rotate(90 448.328 50.6396)"
        />
      </svg>
    </Link>
  );
};
