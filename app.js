/**
 * 3D DUPLEX RESIDENCE & SKY GARDEN VILLA - NASPUR, MANCHERIAL (TELANGANA)
 * Ultra-Detailed Architectural Walkthrough & Multi-POV Engine
 * Featuring the New First-Floor Sky Garden Terrace Deck & Natural Landscape
 */

// ============================================================================
// COMPREHENSIVE MULTI-POV TARGETS & ARCHITECTURAL METADATA
// ============================================================================
const POV_DATA = {
  // New Sky Garden Terrace Deck (1st Floor Front)
  'sky-garden-sofa': {
    name: 'Sky Garden: Outdoor Lounge Sofa',
    floor: 'FIRST FLOOR (SKY GARDEN)',
    dims: "29'-0\" × 13'-6\" Open Deck",
    area: '391.50 Sq.Ft.',
    vastu: 'South Front Balcony',
    desc: 'Sitting on the luxury outdoor rattan sectional sofa on the timber deck, surrounded by potted Areca palms, ficus trees, and flowering planters with views of the street below.',
    camPos: { x: -8.0, y: 17.5, z: -18.0 },
    camLook: { x: 5.0, y: 16.5, z: -25.0 },
    floorLevel: 'first',
    mapX: 45, mapY: 140
  },
  'sky-garden-view': {
    name: 'Sky Garden: Street Glass Railing View',
    floor: 'FIRST FLOOR (SKY GARDEN)',
    dims: "29'-0\" Wide Frontage",
    area: '391.50 Sq.Ft.',
    vastu: 'South Road View',
    desc: 'Standing at the 12mm tempered glass balustrade looking out over the 30\' South Road, avenue trees, and the entrance gate below.',
    camPos: { x: 2.0, y: 18.0, z: -25.5 },
    camLook: { x: 2.0, y: 16.0, z: -45.0 },
    floorLevel: 'first',
    mapX: 80, mapY: 160
  },
  'sky-garden-door': {
    name: 'Lounge to Sky Garden Entrance',
    floor: 'FIRST FLOOR',
    dims: "10'-0\" Glass Sliding Doorway",
    area: 'Deck Connection',
    vastu: 'South Frontage',
    desc: 'Stepping through the 10-foot wide sliding glass French doors from the interior family lounge out onto the sunlit wooden sky garden deck.',
    camPos: { x: 0.0, y: 18.0, z: -11.0 },
    camLook: { x: 0.0, y: 17.5, z: -22.0 },
    floorLevel: 'first',
    mapX: 80, mapY: 125
  },

  // Authentic Telangana Kirana General Store POVs (Sample Reference Matching)
  'shop-street': {
    name: 'Kirana Store: Street Entrance View',
    floor: 'GROUND (COMMERCIAL)',
    dims: "17'-0\" × 12'-6\"",
    area: '212.50 Sq.Ft.',
    vastu: 'South-West Road Front',
    desc: 'Street perspective of Sri Siddarth Kirana & General Stores featuring the authentic Telugu & English signboard, open rolling shutter, hanging Kurkure/Lays snack strips, and open grain sacks welcoming customers.',
    camPos: { x: -6.5, y: 5.5, z: -38.0 },
    camLook: { x: -6.5, y: 4.8, z: -20.0 },
    floorLevel: 'ground',
    mapX: 45, mapY: 155
  },
  'shop-entrance': {
    name: 'Kirana Store: Customer Aisle & Grains',
    floor: 'GROUND (COMMERCIAL)',
    dims: "17'-0\" × 12'-6\"",
    area: '212.50 Sq.Ft.',
    vastu: 'South-West Aisle',
    desc: 'Customer aisle perspective looking past open sacks of Basmati rice with metal scoop and golden Toor Dal toward the wooden counter and floor-to-ceiling blue goods shelves.',
    camPos: { x: -3.0, y: 6.5, z: -25.8 },
    camLook: { x: -8.0, y: 4.2, z: -18.0 },
    floorLevel: 'ground',
    mapX: 45, mapY: 145
  },
  'shop-counter': {
    name: 'Kirana Store: Shopkeeper Counter (Sample Photo POV)',
    floor: 'GROUND (COMMERCIAL)',
    dims: "17'-0\" × 12'-6\"",
    area: '212.50 Sq.Ft.',
    vastu: 'South-West',
    desc: 'The exact viewpoint of the sample photograph! Standing behind the wooden counter with the digital electronic weighing scale, glass candy jars with red lids, cash drawer (galla), and the blue-trimmed shelf unit densely stocked with Parle-G, Maggi, and Everest masalas.',
    camPos: { x: -8.5, y: 5.0, z: -17.5 },
    camLook: { x: -8.5, y: 4.5, z: -23.0 },
    floorLevel: 'ground',
    mapX: 35, mapY: 135
  },
  'shop-shelf': {
    name: 'Kirana Store: Blue Wall Shelves & Goods',
    floor: 'GROUND (COMMERCIAL)',
    dims: "17'-0\" × 12'-6\"",
    area: '212.50 Sq.Ft.',
    vastu: 'South-West Back Wall',
    desc: 'Direct close-up view of the hero floor-to-ceiling wooden racks with bright royal blue shelf trims, filled with rows of Parle-G, Marie biscuits, Good Day, Maggi noodles, Everest masala boxes, and cooking oil bottles.',
    camPos: { x: -7.0, y: 6.5, z: -22.2 },
    camLook: { x: -7.0, y: 5.8, z: -15.0 },
    floorLevel: 'ground',
    mapX: 40, mapY: 130
  },

  // Ground Floor Residence POVs
  'living-entrance': {
    name: 'Living Room: Main Entrance View',
    floor: 'GROUND FLOOR',
    dims: "13'-3\" × 15'-6\"",
    area: '205.37 Sq.Ft.',
    vastu: 'East / North-East',
    desc: 'Stepping through the teak wood main entrance door, looking across the Italian marble living hall toward the sectional sofa, Fiddle-Leaf Fig plant, and fluted TV wall.',
    camPos: { x: 7.5, y: 7.8, z: -8.0 },
    camLook: { x: 7.5, y: 7.5, z: 2.0 },
    floorLevel: 'ground',
    mapX: 110, mapY: 120
  },
  'living-sofa': {
    name: 'Living Room: Sofa Seating POV',
    floor: 'GROUND FLOOR',
    dims: "13'-3\" × 15'-6\"",
    area: '205.37 Sq.Ft.',
    vastu: 'Living Hall',
    desc: 'Sitting on the comfortable sectional sofa looking directly at the 65" TV mounted against the vertical fluted teak wood louver wall.',
    camPos: { x: 5.0, y: 6.8, z: -2.0 },
    camLook: { x: 13.5, y: 7.2, z: -1.0 },
    floorLevel: 'ground',
    mapX: 100, mapY: 105
  },
  'living-up': {
    name: 'Living Room: Look UP at Duplex Chandelier',
    floor: 'GROUND FLOOR',
    dims: "Double-Height Void (20' High)",
    area: '205.37 Sq.Ft.',
    vastu: 'Ceiling Void',
    desc: 'Standing in the center of the living hall looking straight up through the open duplex ceiling void at the multi-tier gold ring crystal chandelier and the 1st floor glass railing!',
    camPos: { x: 7.375, y: 6.5, z: -1.25 },
    camLook: { x: 7.375, y: 22.0, z: -1.25 },
    floorLevel: 'ground',
    mapX: 110, mapY: 100
  },
  'puja': {
    name: 'Puja Mandir Sanctum',
    floor: 'GROUND FLOOR',
    dims: "4'-0\" × 5'-0\"",
    area: '20.00 Sq.Ft.',
    vastu: 'North-East (Ishanya)',
    desc: 'Close-up before the sacred white marble tiered altar, illuminated by the glowing gold backlit CNC jali screen and brass diya lamps.',
    camPos: { x: 8.5, y: 7.8, z: 9.0 },
    camLook: { x: 13.5, y: 7.8, z: 9.0 },
    floorLevel: 'ground',
    mapX: 125, mapY: 80
  },
  'dining': {
    name: 'Dining Hall View',
    floor: 'GROUND FLOOR',
    dims: "14'-0\" × 9'-0\"",
    area: '126.00 Sq.Ft.',
    vastu: 'Central / East',
    desc: 'Dining hall view featuring the solid teak 6-seater dining table, pendant lighting, potted palm, and open connectivity into the kitchen archway.',
    camPos: { x: 3.5, y: 7.8, z: 12.5 },
    camLook: { x: 7.5, y: 7.5, z: 16.5 },
    floorLevel: 'ground',
    mapX: 105, mapY: 65
  },
  'kitchen': {
    name: 'Traditional Indian Kitchen',
    floor: 'GROUND FLOOR',
    dims: "12'-0\" × 9'-0\"",
    area: '108.00 Sq.Ft.',
    vastu: 'North-West (Vayu)',
    desc: 'Traditional Indian kitchen with extensive upper & lower teak cupboards, L-shaped Black Galaxy granite platform, 3-burner gas stove, pressure cooker, mixer-grinder (mixie), spice jar rack, and stainless steel utensil drainer.',
    camPos: { x: -3.5, y: 7.8, z: 14.5 },
    camLook: { x: -7.5, y: 7.2, z: 19.4 },
    floorLevel: 'ground',
    mapX: 55, mapY: 65
  },
  'master-bed-gf': {
    name: 'Ground Master Bedroom',
    floor: 'GROUND FLOOR',
    dims: "13'-0\" × 11'-6\"",
    area: '149.50 Sq.Ft.',
    vastu: 'South-West (Nairuti)',
    desc: 'Ground floor master bedroom suite with teak wood plank flooring, king bed with cushioned headboard, reading nightstands, and 3-door mirrored wardrobe.',
    camPos: { x: -4.0, y: 7.8, z: -3.0 },
    camLook: { x: -10.5, y: 7.5, z: -6.5 },
    floorLevel: 'ground',
    mapX: 45, mapY: 105
  },
  'portico': {
    name: 'Car Portico & Driveway',
    floor: 'GROUND FLOOR',
    dims: "12'-0\" × 18'-0\"",
    area: '216.00 Sq.Ft.',
    vastu: 'South-East',
    desc: 'Covered driveway with interlocking pavers, parked SUV, false ceiling downlights, and granite entrance steps rising to the raised residential plinth.',
    camPos: { x: 8.0, y: 6.0, z: -28.0 },
    camLook: { x: 8.0, y: 7.5, z: -12.0 },
    floorLevel: 'ground',
    mapX: 110, mapY: 155
  },

  // First Floor Duplex POVs
  'duplex-void-overlook': {
    name: 'Duplex Double-Height Void Overlook',
    floor: 'FIRST FLOOR',
    dims: "13'-3\" × 15'-6\" (Void)",
    area: '205.37 Sq.Ft. (Overlook)',
    vastu: 'Upper Corridor',
    desc: 'Standing at the 1st floor corridor at the 12mm toughened glass railing, looking down directly through the hanging ring chandelier into the living room below!',
    camPos: { x: 0.5, y: 18.0, z: -1.25 },
    camLook: { x: 8.0, y: 7.5, z: -1.25 },
    floorLevel: 'first',
    mapX: 95, mapY: 100
  },
  'lounge': {
    name: 'Upper Family Lounge',
    floor: 'FIRST FLOOR',
    dims: "13'-0\" × 9'-0\"",
    area: '117.00 Sq.Ft.',
    vastu: 'Central Upper',
    desc: 'Private upstairs family lounge situated at the staircase landing with wooden plank flooring, plush sofa, and open access to the study, bedrooms, and the new Sky Garden Deck!',
    camPos: { x: 0.0, y: 18.3, z: 10.0 },
    camLook: { x: 6.0, y: 18.0, z: 13.5 },
    floorLevel: 'first',
    mapX: 85, mapY: 70
  },
  'study': {
    name: 'Study / Home Office',
    floor: 'FIRST FLOOR',
    dims: "9'-0\" × 9'-0\"",
    area: '81.00 Sq.Ft.',
    vastu: 'East (Morning Sunlight)',
    desc: 'Executive study and home office room with custom desk, dual monitors, ergonomic chair, and floor-to-ceiling bookshelf filled with books.',
    camPos: { x: 6.5, y: 18.3, z: 10.5 },
    camLook: { x: 11.5, y: 18.0, z: 14.5 },
    floorLevel: 'first',
    mapX: 120, mapY: 70
  },
  'bed1': {
    name: 'Bedroom 01 (Suite with Walk-In)',
    floor: 'FIRST FLOOR',
    dims: "13'-0\" × 11'-6\"",
    area: '149.50 Sq.Ft.',
    vastu: 'South-West Upper',
    desc: 'Upper floor bedroom suite with king bed, walk-in dressing wardrobe, and ensuite bathroom, directly above the GF master bedroom.',
    camPos: { x: -4.0, y: 18.3, z: -3.0 },
    camLook: { x: -10.5, y: 18.0, z: -6.5 },
    floorLevel: 'first',
    mapX: 45, mapY: 105
  },
  'bed2': {
    name: 'Bedroom 02 (Rear Bedroom)',
    floor: 'FIRST FLOOR',
    dims: "12'-6\" × 9'-0\"",
    area: '112.50 Sq.Ft.',
    vastu: 'North-West Rear',
    desc: 'Peaceful rear bedroom with attached toilet and sliding French door leading out to the 4\' wide rear balcony.',
    camPos: { x: -3.0, y: 18.3, z: 19.5 },
    camLook: { x: -8.0, y: 18.0, z: 24.5 },
    floorLevel: 'first',
    mapX: 45, mapY: 45
  },

  // Terrace & Street
  'terrace-open': {
    name: 'Open Roof Terrace & Mumty',
    floor: 'TERRACE FLOOR',
    dims: "29'-0\" × 50'-0\"",
    area: '1,450.00 Sq.Ft.',
    vastu: 'Rooftop',
    desc: 'Expansive rooftop terrace with cool white reflective tiles, 3\'-6" parapet walls with groove molding, modern pergola over the void, and staircase mumty tower with Sintex water tank.',
    camPos: { x: 8.0, y: 28.0, z: 15.0 },
    camLook: { x: 0.0, y: 27.5, z: -5.0 },
    floorLevel: 'terrace',
    mapX: 80, mapY: 70
  },
  'south-facade': {
    name: 'South Road Street Elevation',
    floor: 'EXTERIOR (STREET)',
    dims: "33'-0\" Wide Frontage",
    area: 'Villa & Sky Garden',
    vastu: 'South Road Facing',
    desc: 'Full contemporary Telangana duplex villa facade showing the commercial shop, the expansive 1st floor Sky Garden Deck with trees, timber pergolas, and avenue street trees.',
    camPos: { x: 0, y: 18, z: -68 },
    camLook: { x: 0, y: 15, z: -10 },
    floorLevel: 'ground',
    orbit: true, // exterior overview: drag orbits around the building
    mapX: 80, mapY: 180
  },

  // Dollhouse cut-away overviews (used by the Ground / First Floor tabs)
  'dollhouse-ground': {
    name: 'Ground Floor Dollhouse View',
    floor: 'GROUND FLOOR (CUT-AWAY)',
    dims: "33'-0\" × 60'-0\" Plot",
    area: '1,625 Sq.Ft. Slab',
    vastu: 'Overview',
    desc: 'First floor and roof removed so you can see every ground floor room from above. Drag to orbit, scroll to zoom, and double-click any floor to step inside at that spot.',
    camPos: { x: 30, y: 58, z: -42 },
    camLook: { x: -1, y: 2, z: -2 },
    floorLevel: 'ground',
    orbit: true,
    mapX: 80, mapY: 100
  },
  'dollhouse-first': {
    name: 'First Floor Dollhouse View',
    floor: 'FIRST FLOOR (CUT-AWAY)',
    dims: "33'-0\" × 60'-0\" Plot",
    area: '1,625 Sq.Ft. Slab',
    vastu: 'Overview',
    desc: 'Roof removed so you can see the first floor bedrooms, lounge, study, duplex void and Sky Garden deck from above. Double-click any floor to step inside at that spot.',
    camPos: { x: 30, y: 66, z: -42 },
    camLook: { x: -1, y: 13, z: -2 },
    floorLevel: 'first',
    orbit: true,
    mapX: 80, mapY: 100
  }
};

