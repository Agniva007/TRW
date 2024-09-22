import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary bg-gray-300 py-8 text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              <span className="font-semibold">Techno Rubber Works</span> has been a trusted provider of high-quality
              rubber and plastic products for over 20 years.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: technorubberworks1@gmail.com</li>
              <li>Phone: (+91) 9836759558 / 9051930530</li>
              <li>Address: Belkulai, Panchla, Howrah, Pin-711322</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.68 8.84 8.44 9.74v-6.89H8.41V12h2.03v-1.64c0-2 1.22-3.09 3-3.09.87 0 1.79.15 1.79.15v2h-1.01c-.99 0-1.3.62-1.3 1.26V12h2.22l-.36 2.85h-1.86v6.89C18.32 20.84 22 16.84 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M22.46 6.03c-.77.35-1.6.58-2.46.68.88-.53 1.55-1.37 1.87-2.38-.82.49-1.73.84-2.7 1.03A4.14 4.14 0 0015.92 4c-2.27 0-4.1 1.83-4.1 4.09 0 .32.03.64.1.94C8.08 8.88 5.43 7.4 3.76 5.18c-.35.6-.54 1.29-.54 2.03 0 1.4.71 2.63 1.79 3.35-.66-.02-1.27-.2-1.8-.5v.05c0 1.95 1.39 3.58 3.23 3.95-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07.52 1.63 2.03 2.82 3.82 2.85A8.3 8.3 0 012 18.58 11.71 11.71 0 008.08 20c7.54 0 11.67-6.25 11.67-11.67 0-.18-.01-.36-.02-.54.8-.58 1.5-1.3 2.05-2.12z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M4.98 3.5C4.98 4.33 4.32 5 3.5 5c-.83 0-1.5-.67-1.5-1.5S2.67 2 3.5 2s1.48.67 1.48 1.5zM4.98 8H2V20h2.98V8zm6.97 0h-2.97v12h2.97v-6.54c0-3.62 4.05-3.91 4.05 0V20h2.98v-7.12c0-5.94-6.45-5.73-7.03-2.81V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Techno Rubber Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
