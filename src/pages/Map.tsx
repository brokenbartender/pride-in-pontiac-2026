import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Map as MapIcon, Accessibility, Coffee, Music, TriangleAlert, Info,
  Store, Bath, ShieldAlert, Heart, Mic, Ear, Users
} from "lucide-react";
import { PanStripe } from "../components/PanStripe";
import { crofootLayout, LayoutItem, POI } from "../data/crofootLayout";
import { motion, AnimatePresence } from "motion/react";

type FilterType = "all" | "restroom" | "accessibility" | "safety" | "vendor" | "food" | "quiet" | "info";

export function Map() {
  const [selectedLocation, setSelectedLocation] = useState<LayoutItem | POI | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const handleSelect = (item: LayoutItem | POI) => {
    setSelectedLocation(item);
  };

  const poiIcons: Record<string, React.ReactNode> = {
    restroom: <Bath size={16} />,
    accessibility: <Accessibility size={16} />,
    safety: <ShieldAlert size={16} />,
    vendor: <Store size={16} />,
    food: <Coffee size={16} />,
    quiet: <Ear size={16} />,
    info: <Info size={16} />
  };

  const poiColors: Record<string, string> = {
    restroom: "#21B1FF",
    accessibility: "#FF218C",
    safety: "#FF218C",
    vendor: "#FFD800",
    food: "#26CEAA",
    quiet: "#B57EDC",
    info: "#FFFFFF"
  };

  const visiblePOIs = crofootLayout.pois.filter(poi => activeFilter === "all" || poi.type === activeFilter);

  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6 relative overflow-hidden">
      <PanStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
      <div className="max-w-7xl mx-auto mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="font-serif font-black text-5xl md:text-7xl mb-4">Festival Map</h1>
            <p className="text-xl text-pride-muted max-w-2xl">Your real-time navigation hub. Locate stages, accessible spaces, vendors, and safety zones.</p>
          </div>
          <a href="mailto:baentertainmentMI@gmail.com?subject=Event%20Emergency%20%2F%20Help" className="bg-pride-rose text-pride-white font-bold uppercase tracking-widest py-3 px-6 hover:bg-pride-ink transition-colors flex items-center gap-2 rounded-full whitespace-nowrap shadow-lg">
            <Heart size={18} /> Emergency / Help
          </a>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap gap-2 mb-8 bg-pride-white/50 p-2 rounded-xl border border-pride-black/5">
          <button 
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors ${activeFilter === "all" ? "bg-pride-black text-pride-white" : "hover:bg-pride-black/5"}`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter("restroom")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 ${activeFilter === "restroom" ? "bg-[#21B1FF] text-pride-black" : "hover:bg-pride-black/5"}`}
          >
            <Bath size={16} /> Restrooms
          </button>
          <button 
            onClick={() => setActiveFilter("accessibility")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 ${activeFilter === "accessibility" ? "bg-[#FF218C] text-pride-white" : "hover:bg-pride-black/5"}`}
          >
            <Accessibility size={16} /> Access
          </button>
          <button 
            onClick={() => setActiveFilter("quiet")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 ${activeFilter === "quiet" ? "bg-[#B57EDC] text-pride-white" : "hover:bg-pride-black/5"}`}
          >
            <Ear size={16} /> Quiet Zones
          </button>
          <button 
            onClick={() => setActiveFilter("safety")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 ${activeFilter === "safety" ? "bg-pride-rose text-pride-white" : "hover:bg-pride-black/5"}`}
          >
            <ShieldAlert size={16} /> Safety
          </button>
          <button 
            onClick={() => setActiveFilter("vendor")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 ${activeFilter === "vendor" ? "bg-[#FFD800] text-pride-black" : "hover:bg-pride-black/5"}`}
          >
            <Store size={16} /> Vendors
          </button>
           <button 
            onClick={() => setActiveFilter("food")}
            className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 ${activeFilter === "food" ? "bg-[#26CEAA] text-pride-black" : "hover:bg-pride-black/5"}`}
          >
            <Coffee size={16} /> Bar & Food
          </button>
        </div>

        {/* Interactive Map Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="flex-1 bg-pride-black rounded-xl p-4 md:p-8 overflow-x-auto shadow-2xl border border-pride-white/10">
            <div className="min-w-[700px] relative">
              <svg viewBox="0 0 880 600" className="w-full h-auto drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
                {/* Background area representing the building outline */}
                <rect x="20" y="20" width="840" height="560" fill="#151515" rx="10" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
                <text x="40" y="50" fill="#666" fontSize="16" className="font-mono uppercase tracking-widest font-bold">The Crofoot Complex</text>
                
                {/* Entrances / Exits Indicators */}
                <path d="M380 580 L440 580" stroke="#26CEAA" strokeWidth="6" />
                <text x="380" y="595" fill="#26CEAA" fontSize="10" className="font-mono uppercase tracking-widest">Main Entry / Exit</text>
                
                <path d="M860 460 L860 570" stroke="#9C59D1" strokeWidth="6" />
                <text x="760" y="590" fill="#9C59D1" fontSize="10" className="font-mono uppercase tracking-widest">Patio Exit</text>

                {/* Draw Zones */}
                {crofootLayout.zones.map((zone) => {
                  const isSelected = selectedLocation?.id === zone.id;
                  return (
                    <g key={zone.id} onClick={() => handleSelect(zone)} className="cursor-pointer group transition-all">
                      <rect
                        x={zone.x}
                        y={zone.y}
                        width={zone.width}
                        height={zone.height}
                        fill={isSelected ? "#FFD800" : "#444444"}
                        stroke={isSelected ? "#FFD800" : "#888888"}
                        strokeWidth="2"
                        className="transition-colors duration-200 group-hover:fill-pride-gold"
                      />
                      <text
                        x={zone.x - 5}
                        y={zone.y - 10}
                        fill={isSelected ? "#FFD800" : "#AAAAAA"}
                        fontSize="12"
                        className="font-mono uppercase tracking-widest transition-colors duration-200 group-hover:text-pride-gold"
                      >
                        {zone.name}
                      </text>
                    </g>
                  );
                })}

                {/* Draw Rooms */}
                {crofootLayout.rooms.map((room) => {
                  const isSelected = selectedLocation?.id === room.id;
                  
                  let baseFill = "#2A2A2A";
                  if (room.type === "stage") baseFill = "#1F1F1F";
                  if (room.type === "outdoor") baseFill = "#11221A";

                  const fillColors = isSelected ? "#3D1A78" : baseFill;
                  const border = isSelected ? "#FF218C" : "#555555";
                  const textFill = isSelected ? "#FFFFFF" : "#DDDDDD";

                  return (
                    <g key={room.id} onClick={() => handleSelect(room)} className="cursor-pointer group">
                      <rect
                        x={room.x}
                        y={room.y}
                        width={room.width}
                        height={room.height}
                        fill={fillColors}
                        stroke={border}
                        strokeWidth={isSelected ? "4" : "2"}
                        className="transition-all duration-300 ease-in-out group-hover:opacity-80"
                      />
                      <text
                        x={room.x + 20}
                        y={room.y + 40}
                        fill={textFill}
                        fontSize="18"
                        fontWeight="bold"
                        className="font-sans"
                      >
                        {room.name}
                      </text>
                      {room.capacity && (
                        <text
                          x={room.x + 20}
                          y={room.y + 65}
                          fill={textFill}
                          fontSize="12"
                          className="font-mono opacity-60 uppercase tracking-widest"
                        >
                          CAP: {room.capacity}
                        </text>
                      )}
                      
                      {/* Live Status Indicators (mock) */}
                      {room.type === 'stage' && (
                        <g transform={`translate(${room.x + room.width - 90}, ${room.y + 20})`}>
                          <circle cx="5" cy="5" r="4" fill="#26CEAA" className="animate-pulse" />
                          <text x="15" y="9" fill="#26CEAA" fontSize="10" className="font-mono uppercase tracking-widest">Live</text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Draw POIs */}
                {visiblePOIs.map((poi) => {
                  const isSelected = selectedLocation?.id === poi.id;
                  const color = poiColors[poi.type] || "#FFFFFF";
                  return (
                    <g 
                      key={poi.id} 
                      onClick={(e) => { e.stopPropagation(); handleSelect(poi); }} 
                      className="cursor-pointer group"
                      transform={`translate(${poi.x}, ${poi.y})`}
                    >
                      <circle 
                        cx="0" 
                        cy="0" 
                        r={isSelected ? "18" : "14"} 
                        fill="#111" 
                        stroke={color} 
                        strokeWidth="3"
                        className="transition-all duration-300 group-hover:scale-110 shadow-xl"
                      />
                      <foreignObject x="-10" y="-10" width="20" height="20" style={{ pointerEvents: 'none' }}>
                        <div xmlns="http://www.w3.org/1999/xhtml" className="flex items-center justify-center w-full h-full text-white" style={{ color: color }}>
                           {poiIcons[poi.type]}
                        </div>
                      </foreignObject>
                      <text
                         x={16}
                         y={0}
                         fill={color}
                         fontSize={10}
                         className={`font-mono uppercase tracking-widest transition-opacity duration-300 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                      >
                         {poi.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Wayfinding Overlay "You Are Here" */}
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-pride-gold rounded-full z-10" />
                  <div className="w-12 h-12 bg-pride-gold/30 rounded-full animate-ping absolute" />
                  <div className="absolute top-6 whitespace-nowrap bg-pride-black text-pride-white text-xs font-mono uppercase tracking-widest px-2 py-1 rounded shadow-lg">
                    You Are Here
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contextual Info Panel */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-pride-white border border-pride-black/10 rounded-xl p-8 shadow-xl sticky top-8 min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                {!selectedLocation ? (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col justify-center items-center text-center text-pride-muted space-y-4"
                  >
                    <MapIcon size={48} className="opacity-20" />
                    <h3 className="font-serif font-bold text-2xl text-pride-ink">Select a Location</h3>
                    <p>Click any room, vendor, or safety zone on the map to see details and real-time status.</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key={selectedLocation.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="inline-flex items-center justify-between w-full mb-4">
                      <div className="inline-flex items-center gap-2 text-pride-gold text-xs font-mono uppercase tracking-widest">
                        {'capacity' in selectedLocation ? <Store size={14} /> : poiIcons[(selectedLocation as POI).type]}
                        {selectedLocation.type.replace('_', ' ')}
                      </div>
                    </div>
                    
                    <h2 className="font-serif font-black text-3xl mb-4 leading-tight">{selectedLocation.name}</h2>
                    
                    {selectedLocation.description && (
                      <p className="text-pride-muted mb-6 bg-pride-black/5 p-4 rounded-lg">
                        {selectedLocation.description}
                      </p>
                    )}

                    {'capacity' in selectedLocation && selectedLocation.capacity && (
                      <div className="bg-pride-cream border border-pride-black/10 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-xs font-mono uppercase tracking-widest text-pride-muted mb-1">Max Capacity</div>
                              <div className="font-bold text-2xl">{selectedLocation.capacity}</div>
                           </div>
                           <div className="text-right">
                              <div className="text-xs font-mono uppercase tracking-widest text-[#26CEAA] mb-1 flex items-center gap-1 justify-end"><Users size={12}/> Current Status</div>
                              <div className="font-bold text-pride-ink text-sm">Approaching Capacity</div>
                           </div>
                        </div>
                      </div>
                    )}
                    
                    {'capacity' in selectedLocation && selectedLocation.type === 'stage' && (
                       <div className="mb-6 border border-pride-black/10 rounded-lg overflow-hidden">
                         <div className="bg-pride-black text-pride-white text-xs font-mono uppercase tracking-widest p-2 px-3 flex items-center gap-2">
                           <Mic size={14}/> Now Playing
                         </div>
                         <div className="p-4 bg-pride-white">
                           <div className="font-bold text-lg">DJ Mother Cybo</div>
                           <div className="text-pride-muted text-sm mt-1">2:00 PM &mdash; 4:00 PM</div>
                         </div>
                       </div>
                    )}

                    <div className="space-y-3 mt-auto pt-6 border-t border-pride-black/10">
                      {('capacity' in selectedLocation) && selectedLocation.type === 'stage' && (
                        <Link to="/schedule" className="w-full bg-pride-black text-pride-white font-bold uppercase tracking-widest py-3 px-4 rounded hover:bg-pride-ink transition-colors flex items-center justify-center gap-2">
                          View Full Schedule
                        </Link>
                      )}
                      {(selectedLocation.type === 'outdoor' || selectedLocation.type === 'vendor') && (
                        <Link to="/vendors" className="w-full bg-pride-white text-pride-black border-2 border-pride-black font-bold uppercase tracking-widest py-3 px-4 rounded hover:bg-pride-cream transition-colors flex items-center justify-center">
                          Browse Vendors
                        </Link>
                      )}
                      <a href="mailto:baentertainmentMI@gmail.com?subject=Issue%20Report%20-%20Festival%20Map" className="w-full text-pride-muted font-bold uppercase tracking-widest py-2 px-4 hover:text-pride-ink transition-colors text-xs flex items-center justify-center gap-1">
                        Report Issue in this Area
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