// ============================================================================
// PROCEDURAL PBR TEXTURES
// ============================================================================
class TextureBuilder {
  static createMarble() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#f8f4ec';
    ctx.fillRect(0, 0, 1024, 1024);

    const drawVein = (color, width) => {
      ctx.strokeStyle = color; ctx.lineWidth = width;
      ctx.beginPath();
      let x = Math.random() * 1024, y = 0;
      ctx.moveTo(x, y);
      for (let i = 0; i < 28; i++) {
        x += (Math.random() - 0.45) * 60;
        y += 35 + Math.random() * 20;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    for (let i = 0; i < 6; i++) {
      ctx.globalAlpha = 0.2; drawVein('#b5a995', 8);
      ctx.globalAlpha = 0.3; drawVein('#8c8270', 3);
      ctx.globalAlpha = 0.15; drawVein('#d4af37', 5);
    }
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = '#dfd7c9'; ctx.lineWidth = 2;
    for (let p = 0; p <= 1024; p += 256) {
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, 1024); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(1024, p); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }

  static createTeakDeck() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#8f5326'; // Rich warm outdoor deck teak
    ctx.fillRect(0, 0, 1024, 1024);

    const plankH = 64; // Narrow outdoor deck boards
    for (let y = 0; y < 1024; y += plankH) {
      const tint = (Math.random() - 0.5) * 22;
      ctx.fillStyle = `rgb(${143 + tint}, ${83 + tint * 0.7}, ${38 + tint * 0.5})`;
      ctx.fillRect(0, y, 1024, plankH);

      // Deck board grain
      ctx.strokeStyle = 'rgba(50, 25, 8, 0.3)'; ctx.lineWidth = 1.5;
      for (let g = 0; g < 6; g++) {
        ctx.beginPath();
        const gy = y + Math.random() * plankH;
        ctx.moveTo(0, gy);
        ctx.bezierCurveTo(300, gy + (Math.random() - 0.5) * 8, 700, gy + (Math.random() - 0.5) * 8, 1024, gy);
        ctx.stroke();
      }

      // Deep groove between deck boards
      ctx.strokeStyle = '#2b1406'; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }

  static createWood() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#804820';
    ctx.fillRect(0, 0, 1024, 1024);

    const plankH = 128;
    for (let y = 0; y < 1024; y += plankH) {
      const tint = (Math.random() - 0.5) * 20;
      ctx.fillStyle = `rgb(${128 + tint}, ${72 + tint * 0.7}, ${32 + tint * 0.5})`;
      ctx.fillRect(0, y, 1024, plankH);
      ctx.strokeStyle = 'rgba(60, 30, 10, 0.25)'; ctx.lineWidth = 1.5;
      for (let g = 0; g < 14; g++) {
        ctx.beginPath();
        const gy = y + Math.random() * plankH;
        ctx.moveTo(0, gy);
        ctx.bezierCurveTo(300, gy + (Math.random() - 0.5) * 10, 700, gy + (Math.random() - 0.5) * 10, 1024, gy);
        ctx.stroke();
      }
      ctx.strokeStyle = '#381e09'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }

  static createShopTiles() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 3;
    for (let p = 0; p <= 512; p += 128) {
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(512, p); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }

  static createPaver() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#64748b';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 3;
    for (let y = 0; y <= 512; y += 32) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke();
    }
    for (let x = 0; x <= 512; x += 48) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(6, 6);
    return tex;
  }

  static createJali() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#f59e0b'; ctx.fillStyle = '#fbbf24'; ctx.lineWidth = 4;
    for (let x = 32; x < 512; x += 64) {
      for (let y = 32; y < 512; y += 64) {
        ctx.beginPath();
        ctx.moveTo(x, y - 24); ctx.lineTo(x + 24, y); ctx.lineTo(x, y + 24); ctx.lineTo(x - 24, y);
        ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
      }
    }
    return new THREE.CanvasTexture(c);
  }

  static createKiranaPhotoTexture() {
    if (typeof window !== 'undefined' && window.KIRANA_SAMPLE_DATA_URL) {
      const loader = new THREE.TextureLoader();
      const tex = loader.load(window.KIRANA_SAMPLE_DATA_URL);
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    }
    // High quality procedural shelving fallback
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 768;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 1024, 768);
    ctx.fillStyle = '#1d4ed8';
    for (let y = 0; y < 768; y += 150) {
      ctx.fillRect(0, y, 1024, 22);
    }
    return new THREE.CanvasTexture(c);
  }

  static createRice() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const angle = Math.random() * Math.PI;
      const len = 4 + Math.random() * 4;
      const w = 1.6 + Math.random() * 0.8;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      const shade = Math.random();
      ctx.fillStyle = shade > 0.3 ? '#ffffff' : (shade > 0.1 ? '#f2ede0' : '#e5decb');
      ctx.beginPath();
      ctx.ellipse(0, 0, len / 2, w / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      if (shade > 0.6) {
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillRect(-len / 4, -w / 4, len / 2, w / 3);
      }
      ctx.restore();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }

  static createDal() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = 2.5 + Math.random() * 2.5;
      const shade = Math.random();
      ctx.fillStyle = shade > 0.5 ? '#facc15' : (shade > 0.2 ? '#f59e0b' : '#d97706');
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }

  static createBurlap() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#b7894f';
    ctx.fillRect(0, 0, 512, 512);
    ctx.lineWidth = 2.5;
    for (let y = 0; y < 512; y += 8) {
      ctx.strokeStyle = (y % 16 === 0) ? '#d4a86a' : '#8d6332';
      ctx.beginPath();
      ctx.moveTo(0, y + (Math.random() - 0.5) * 1.5);
      ctx.lineTo(512, y + (Math.random() - 0.5) * 1.5);
      ctx.stroke();
    }
    for (let x = 0; x < 512; x += 8) {
      ctx.strokeStyle = (x % 16 === 0) ? '#c49658' : '#7b5325';
      ctx.beginPath();
      ctx.moveTo(x + (Math.random() - 0.5) * 1.5, 0);
      ctx.lineTo(x + (Math.random() - 0.5) * 1.5, 512);
      ctx.stroke();
    }
    for (let i = 0; i < 600; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#5c3d18' : '#e2be85';
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }

  static createGrainBagLabel() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#fde047';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#eab308';
    ctx.lineWidth = 1;
    for (let p = 0; p < 512; p += 6) {
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(512, p); ctx.stroke();
    }
    ctx.strokeStyle = '#15803d';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 60, 452, 392);
    ctx.strokeRect(40, 70, 432, 372);

    ctx.fillStyle = '#15803d';
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SUPER QUALITY', 256, 125);

    ctx.fillStyle = '#dc2626';
    ctx.font = '900 48px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SONA MASOORI', 256, 190);
    ctx.fillText('RAW RICE', 256, 245);

    ctx.fillStyle = '#ca8a04';
    ctx.beginPath();
    ctx.arc(256, 305, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#15803d';
    ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('NET WT: 25 KG', 256, 375);
    ctx.font = '600 20px "JetBrains Mono", monospace';
    ctx.fillText('AGMARK GRADE 1 • TELANGANA', 256, 415);
    return new THREE.CanvasTexture(c);
  }

  static createStoreSignboard() {
    const c = document.createElement('canvas');
    c.width = 1536; c.height = 320;
    const ctx = c.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 320);
    grad.addColorStop(0, '#0a235c');
    grad.addColorStop(0.5, '#1e3a8a');
    grad.addColorStop(1, '#0c1e4a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1536, 320);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, 1516, 300);
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, 1496, 280);

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('॥ శ్రీ లక్ష్మీ ప్రసన్న ॥   •   ॥ శ్రీ గణేశాయ నమః ॥', 768, 55);

    ctx.fillStyle = '#fde047';
    ctx.font = '900 68px "Plus Jakarta Sans", sans-serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.fillText('శ్రీ సిద్దార్థ కిరాణా & జనరల్ స్టోర్స్', 768, 135);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 46px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SRI SIDDARTH KIRANA & GENERAL STORES', 768, 200);

    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(25, 235, 1486, 55);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('ధాన్యాలు • పప్పులు • నూనెలు • బిస్కెట్లు • పూజా సామగ్రి • నిత్యావసర సరుకులు   |   D.No. 4-2-118, MAIN ROAD, NASPUR', 768, 272);

    return new THREE.CanvasTexture(c);
  }

  static createSnackStrip(flavor) {
    const c = document.createElement('canvas');
    c.width = 160; c.height = 720;
    const ctx = c.getContext('2d');

    ctx.fillStyle = flavor === 'kurkure' ? '#ea580c' : (flavor === 'lays_blue' ? '#1d4ed8' : '#16a34a');
    ctx.fillRect(0, 0, 160, 720);

    const packetH = 135;
    for (let i = 0; i < 5; i++) {
      const y = 8 + i * (packetH + 8);
      ctx.fillStyle = flavor === 'kurkure' ? '#f97316' : (flavor === 'lays_blue' ? '#2563eb' : '#22c55e');
      ctx.fillRect(8, y, 144, packetH);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(8, y, 144, packetH);

      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(8, y, 144, 10);
      ctx.fillRect(8, y + packetH - 10, 144, 10);

      ctx.textAlign = 'center';
      if (flavor === 'kurkure') {
        ctx.fillStyle = '#fef08a';
        ctx.font = '900 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('Kurkure', 80, y + 48);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px sans-serif';
        ctx.fillText('MASALA MUNCH', 80, y + 72);
        ctx.fillStyle = '#dc2626';
        ctx.font = 'bold 18px monospace';
        ctx.fillText('₹ 5 /-', 80, y + 102);
      } else if (flavor === 'lays_blue') {
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(80, y + 55, 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#dc2626';
        ctx.font = '900 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("Lay's", 80, y + 62);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('MAGIC MASALA', 80, y + 96);
        ctx.fillText('₹ 10 /-', 80, y + 115);
      } else {
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(80, y + 55, 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#dc2626';
        ctx.font = '900 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillText("Lay's", 80, y + 62);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText('CREAM & ONION', 80, y + 96);
        ctx.fillText('₹ 10 /-', 80, y + 115);
      }
    }
    return new THREE.CanvasTexture(c);
  }

  static createOilTin() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');

    ctx.fillStyle = '#facc15';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 12;
    ctx.strokeRect(12, 12, 488, 488);
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 4;
    ctx.strokeRect(24, 24, 464, 464);

    ctx.fillStyle = '#ea580c';
    ctx.beginPath();
    ctx.arc(256, 210, 48, 0, Math.PI * 2);
    ctx.fill();
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      const px = 256 + Math.cos(a) * 75;
      const py = 210 + Math.sin(a) * 75;
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(px, py, 22, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.arc(256, 210, 36, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#1e3a8a';
    ctx.font = '900 44px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FREEDOM', 256, 100);

    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PURE SUNFLOWER OIL', 256, 330);

    ctx.fillStyle = '#1e293b';
    ctx.font = '800 52px "JetBrains Mono", monospace';
    ctx.fillText('15 LITRES', 256, 395);

    ctx.font = '600 22px sans-serif';
    ctx.fillText('RICH IN VITAMIN A, D & E • ZERO CHOLESTEROL', 256, 440);

    return new THREE.CanvasTexture(c);
  }

  static createScaleDisplay() {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 128;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, 256, 128);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 248, 120);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    ctx.fillText('WT (kg)', 20, 35);
    ctx.font = '900 40px "JetBrains Mono", monospace';
    ctx.fillText('2.450', 20, 82);

    ctx.fillStyle = '#4ade80';
    ctx.font = 'bold 14px "JetBrains Mono", monospace';
    ctx.fillText('₹/kg: 65.00', 145, 45);
    ctx.fillStyle = '#f87171';
    ctx.fillText('TOTAL: 159', 145, 75);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('TARE: 0.000', 20, 112);
    ctx.fillText('AC ON • 100%', 145, 112);

    return new THREE.CanvasTexture(c);
  }
}

