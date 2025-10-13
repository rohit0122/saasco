'use client';

import OpenFooter from "@/components/shared/OpenFooter";
import OpenNavbar from "@/components/shared/OpenNavbar";

export default function AppOpenLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-dark">
            <OpenNavbar />
            <main className="flex-grow">{children}</main>
            <OpenFooter />
        </div>
    );
}
