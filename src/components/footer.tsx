import * as React from "react";

export function Footer() {
  return (
    <div className="bg-background/60 fixed bottom-0 left-0 p-4 flex justify-between w-full">
      <footer className="flex h-10 w-full shrink-0 items-center px-2 md:px-6">
        <div className="mr-auto">
          <div>
            <h1 className="font-mono text-sm">2024 ACID GAMBIT</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Washington, D.C. USA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