// ============================================================================
// MAIN APPLICATION
// ============================================================================
class CompleteDuplexApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    // Groups
    this.groundGroup = new THREE.Group();
    this.firstGroup = new THREE.Group();
    this.roofGroup = new THREE.Group();
    this.siteGroup = new THREE.Group();
    this.furnitureGroup = new THREE.Group();
    this.shopGroup = new THREE.Group();
    this.skyGardenGroup = new THREE.Group();
    this.greeneryGroup = new THREE.Group();
    this.hotspotsGroup = new THREE.Group();

    this.interactiveObjects = [];
    this.allWalls = [];
    this.hotspots = [];

    // Lighting
    this.dirLight = null;
    this.hemiLight = null;
    this.ambientLight = null;
    this.sconceLights = [];
    this.interiorLights = [];

    // State
    this.currentMode = 'full';
    this.isFPSMode = false;
    this.currentPOVKey = 'sky-garden-sofa'; // Start right in the new Sky Garden Lounge!
    this.keys = { w: false, a: false, s: false, d: false, ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
    this.walkSpeed = 0.35;

    // Mini-Map
    this.mapCanvas = document.getElementById('minimap-canvas');
    this.mapCtx = this.mapCanvas ? this.mapCanvas.getContext('2d') : null;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.init();
    this.buildMaterials();
    this.buildScene();
    this.setupUI();
    this.setupKeyboard();
    this.animate();

    // Default view: The stunning new Sky Garden Lounge!
    this.switchToPOV('sky-garden-sofa');
  }

  init() {
    this.scene = new THREE.Scene();
    // Warm natural daylight sky with soft horizon
    this.scene.background = new THREE.Color(0xa5d8f3);
    this.scene.fog = new THREE.FogExp2(0xa5d8f3, 0.004);

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.4, 500);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15; // Natural listing exposure
    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02;
    this.controls.minDistance = 0.4;
    this.controls.maxDistance = 200;

    this.scene.add(this.siteGroup);
    this.scene.add(this.groundGroup);
    this.scene.add(this.firstGroup);
    this.scene.add(this.roofGroup);
    this.scene.add(this.furnitureGroup);
    this.scene.add(this.shopGroup);
    this.scene.add(this.skyGardenGroup);
    this.scene.add(this.greeneryGroup);
    this.scene.add(this.hotspotsGroup);

    this.setupLighting();

    window.addEventListener('resize', () => this.onResize(), false);
    window.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
    window.addEventListener('click', (e) => this.onClick(e), false);
  }

  setupLighting() {
    // Warm natural ambient & bounce light like real architectural listing photos
    this.ambientLight = new THREE.AmbientLight(0xfff7ed, 0.75);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x475569, 0.45);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // Warm Sun
    this.dirLight = new THREE.DirectionalLight(0xfffae8, 1.45);
    this.dirLight.position.set(38, 55, -45);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.bias = -0.0004;
    const d = 45;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.scene.add(this.dirLight);

    this.setLightingMode('day');
  }

  setLightingMode(mode) {
    document.querySelectorAll('.lighting-controls .icon-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`btn-${mode}`);
    if (btn) btn.classList.add('active');

    if (mode === 'day') {
      this.scene.background.setHex(0xa5d8f3);
      this.scene.fog.color.setHex(0xa5d8f3);
      this.ambientLight.intensity = 0.75;
      this.dirLight.intensity = 1.45;
      this.dirLight.color.setHex(0xfffae8);
      this.dirLight.position.set(38, 55, -45);
      this.toggleSconces(false);
      this.toggleInteriorGlow(false);
    } else if (mode === 'sunset') {
      this.scene.background.setHex(0x351c36);
      this.scene.fog.color.setHex(0x351c36);
      this.ambientLight.intensity = 0.45;
      this.dirLight.intensity = 1.15;
      this.dirLight.color.setHex(0xff7733);
      this.dirLight.position.set(50, 18, -50);
      this.toggleSconces(true, 0.85);
      this.toggleInteriorGlow(true, 0.75);
    } else if (mode === 'night') {
      this.scene.background.setHex(0x060911);
      this.scene.fog.color.setHex(0x060911);
      this.ambientLight.intensity = 0.25;
      this.dirLight.intensity = 0.25;
      this.dirLight.color.setHex(0x38bdf8);
      this.dirLight.position.set(-20, 40, -20);
      this.toggleSconces(true, 1.6);
      this.toggleInteriorGlow(true, 1.3);
    }
  }

  toggleSconces(active, intensity = 1.0) {
    this.sconceLights.forEach(light => {
      light.visible = active;
      light.intensity = intensity;
    });
  }

  toggleInteriorGlow(active, intensity = 1.0) {
    this.interiorLights.forEach(light => {
      light.visible = active;
      light.intensity = intensity;
    });
  }

  buildMaterials() {
    this.marbleTex = TextureBuilder.createMarble();
    this.woodTex = TextureBuilder.createWood();
    this.deckTex = TextureBuilder.createTeakDeck();
    this.shopTilesTex = TextureBuilder.createShopTiles();
    this.paverTex = TextureBuilder.createPaver();
    this.jaliTex = TextureBuilder.createJali();
    this.signboardTex = TextureBuilder.createStoreSignboard();

    // Kirana store authentic textures matching reference sample photo
    this.kiranaPhotoTex = TextureBuilder.createKiranaPhotoTexture();
    this.riceTex = TextureBuilder.createRice();
    this.dalTex = TextureBuilder.createDal();
    this.burlapTex = TextureBuilder.createBurlap();
    this.grainBagTex = TextureBuilder.createGrainBagLabel();
    this.snackKurkureTex = TextureBuilder.createSnackStrip('kurkure');
    this.snackLaysBlueTex = TextureBuilder.createSnackStrip('lays_blue');
    this.snackLaysGreenTex = TextureBuilder.createSnackStrip('lays_green');
    this.oilTinTex = TextureBuilder.createOilTin();
    this.scaleDisplayTex = TextureBuilder.createScaleDisplay();

    this.mat = {
      marbleFloor: new THREE.MeshStandardMaterial({ map: this.marbleTex, roughness: 0.15 }),
      woodFloor: new THREE.MeshStandardMaterial({ map: this.woodTex, roughness: 0.4 }),
      deckFloor: new THREE.MeshStandardMaterial({ map: this.deckTex, roughness: 0.5, metalness: 0.05 }),
      shopFloor: new THREE.MeshStandardMaterial({ map: this.shopTilesTex, roughness: 0.2, metalness: 0.05 }),
      paverFloor: new THREE.MeshStandardMaterial({ map: this.paverTex, roughness: 0.85 }),
      extWhite: new THREE.MeshStandardMaterial({ color: 0xf3f6f9, roughness: 0.85 }),
      extGrey: new THREE.MeshStandardMaterial({ color: 0x242b38, roughness: 0.7 }),
      intWall: new THREE.MeshStandardMaterial({ color: 0xfcfcfe, roughness: 0.9 }),
      teakWood: new THREE.MeshStandardMaterial({ color: 0x9a5b1f, roughness: 0.45 }),
      wicker: new THREE.MeshStandardMaterial({ color: 0x5a3e22, roughness: 0.85 }), // Rattan outdoor wicker
      cushionCream: new THREE.MeshStandardMaterial({ color: 0xf5f3ee, roughness: 0.9 }),
      pillowOlive: new THREE.MeshStandardMaterial({ color: 0x556b2f, roughness: 0.8 }),
      pillowTerra: new THREE.MeshStandardMaterial({ color: 0xc86432, roughness: 0.8 }),
      plantGreen: new THREE.MeshStandardMaterial({ color: 0x2e6b28, roughness: 0.6 }),
      palmFrond: new THREE.MeshStandardMaterial({ color: 0x3d8c32, roughness: 0.5 }),
      potClay: new THREE.MeshStandardMaterial({ color: 0xc87d55, roughness: 0.8 }),
      potWhite: new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 }),
      graniteBlack: new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.15 }),
      glass: new THREE.MeshPhysicalMaterial({ color: 0xa5d8ff, transparent: true, opacity: 0.35, roughness: 0.05, transmission: 0.9 }),
      steel: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.2, metalness: 0.95 }),
      blackMetal: new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.35, metalness: 0.8 }),
      jaliMat: new THREE.MeshStandardMaterial({ map: this.jaliTex, emissive: 0xf59e0b, emissiveIntensity: 0.4 }),
      asphalt: new THREE.MeshStandardMaterial({ color: 0x1c212a, roughness: 0.95 }),
      signboard: new THREE.MeshStandardMaterial({ map: this.signboardTex, roughness: 0.3, emissive: 0xf59e0b, emissiveIntensity: 0.15 }),

      // Kirana store specific materials
      kiranaBackdrop: new THREE.MeshStandardMaterial({ map: this.kiranaPhotoTex, roughness: 0.65 }),
      blueShelfTrim: new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.3, metalness: 0.1 }),
      riceMat: new THREE.MeshStandardMaterial({ map: this.riceTex, roughness: 0.85 }),
      dalMat: new THREE.MeshStandardMaterial({ map: this.dalTex, roughness: 0.8 }),
      burlapMat: new THREE.MeshStandardMaterial({ map: this.burlapTex, roughness: 0.9 }),
      grainBagMat: new THREE.MeshStandardMaterial({ map: this.grainBagTex, roughness: 0.7 }),
      snackKurkureMat: new THREE.MeshStandardMaterial({ map: this.snackKurkureTex, roughness: 0.45, side: THREE.DoubleSide }),
      snackLaysBlueMat: new THREE.MeshStandardMaterial({ map: this.snackLaysBlueTex, roughness: 0.45, side: THREE.DoubleSide }),
      snackLaysGreenMat: new THREE.MeshStandardMaterial({ map: this.snackLaysGreenTex, roughness: 0.45, side: THREE.DoubleSide }),
      oilTinMat: new THREE.MeshStandardMaterial({ map: this.oilTinTex, roughness: 0.25, metalness: 0.4 }),
      scaleDisplayMat: new THREE.MeshBasicMaterial({ map: this.scaleDisplayTex }),
      oilBottlePlastic: new THREE.MeshPhysicalMaterial({ color: 0xfacc15, transparent: true, opacity: 0.75, roughness: 0.1, transmission: 0.7 }),
      candyJarGlass: new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, roughness: 0.05, transmission: 0.92 }),
      lidRed: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3 }),
      lidYellow: new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 })
    };
  }

  // ==========================================================================
  // SCENE BUILDER
  // ==========================================================================
  buildScene() {
    // 1. Site, Road, Boundary & Gate
    this.buildSiteAndRoad();
    this.buildBoundary();

    // 2. Ground Floor Shell & Residential Interior
    this.buildGroundFloorShell();

    // 3. Commercial Shop
    this.buildCommercialShopDetailed();

    // 4. First Floor: THE NEW LUXURY SKY GARDEN BALCONY DECK & Duplex
    this.buildSkyGardenDeck();
    this.buildFirstFloorRemaining();

    // 5. Roof Terrace & Exterior Elevation
    this.buildTerrace();
    this.buildElevationFacade();

    // 6. Natural Greenery & Avenue Trees (Apartment Listing Style)
    this.buildNaturalGreenery();

    // 7. Interactive Floor Hotspots
    this.buildFloorHotspots();
  }

  addWall(group, x, y, z, w, h, d, mat = this.mat.extWhite, isExt = false) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x + w / 2, y + h / 2, z + d / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { isWall: true, isExt, origMat: mat };
    this.allWalls.push(mesh);
    group.add(mesh);
    return mesh;
  }

  addDoorway(group, x, y, z, width = 3.2, height = 7.0, orientation = 'x', openAngle = 0.8) {
    const frameT = 0.25;
    const topBeam = new THREE.Mesh(
      new THREE.BoxGeometry(orientation === 'x' ? width : frameT, 0.3, orientation === 'x' ? frameT : width),
      this.mat.teakWood
    );
    topBeam.position.set(orientation === 'x' ? x + width / 2 : x, y + height - 0.15, orientation === 'x' ? z : z + width / 2);
    group.add(topBeam);

    const door = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, height - 0.3, 0.12), this.mat.teakWood);
    door.position.set(orientation === 'x' ? x + (width - 0.2) / 2 : x, y + (height - 0.3) / 2, z);
    door.rotation.y = openAngle;
    group.add(door);
  }

  // ==========================================================================
  // SITE & ROAD
  // ==========================================================================
  buildSiteAndRoad() {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), this.mat.asphalt);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0, -45);
    road.receiveShadow = true;
    this.siteGroup.add(road);

    for (let x = -45; x <= 45; x += 10) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(5, 0.4), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(x, 0.02, -45);
      this.siteGroup.add(stripe);
    }

    const curb = new THREE.Mesh(new THREE.BoxGeometry(120, 0.4, 4), this.mat.paverFloor);
    curb.position.set(0, 0.2, -31.5);
    curb.receiveShadow = true;
    this.siteGroup.add(curb);

    const plot = new THREE.Mesh(new THREE.PlaneGeometry(90, 100), new THREE.MeshStandardMaterial({ color: 0x244a22, roughness: 0.95 }));
    plot.rotation.x = -Math.PI / 2;
    plot.position.set(0, -0.05, 12);
    plot.receiveShadow = true;
    this.siteGroup.add(plot);
  }

  buildBoundary() {
    const wallH = 4.5;
    const wallT = 0.75;
    const wallMat = this.mat.extGrey;

    this.addWall(this.siteGroup, -16.5 - wallT, 0, -30, wallT, wallH, 60, wallMat);
    this.addWall(this.siteGroup, 16.5, 0, -30, wallT, wallH, 60, wallMat);
    this.addWall(this.siteGroup, -16.5, 0, 30, 33 + wallT * 2, wallH, wallT, wallMat);

    this.addWall(this.siteGroup, -16.5, 0, -30, 1.5, 6, 1.5, wallMat);
    this.addWall(this.siteGroup, 1.5, 0, -30, 1.5, 6, 1.5, wallMat);
    this.addWall(this.siteGroup, 15.5, 0, -30, 1.5, 6, 1.5, wallMat);

    const gateFrame = new THREE.Mesh(new THREE.BoxGeometry(13.8, 5, 0.2), this.mat.blackMetal);
    gateFrame.position.set(8.5, 2.5, -30);
    this.siteGroup.add(gateFrame);

    for (let y = 0.6; y <= 4.6; y += 0.55) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(13.5, 0.22, 0.25), this.mat.teakWood);
      slat.position.set(8.5, y, -30);
      this.siteGroup.add(slat);
    }
  }

  // ==========================================================================
  // 🌿 THE NEW FIRST-FLOOR EXPANSIVE SKY GARDEN DECK & BALCONY LOUNGE
  // ==========================================================================
  buildSkyGardenDeck() {
    const g = this.skyGardenGroup;
    const ffY = 13.0; // First floor level
    const deckW = 29.5; // Full width across front (X = -15.5 to +14)
    const deckD = 13.5; // Depth from front railing to back glass door (Z = -27.5 to -14.0)

    // 1. Weathered Outdoor Teak Timber Decking Floor
    const deckFloorGeo = new THREE.BoxGeometry(deckW, 0.35, deckD);
    const deckFloor = new THREE.Mesh(deckFloorGeo, this.mat.deckFloor);
    deckFloor.position.set(-0.75, ffY - 0.17, -20.75);
    deckFloor.receiveShadow = true;
    g.add(deckFloor);

    // 2. Frameless 12mm Tempered Safety Glass Balustrade (Full Front South Elevation)
    // South Front Railing (Width 29.5 ft at Z = -27.5)
    this.buildGlassRailing(g, -15.5, ffY, -27.5, deckW, 3.8, 'x');
    // West Side Railing (X = -15.5)
    this.buildGlassRailing(g, -15.5, ffY, -27.5, deckD, 3.8, 'z');
    // East Side Railing (X = +14.0)
    this.buildGlassRailing(g, 14.0, ffY, -27.5, deckD, 3.8, 'z');

    // 3. Back Interior Connection Wall (Z = -14.0) with Wide 10' Sliding Glass Doors
    this.addWall(g, -15.5, ffY, -14.0, 7.5, 10.0, 0.75, this.mat.extWhite, true); // West section
    this.addWall(g, 2.0, ffY, -14.0, 12.0, 10.0, 0.75, this.mat.extWhite, true); // East section
    this.addWall(g, -8.0, ffY + 7.5, -14.0, 10.0, 2.5, 0.75, this.mat.extWhite, true); // Lintel beam

    // 10-Foot Wide Sliding Glass French Doors (X = -8 to +2)
    const frenchDoor1 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 7.3, 0.15), this.mat.glass);
    frenchDoor1.position.set(-5.5, ffY + 3.75, -14.0);
    g.add(frenchDoor1);

    const frenchDoor2 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 7.3, 0.15), this.mat.glass);
    frenchDoor2.position.set(-0.5, ffY + 3.75, -13.9);
    g.add(frenchDoor2);

    // Black Powder Coated Door Frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(10.2, 7.5, 0.3), this.mat.blackMetal);
    frame.position.set(-3.0, ffY + 3.75, -14.0);
    g.add(frame);

    // 4. Outdoor Luxury Rattan Sectional Sofa (L-Shaped with Deep Cushions)
    // Main Section (Length 8 ft, Depth 3.2 ft)
    const sofaBase1 = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.8, 3.4), this.mat.wicker);
    sofaBase1.position.set(-8.5, ffY + 0.4, -20.0);
    g.add(sofaBase1);

    const seatCushion1 = new THREE.Mesh(new THREE.BoxGeometry(8.1, 0.6, 3.0), this.mat.cushionCream);
    seatCushion1.position.set(-8.5, ffY + 0.9, -20.0);
    g.add(seatCushion1);

    const backCushion1 = new THREE.Mesh(new THREE.BoxGeometry(8.1, 1.8, 0.6), this.mat.cushionCream);
    backCushion1.position.set(-8.5, ffY + 1.8, -18.6);
    g.add(backCushion1);

    // L-Return Section (Length 5 ft)
    const sofaBase2 = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.8, 5.0), this.mat.wicker);
    sofaBase2.position.set(-11.5, ffY + 0.4, -22.5);
    g.add(sofaBase2);

    const seatCushion2 = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.6, 4.6), this.mat.cushionCream);
    seatCushion2.position.set(-11.5, ffY + 0.9, -22.5);
    g.add(seatCushion2);

    // Decorative Accent Throw Pillows (Olive Green & Terracotta)
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 0.35), this.mat.pillowOlive);
    p1.position.set(-6.5, ffY + 1.6, -19.5);
    p1.rotation.y = -0.2;
    g.add(p1);

    const p2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 0.35), this.mat.pillowTerra);
    p2.position.set(-9.5, ffY + 1.6, -19.5);
    p2.rotation.y = 0.2;
    g.add(p2);

    const p3 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 0.35), this.mat.pillowOlive);
    p3.position.set(-11.5, ffY + 1.6, -24.0);
    g.add(p3);

    // 5. Low Outdoor Teak Coffee Table
    const table = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.9, 2.5), this.mat.teakWood);
    table.position.set(-7.5, ffY + 0.45, -23.5);
    g.add(table);

    // Open Magazine / Book on table
    const mag = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 0.9), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    mag.position.set(-7.8, ffY + 0.93, -23.5);
    g.add(mag);

    // 6. Lush Potted Terrace Plants on Deck (Scaled to natural, elegant domestic sizes ~3.5 ft)
    // Small Areca Palm in White Ceramic Pot (South-West Corner)
    this.createPottedTree(g, -13.5, ffY, -25.5, 'palm', 3.8);

    // Ficus Benjamina in Terracotta Pot (South-East Corner)
    this.createPottedTree(g, 12.0, ffY, -25.5, 'ficus', 3.5);

    // Potted Terrace Plants flanking the Lounge Glass Doors
    this.createPottedTree(g, -9.5, ffY, -15.5, 'palm', 3.0);
    this.createPottedTree(g, 3.5, ffY, -15.5, 'ficus', 3.0);

    // Flower Planter Trough Boxes along the Front Railing (with vibrant pink bougainvillea)
    for (let x of [-3.0, 5.0]) {
      const trough = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.9, 0.8), this.mat.potWhite);
      trough.position.set(x, ffY + 0.45, -26.8);
      g.add(trough);

      // Green foliage inside trough
      const foliage = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.6, 0.7), this.mat.plantGreen);
      foliage.position.set(x, ffY + 1.0, -26.8);
      g.add(foliage);

      // Pink bougainvillea flowers
      const flowerMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.5 });
      for (let fx = -1.8; fx <= 1.8; fx += 0.9) {
        const flower = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), flowerMat);
        flower.position.set(x + fx, ffY + 1.3, -26.8);
        g.add(flower);
      }
    }

    // 7. Modern Overhead Pergola Timber Rafters (Partial sunshade over the sofa)
    for (let x = -14.0; x <= -2.0; x += 1.8) {
      const rafter = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 12.0), this.mat.teakWood);
      rafter.position.set(x, ffY + 10.0, -21.0);
      rafter.castShadow = true;
      g.add(rafter);
    }

    // Warm Ambient Deck Evening Sconces
    const deckSpot1 = new THREE.PointLight(0xffedd5, 1.2, 15);
    deckSpot1.position.set(-8.5, ffY + 8.0, -15.0);
    g.add(deckSpot1);
    this.interiorLights.push(deckSpot1);

    const deckSpot2 = new THREE.PointLight(0xffedd5, 1.2, 15);
    deckSpot2.position.set(6.0, ffY + 8.0, -15.0);
    g.add(deckSpot2);
    this.interiorLights.push(deckSpot2);
  }

  // Helper: Create Realistic Small Potted Plants
  createPottedTree(group, x, y, z, type = 'palm', height = 3.5) {
    const potMat = type === 'palm' ? this.mat.potWhite : this.mat.potClay;
    const potH = 1.0;
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.35, potH, 16), potMat);
    pot.position.set(x, y + potH / 2, z);
    pot.castShadow = true;
    group.add(pot);

    // Soil
    const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.05, 16), new THREE.MeshStandardMaterial({ color: 0x2b1d0c }));
    soil.position.set(x, y + potH, z);
    group.add(soil);

    // Stem / Trunk
    const trunkH = height * 0.4;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, trunkH, 10), this.mat.teakWood);
    trunk.position.set(x, y + potH + trunkH / 2, z);
    trunk.castShadow = true;
    group.add(trunk);

    // Foliage Canopy (compact & elegant)
    if (type === 'palm') {
      const frondCount = 6;
      for (let i = 0; i < frondCount; i++) {
        const angle = (i / frondCount) * Math.PI * 2;
        const frond = new THREE.Mesh(new THREE.ConeGeometry(0.55, height * 0.55, 6), this.mat.palmFrond);
        frond.position.set(x + Math.cos(angle) * 0.45, y + potH + trunkH + 0.3, z + Math.sin(angle) * 0.45);
        frond.rotation.z = Math.cos(angle) * 0.45;
        frond.rotation.x = Math.sin(angle) * 0.45;
        frond.castShadow = true;
        group.add(frond);
      }
    } else {
      const canopy = new THREE.Mesh(new THREE.SphereGeometry(height * 0.3, 10, 10), this.mat.plantGreen);
      canopy.position.set(x, y + potH + trunkH + height * 0.2, z);
      canopy.scale.set(1.0, 1.15, 1.0);
      canopy.castShadow = true;
      group.add(canopy);
    }
  }

  // ==========================================================================
  // NATURAL GREENERY & AVENUE TREES (Scaled to neat ornamental heights)
  // ==========================================================================
  buildNaturalGreenery() {
    const gr = this.greeneryGroup;

    // Small, manicured ornamental avenue trees along the South Road (Height ~10-11 ft, sits below 1st floor)
    const treePositions = [
      { x: -28, z: -35 },
      { x: -18, z: -35 },
      { x: 18, z: -35 },
      { x: 28, z: -35 }
    ];

    treePositions.forEach(pos => {
      const trunkH = 5.0; // short neat trunk
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.35, trunkH, 10),
        new THREE.MeshStandardMaterial({ color: 0x4a3525, roughness: 0.9 })
      );
      trunk.position.set(pos.x, trunkH / 2, pos.z);
      trunk.castShadow = true;
      gr.add(trunk);

      // Neat ornamental conical canopy
      const canopy = new THREE.Mesh(new THREE.ConeGeometry(2.2, 5.5, 10), this.mat.plantGreen);
      canopy.position.set(pos.x, trunkH + 2.75, pos.z);
      canopy.castShadow = true;
      gr.add(canopy);
    });

    // Indoor Houseplants (Living Room, Dining, Master Bed)
    this.createPottedTree(this.furnitureGroup, 12.0, 2.5, 3.5, 'ficus', 3.5);
    this.createPottedTree(this.furnitureGroup, 12.0, 2.5, 18.0, 'palm', 3.2);

    const sPot = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.8, 12), this.mat.potClay);
    sPot.position.set(-14.0, 2.5 + 0.4, -9.5);
    this.furnitureGroup.add(sPot);
    const sPlant = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.6, 6), this.mat.plantGreen);
    sPlant.position.set(-14.0, 2.5 + 1.2, -9.5);
    this.furnitureGroup.add(sPlant);
  }

  // ==========================================================================
  // FIRST FLOOR (DUPLEX VOID & REMAINING ROOMS)
  // ==========================================================================
  buildFirstFloorRemaining() {
    const ffY = 13.0;
    const floorH = 10.0;
    const f = this.firstGroup;

    // Slabs around Living Cutout
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(15.75, 0.5, 40.0), this.mat.extWhite);
    s1.position.set(-7.125, ffY - 0.25, 6.75);
    f.add(s1);

    const s2 = new THREE.Mesh(new THREE.BoxGeometry(13.25, 0.5, 20.25), this.mat.extWhite);
    s2.position.set(7.375, ffY - 0.25, 16.625);
    f.add(s2);

    // Duplex Glass Railing Overlooking Living
    this.buildGlassRailing(f, 0.75, ffY, -9, 15.5, 3.5, 'z');
    this.buildGlassRailing(f, 0.75, ffY, 6.5, 13.25, 3.5, 'x');
    this.buildGlassRailing(f, 0.75, ffY, -9, 13.25, 3.5, 'x');

    // Lounge
    const lSofa = new THREE.Mesh(new THREE.BoxGeometry(7, 1.8, 3.0), new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 }));
    lSofa.position.set(4.5, ffY + 0.9, 13.5);
    f.add(lSofa);

    // Study Desk
    const desk = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.5, 2.4), this.mat.teakWood);
    desk.position.set(9.5, ffY + 1.25, 13.5);
    f.add(desk);

    // Upper Bedrooms
    this.buildBedroomInterior(-8.5, ffY, -6, 'king');
    this.buildBedroomInterior(-6.25, ffY, 22.25, 'queen');

    // Rear Balcony Railing
    this.buildGlassRailing(f, -12.5, ffY, 30.75, 16.5, 3.5, 'x');

    // First Floor Outer Walls (North, East, West)
    this.addWall(f, -15.75, ffY, -14.0, 0.75, floorH, 40.75, this.mat.extWhite, true);
    this.addWall(f, 14, ffY, 6.5, 0.75, floorH, 20.25, this.mat.extWhite, true);
    this.addWall(f, -15, ffY, 26.75, 29.75, floorH, 0.75, this.mat.extWhite, true);
  }

  // ==========================================================================
  // COMMERCIAL SHOP
  // ==========================================================================
  // ==========================================================================
  // AUTHENTIC TELANGANA KIRANA GENERAL STORE (MATCHING REFERENCE SAMPLE)
  // ==========================================================================
  buildCommercialShopDetailed() {
    const s = this.shopGroup;
    const floorY = 1.0;
    const shopH = 11.5;

    // 1. Shop Floor & Entrance Ramp
    const floorGeo = new THREE.BoxGeometry(17.0, 0.25, 12.5);
    const floorMesh = new THREE.Mesh(floorGeo, this.mat.shopFloor);
    floorMesh.position.set(-6.5, floorY - 0.12, -20.75);
    floorMesh.receiveShadow = true;
    s.add(floorMesh);

    const ramp = new THREE.Mesh(new THREE.BoxGeometry(17.0, 1.0, 3.0), this.mat.paverFloor);
    ramp.position.set(-6.5, 0.5, -28.5);
    ramp.receiveShadow = true;
    s.add(ramp);

    // 2. Shop Perimeter Walls (West, East, North/Back Wall)
    this.addWall(s, -15.75, floorY, -27.0, 0.75, shopH, 12.5, this.mat.extWhite, true);
    this.addWall(s, 2.0, floorY, -27.0, 0.75, shopH, 12.5, this.mat.extGrey, true);
    this.addWall(s, -15.75, floorY, -14.5, 18.5, shopH, 0.75, this.mat.intWall, false);

    // 3. Shutter, Grand Bilingual Signboard & Exterior Entrance
    this.buildKiranaEntranceAndSignboard(s, floorY, shopH);

    // 4. Hero Back-Wall Shelving Rack (Blue-trimmed, densely stocked, exactly like sample photo)
    this.buildKiranaHeroShelving(s, floorY, shopH);

    // 5. Authentic Wooden Shopkeeper Counter with Weighing Scale & Candy Jars
    this.buildKiranaShopkeeperCounter(s, floorY);

    // 6. Foreground Open Grain Sacks (Basmati Rice, Toor Dal, Chana Dal with Scoop)
    this.buildKiranaGrainSacks(s, floorY);

    // 7. Side Wall Shelves (Detergents, Soaps, Oils, Sunflower Tins & Crates)
    this.buildKiranaSideStorage(s, floorY, shopH);

    // 8. Overhead Dangling Snack Strips (Kurkure, Lay's & Shampoo Sachets)
    this.buildKiranaHangingSnacks(s, floorY);

    // 9. Authentic Commercial Shop Tube Lighting (Bright cool daylight tubes)
    for (let x of [-11.0, -2.5]) {
      const tubeLight = new THREE.PointLight(0xf8fafc, 1.45, 16);
      tubeLight.position.set(x, floorY + shopH - 0.8, -20.5);
      s.add(tubeLight);
      this.interiorLights.push(tubeLight);

      // 3D Fluorescent Tube Fixture
      const fixture = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.15, 0.4), this.mat.steel);
      fixture.position.set(x, floorY + shopH - 0.2, -20.5);
      s.add(fixture);
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.8, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      tube.rotation.z = Math.PI / 2;
      tube.position.set(x, floorY + shopH - 0.35, -20.5);
      s.add(tube);
    }
  }

  buildKiranaEntranceAndSignboard(s, floorY, shopH) {
    // Rolled Shutter Coil across the top entrance
    const rolledShutter = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 16.6, 20), this.mat.blackMetal);
    rolledShutter.rotation.z = Math.PI / 2;
    rolledShutter.position.set(-6.5, floorY + shopH - 1.2, -27.0);
    s.add(rolledShutter);

    // Shutter Guide Channels on left and right columns
    for (let x of [-14.9, 1.9]) {
      const channel = new THREE.Mesh(new THREE.BoxGeometry(0.3, shopH - 1.2, 0.3), this.mat.blackMetal);
      channel.position.set(x, floorY + (shopH - 1.2) / 2, -27.0);
      s.add(channel);
    }

    // Grand Bilingual Telugu & English Signboard
    const signGeo = new THREE.BoxGeometry(16.6, 2.6, 0.35);
    const signMesh = new THREE.Mesh(signGeo, this.mat.signboard);
    signMesh.position.set(-6.5, floorY + shopH + 0.3, -27.2);
    s.add(signMesh);

    // Twin Signboard Floodlights
    for (let sx of [-11.0, -2.0]) {
      const flood = new THREE.PointLight(0xfef08a, 1.3, 14);
      flood.position.set(sx, floorY + shopH + 1.2, -28.2);
      s.add(flood);

      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8), this.mat.steel);
      arm.rotation.x = Math.PI / 3;
      arm.position.set(sx, floorY + shopH + 1.4, -27.6);
      s.add(arm);
    }
  }

  buildKiranaHeroShelving(s, floorY, shopH) {
    const rackW = 16.4;
    const rackH = 9.8;
    const rackDepth = 1.3;
    const wallFace = -14.5;               // interior face of the shop's back (north) wall
    const frontZ = wallFace - rackDepth;  // shelf front edge, facing customers (-z side)
    const midZ = wallFace - rackDepth / 2;
    const cx = -6.5;

    // White backing board just in front of the wall
    const backPanel = new THREE.Mesh(
      new THREE.BoxGeometry(rackW, rackH, 0.1),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 })
    );
    backPanel.position.set(cx, floorY + rackH / 2, wallFace - 0.06);
    s.add(backPanel);

    // Reference-photo backdrop: three panels that reuse the left and right thirds of the
    // sample photo (the stocked shelves) and skip the middle third (the shopkeeper).
    const panelW = (rackW - 0.4) / 3;
    const uRanges = [[0.0, 0.34], [0.66, 1.0], [0.0, 0.34]];
    uRanges.forEach(([u0, u1], i) => {
      const geo = new THREE.PlaneGeometry(panelW, rackH - 0.4);
      const uv = geo.attributes.uv;
      for (let k = 0; k < uv.count; k++) uv.setX(k, u0 + uv.getX(k) * (u1 - u0));
      uv.needsUpdate = true;
      const panel = new THREE.Mesh(geo, this.mat.kiranaBackdrop);
      panel.rotation.y = Math.PI; // face customers looking toward the back wall (+z)
      panel.position.set(cx - (rackW - 0.4) / 2 + panelW * (i + 0.5), floorY + rackH / 2, wallFace - 0.12);
      s.add(panel);
    });

    // Royal Blue Shelf Ledges (from the reference photo)
    const shelfYs = [floorY + 1.6, floorY + 3.4, floorY + 5.2, floorY + 7.0, floorY + 8.8];
    shelfYs.forEach(sy => {
      const shelfLedge = new THREE.Mesh(new THREE.BoxGeometry(rackW, 0.18, rackDepth), this.mat.blueShelfTrim);
      shelfLedge.position.set(cx, sy, midZ);
      shelfLedge.receiveShadow = true;
      shelfLedge.castShadow = true;
      s.add(shelfLedge);
    });

    // Royal Blue Vertical Uprights
    [-14.6, -10.5, -6.5, -2.5, 1.6].forEach(ux => {
      const upright = new THREE.Mesh(new THREE.BoxGeometry(0.18, rackH, rackDepth + 0.05), this.mat.blueShelfTrim);
      upright.position.set(ux, floorY + rackH / 2, midZ);
      s.add(upright);
    });

    const itemZ = frontZ + 0.6; // sits on the ledge, in front of the backdrop

    // Top Tier: Parle-G, Marie & Good Day biscuit stacks
    const parleMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });
    const marieMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.4 });
    const goodDayMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.4 });
    for (let x = -14.0; x <= 1.0; x += 0.8) {
      const bMat = Math.sin(x * 3) > 0 ? parleMat : (Math.sin(x * 5) > 0 ? marieMat : goodDayMat);
      for (let stack = 0; stack < 2; stack++) {
        const pack = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.28, 0.75), bMat);
        pack.position.set(x, shelfYs[4] + 0.2 + stack * 0.3, itemZ);
        pack.castShadow = true;
        s.add(pack);
      }
    }

    // 4th Tier: Maggi Noodles family packs & chocolate packs
    const maggiMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.4 });
    const perkMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.4 });
    for (let x = -14.0; x <= 1.0; x += 0.9) {
      const mPack = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.55, 0.7), Math.cos(x * 2) > 0 ? maggiMat : perkMat);
      mPack.position.set(x, shelfYs[3] + 0.35, itemZ);
      mPack.castShadow = true;
      s.add(mPack);
    }

    // 3rd Tier: Cooking oil bottles
    for (let x = -14.0; x <= 1.0; x += 0.75) {
      const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.85, 12), this.mat.oilBottlePlastic);
      bottle.position.set(x, shelfYs[2] + 0.5, itemZ);
      s.add(bottle);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.12, 10), this.mat.lidRed);
      cap.position.set(x, shelfYs[2] + 0.98, itemZ);
      s.add(cap);
    }

    // 2nd Tier: Everest & MDH masala spice boxes
    const masalaColors = [0xdc2626, 0xea580c, 0xf59e0b, 0x15803d, 0x991b1b, 0xca8a04];
    for (let x = -14.2; x <= 1.2; x += 0.55) {
      const col = masalaColors[Math.floor(Math.abs(x * 7)) % masalaColors.length];
      const spiceBox = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.65, 0.4),
        new THREE.MeshStandardMaterial({ color: col, roughness: 0.35 })
      );
      spiceBox.position.set(x, shelfYs[1] + 0.4, itemZ);
      spiceBox.castShadow = true;
      s.add(spiceBox);
    }
  }

  buildKiranaShopkeeperCounter(s, floorY) {
    const counterY = floorY + 3.0;
    const counterZ = -19.5;

    // Main Wooden Counter Base (Spans x = -13.5 to x = -4.5)
    const counterBase = new THREE.Mesh(
      new THREE.BoxGeometry(9.0, 2.9, 2.2),
      this.mat.teakWood
    );
    counterBase.position.set(-9.0, floorY + 1.45, counterZ);
    counterBase.castShadow = true;
    counterBase.receiveShadow = true;
    s.add(counterBase);

    // Polished Countertop Lip
    const counterTop = new THREE.Mesh(
      new THREE.BoxGeometry(9.4, 0.15, 2.5),
      new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.25 })
    );
    counterTop.position.set(-9.0, floorY + 2.95, counterZ);
    counterTop.receiveShadow = true;
    s.add(counterTop);

    // Pass-through flap on right
    const flap = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 2.3), this.mat.teakWood);
    flap.position.set(-3.75, floorY + 2.95, counterZ);
    s.add(flap);

    // Shopkeeper Stool behind counter
    const stoolSeat = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.15, 16), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    stoolSeat.position.set(-8.5, floorY + 1.8, counterZ + 2.0);
    s.add(stoolSeat);
    const stoolLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.8, 8), this.mat.steel);
    stoolLeg.position.set(-8.5, floorY + 0.9, counterZ + 2.0);
    s.add(stoolLeg);

    // 1. Digital Electronic Weighing Scale
    const scaleBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.35, 1.3), this.mat.extGrey);
    scaleBase.position.set(-8.5, counterY + 0.18, counterZ);
    s.add(scaleBase);

    const scalePlatter = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.05, 1.4), this.mat.steel);
    scalePlatter.position.set(-8.5, counterY + 0.38, counterZ);
    s.add(scalePlatter);

    // Pole with Dual LED Display Tower
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.4, 8), this.mat.steel);
    pole.position.set(-9.2, counterY + 1.0, counterZ + 0.5);
    s.add(pole);

    const displayHead = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.25), this.mat.scaleDisplayMat);
    displayHead.position.set(-9.2, counterY + 1.6, counterZ + 0.5);
    s.add(displayHead);

    // Bag of lentils on the scale platter being weighed
    const weighedItem = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), this.mat.dalMat);
    weighedItem.scale.set(1.2, 0.6, 1.0);
    weighedItem.position.set(-8.5, counterY + 0.6, counterZ);
    s.add(weighedItem);

    // 2. Clear Glass Candy / Confectionery Jars with Red & Yellow Lids
    const jarLids = [this.mat.lidRed, this.mat.lidYellow, this.mat.lidRed, this.mat.lidYellow];
    const candyColors = [0xef4444, 0x22c55e, 0xf59e0b, 0x8b5cf6];

    for (let i = 0; i < 4; i++) {
      const jx = -12.4 + i * 0.85;
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.85, 12), this.mat.candyJarGlass);
      jar.position.set(jx, counterY + 0.45, counterZ - 0.2);
      s.add(jar);

      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.12, 12), jarLids[i]);
      lid.position.set(jx, counterY + 0.92, counterZ - 0.2);
      s.add(lid);

      const cCluster = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), new THREE.MeshStandardMaterial({ color: candyColors[i] }));
      cCluster.position.set(jx, counterY + 0.35, counterZ - 0.2);
      s.add(cCluster);
    }

    // 3. Traditional Teak Cash Box (Galla)
    const galla = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.35, 1.2), this.mat.teakWood);
    galla.position.set(-6.0, counterY + 0.2, counterZ - 0.1);
    s.add(galla);

    const brassLock = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.05), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9 }));
    brassLock.position.set(-6.0, counterY + 0.2, counterZ - 0.72);
    s.add(brassLock);

    // 4. Accounts Ledger (Bahi Khata) & Pen
    const bahiKhata = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.1, 1.1),
      new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.6 })
    );
    bahiKhata.position.set(-4.9, counterY + 0.1, counterZ + 0.2);
    s.add(bahiKhata);

    const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 6), this.mat.steel);
    pen.rotation.z = Math.PI / 4;
    pen.position.set(-4.9, counterY + 0.18, counterZ + 0.2);
    s.add(pen);

    // 5. Agarbatti Incense Stand with Warm Diya Light
    const agarbattiStand = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.1, 10), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8 }));
    agarbattiStand.position.set(-4.5, counterY + 0.1, counterZ - 0.6);
    s.add(agarbattiStand);

    const diyaLight = new THREE.PointLight(0xffa500, 0.6, 6);
    diyaLight.position.set(-4.5, counterY + 0.5, counterZ - 0.6);
    s.add(diyaLight);

    // 6. Auspicious Lakshmi / Ganesha Shrine on back wall behind counter
    const photoFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 2.0, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 })
    );
    photoFrame.rotation.y = -Math.PI / 2; // hang on the east wall, facing into the shop
    photoFrame.position.set(1.94, floorY + 8.2, -21.0);
    s.add(photoFrame);

    const marigoldGarland = new THREE.Mesh(
      new THREE.TorusGeometry(0.8, 0.08, 6, 16, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xf97316 })
    );
    marigoldGarland.rotation.set(0, -Math.PI / 2, Math.PI);
    marigoldGarland.position.set(1.88, floorY + 9.0, -21.0);
    s.add(marigoldGarland);
  }

  buildKiranaGrainSacks(s, floorY) {
    const sackConfigs = [
      { x: -12.0, z: -23.2, mat: this.mat.grainBagMat, grainMat: this.mat.riceMat, hasScoop: true },
      { x: -9.5, z: -23.4, mat: this.mat.burlapMat, grainMat: this.mat.riceMat, hasScoop: false },
      { x: -7.0, z: -23.2, mat: this.mat.burlapMat, grainMat: this.mat.dalMat, hasScoop: false },
      { x: -4.5, z: -23.5, mat: this.mat.burlapMat, grainMat: this.mat.dalMat, hasScoop: false },
      { x: -2.2, z: -23.2, mat: this.mat.grainBagMat, grainMat: this.mat.riceMat, hasScoop: false }
    ];

    sackConfigs.forEach(cfg => {
      const sack = new THREE.Mesh(
        new THREE.CylinderGeometry(0.92, 0.82, 1.8, 16),
        cfg.mat
      );
      sack.position.set(cfg.x, floorY + 0.9, cfg.z);
      sack.castShadow = true;
      sack.receiveShadow = true;
      s.add(sack);

      const rim = new THREE.Mesh(
        new THREE.TorusGeometry(0.92, 0.12, 8, 16),
        cfg.mat
      );
      rim.rotation.x = Math.PI / 2;
      rim.position.set(cfg.x, floorY + 1.8, cfg.z);
      s.add(rim);

      const grainMound = new THREE.Mesh(
        new THREE.SphereGeometry(0.88, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        cfg.grainMat
      );
      grainMound.position.set(cfg.x, floorY + 1.7, cfg.z);
      s.add(grainMound);

      if (cfg.hasScoop) {
        const scoopGroup = new THREE.Group();
        const scoopBlade = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.35, 0.8, 12, 1, true, 0, Math.PI * 1.3),
          this.mat.steel
        );
        scoopBlade.rotation.x = Math.PI / 2;
        scoopGroup.add(scoopBlade);

        const scoopHandle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8),
          this.mat.steel
        );
        scoopHandle.position.set(0, 0, 0.6);
        scoopGroup.add(scoopHandle);

        scoopGroup.rotation.x = -Math.PI / 5;
        scoopGroup.rotation.y = Math.PI / 6;
        scoopGroup.position.set(cfg.x + 0.2, floorY + 2.1, cfg.z - 0.1);
        s.add(scoopGroup);
      }
    });
  }

  buildKiranaSideStorage(s, floorY, shopH) {
    // 1. West Wall Shelving
    const westWMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
    const westFrame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 9.5), westWMat);
    westFrame.position.set(-14.9, floorY + 4.25, -21.0);
    s.add(westFrame);

    const soapColors = [0x0284c7, 0x16a34a, 0xdc2626, 0xf43f5e, 0xf59e0b];
    for (let tier = 0; tier < 4; tier++) {
      const sy = floorY + 1.5 + tier * 2.0;
      const ledge = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 9.5), westWMat);
      ledge.position.set(-14.7, sy, -21.0);
      s.add(ledge);

      for (let i = 0; i < 8; i++) {
        const sz = -24.8 + i * 1.1;
        const col = soapColors[(tier + i) % soapColors.length];
        const soapBox = new THREE.Mesh(
          new THREE.BoxGeometry(0.6, 0.55, 0.8),
          new THREE.MeshStandardMaterial({ color: col, roughness: 0.4 })
        );
        soapBox.position.set(-14.6, sy + 0.32, sz);
        soapBox.castShadow = true;
        s.add(soapBox);
      }
    }

    // 2. East Wall Storage (15L Sunflower Oil Tins, Soft Drink Crates, Brooms)
    for (let layer = 0; layer < 2; layer++) {
      for (let pos = 0; pos < 3; pos++) {
        const tin = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.3, 1.0), this.mat.oilTinMat);
        tin.position.set(1.1, floorY + 0.65 + layer * 1.35, -24.5 + pos * 1.15);
        tin.castShadow = true;
        s.add(tin);

        const handle = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 6, 12, Math.PI), this.mat.steel);
        handle.rotation.x = Math.PI / 2;
        handle.position.set(1.1, floorY + 1.35 + layer * 1.35, -24.5 + pos * 1.15);
        s.add(handle);
      }
    }

    // Beverage Crates stacked behind oil tins
    const crateColors = [0xdc2626, 0x1d4ed8, 0x16a34a];
    for (let c = 0; c < 3; c++) {
      const crate = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.7, 1.6),
        new THREE.MeshStandardMaterial({ color: crateColors[c], roughness: 0.5 })
      );
      crate.position.set(1.0, floorY + 0.35 + c * 0.75, -19.5);
      s.add(crate);

      for (let bx = -0.35; bx <= 0.35; bx += 0.35) {
        for (let bz = -0.5; bz <= 0.5; bz += 0.5) {
          const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 8), this.mat.glass);
          bottle.position.set(1.0 + bx, floorY + 0.7 + c * 0.75, -19.5 + bz);
          s.add(bottle);
        }
      }
    }

    // Traditional Grass & Coconut Brooms in corner
    for (let b = 0; b < 3; b++) {
      const broom = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.2, 4.2, 8),
        new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.9 })
      );
      broom.rotation.x = 0.15;
      broom.rotation.z = -0.15 + b * 0.1;
      broom.position.set(1.2, floorY + 2.0, -16.0 + b * 0.4);
      s.add(broom);
    }
  }

  buildKiranaHangingSnacks(s, floorY) {
    const strips = [
      { x: -11.5, z: -26.0, mat: this.mat.snackKurkureMat },
      { x: -8.5, z: -26.0, mat: this.mat.snackLaysBlueMat },
      { x: -5.5, z: -26.0, mat: this.mat.snackLaysGreenMat },
      { x: -2.5, z: -26.0, mat: this.mat.snackKurkureMat },
      { x: -7.5, z: -20.5, mat: this.mat.snackLaysBlueMat },
      { x: -10.5, z: -20.5, mat: this.mat.snackLaysGreenMat }
    ];

    strips.forEach(st => {
      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.8, 6), this.mat.steel);
      wire.position.set(st.x, floorY + 8.8, st.z);
      s.add(wire);

      const stripMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 3.8), st.mat);
      stripMesh.position.set(st.x, floorY + 6.8, st.z);
      stripMesh.rotation.y = (Math.random() - 0.5) * 0.2;
      s.add(stripMesh);
    });
  }

  // ==========================================================================
  // GROUND FLOOR RESIDENTIAL SHELL
  // ==========================================================================
  buildGroundFloorShell() {
    const plinthY = 2.5;
    const floorH = 10.0;
    const g = this.groundGroup;

    const plinth = new THREE.Mesh(new THREE.BoxGeometry(29.5, plinthY, 54), this.mat.extGrey);
    plinth.position.set(0.5, plinthY / 2, -1.0);
    g.add(plinth);

    const porticoFloor = new THREE.Mesh(new THREE.BoxGeometry(12, 0.25, 18), this.mat.paverFloor);
    porticoFloor.position.set(8, 0.25, -21);
    g.add(porticoFloor);

    for (let s = 0; s < 4; s++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(8, 0.6, 1.2), this.mat.extGrey);
      step.position.set(8, 0.3 + s * 0.6, -15.5 - s * 1.0);
      g.add(step);
    }

    this.addDoorway(g, 6.5, plinthY, -9, 4.2, 7.5, 'x', 0.85);

    const livFloor = new THREE.Mesh(new THREE.BoxGeometry(13.25, 0.25, 15.5), this.mat.marbleFloor);
    livFloor.position.set(7.375, plinthY - 0.12, -1.25);
    g.add(livFloor);
    this.buildLivingRoomInterior(plinthY);

    const pujaFloor = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.25, 5.0), this.mat.marbleFloor);
    pujaFloor.position.set(12.0, plinthY - 0.12, 9.0);
    g.add(pujaFloor);
    this.buildPujaMandirInterior(plinthY);

    const dinFloor = new THREE.Mesh(new THREE.BoxGeometry(14.0, 0.25, 9.0), this.mat.marbleFloor);
    dinFloor.position.set(7.0, plinthY - 0.12, 16.0);
    g.add(dinFloor);
    this.buildDiningInterior(plinthY);

    const kitchFloor = new THREE.Mesh(new THREE.BoxGeometry(12.0, 0.25, 9.0), this.mat.marbleFloor);
    kitchFloor.position.set(-6.0, plinthY - 0.12, 16.0);
    g.add(kitchFloor);
    this.buildKitchenInterior(plinthY);
    this.addDoorway(g, -6, plinthY, 20.5, 3.0, 7.0, 'x', 0.7);

    const bedFloor = new THREE.Mesh(new THREE.BoxGeometry(13.0, 0.25, 11.5), this.mat.woodFloor);
    bedFloor.position.set(-8.5, plinthY - 0.12, -5.75);
    g.add(bedFloor);
    this.buildBedroomInterior(-8.5, plinthY, -6, 'king');
    this.addDoorway(g, -2, plinthY, -3.5, 3.0, 7.0, 'z', 0.9);

    this.buildDuplexStaircase(-6.25, plinthY, 4.375, 10.5);
    this.buildGroundWalls(plinthY, floorH);
    this.buildSUV(8.0, 0.25, -21.0);
  }

  buildLivingRoomInterior(plinthY) {
    const f = this.furnitureGroup;
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0xd8d4cc, roughness: 0.8 });

    const b1 = new THREE.Mesh(new THREE.BoxGeometry(8, 0.7, 3.2), this.mat.teakWood);
    b1.position.set(6, plinthY + 0.35, -2);
    f.add(b1);
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.8, 2.8), sofaMat);
    s1.position.set(6, plinthY + 0.9, -2);
    f.add(s1);
    const bk1 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 1.6, 0.6), sofaMat);
    bk1.position.set(6, plinthY + 1.7, -3.3);
    f.add(bk1);

    const b2 = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.7, 5), this.mat.teakWood);
    b2.position.set(3.4, plinthY + 0.35, 1.2);
    f.add(b2);
    const s2 = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.8, 4.6), sofaMat);
    s2.position.set(3.4, plinthY + 0.9, 1.2);
    f.add(s2);

    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.15, 2.5), this.mat.glass);
    tableTop.position.set(7.5, plinthY + 1.2, 1.0);
    f.add(tableTop);

    const rug = new THREE.Mesh(new THREE.BoxGeometry(9, 0.05, 7), new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.95 }));
    rug.position.set(6.5, plinthY + 0.03, -0.5);
    f.add(rug);

    const tvPanel = new THREE.Mesh(new THREE.BoxGeometry(0.3, 8.5, 9.0), this.mat.extGrey);
    tvPanel.position.set(13.8, plinthY + 4.25, -1.0);
    f.add(tvPanel);

    for (let z = -5.0; z <= 3.0; z += 0.4) {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(0.15, 8.0, 0.2), this.mat.teakWood);
      louver.position.set(13.6, plinthY + 4.25, z);
      f.add(louver);
    }

    const tv = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 3.2, 5.8),
      new THREE.MeshStandardMaterial({ color: 0x090d16, emissive: 0x38bdf8, emissiveIntensity: 0.15 })
    );
    tv.position.set(13.4, plinthY + 4.8, -1.0);
    f.add(tv);

    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
    for (let r = 1.2; r <= 3.6; r += 1.2) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.07, 8, 32), goldMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(7.375, 18 - r * 1.6, -1.25);
      f.add(ring);
    }

    const chLight = new THREE.PointLight(0xffedd5, 1.4, 28);
    chLight.position.set(7.375, plinthY + 8.5, -1.25);
    this.groundGroup.add(chLight);
    this.interiorLights.push(chLight);
  }

  buildPujaMandirInterior(plinthY) {
    const f = this.furnitureGroup;
    const mBase1 = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.4, 2.0), this.mat.marbleFloor);
    mBase1.position.set(12.0, plinthY + 0.7, 9.0);
    f.add(mBase1);

    const jali = new THREE.Mesh(new THREE.BoxGeometry(0.1, 5.5, 3.8), this.mat.jaliMat);
    jali.position.set(13.8, plinthY + 3.8, 9.0);
    f.add(jali);

    const diyaLight = new THREE.PointLight(0xf59e0b, 1.5, 12);
    diyaLight.position.set(12.0, plinthY + 2.5, 9.0);
    this.groundGroup.add(diyaLight);
    this.interiorLights.push(diyaLight);
  }

  buildDiningInterior(plinthY) {
    const f = this.furnitureGroup;
    const top = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.25, 3.8), this.mat.teakWood);
    top.position.set(7.0, plinthY + 2.6, 16.0);
    f.add(top);

    const chairMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    for (let dx of [-2.2, 0, 2.2]) {
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 1.3), chairMat);
      c1.position.set(7.0 + dx, plinthY + 1.5, 13.6);
      f.add(c1);
      const c2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 1.3), chairMat);
      c2.position.set(7.0 + dx, plinthY + 1.5, 18.4);
      f.add(c2);
    }
  }

  buildKitchenInterior(plinthY) {
    const f = this.furnitureGroup;

    // 1. Traditional L-Shaped Black Galaxy Granite Platform along the walls (NO island, open center floor)
    // Main North Cooking Platform (along back wall, Z = 19.4)
    const northTop = new THREE.Mesh(new THREE.BoxGeometry(10.8, 0.25, 2.2), this.mat.graniteBlack);
    northTop.position.set(-6.0, plinthY + 2.8, 19.4);
    f.add(northTop);

    // Return West Platform (along west wall, X = -11.1, housing the sink)
    const westTop = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.25, 5.5), this.mat.graniteBlack);
    westTop.position.set(-11.1, plinthY + 2.8, 15.5);
    f.add(westTop);

    // 2. Traditional Indian Lower Under-Counter Cupboards (Base Cabinets)
    // North Wall Base Cupboards (Teak Wood Finish with individual cabinet doors)
    const northBase = new THREE.Mesh(new THREE.BoxGeometry(10.6, 2.65, 2.1), this.mat.teakWood);
    northBase.position.set(-6.0, plinthY + 1.32, 19.4);
    f.add(northBase);

    // West Wall Base Cupboards
    const westBase = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.65, 5.3), this.mat.teakWood);
    westBase.position.set(-11.1, plinthY + 1.32, 15.5);
    f.add(westBase);

    // Chrome Bar Handles on Lower Cupboard Doors
    for (let x = -10.0; x <= -2.0; x += 1.8) {
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8), this.mat.steel);
      handle.position.set(x, plinthY + 1.8, 18.3);
      f.add(handle);
    }

    // 3. Traditional Wall-Mounted Overhead Cupboards (Upper Cabinets up to ceiling)
    // North Wall Overhead Cabinets (Height: 3.5 ft, from Y = plinthY + 5.8 to 9.3)
    const upperNorth = new THREE.Mesh(new THREE.BoxGeometry(10.6, 3.5, 1.4), this.mat.teakWood);
    upperNorth.position.set(-6.0, plinthY + 7.5, 19.8);
    f.add(upperNorth);

    // Frosted Glass / Wooden Shutter Panels on Upper Cupboards
    for (let x = -10.0; x <= -2.0; x += 2.4) {
      const shutter = new THREE.Mesh(new THREE.BoxGeometry(2.1, 3.1, 0.08), this.mat.glass);
      shutter.position.set(x + 0.8, plinthY + 7.5, 19.05);
      f.add(shutter);

      // Cupboard Knob
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), this.mat.steel);
      knob.position.set(x + 1.6, plinthY + 6.3, 19.0);
      f.add(knob);
    }

    // West Wall Overhead Cupboard
    const upperWest = new THREE.Mesh(new THREE.BoxGeometry(1.4, 3.5, 4.5), this.mat.teakWood);
    upperWest.position.set(-11.5, plinthY + 7.5, 15.5);
    f.add(upperWest);

    // 4. Open Wooden Spice Rack Shelf underneath Upper Cupboards (for Daily Masala Dabbas)
    const spiceShelf = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.12, 0.8), this.mat.teakWood);
    spiceShelf.position.set(-4.5, plinthY + 5.2, 19.7);
    f.add(spiceShelf);

    // Stainless Steel & Glass Spice Jars (Haldi, Mirchi, Jeera, Rai, Garam Masala)
    const spiceColors = [0xeab308, 0xef4444, 0x78350f, 0x16a34a, 0xd97706];
    for (let i = 0; i < 5; i++) {
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 12), new THREE.MeshStandardMaterial({ color: spiceColors[i], roughness: 0.3 }));
      jar.position.set(-6.8 + i * 1.0, plinthY + 5.5, 19.7);
      f.add(jar);
    }

    // 5. Stainless Steel Bartan / Plate Drainer Rack (Wall-Mounted next to sink)
    const rackFrame = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.8, 2.2), this.mat.steel);
    rackFrame.position.set(-11.8, plinthY + 4.8, 14.5);
    f.add(rackFrame);

    for (let r = 0; r < 4; r++) {
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.04, 16), this.mat.steel);
      plate.rotation.z = Math.PI / 2;
      plate.position.set(-11.6, plinthY + 4.0 + r * 0.5, 14.5);
      f.add(plate);
    }

    // 6. Stainless Steel Double Sink with Swan-Neck Chrome Swivel Faucet
    const sink = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.4, 2.8), this.mat.steel);
    sink.position.set(-11.1, plinthY + 2.85, 15.5);
    f.add(sink);

    const faucet = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 8, 16, Math.PI), this.mat.steel);
    faucet.rotation.z = Math.PI;
    faucet.position.set(-11.8, plinthY + 3.4, 15.5);
    f.add(faucet);

    // 7. Traditional Indian 3-Burner Gas Stove (Stainless Steel with black burners)
    const stoveBase = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.15, 1.8), this.mat.steel);
    stoveBase.position.set(-4.0, plinthY + 2.95, 19.4);
    f.add(stoveBase);

    // 3 Gas Burners (2 main, 1 small center simmer burner)
    for (let bx of [-0.8, 0, 0.8]) {
      const burner = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.08, 16), this.mat.blackMetal);
      burner.position.set(-4.0 + bx, plinthY + 3.06, 19.4);
      f.add(burner);
    }

    // Red LPG Gas Pipe connection
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.0, 8), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
    pipe.rotation.x = Math.PI / 2;
    pipe.position.set(-2.5, plinthY + 2.7, 19.4);
    f.add(pipe);

    // 8. Traditional Prestige / Hawkins Stainless Steel Pressure Cooker on Stove!
    const cooker = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.7, 16), this.mat.steel);
    cooker.position.set(-4.8, plinthY + 3.45, 19.4);
    f.add(cooker);

    const whistle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.25, 8), this.mat.blackMetal);
    whistle.position.set(-4.8, plinthY + 3.9, 19.4);
    f.add(whistle);

    const cookerHandle = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 0.15), this.mat.blackMetal);
    cookerHandle.position.set(-5.35, plinthY + 3.7, 19.4);
    f.add(cookerHandle);

    // 9. Indian Mixer-Grinder (Mixie) with Stainless Steel Jar on Counter!
    const mixieBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
    mixieBase.position.set(-1.8, plinthY + 3.15, 19.4);
    f.add(mixieBase);

    const mixieJar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.22, 0.7, 16), this.mat.steel);
    mixieJar.position.set(-1.8, plinthY + 3.75, 19.4);
    f.add(mixieJar);

    const mixieLid = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.08, 16), this.mat.glass);
    mixieLid.position.set(-1.8, plinthY + 4.12, 19.4);
    f.add(mixieLid);

    // 10. Stainless Steel Chimney Hood over Stove
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(3.0, 1.4, 1.8), this.mat.steel);
    chimney.position.set(-4.0, plinthY + 6.2, 19.4);
    f.add(chimney);
  }

  buildBedroomInterior(cx, baseY, cz, bedType = 'king') {
    const f = this.furnitureGroup;
    const w = bedType === 'king' ? 6.8 : 5.8;
    const l = 7.0;

    const frame = new THREE.Mesh(new THREE.BoxGeometry(w, 0.8, l), this.mat.teakWood);
    frame.position.set(cx, baseY + 0.4, cz);
    f.add(frame);

    const headboard = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 3.8, 0.4), this.mat.teakWood);
    headboard.position.set(cx, baseY + 1.9, cz - l / 2 - 0.2);
    f.add(headboard);

    const mat = new THREE.Mesh(new THREE.BoxGeometry(w - 0.4, 1.0, l - 0.4), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 }));
    mat.position.set(cx, baseY + 1.2, cz);
    f.add(mat);

    for (let dx of [-w / 2 - 1.2, w / 2 + 1.2]) {
      const stand = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.5, 1.6), this.mat.teakWood);
      stand.position.set(cx + dx, baseY + 0.75, cz - l / 2 + 1.0);
      f.add(stand);
    }
  }

  buildDuplexStaircase(cx, baseY, cz, totalH) {
    const g = this.groundGroup;
    const steps = 18;
    const stepH = totalH / steps;
    const treadD = 0.95;
    const w = 3.6;

    for (let i = 0; i < 9; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, treadD), this.mat.teakWood);
      step.position.set(cx - w / 2, baseY + (i + 1) * stepH, cz - 4.0 + i * treadD);
      g.add(step);
    }

    const landing = new THREE.Mesh(new THREE.BoxGeometry(7.8, 0.35, 3.8), this.mat.teakWood);
    landing.position.set(cx, baseY + 9 * stepH, cz + 4.8);
    g.add(landing);

    for (let i = 0; i < 9; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, treadD), this.mat.teakWood);
      step.position.set(cx + w / 2, baseY + (9 + i + 1) * stepH, cz + 4.0 - i * treadD);
      this.firstGroup.add(step);
    }
  }

  buildGroundWalls(plinthY, h) {
    const g = this.groundGroup;
    const t = 0.75;
    const pt = 0.38;

    this.addWall(g, -15 - t, plinthY, -14.5, t, h, 40, this.mat.extWhite, true);
    this.addWall(g, 14, plinthY, -14.5, t, h, 40, this.mat.extWhite, true);
    this.addWall(g, -15, plinthY, 25.5, 29 + t, h, t, this.mat.extWhite, true);

    this.addWall(g, 0, plinthY, -9, 6.5, h, t, this.mat.extWhite, true);
    this.addWall(g, 10.7, plinthY, -9, 3.3, h, t, this.mat.extWhite, true);
    this.addWall(g, 6.5, plinthY + 7.5, -9, 4.2, h - 7.5, t, this.mat.extWhite, true);

    this.addWall(g, -2 - pt, plinthY, -11.5, pt, h, 8.0, this.mat.intWall, false);
    this.addWall(g, -15, plinthY, 0, 13, h, pt, this.mat.intWall, false);
    this.addWall(g, -10.5, plinthY, 0, pt, h, 8.75, this.mat.intWall, false);
    this.addWall(g, -15, plinthY, 8.75, 13, h, pt, this.mat.intWall, false);
  }

  buildSUV(x, y, z) {
    const carGroup = new THREE.Group();
    const carPaint = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.8 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.8, 12.5), carPaint);
    body.position.set(0, 1.4, 0);
    carGroup.add(body);

    const cabin = new THREE.Mesh(new THREE.BoxGeometry(5.6, 1.6, 7.5), this.mat.glass);
    cabin.position.set(0, 2.9, -0.5);
    carGroup.add(cabin);

    carGroup.position.set(x, y, z);
    this.siteGroup.add(carGroup);
  }

  buildGlassRailing(group, x, y, z, len, h, axis = 'x') {
    const t = 0.08;
    const geo = axis === 'x' ? new THREE.BoxGeometry(len, h, t) : new THREE.BoxGeometry(t, h, len);
    const railing = new THREE.Mesh(geo, this.mat.glass);
    railing.position.set(axis === 'x' ? x + len / 2 : x, y + h / 2, axis === 'z' ? z + len / 2 : z);
    group.add(railing);

    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, len, 8), this.mat.steel);
    if (axis === 'x') cap.rotation.z = Math.PI / 2;
    else cap.rotation.x = Math.PI / 2;
    cap.position.set(axis === 'x' ? x + len / 2 : x, y + h, axis === 'z' ? z + len / 2 : z);
    group.add(cap);
  }

  // ==========================================================================
  // TERRACE & ELEVATION
  // ==========================================================================
  buildTerrace() {
    const tfY = 23.0;
    const r = this.roofGroup;

    // Roof covers the residential portion (leaving Sky Garden open to sky!)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(30, 0.5, 40), this.mat.shopFloor);
    roof.position.set(0, tfY + 0.25, 6);
    r.add(roof);

    this.addWall(r, -15, tfY + 0.5, -14, 0.5, 3.5, 40, this.mat.extWhite, true);
    this.addWall(r, 14.5, tfY + 0.5, -14, 0.5, 3.5, 40, this.mat.extWhite, true);
    this.addWall(r, -15, tfY + 0.5, -14, 30, 3.5, 0.5, this.mat.extWhite, true);
    this.addWall(r, -15, tfY + 0.5, 25.5, 30, 3.5, 0.5, this.mat.extWhite, true);

    this.addWall(r, -11, tfY + 0.5, 0, 11, 8.0, 12, this.mat.extGrey, true);
    const mumtyRoof = new THREE.Mesh(new THREE.BoxGeometry(13, 0.5, 14), this.mat.extWhite);
    mumtyRoof.position.set(-5.5, tfY + 8.75, 6);
    r.add(mumtyRoof);

    const tank = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 4.5, 24), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    tank.position.set(-5.5, tfY + 11.25, 6);
    r.add(tank);
  }

  buildElevationFacade() {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.0, 13.0, 2.0), this.mat.graniteBlack);
    pillar.position.set(13.0, 6.5, -26.0);
    this.groundGroup.add(pillar);

    this.createSconce(13.0, 7.0, -24.8);
    this.createSconce(-15.8, 7.0, -26.0);
  }

  createSconce(x, y, z) {
    const sconceMesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 0.3), this.mat.blackMetal);
    sconceMesh.position.set(x, y, z);
    this.siteGroup.add(sconceMesh);

    const lightUp = new THREE.SpotLight(0xffedd5, 0, 16, Math.PI / 4, 0.4);
    lightUp.position.set(x, y + 0.4, z);
    lightUp.target.position.set(x, y + 6, z);
    this.siteGroup.add(lightUp);
    this.siteGroup.add(lightUp.target);
    this.sconceLights.push(lightUp);

    const lightDown = new THREE.SpotLight(0xffedd5, 0, 16, Math.PI / 4, 0.4);
    lightDown.position.set(x, y - 0.4, z);
    lightDown.target.position.set(x, y - 6, z);
    this.siteGroup.add(lightDown);
    this.siteGroup.add(lightDown.target);
    this.sconceLights.push(lightDown);
  }

  // ==========================================================================
  // MATTERPORT-STYLE 3D FLOOR NAVIGATION HOTSPOTS
  // ==========================================================================
  buildFloorHotspots() {
    const hotspotData = [
      { pov: 'sky-garden-sofa', label: '🌿 Sky Garden Sofa', x: -8.0, y: 13.1, z: -18.0 },
      { pov: 'sky-garden-view', label: '🌅 Street Railing', x: 2.0, y: 13.1, z: -25.5 },
      { pov: 'shop-street', label: '🏬 Kirana Front & Board', x: -6.5, y: 0.35, z: -32.0 },
      { pov: 'shop-entrance', label: '🌾 Rice & Dal Sacks', x: -4.5, y: 1.1, z: -25.0 },
      { pov: 'shop-counter', label: '⚖️ Shopkeeper Counter', x: -8.5, y: 1.1, z: -17.5 },
      { pov: 'shop-shelf', label: '📦 Blue Goods Shelves', x: -7.0, y: 1.1, z: -20.0 },
      { pov: 'living-entrance', label: '🛋️ Living Room', x: 7.5, y: 2.6, z: -8.0 },
      { pov: 'living-sofa', label: '🛋️ Sofa & TV', x: 5.0, y: 2.6, z: -2.0 },
      { pov: 'living-up', label: '✨ Chandelier View', x: 7.375, y: 2.6, z: -1.25 },
      { pov: 'puja', label: '🛕 Puja Mandir', x: 8.5, y: 2.6, z: 9.0 },
      { pov: 'dining', label: '🍽️ Dining Hall', x: 3.5, y: 2.6, z: 12.5 },
      { pov: 'kitchen', label: '🍳 Kitchen', x: -3.0, y: 2.6, z: 14.5 },
      { pov: 'master-bed-gf', label: '🛏️ Master Bed', x: -4.0, y: 2.6, z: -3.0 },
      { pov: 'portico', label: '🚗 Car Portico', x: 8.0, y: 0.35, z: -28.0 },
      { pov: 'duplex-void-overlook', label: '🕳️ Duplex Overlook', x: 0.5, y: 13.1, z: -1.25 },
      { pov: 'lounge', label: '🛋️ Upper Lounge', x: 0.0, y: 13.1, z: 10.0 },
      { pov: 'study', label: '📚 Study Office', x: 6.5, y: 13.1, z: 10.5 },
      { pov: 'terrace-open', label: '🌇 Roof Terrace', x: 8.0, y: 23.6, z: 15.0 }
    ];

    hotspotData.forEach(h => {
      const ringGeo = new THREE.RingGeometry(0.8, 1.1, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.set(h.x, h.y + 0.04, h.z);
      ringMesh.userData = { isHotspot: true, pov: h.pov };
      this.hotspotsGroup.add(ringMesh);
      this.interactiveObjects.push(ringMesh);

      const div = document.createElement('div');
      div.className = 'hotspot-3d-tag';
      div.innerHTML = `<span class="hotspot-ring-icon"></span><span>${h.label}</span>`;
      div.addEventListener('click', (e) => {
        e.stopPropagation();
        this.switchToPOV(h.pov);
      });
      document.body.appendChild(div);

      this.hotspots.push({
        element: div,
        mesh: ringMesh,
        pos: new THREE.Vector3(h.x, h.y + 0.8, h.z),
        pov: h.pov
      });
    });
  }

  updateHotspots() {
    const show = document.getElementById('toggle-hotspots') ? document.getElementById('toggle-hotspots').checked : true;
    const tempV = new THREE.Vector3();

    this.hotspots.forEach(h => {
      if (!show || this.isFPSMode) {
        h.element.style.display = 'none';
        h.mesh.visible = false;
        return;
      }
      h.mesh.visible = true;

      tempV.copy(h.pos);
      tempV.project(this.camera);

      if (tempV.z > 1) {
        h.element.style.display = 'none';
        return;
      }

      const x = (tempV.x * 0.5 + 0.5) * window.innerWidth;
      const y = (tempV.y * -0.5 + 0.5) * window.innerHeight;

      h.element.style.display = 'flex';
      h.element.style.left = `${x}px`;
      h.element.style.top = `${y}px`;
    });
  }

  // ==========================================================================
  // POV SWITCHER & CAMERA ANIMATION
  // ==========================================================================
  switchToPOV(povKey) {
    const pov = POV_DATA[povKey];
    if (!pov) return;

    this.currentPOVKey = povKey;
    document.getElementById('hud-current-room').textContent = pov.name;
    const fpsLabel = document.getElementById('fps-current-pov-label');
    if (fpsLabel) fpsLabel.textContent = `${pov.name.toUpperCase()} • EYE LEVEL (5'6")`;

    document.querySelectorAll('.room-nav-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`[data-pov="${povKey}"]`);
    if (btn) btn.classList.add('active');

    if (pov.floorLevel === 'ground') {
      this.groundGroup.visible = true;
      this.shopGroup.visible = true;
    } else if (pov.floorLevel === 'first') {
      this.groundGroup.visible = true;
      this.shopGroup.visible = true;
      this.firstGroup.visible = true;
      this.skyGardenGroup.visible = true;
    } else if (pov.floorLevel === 'terrace') {
      this.groundGroup.visible = true;
      this.firstGroup.visible = true;
      this.roofGroup.visible = true;
    }

    this.displayRoomCard(pov);
    this.updateMiniMap(pov);

    const targetPos = new THREE.Vector3(pov.camPos.x, pov.camPos.y, pov.camPos.z);
    const targetLook = new THREE.Vector3(pov.camLook.x, pov.camLook.y, pov.camLook.z);

    new TWEEN.Tween(this.camera.position)
      .to(targetPos, 1200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    new TWEEN.Tween(this.controls.target)
      .to(targetLook, 1200)
      .easing(TWEEN.Easing.Cubic.Out)
      .onComplete(() => {
        this.controls.minDistance = 0.4;
      })
      .start();
  }

  nextPOV() {
    const keys = Object.keys(POV_DATA);
    const idx = keys.indexOf(this.currentPOVKey);
    const nextKey = keys[(idx + 1) % keys.length];
    this.switchToPOV(nextKey);
  }

  // ==========================================================================
  // INTERACTIVE 2D MINI-MAP
  // ==========================================================================
  updateMiniMap(pov) {
    if (!this.mapCtx) return;
    const ctx = this.mapCtx;
    const w = 154, h = 180;

    ctx.clearRect(0, 0, w, h);

    const badge = document.getElementById('minimap-floor-name');
    if (badge) badge.textContent = pov.floorLevel.toUpperCase();

    // Plot Boundary
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    // Layout outlines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;

    // Sky Garden Deck (Front)
    ctx.strokeRect(14, 110, 126, 50);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.fillRect(14, 110, 126, 50);

    // Living / Dining (Center-East)
    ctx.strokeRect(74, 50, 66, 60);

    // Master Bed / Kitchen (Center-West)
    ctx.strokeRect(14, 50, 60, 60);

    // Vision Cone
    const px = pov.mapX;
    const py = pov.mapY;

    ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.beginPath();
    ctx.moveTo(px, py);
    const angle = this.controls.getAzimuthalAngle() - Math.PI / 2;
    ctx.arc(px, py, 25, angle - 0.5, angle + 0.5);
    ctx.closePath();
    ctx.fill();

    // Player Red Dot
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // ==========================================================================
  // KEYBOARD & CONTINUOUS D-PAD WALKING
  // ==========================================================================
  setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys.hasOwnProperty(k)) this.keys[k] = true;
      if (this.keys.hasOwnProperty(e.key)) this.keys[e.key] = true;
      if (this.keys.hasOwnProperty(e.code)) this.keys[e.code] = true;
      if (e.shiftKey) this.isSprinting = true;
    });

    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys.hasOwnProperty(k)) this.keys[k] = false;
      if (this.keys.hasOwnProperty(e.key)) this.keys[e.key] = false;
      if (this.keys.hasOwnProperty(e.code)) this.keys[e.code] = false;
      if (!e.shiftKey) this.isSprinting = false;
    });
  }

  updateFPSWalk() {
    const forward = (this.keys.w || this.keys.ArrowUp) ? 1 : (this.keys.s || this.keys.ArrowDown) ? -1 : 0;
    const strafe = (this.keys.d || this.keys.ArrowRight) ? 1 : (this.keys.a || this.keys.ArrowLeft) ? -1 : 0;

    if (forward === 0 && strafe === 0) return;

    const speed = this.isSprinting ? this.walkSpeed * 1.8 : this.walkSpeed;

    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    const sideDir = new THREE.Vector3(-dir.z, 0, dir.x);

    const move = new THREE.Vector3();
    move.addScaledVector(dir, forward * speed);
    move.addScaledVector(sideDir, strafe * speed);

    this.camera.position.add(move);
    this.controls.target.add(move);
  }

  step(direction) {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    const dist = direction * 2.2;
    dir.multiplyScalar(dist);
    this.camera.position.add(dir);
    this.controls.target.add(dir);
  }

  turn(angleRad) {
    const offset = new THREE.Vector3().subVectors(this.controls.target, this.camera.position);
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angleRad);
    this.controls.target.copy(this.camera.position).add(offset);
  }

  bindContinuousNav(btnId, actionFn) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    let timer = null;
    const start = (e) => {
      e.preventDefault();
      actionFn();
      clearInterval(timer);
      timer = setInterval(actionFn, 70);
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };
    btn.addEventListener('mousedown', start);
    btn.addEventListener('mouseup', stop);
    btn.addEventListener('mouseleave', stop);
    btn.addEventListener('touchstart', start, { passive: false });
    btn.addEventListener('touchend', stop);
    btn.addEventListener('touchcancel', stop);
  }

  // ==========================================================================
  // UI SETUP
  // ==========================================================================
  setupUI() {
    document.querySelectorAll('#view-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
    });

    document.querySelectorAll('.room-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => this.switchToPOV(btn.dataset.pov));
    });

    // Continuous on-screen navigation buttons (click or press-and-hold)
    this.bindContinuousNav('nav-step-fwd', () => this.step(0.35));
    this.bindContinuousNav('nav-step-back', () => this.step(-0.35));
    this.bindContinuousNav('nav-turn-left', () => this.turn(0.05));
    this.bindContinuousNav('nav-turn-right', () => this.turn(-0.05));
    document.getElementById('nav-next-pov').addEventListener('click', () => this.nextPOV());

    document.getElementById('card-teleport-btn').addEventListener('click', () => {
      this.switchToPOV(this.currentPOVKey);
      this.toggleFPSMode(true);
    });

    document.getElementById('exit-fps-btn').addEventListener('click', () => {
      this.setMode('full');
    });

    document.getElementById('btn-day').addEventListener('click', () => this.setLightingMode('day'));
    document.getElementById('btn-sunset').addEventListener('click', () => this.setLightingMode('sunset'));
    document.getElementById('btn-night').addEventListener('click', () => this.setLightingMode('night'));

    document.getElementById('toggle-roof').addEventListener('change', (e) => {
      this.roofGroup.visible = e.target.checked;
    });

    document.getElementById('toggle-greenery').addEventListener('change', (e) => {
      this.greeneryGroup.visible = e.target.checked;
      this.skyGardenGroup.visible = e.target.checked;
    });

    const toggleHotspots = document.getElementById('toggle-hotspots');
    if (toggleHotspots) {
      toggleHotspots.addEventListener('change', (e) => {
        this.hotspotsGroup.visible = e.target.checked;
        this.updateHotspots();
      });
    }

    document.getElementById('toggle-furniture').addEventListener('change', (e) => {
      this.furnitureGroup.visible = e.target.checked;
    });

    document.getElementById('toggle-walls-transparent').addEventListener('change', (e) => {
      const trans = e.target.checked;
      this.allWalls.forEach(w => {
        w.material = trans ? this.mat.glass : w.userData.origMat;
      });
    });

    document.getElementById('toggle-auto-rotate').addEventListener('change', (e) => {
      this.controls.autoRotate = e.target.checked;
      this.controls.autoRotateSpeed = 1.0;
    });

    document.getElementById('close-card-btn').addEventListener('click', () => {
      document.getElementById('room-card').classList.add('hidden');
    });
  }

  setMode(mode) {
    this.currentMode = mode;
    document.querySelectorAll('#view-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`[data-mode="${mode}"]`);
    if (btn) btn.classList.add('active');

    if (mode === 'fps') {
      this.toggleFPSMode(true);
      return;
    } else {
      this.toggleFPSMode(false);
    }

    if (mode === 'full') {
      this.groundGroup.visible = true;
      this.shopGroup.visible = true;
      this.firstGroup.visible = true;
      this.skyGardenGroup.visible = true;
      this.roofGroup.visible = true;
      this.furnitureGroup.visible = true;
      this.switchToPOV('south-facade');
    } else if (mode === 'ground') {
      this.groundGroup.visible = true;
      this.shopGroup.visible = true;
      this.firstGroup.visible = false;
      this.skyGardenGroup.visible = false;
      this.roofGroup.visible = false;
      this.furnitureGroup.visible = true;
      this.switchToPOV('shop-entrance');
    } else if (mode === 'first') {
      this.groundGroup.visible = true;
      this.shopGroup.visible = true;
      this.firstGroup.visible = true;
      this.skyGardenGroup.visible = true;
      this.roofGroup.visible = false;
      this.furnitureGroup.visible = true;
      this.switchToPOV('sky-garden-sofa');
    } else if (mode === 'terrace') {
      this.groundGroup.visible = true;
      this.shopGroup.visible = true;
      this.firstGroup.visible = true;
      this.skyGardenGroup.visible = true;
      this.roofGroup.visible = true;
      this.furnitureGroup.visible = false;
      this.switchToPOV('terrace-open');
    }
  }

  toggleFPSMode(enable) {
    this.isFPSMode = enable;
    const fpsHud = document.getElementById('fps-hud');
    if (enable) {
      fpsHud.classList.remove('hidden');
      this.controls.minDistance = 0.4;
      this.controls.maxDistance = 50;
    } else {
      fpsHud.classList.add('hidden');
      this.controls.minDistance = 0.5;
      this.controls.maxDistance = 200;
    }
  }

  displayRoomCard(data) {
    const card = document.getElementById('room-card');
    document.getElementById('card-floor-badge').textContent = data.floor;
    document.getElementById('card-room-title').textContent = data.name;
    document.getElementById('card-dimensions').textContent = data.dims;
    document.getElementById('card-area').textContent = data.area;
    document.getElementById('card-vastu').textContent = data.vastu;
    document.getElementById('card-description').textContent = data.desc;
    card.classList.remove('hidden');
  }

  onMouseMove(e) {
    if (this.isFPSMode) return;
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.interactiveObjects, true);

    if (hits.length > 0) {
      this.container.style.cursor = 'pointer';
    } else {
      this.container.style.cursor = 'default';
    }
  }

  onClick(e) {
    if (e.target.closest('#top-bar') || e.target.closest('#left-sidebar') || e.target.closest('#room-card') || e.target.closest('#bottom-hud') || e.target.closest('#fps-hud') || e.target.closest('#minimap-container') || e.target.closest('#walk-nav-controls')) {
      return;
    }

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.interactiveObjects, true);

    if (hits.length > 0) {
      const obj = hits[0].object;
      if (obj.userData.pov) {
        this.switchToPOV(obj.userData.pov);
      }
    }
  }

  updateCompass() {
    const needle = document.getElementById('compass-needle');
    if (!needle) return;
    const angle = this.controls.getAzimuthalAngle();
    needle.style.transform = `rotate(${(angle * 180) / Math.PI}deg)`;
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    TWEEN.update();
    this.updateFPSWalk();
    this.controls.update();
    this.updateCompass();
    this.updateHotspots();

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new CompleteDuplexApp();
});
