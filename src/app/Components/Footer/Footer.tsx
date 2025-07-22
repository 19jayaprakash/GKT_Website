"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-shrink-0 ml-0 md:ml-10 xl:ml-10">
          <Image
            src="/gkt_light.png" 
            alt="Global Knowledge"
            width={200}
            height={100}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {/* <div>
            <h3 className="font-semibold mb-2">Index</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Presence</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Course</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">AI assistant</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X (Twitter)</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li className="pt-2 text-gray-400 text-xs">© 2025 GKT</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
