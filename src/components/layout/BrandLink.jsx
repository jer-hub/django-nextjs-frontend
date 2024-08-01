import { Package2 } from "lucide-react";
import Link from "next/link";

export default function BrandLink({ className, displayName }) {
  const finalClassName = className
    ? className
    : "flex items-center gap-2 text-lg font-semibold md:text-base";

  return (
    <Link href="#" className={finalClassName}>
      <Package2 className="h-6 w-6" />
      {displayName ? (
        <span>Saas</span>
      ) : (
        <span className="sr-only">Saas</span>
      )}
    </Link>
  );
}
