import Image from "next/image";
import Sun from "../../public/planets/Sun.png";
import Mercury from "../../public/planets/mercury.png";
import Venus from "../../public/planets/venus.png";
import Earth from "../../public/planets/earth.png";
import { useState } from "react";

export default function News() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const news = [
    {
      title: "Sun",
      image: Sun,
      date: "September 2, 2040",
      description:
        "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 mi), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. About three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.",
    },
    {
      title: "Mercury",
      image: Mercury,
      date: "August 31, 2040",
      description:
        "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and never exceeds 28° away from the Sun as viewed from Earth. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. It never appears far from the Sun in the sky, so it can only be seen in the morning or evening sky, never in the middle of the day. As seen from Earth, Mercury appears to move around its orbit in about 116 days, as it moves in its elongated orbit relative to the stars. An observer on Mercury would see the Sun move from east to west every four minutes.",
    },
    {
      title: "Venus",
      image: Venus,
      date: "September 1, 2040",
      description:
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east). It does not have any natural satellites. It is named after the Roman goddess of love and beauty. Venus is the second-brightest natural object in Earth's night sky after the Moon, reaching an apparent magnitude of −4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth's perspective, it never appears to venture far from the Sun; its elongated orbit takes it between 0.28 and 0.72 AU (42.0 and 107.5 million km; 26.0 and 66.7 million mi) from the Sun, as Venus moves in its orbit relative to the stars. An observer on Venus would see the Sun move from east to west every 117 days.",
    },
    {
      title: "Earth",
      image: Earth,
      date: "September 5, 2040",
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. About 71% of Earth's surface is covered with salt-water oceans. The remaining 29% is land consisting of continents and islands that together have many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earth's polar regions are covered in ice. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates the Earth's magnetic field, and a convecting mantle that drives plate tectonics. The outer surface of the solid Earth is divided into several rigid tectonic plates that migrate across the surface over many millions of years. About 71% of Earth's surface is covered with salt-water oceans. The remaining 29% is land consisting of continents and islands that together have many lakes, rivers and other sources of water that contribute to the hydrosphere. The majority of Earth's polar regions are covered in ice. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates the Earth's magnetic field, and a convecting mantle that drives plate tectonics. The outer surface of the solid Earth is divided into several rigid tectonic plates that migrate across the surface over many millions of years.",
    },
  ];

  return (
    <div className="max-w-7xl px-4">
      <h1 className="uppercase font-bold md:text-lg px-4 border-l">news</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-start">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100/20 rounded-lg overflow-y-scroll max-h-60 p-4 flex gap-4 flex-col md:flex-row justify-start"
          >
            <Image src={item.image} alt={item.title} className="w-10 h-10" />
            <div className="flex flex-col gap-2d">
              <h1 className="text-xl uppercase font-bold">{item.title}</h1>
              <p className="text-sm text-ellipsis overflow-y-clip text-gray-200">
                {item.description}
              </p>
              <div className="w-full flex justify-between">
                <p className="text-sm text-gray-500">{item.date}</p>
                <button
                  onClick={handleClick}
                  className="text-xs md:text-sm font-bold border border-white rounded-lg px-2    py-1"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
