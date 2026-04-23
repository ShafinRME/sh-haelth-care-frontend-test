import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png";

interface LogoProps {
    href?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
    imageClassName?: string;
}

export function Logo({
    href = "/",
    width = 120,
    height = 50,
    priority = true,
    className = "flex items-center space-x-2",
    imageClassName = "h-auto w-auto",
}: LogoProps) {
    const logoImage = (
        <Image
            src={logoImg}
            alt="Logo"
            width={width}
            height={height}
            priority={priority}
            className={imageClassName}
        />
    );

    // If href is provided, wrap in Link
    if (href) {
        return (
            <Link href={href} className={className}>
                {logoImage}
            </Link>
        );
    }

    // Otherwise, return just the image with wrapper div
    return <div className={className}>{logoImage}</div>;
}