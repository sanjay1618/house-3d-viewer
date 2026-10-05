/**
 * 3D DUPLEX RESIDENCE & COMMERCIAL COMPLEX - RAMNAGAR, MANCHERIAL (TELANGANA)
 * Updated Plan: KesariNandan Architectures & Constructions (Er. Pawan Kumar Velpula)
 * Client: Mr. Siddartha Uppugandla • Plot: 33'-0" × 60'-0" (220 Sq.Yds) • South Road Facing
 *
 * First Floor Front: Open Sky Garden Balcony Deck (Outdoor Sofa, Small Trees & Glass Balustrade)
 * Ground Floor Front: Kirana General Store (16'x12'6") & Covered Car Parking Portico (12'3"x21'6")
 *
 * Minimalist & Clean Architectural Presentation:
 * - Architectural Studio Listing Mode (Minimal & Distraction-Free)
 * - 3D Dollhouse Axonometric Cutaways (55° Perspective)
 * - Pure 2D Architectural Plan View with Room Dimension Badges
 * - Desktop-First Layout with Touch-Friendly Mobile Drawer & Continuous D-Pad
 */

// ============================================================================
// COMPREHENSIVE MULTI-POV TARGETS & ARCHITECTURAL METADATA
// ============================================================================
const POV_DATA = {
  // Exterior & Elevation
  'south-facade': {
    name: 'South Road Villa Facade',
    floor: 'EXTERIOR (STREET)',
    dims: "33'-0\" Frontage × 60'-0\"",
    area: '1,980 Sq.Ft. Plot (220 Sq.Yds)',
    vastu: 'South Facing Road',
    desc: 'Contemporary G+1 elevation featuring Sri Siddartha Kirana store on South-West, covered car parking portico with gate on South-East, and the open Sky Garden Balcony Terrace Deck above with outdoor lounge sofa, small trees, and glass balustrades.',
    camPos: { x: 0.0, y: 15.0, z: -48.0 },
    camLook: { x: 0.0, y: 12.0, z: -10.0 },
    floorLevel: 'all',
    mapX: 80, mapY: 185
  },
  'aerial-duplex': {
    name: 'Aerial Duplex Cutaway View',
    floor: 'ARCHITECTURAL 3D OVERVIEW',
    dims: "28'-3\" × 51'-6\" Plinth",
    area: '3,182 Sq.Ft. Total Built Area',
    vastu: 'Vastu Compliant Layout',
    desc: 'High-angle 3D cutaway showing the open front Sky Garden deck, Kirana store, car parking, entrance lobby, double-height living void, master suites, family lounge, study room, and rooftop terrace.',
    camPos: { x: 24.0, y: 36.0, z: -35.0 },
    camLook: { x: 0.0, y: 8.0, z: 2.0 },
    floorLevel: 'all',
    mapX: 80, mapY: 100
  },

  // 1st Floor Sky Garden Balcony Deck (Directly Above Kirana & Car Parking)
  'sky-garden-sofa': {
    name: 'Sky Garden: Outdoor Lounge Sofa',
    floor: 'FIRST FLOOR (SKY GARDEN BALCONY)',
    dims: "28'-3\" × 13'-6\" Open Deck",
    area: '380.00 Sq.Ft.',
    vastu: 'South Front Balcony Deck',
    desc: 'Sitting on the luxury weatherproof rattan sectional sofa on the open timber deck directly above the Kirana shop and portico, surrounded by small potted trees and flowering planters overlooking the South Road.',
    camPos: { x: -8.0, y: 17.5, z: -18.0 },
    camLook: { x: 5.0, y: 16.5, z: -25.0 },
    floorLevel: 'first',
    mapX: 45, mapY: 140
  },
  'sky-garden-view': {
    name: 'Sky Garden: Street Railing View',
    floor: 'FIRST FLOOR (SKY GARDEN BALCONY)',
    dims: "28'-3\" Wide Front Balcony",
    area: '380.00 Sq.Ft.',
    vastu: 'South Road View',
    desc: 'Standing at the 12mm tempered safety glass balustrade looking out over the 30\' South Road, entrance gate, and avenue trees below.',
    camPos: { x: 2.0, y: 18.0, z: -25.5 },
    camLook: { x: 2.0, y: 15.5, z: -45.0 },
    floorLevel: 'first',
    mapX: 80, mapY: 160
  },
  'sky-garden-door': {
    name: 'Lounge to Sky Garden Entrance',
    floor: 'FIRST FLOOR',
    dims: "10'-0\" Sliding Glass French Doors",
    area: 'Deck Connection',
    vastu: 'South Frontage',
    desc: 'Stepping through the 10-foot wide sliding glass French doors from the interior family lounge and corridor out onto the sunlit sky garden balcony deck.',
    camPos: { x: -1.0, y: 18.0, z: -10.5 },
    camLook: { x: -1.0, y: 17.5, z: -22.0 },
    floorLevel: 'first',
    mapX: 75, mapY: 125
  },

  // Authentic Telangana Kirana General Store (Sample Reference Matched)
  'shop-street': {
    name: 'Kirana Store: Street Entrance View',
    floor: 'GROUND (COMMERCIAL)',
    dims: "16'-0\" × 12'-6\"",
    area: '200.00 Sq.Ft.',
    vastu: 'South-West Road Front',
    desc: 'Street viewpoint of Sri Siddartha Kirana & General Stores with the Telugu & English yellow/red signboard, open heavy-duty rolling shutter, hanging snack strips, and customer access platform.',
    camPos: { x: -7.0, y: 5.5, z: -38.0 },
    camLook: { x: -7.0, y: 5.0, z: -20.0 },
    floorLevel: 'ground',
    mapX: 40, mapY: 160
  },
  'shop-counter': {
    name: 'Kirana Store: Shopkeeper Counter (Sample Photo POV)',
    floor: 'GROUND (COMMERCIAL)',
    dims: "16'-0\" × 12'-6\"",
    area: '200.00 Sq.Ft.',
    vastu: 'South-West',
    desc: 'Exact viewpoint of the sample photograph! Standing behind the wooden cash counter with the digital electronic weighing scale, red-lidded glass candy jars, cash drawer (galla), and royal blue trimmed goods shelving.',
    camPos: { x: -9.0, y: 5.2, z: -17.5 },
    camLook: { x: -9.0, y: 4.8, z: -23.0 },
    floorLevel: 'ground',
    mapX: 35, mapY: 145
  },
  'shop-entrance': {
    name: 'Kirana Store: Customer Aisle & Grains',
    floor: 'GROUND (COMMERCIAL)',
    dims: "16'-0\" × 12'-6\"",
    area: '200.00 Sq.Ft.',
    vastu: 'South-West Aisle',
    desc: 'Customer aisle with open sacks of premium Basmati rice (with metal scoop) and golden Toor Dal, wooden display crates, and floor-to-ceiling grocery racks.',
    camPos: { x: -3.5, y: 6.0, z: -25.5 },
    camLook: { x: -8.0, y: 4.5, z: -18.0 },
    floorLevel: 'ground',
    mapX: 45, mapY: 150
  },
  'shop-shelf': {
    name: 'Kirana Store: Blue Trimmed Shelves',
    floor: 'GROUND (COMMERCIAL)',
    dims: "16'-0\" × 12'-6\"",
    area: '200.00 Sq.Ft.',
    vastu: 'South-West Wall',
    desc: 'Detailed close-up of the wooden rack system with vivid royal blue shelf lips, loaded with Parle-G, Marie biscuits, Maggi noodles, Everest masala packets, and oils.',
    camPos: { x: -7.0, y: 6.2, z: -22.0 },
    camLook: { x: -7.0, y: 5.8, z: -15.5 },
    floorLevel: 'ground',
    mapX: 40, mapY: 140
  },

  // Ground Floor Residence
  'car-portico': {
    name: 'Car Parking & Portico',
    floor: 'GROUND FLOOR',
    dims: "12'-3\" × 21'-6\"",
    area: '263.38 Sq.Ft.',
    vastu: 'South-East Portico',
    desc: 'Covered portico car parking with heavy interlocking pavers, automatic gate from South Road, modern SUV parked, and recessed LED ceiling downlights.',
    camPos: { x: 7.5, y: 6.5, z: -32.0 },
    camLook: { x: 7.5, y: 5.5, z: -16.0 },
    floorLevel: 'ground',
    mapX: 115, mapY: 160
  },
  'entrance-lobby': {
    name: 'Entrance Lobby & External Stairs',
    floor: 'GROUND FLOOR',
    dims: "12'-3\" × 6'-6\" Foyer",
    area: 'Foyer Connection',
    vastu: 'East Main Entry',
    desc: 'Entrance lobby connecting the portico to the main teak double doors of the house and the external staircase leading independently to the 1st floor corridor and roof terrace.',
    camPos: { x: 4.0, y: 6.8, z: -14.0 },
    camLook: { x: 6.0, y: 6.5, z: -5.0 },
    floorLevel: 'ground',
    mapX: 95, mapY: 130
  },
  'living-room': {
    name: 'Living Room Hall',
    floor: 'GROUND FLOOR',
    dims: "13'-5\" × 15'-8\"",
    area: '210.15 Sq.Ft.',
    vastu: 'East / North-East',
    desc: 'Main living hall with Italian marble flooring, 65" TV on fluted teak wall, L-shaped leather sectional sofa, and double-height ceiling cutout (94.47 sq.ft.) rising to the upper floor.',
    camPos: { x: 5.0, y: 6.8, z: -2.0 },
    camLook: { x: 13.0, y: 7.0, z: 2.0 },
    floorLevel: 'ground',
    mapX: 105, mapY: 110
  },
  'living-chandelier': {
    name: 'Living: Look UP at Duplex Void',
    floor: 'GROUND FLOOR',
    dims: "94.47 Sq.Ft. Cutout Void (21' High)",
    area: 'Double-Height Void',
    vastu: 'Brahmasthan Openness',
    desc: 'Looking directly up through the 94.47 sq.ft. duplex void cutout at the cascading crystal ring chandelier and the 1st floor glass balustrades.',
    camPos: { x: 6.5, y: 6.5, z: 1.5 },
    camLook: { x: 6.5, y: 22.0, z: 1.5 },
    floorLevel: 'ground',
    mapX: 105, mapY: 100
  },
  'puja-room': {
    name: 'Puja Mandir Sanctum',
    floor: 'GROUND FLOOR',
    dims: "6'-0\" × 5'-0\"",
    area: '30.00 Sq.Ft.',
    vastu: 'North-East (Ishanya)',
    desc: 'Spiritual sanctum with CNC carved teak jali doors, white Makrana marble tiered altar, brass idols, hanging temple bell, and glowing diya oil lamps.',
    camPos: { x: 7.5, y: 7.0, z: 7.5 },
    camLook: { x: 13.0, y: 7.0, z: 7.5 },
    floorLevel: 'ground',
    mapX: 125, mapY: 85
  },
  'dining-room': {
    name: 'Dining Hall & Utility Access',
    floor: 'GROUND FLOOR',
    dims: "14'-0\" × 8'-8\"",
    area: '121.33 Sq.Ft.',
    vastu: 'Central / East',
    desc: 'Dining hall with solid 6-seater teak dining table, contemporary pendant lighting, seamless archway to living room, and French doors leading out to the rear 5\'-0" wide utility.',
    camPos: { x: 4.5, y: 7.5, z: 11.5 },
    camLook: { x: 6.5, y: 7.2, z: 16.5 },
    floorLevel: 'ground',
    mapX: 105, mapY: 70
  },
  'kitchen-traditional': {
    name: 'Traditional Indian Kitchen',
    floor: 'GROUND FLOOR',
    dims: "12'-0\" × 9'-0\"",
    area: '108.00 Sq.Ft.',
    vastu: 'North-West (Agneya/Vayavya)',
    desc: 'Authentic Indian kitchen featuring teak and ivory cupboards, black granite L-shaped counter, stainless steel sink under the rear window, 3-burner gas stove, spice dabba, mixer-grinder, and breakfast counter facing dining.',
    camPos: { x: -3.5, y: 7.2, z: 16.5 },
    camLook: { x: -7.5, y: 6.5, z: 22.0 },
    floorLevel: 'ground',
    mapX: 55, mapY: 70
  },
  'master-bed-gf': {
    name: 'Master Bedroom (Ground)',
    floor: 'GROUND FLOOR',
    dims: "13'-0\" × 11'-6\"",
    area: '149.50 Sq.Ft.',
    vastu: 'South-West Zone',
    desc: 'Spacious ground master bedroom with king-size teak bed, full-wall wooden wardrobes along the west wall, and attached luxury bathroom (4\'-6" × 8\'-9").',
    camPos: { x: -8.0, y: 7.0, z: -3.0 },
    camLook: { x: -8.0, y: 6.8, z: 3.5 },
    floorLevel: 'ground',
    mapX: 50, mapY: 105
  },

  // First Floor Duplex & Rear Suites
  'duplex-void-overlook': {
    name: 'Duplex Void: Overlooking Living',
    floor: 'FIRST FLOOR (DUPLEX)',
    dims: "94.47 Sq.Ft. Cutout Void",
    area: 'Upper Balustrade View',
    vastu: 'Central Core',
    desc: 'Standing at the 12mm toughened glass balustrade looking down into the ground floor living room, admiring the cascading crystal chandelier and Italian marble below.',
    camPos: { x: 0.5, y: 17.5, z: 0.5 },
    camLook: { x: 6.5, y: 8.5, z: 1.5 },
    floorLevel: 'first',
    mapX: 85, mapY: 100
  },
  'upper-lounge': {
    name: 'Family Lounge & Duplex Landing',
    floor: 'FIRST FLOOR',
    dims: "13'-0\" × 9'-6\"",
    area: '123.50 Sq.Ft.',
    vastu: 'Central Family Living',
    desc: 'First floor family lounge where the internal floating teak staircase lands, furnished with comfortable leather lounge seating, coffee table, and open sightlines to the duplex void and front sky garden.',
    camPos: { x: 4.5, y: 17.5, z: 8.0 },
    camLook: { x: 6.0, y: 17.0, z: 13.5 },
    floorLevel: 'first',
    mapX: 105, mapY: 85
  },
  'bed1-master': {
    name: 'Bedroom 01 (Upper Master)',
    floor: 'FIRST FLOOR',
    dims: "13'-0\" × 11'-6\" + Walk-In (4'6\"×4'6\")",
    area: '149.50 Sq.Ft. + Walk-In',
    vastu: 'West Master Suite',
    desc: 'Upper master bedroom suite with king-size teak bed, bedside reading lamps, dedicated 4\'-6" × 4\'-6" walk-in closet, and attached toilet (4\'-6" × 6\'-6").',
    camPos: { x: -8.0, y: 17.5, z: -3.0 },
    camLook: { x: -8.0, y: 17.0, z: 3.5 },
    floorLevel: 'first',
    mapX: 50, mapY: 105
  },
  'bed2-rear': {
    name: 'Bedroom 02 (Rear)',
    floor: 'FIRST FLOOR',
    dims: "12'-6\" × 9'-0\"",
    area: '112.50 Sq.Ft.',
    vastu: 'North-West Upper',
    desc: 'Rear bedroom with double bed, study nook, full-height wardrobes, and attached bathroom (4\'-6" × 6\'-6").',
    camPos: { x: -8.0, y: 17.5, z: 16.5 },
    camLook: { x: -8.0, y: 17.0, z: 22.5 },
    floorLevel: 'first',
    mapX: 50, mapY: 65
  },
  'study-room': {
    name: 'Study / Home Office',
    floor: 'FIRST FLOOR',
    dims: "9'-0\" × 9'-4\"",
    area: '84.00 Sq.Ft.',
    vastu: 'North-East Upper',
    desc: 'Quiet executive home office and study room with solid wood desk, dual monitor setup, full bookshelves, and double glass French doors opening onto the rear balcony.',
    camPos: { x: 7.0, y: 17.5, z: 16.5 },
    camLook: { x: 8.5, y: 17.2, z: 22.5 },
    floorLevel: 'first',
    mapX: 115, mapY: 65
  },
  'rear-balcony': {
    name: 'Rear Balcony (North)',
    floor: 'FIRST FLOOR (REAR)',
    dims: "4'-0\" Wide Balcony",
    area: 'Rear Balcony',
    vastu: 'North Rear Breeze',
    desc: 'Rear balcony running behind the study and bedroom 02 with protective safety railing and potted plants.',
    camPos: { x: 0.0, y: 17.5, z: 25.5 },
    camLook: { x: 0.0, y: 17.0, z: 32.0 },
    floorLevel: 'first',
    mapX: 80, mapY: 45
  },

  // Roof Terrace & Head Room
  'stair-headroom': {
    name: 'Staircase Head Room (Mumty)',
    floor: 'TERRACE LEVEL',
    dims: "13'-0\" × 10'-0\" Head Room",
    area: '159.25 Sq.Ft. Slab',
    vastu: 'Staircase Mumty',
    desc: 'Weather-tight staircase head room structure with heavy steel door leading out onto the vast open roof terrace.',
    camPos: { x: -6.0, y: 27.5, z: -16.0 },
    camLook: { x: -8.0, y: 27.0, z: -7.0 },
    floorLevel: 'terrace',
    mapX: 55, mapY: 130
  },
  'roof-terrace': {
    name: 'Open Roof Terrace',
    floor: 'TERRACE LEVEL',
    dims: "1,400+ Sq.Ft. Open Terrace",
    area: 'Open Sky Terrace',
    vastu: 'Rooftop Open Sky',
    desc: 'Expansive open terrace featuring a shaded pergola with outdoor seating, 1000L overhead water tank tower, rooftop solar water heater and panels, with 360-degree panoramic views of Ramnagar, Mancherial.',
    camPos: { x: 12.0, y: 30.0, z: 12.0 },
    camLook: { x: -2.0, y: 25.0, z: -5.0 },
    floorLevel: 'terrace',
    mapX: 110, mapY: 90
  }
};

// ============================================================================
// MAIN APPLICATION CLASS
// ============================================================================
class HouseViewerApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.currentMode = 'ground'; // Default to Ground Plan Dollhouse
    this.currentPOVKey = 'living-room';
    this.isFPS = false;
    this.fpsHeight = 5.5; // Eye height in feet
    this.moveSpeed = 10.0;
    this.turnSpeed = 1.6;
    this.isSprinting = false;
    this.showLabels = true;

    // Movement state (WASD & D-Pad)
    this.moveState = { fwd: false, bwd: false, left: false, right: false, turnL: false, turnR: false };
    this.clock = new THREE.Clock();
    this.allWalls = [];
    this.hotspots = [];
    this.sconces = [];
    this.interiorLights = [];

    this.init();
  }

  init() {
    // 1. Scene, Camera, Renderer
    this.scene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.2, 500);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.container.appendChild(this.renderer.domElement);

    // 2. Controls (Touch & Desktop OrbitControls)
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.02; // Prevent going underground
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 160.0;
    // Enable full touch gesture ergonomics
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    };

    // 3. Lighting & Materials
    this.setupLighting();
    this.buildMaterials();

    // 4. Build 3D Architectural Scene
    this.buildScene();

    // 5. Default to Minimalist Architectural Studio Listing Mode & 3D Ground Plan
    this.setLightingMode('listing');
    this.setMode('ground', true);

    // 6. UI & Listeners
    this.setupUI();
    this.setupKeyboard();
    this.updateMiniMap(POV_DATA['living-room']);

    // 7. Event Listeners
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('click', (e) => this.onClick(e));

    // Animation Loop
    this.animate();
  }

  // ==========================================================================
  // LIGHTING SYSTEM (MINIMAL LISTING STUDIO / DAY / SUNSET / NIGHT)
  // ==========================================================================
  setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.05);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfffaf0, 1.15);
    this.sunLight.position.set(30, 60, -20);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 160;
    this.sunLight.shadow.camera.left = -40;
    this.sunLight.shadow.camera.right = 40;
    this.sunLight.shadow.camera.top = 40;
    this.sunLight.shadow.camera.bottom = -40;
    this.sunLight.shadow.bias = -0.0004;
    this.scene.add(this.sunLight);

    this.skyFillLight = new THREE.DirectionalLight(0xe0f2fe, 0.45);
    this.skyFillLight.position.set(-25, 35, 25);
    this.scene.add(this.skyFillLight);

    this.currentLighting = 'listing';
  }

  setLightingMode(mode) {
    this.currentLighting = mode;
    ['btn-listing', 'btn-day', 'btn-sunset', 'btn-night'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.classList.remove('active');
    });

    if (mode === 'listing') {
      // Pristine architectural studio presentation: minimal, soft, shadowless, distraction-free
      document.getElementById('btn-listing')?.classList.add('active');
      this.scene.background = new THREE.Color(0xf1f5f9);
      this.scene.fog = new THREE.FogExp2(0xf1f5f9, 0.002);
      this.ambientLight.color.setHex(0xffffff);
      this.ambientLight.intensity = 1.08;
      this.sunLight.color.setHex(0xfffaf0);
      this.sunLight.intensity = 1.15;
      this.sunLight.position.set(30, 60, -20);
      this.skyFillLight.color.setHex(0xe0f2fe);
      this.skyFillLight.intensity = 0.45;
      this.toggleInteriorGlow(false);
      this.toggleSconces(false);
      if (this.studioFloorMat) {
        this.studioFloorMat.color.setHex(0xe2e8f0);
      }
    } else if (mode === 'day') {
      document.getElementById('btn-day')?.classList.add('active');
      this.scene.background = new THREE.Color(0x0c1424);
      this.scene.fog = new THREE.FogExp2(0x0c1424, 0.007);
      this.ambientLight.color.setHex(0xffffff);
      this.ambientLight.intensity = 0.88;
      this.sunLight.color.setHex(0xfff8ee);
      this.sunLight.intensity = 1.35;
      this.sunLight.position.set(35, 55, -25);
      this.skyFillLight.color.setHex(0x93c5fd);
      this.skyFillLight.intensity = 0.45;
      this.toggleInteriorGlow(false);
      this.toggleSconces(false);
      if (this.studioFloorMat) {
        this.studioFloorMat.color.setHex(0x0f172a);
      }
    } else if (mode === 'sunset') {
      document.getElementById('btn-sunset')?.classList.add('active');
      this.scene.background = new THREE.Color(0x180d1e);
      this.scene.fog = new THREE.FogExp2(0x180d1e, 0.007);
      this.ambientLight.color.setHex(0xfcd34d);
      this.ambientLight.intensity = 0.72;
      this.sunLight.color.setHex(0xf97316);
      this.sunLight.intensity = 1.5;
      this.sunLight.position.set(45, 20, -35);
      this.skyFillLight.intensity = 0.35;
      this.toggleInteriorGlow(true, 0.7);
      this.toggleSconces(true, 0.8);
      if (this.studioFloorMat) {
        this.studioFloorMat.color.setHex(0x180d1e);
      }
    } else if (mode === 'night') {
      document.getElementById('btn-night')?.classList.add('active');
      this.scene.background = new THREE.Color(0x03060c);
      this.scene.fog = new THREE.FogExp2(0x03060c, 0.007);
      this.ambientLight.color.setHex(0x1e293b);
      this.ambientLight.intensity = 0.35;
      this.sunLight.color.setHex(0x38bdf8);
      this.sunLight.intensity = 0.25;
      this.skyFillLight.intensity = 0.15;
      this.toggleInteriorGlow(true, 1.4);
      this.toggleSconces(true, 1.5);
      if (this.studioFloorMat) {
        this.studioFloorMat.color.setHex(0x03060c);
      }
    }
  }

  toggleSconces(active, intensity = 1.0) {
    this.sconces.forEach(light => {
      light.visible = active;
      if (active) light.intensity = intensity;
    });
  }

  toggleInteriorGlow(active, intensity = 1.0) {
    this.interiorLights.forEach(light => {
      light.visible = active;
      if (active) light.intensity = intensity;
    });
  }

  // ==========================================================================
  // PROCEDURAL MATERIALS (ARCHITECTURAL MINIMALIST PALETTE)
  // ==========================================================================
  buildMaterials() {
    this.mat = {};

    // 1. Plaster & Wall Finishes (Clean, crisp architectural white)
    this.mat.extWhite = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.8, metalness: 0.02 });
    this.mat.extGrey = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.75 });
    this.mat.accentTeak = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.55, metalness: 0.08 });
    this.mat.intWall = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 });
    this.mat.intWallAccent = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.85 });

    // 2. Flooring (Italian Marble, Honey Teak, Timber Decking, Terracotta)
    this.mat.marbleFloor = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.06 });
    this.mat.woodFloor = new THREE.MeshStandardMaterial({ color: 0x9a6438, roughness: 0.45, metalness: 0.04 });
    this.mat.deckFloor = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.65, metalness: 0.05 });
    this.mat.paverFloor = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.9 });
    this.mat.terraceTile = new THREE.MeshStandardMaterial({ color: 0xc27756, roughness: 0.85 });

    // 3. Outdoor Furniture Fabrics & Wicker
    this.mat.wicker = new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.9 });
    this.mat.cushionCream = new THREE.MeshStandardMaterial({ color: 0xf1efe9, roughness: 0.85 });
    this.mat.pillowOlive = new THREE.MeshStandardMaterial({ color: 0x4d7c0f, roughness: 0.8 });
    this.mat.pillowTerra = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.8 });
    this.mat.potWhite = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    this.mat.potClay = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.85 });
    this.mat.plantGreen = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    // 4. Glass & Metals
    this.mat.glass = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 0.5
    });
    this.mat.balustradeGlass = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1
    });
    this.mat.darkMetal = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.8 });
    this.mat.brassGold = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.85 });

    // 5. Wood & Furniture
    this.mat.teakWood = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.5, metalness: 0.05 });
    this.mat.blackGranite = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.2, metalness: 0.1 });

    // 6. Studio Floor Material
    this.studioFloorMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.95, metalness: 0.02 });

    // 7. Kirana Sample Photo Texture
    const loader = new THREE.TextureLoader();
    if (typeof window !== 'undefined' && window.KIRANA_SAMPLE_DATA_URL) {
      const tex = loader.load(window.KIRANA_SAMPLE_DATA_URL);
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      this.mat.kiranaSamplePoster = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 });
    } else {
      this.mat.kiranaSamplePoster = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.7 });
    }

    // 8. Signboard Texture
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1536;
    signCanvas.height = 256;
    const ctx = signCanvas.getContext('2d');
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(0, 0, 1536, 256);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(14, 14, 1508, 228);
    ctx.fillStyle = '#b91c1c';
    ctx.font = 'bold 78px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('శ్రీ సిద్ధార్థ కిరాణం & జనరల్ స్టోర్స్', 768, 85);
    ctx.fillStyle = '#1e3a8a';
    ctx.font = 'bold 48px sans-serif';
    ctx.fillText('SRI SIDDARTHA KIRANA & GENERAL STORES', 768, 175);
    ctx.fillStyle = '#047857';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('RAMNAGAR • MANCHERIAL • ALL PROVISIONS & RECHARGES', 768, 225);

    const signTex = new THREE.CanvasTexture(signCanvas);
    this.mat.kiranaSignboard = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.5 });
  }

  // ==========================================================================
  // SCENE BUILDER
  // ==========================================================================
  buildScene() {
    this.siteGroup = new THREE.Group();
    this.boundaryGroup = new THREE.Group(); // Dedicated group to hide compound walls during 3D floor plan top views!
    this.groundGroup = new THREE.Group();
    this.skyGardenGroup = new THREE.Group(); // Open front deck above Kirana & Portico
    this.firstGroup = new THREE.Group();
    this.terraceGroup = new THREE.Group();
    this.furnitureGroup = new THREE.Group();
    this.greeneryGroup = new THREE.Group();
    this.hotspotGroup = new THREE.Group();

    this.scene.add(this.siteGroup);
    this.scene.add(this.boundaryGroup);
    this.scene.add(this.groundGroup);
    this.scene.add(this.skyGardenGroup);
    this.scene.add(this.firstGroup);
    this.scene.add(this.terraceGroup);
    this.scene.add(this.furnitureGroup);
    this.scene.add(this.greeneryGroup);
    this.scene.add(this.hotspotGroup);

    // 1. Site, Studio Floor, 30' South Road & Boundary
    this.buildSiteAndRoad();
    this.buildBoundary();

    // 2. Commercial Kirana General Store (Ground South-West: 16'x12'6")
    this.buildCommercialShopDetailed();

    // 3. Ground Floor Residence (Plinth: 1,455 Sq.Ft.)
    this.buildGroundFloorShell();

    // 4. First Floor Front Sky Garden Balcony Deck (Outdoor Sofa, Small Trees & Railings)
    this.buildSkyGardenDeck();

    // 5. First Floor Interior Duplex & Rear Bedrooms
    this.buildFirstFloorRemaining();

    // 6. Roof Terrace & Exterior Elevation
    this.buildTerrace();
    this.buildElevationFacade();

    // 7. Natural Greenery & Avenue Trees
    this.buildNaturalGreenery();

    // 8. Interactive Floor Hotspots
    this.buildFloorHotspots();

    // 9. Minimalist 3D Room Dimension Badges (Apartment Listing Presentation)
    this.buildRoomLabels();
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
  // SITE & ROAD (MINIMAL STUDIO PRESENTATION)
  // ==========================================================================
  buildSiteAndRoad() {
    // 1. Clean Studio Floor (Minimalist soft grey, seamless distraction-free background)
    const siteBase = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), this.studioFloorMat);
    siteBase.rotation.x = -Math.PI / 2;
    siteBase.position.set(0, -0.05, 0);
    siteBase.receiveShadow = true;
    this.siteGroup.add(siteBase);

    // 2. 30' South Road
    const road = new THREE.Mesh(new THREE.PlaneGeometry(160, 34), new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 }));
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.02, -50);
    road.receiveShadow = true;
    this.siteGroup.add(road);

    // Road divider markings
    for (let x = -60; x <= 60; x += 14) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.5), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(x, 0.03, -50);
      this.siteGroup.add(stripe);
    }

    // Road curb
    const curb = new THREE.Mesh(new THREE.BoxGeometry(160, 0.6, 1.2), this.mat.extGrey);
    curb.position.set(0, 0.3, -33.5);
    this.siteGroup.add(curb);
  }

  buildBoundary() {
    // Compound wall: 33' width (X: -16.5 to +16.5), 60' depth (Z: -33.0 to +27.0)
    // Placed in this.boundaryGroup so it can be automatically hidden during top-down views!
    const wallH = 6.0;
    const b = this.boundaryGroup;

    // West Boundary (X = -16.5)
    this.addWall(b, -16.5, 0, -33.0, 0.6, wallH, 60.0, this.mat.extGrey, true);
    // East Boundary (X = 16.0)
    this.addWall(b, 16.0, 0, -33.0, 0.6, wallH, 60.0, this.mat.extGrey, true);
    // North Rear Boundary (Z = 27.0)
    this.addWall(b, -16.5, 0, 27.0, 33.0, wallH, 0.6, this.mat.extGrey, true);

    // Front Gate Pillars (South-East)
    const pillar1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 7.5, 1.5), this.mat.darkMetal);
    pillar1.position.set(1.0, 3.75, -33.0);
    b.add(pillar1);

    const pillar2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 7.5, 1.5), this.mat.darkMetal);
    pillar2.position.set(13.25, 3.75, -33.0);
    b.add(pillar2);

    // Main Gate
    const gate = new THREE.Mesh(new THREE.BoxGeometry(11.5, 6.0, 0.15), this.mat.darkMetal);
    gate.position.set(7.125, 3.0, -33.0);
    b.add(gate);
  }

  // ==========================================================================
  // COMMERCIAL KIRANA GENERAL STORE (GROUND SOUTH-WEST: 16'-0" × 12'-6")
  // ==========================================================================
  buildCommercialShopDetailed() {
    const s = this.groundGroup;
    const floorY = 2.5;
    const shopH = 10.0;

    // Shop Floor Tile
    const shopFloor = new THREE.Mesh(new THREE.BoxGeometry(16.0, 0.25, 12.5), this.mat.marbleFloor);
    shopFloor.position.set(-7.0, floorY - 0.12, -18.25);
    s.add(shopFloor);

    // 3'-0" Front Platform in front of shutter
    const plat = new THREE.Mesh(new THREE.BoxGeometry(16.0, 0.6, 3.0), this.mat.paverFloor);
    plat.position.set(-7.0, floorY - 0.3, -26.0);
    s.add(plat);

    // Signboard & Rolling Shutter
    this.buildKiranaEntranceAndSignboard(s, floorY, shopH);
    // Blue Trimmed Shelves (Parle-G, Maggi, Everest)
    this.buildKiranaHeroShelving(s, floorY, shopH);
    // Wooden Shopkeeper Counter with Digital Scale & Candy Jars
    this.buildKiranaShopkeeperCounter(s, floorY);
    // Grain Sacks (Basmati Rice with Scoop, Golden Toor Dal)
    this.buildKiranaGrainSacks(s, floorY);
    // Hanging Kurkure/Snack Strips
    this.buildKiranaHangingSnacks(s, floorY);
  }

  buildKiranaEntranceAndSignboard(s, floorY, shopH) {
    // Grand Signboard above shutter
    const board = new THREE.Mesh(new THREE.BoxGeometry(16.0, 2.6, 0.3), this.mat.kiranaSignboard);
    board.position.set(-7.0, floorY + shopH - 1.3, -24.65);
    s.add(board);

    // Open Rolling Shutter
    const shutterCanopy = new THREE.Mesh(new THREE.BoxGeometry(14.0, 1.4, 0.8), this.mat.darkMetal);
    shutterCanopy.position.set(-7.0, floorY + shopH - 2.5, -24.5);
    s.add(shutterCanopy);

    // Rolled up shutter slats
    const shutter = new THREE.Mesh(new THREE.BoxGeometry(13.6, 1.8, 0.2), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.4 }));
    shutter.position.set(-7.0, floorY + shopH - 2.8, -24.4);
    s.add(shutter);
  }

  buildKiranaHeroShelving(s, floorY, shopH) {
    const rackW = 12.0;
    const rackH = 8.5;
    const rackD = 1.6;
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.6 });
    const blueLipMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.4 });

    // Back Panel
    const backPanel = new THREE.Mesh(new THREE.BoxGeometry(rackW, rackH, 0.1), shelfMat);
    backPanel.position.set(-7.0, floorY + rackH / 2, -12.2);
    s.add(backPanel);

    // 5 Shelves with blue lips and products
    for (let i = 0; i < 5; i++) {
      const sy = floorY + 0.5 + i * 1.6;
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(rackW, 0.15, rackD), shelfMat);
      shelf.position.set(-7.0, sy, -12.2 - rackD / 2);
      s.add(shelf);

      const lip = new THREE.Mesh(new THREE.BoxGeometry(rackW, 0.25, 0.1), blueLipMat);
      lip.position.set(-7.0, sy + 0.08, -12.2 - rackD);
      s.add(lip);

      // Groceries / Biscuit Packs / Masala boxes
      const colors = [0xf59e0b, 0xef4444, 0x10b981, 0x3b82f6, 0x8b5cf6];
      for (let j = 0; j < 8; j++) {
        const itemMat = new THREE.MeshStandardMaterial({ color: colors[(i + j) % colors.length], roughness: 0.5 });
        const box = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.9, 0.8), itemMat);
        box.position.set(-12.0 + j * 1.4, sy + 0.55, -12.2 - rackD / 2);
        s.add(box);
      }
    }

    // Sample Photo Display Poster on side wall
    const poster = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 5.0), this.mat.kiranaSamplePoster);
    poster.position.set(-14.85, floorY + 5.5, -18.25);
    poster.rotation.y = Math.PI / 2;
    s.add(poster);
  }

  buildKiranaShopkeeperCounter(s, floorY) {
    const f = this.furnitureGroup;
    // Wooden L-counter
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(7.5, 3.2, 2.0), this.mat.teakWood);
    c1.position.set(-9.0, floorY + 1.6, -19.5);
    f.add(c1);

    // Counter Top
    const top = new THREE.Mesh(new THREE.BoxGeometry(7.8, 0.2, 2.3), this.mat.blackGranite);
    top.position.set(-9.0, floorY + 3.25, -19.5);
    f.add(top);

    // Electronic Weighing Scale with Red LED
    const scaleBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 1.4), new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6 }));
    scaleBase.position.set(-11.0, floorY + 3.5, -19.5);
    f.add(scaleBase);

    const plate = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.1, 1.2), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 }));
    plate.position.set(-11.0, floorY + 3.75, -19.5);
    f.add(plate);

    // Candy Jars with Red Lids (Matching Sample)
    for (let k = 0; k < 4; k++) {
      const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.9, 16), this.mat.glass);
      jar.position.set(-8.0 + k * 0.9, floorY + 3.8, -19.5);
      f.add(jar);

      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.15, 16), new THREE.MeshStandardMaterial({ color: 0xdc2626 }));
      lid.position.set(-8.0 + k * 0.9, floorY + 4.3, -19.5);
      f.add(lid);
    }
  }

  buildKiranaGrainSacks(s, floorY) {
    const sackMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.95 });
    const riceMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });
    const dalMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.8 });

    // Basmati Rice Sack
    const riceSack = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 2.0, 16), sackMat);
    riceSack.position.set(-4.5, floorY + 1.0, -22.5);
    s.add(riceSack);

    const rice = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.2, 16), riceMat);
    rice.position.set(-4.5, floorY + 1.95, -22.5);
    s.add(rice);

    // Scoop
    const scoop = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.8), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 }));
    scoop.position.set(-4.5, floorY + 2.1, -22.5);
    s.add(scoop);

    // Toor Dal Sack
    const dalSack = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 2.0, 16), sackMat);
    dalSack.position.set(-2.5, floorY + 1.0, -22.5);
    s.add(dalSack);

    const dal = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.2, 16), dalMat);
    dal.position.set(-2.5, floorY + 1.95, -22.5);
    s.add(dal);
  }

  buildKiranaHangingSnacks(s, floorY) {
    const snackColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b];
    for (let i = 0; i < 4; i++) {
      const stripMat = new THREE.MeshStandardMaterial({ color: snackColors[i % 4], roughness: 0.6 });
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 3.2), stripMat);
      strip.position.set(-11.0 + i * 2.2, floorY + 7.0, -24.3);
      s.add(strip);
    }
  }

  // ==========================================================================
  // GROUND FLOOR RESIDENTIAL SHELL (PLINTH: 1,454.87 SQ.FT.)
  // ==========================================================================
  buildGroundFloorShell() {
    const plinthY = 2.5;
    const floorH = 10.0;
    const g = this.groundGroup;

    // Plinth: 28'-3" (X: -15.0 to +13.25), 51'-6" (Z: -24.5 to +27.0)
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(28.25, plinthY, 51.5), this.mat.extGrey);
    plinth.position.set(-0.875, plinthY / 2, 1.25);
    g.add(plinth);

    // Portico & Car Parking (X: 1.0 to 13.25, Z: -33.5 to -12.0)
    const porticoFloor = new THREE.Mesh(new THREE.BoxGeometry(12.25, 0.25, 21.5), this.mat.paverFloor);
    porticoFloor.position.set(7.125, 0.25, -22.75);
    g.add(porticoFloor);

    // Steps to Entrance Lobby
    for (let s = 0; s < 4; s++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.6, 1.2), this.mat.extGrey);
      step.position.set(7.125, 0.3 + s * 0.6, -14.5 - s * 1.0);
      g.add(step);
    }

    // Entrance Lobby Floor
    const lobbyFloor = new THREE.Mesh(new THREE.BoxGeometry(12.25, 0.25, 6.5), this.mat.marbleFloor);
    lobbyFloor.position.set(7.125, plinthY - 0.12, -8.75);
    g.add(lobbyFloor);

    // Main House Teak Double Door (X: 1.0, Z: -5.5)
    this.addDoorway(g, 5.0, plinthY, -5.5, 4.2, 7.5, 'x', 0.85);

    // Living Room Floor (13'-5" × 15'-8", X: -0.25 to 13.25, Z: -5.5 to 10.2)
    const livFloor = new THREE.Mesh(new THREE.BoxGeometry(13.5, 0.25, 15.7), this.mat.marbleFloor);
    livFloor.position.set(6.5, plinthY - 0.12, 2.35);
    g.add(livFloor);
    this.buildLivingRoomInterior(plinthY);

    // Puja Mandir Floor (6'-0" × 5'-0", X: 7.25 to 13.25, Z: 5.2 to 10.2)
    const pujaFloor = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.25, 5.0), this.mat.marbleFloor);
    pujaFloor.position.set(10.25, plinthY - 0.12, 7.7);
    g.add(pujaFloor);
    this.buildPujaMandirInterior(plinthY);

    // Dining Floor (14'-0" × 8'-8", X: -0.75 to 13.25, Z: 10.2 to 18.9)
    const dinFloor = new THREE.Mesh(new THREE.BoxGeometry(14.0, 0.25, 8.7), this.mat.marbleFloor);
    dinFloor.position.set(6.25, plinthY - 0.12, 14.55);
    g.add(dinFloor);
    this.buildDiningInterior(plinthY);

    // Traditional Kitchen Floor (12'-0" × 9'-0", X: -12.75 to -0.75, Z: 14.75 to 23.75)
    const kitchFloor = new THREE.Mesh(new THREE.BoxGeometry(12.0, 0.25, 9.0), this.mat.marbleFloor);
    kitchFloor.position.set(-6.75, plinthY - 0.12, 19.25);
    g.add(kitchFloor);
    this.buildKitchenInterior(plinthY);

    // Ground Master Bedroom Floor (13'-0" × 11'-6", X: -15.0 to -2.0, Z: -5.5 to 6.0)
    const bedFloor = new THREE.Mesh(new THREE.BoxGeometry(13.0, 0.25, 11.5), this.mat.woodFloor);
    bedFloor.position.set(-8.5, plinthY - 0.12, 0.25);
    g.add(bedFloor);
    this.buildBedroomInterior(-8.5, plinthY, 0.25, 'king');
    this.addDoorway(g, -2.0, plinthY, 2.0, 3.0, 7.0, 'z', 0.9);

    // Attached Master Toilet (4'-6" × 8'-9", X: -15.0 to -10.5, Z: 6.0 to 14.75)
    const bathFloor = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.25, 8.75), this.mat.marbleFloor);
    bathFloor.position.set(-12.75, plinthY - 0.12, 10.375);
    g.add(bathFloor);

    // Internal Duplex Staircase (X: -10.5 to -0.25, Z: 6.0 to 14.75)
    this.buildDuplexStaircase(-5.375, plinthY, 10.375, 10.5);

    // External Staircase (X: -15.0 to -8.5, Z: -12.0 to -5.5) in Lobby
    this.buildExternalStaircase(-11.75, plinthY, -8.75, 10.5);

    // Build Ground Walls
    this.buildGroundWalls(plinthY, floorH);

    // Parked Modern SUV in Portico
    this.buildSUV(7.125, 0.25, -22.0);
  }

  buildExternalStaircase(cx, baseY, cz, totalH) {
    const g = this.groundGroup;
    const numSteps = 16;
    const stepH = totalH / numSteps;
    const stepW = 3.2;
    const stepD = 1.0;
    const graniteStep = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3 });

    for (let i = 0; i < numSteps / 2; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(stepW, stepH, stepD), graniteStep);
      step.position.set(cx + stepW / 2, baseY + (i + 0.5) * stepH, cz - 2.5 + i * stepD);
      g.add(step);
    }
    // Mid Landing
    const landing = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.4, 3.0), graniteStep);
    landing.position.set(cx, baseY + 8 * stepH, cz + 1.5);
    g.add(landing);

    // Upper Flight
    for (let i = 0; i < numSteps / 2; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(stepW, stepH, stepD), graniteStep);
      step.position.set(cx - stepW / 2, baseY + (8 + i + 0.5) * stepH, cz + 0.5 - i * stepD);
      g.add(step);
    }
  }

  buildLivingRoomInterior(plinthY) {
    const f = this.furnitureGroup;
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0xd8d4cc, roughness: 0.8 });

    // Sectional L-Sofa
    const b1 = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.7, 3.2), this.mat.teakWood);
    b1.position.set(4.5, plinthY + 0.35, 0.0);
    f.add(b1);
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.8, 2.8), sofaMat);
    s1.position.set(4.5, plinthY + 0.9, 0.0);
    f.add(s1);
    const bk1 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 1.6, 0.6), sofaMat);
    bk1.position.set(4.5, plinthY + 1.7, -1.3);
    f.add(bk1);

    // Marble Coffee Table
    const table = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.8, 2.4), this.mat.marbleFloor);
    table.position.set(4.5, plinthY + 0.4, 3.0);
    f.add(table);

    // TV Wall Panel (East Wall)
    const tvWall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 8.0, 9.0), this.mat.teakWood);
    tvWall.position.set(13.1, plinthY + 4.0, 2.35);
    f.add(tvWall);

    // 65" TV Screen
    const tv = new THREE.Mesh(new THREE.BoxGeometry(0.1, 3.5, 6.0), new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.1, metalness: 0.8 }));
    tv.position.set(12.85, plinthY + 4.5, 2.35);
    f.add(tv);

    // Grand Crystal Chandelier in 94.47 Sq.Ft. Duplex Void
    const chandelier = new THREE.Group();
    for (let r = 0; r < 3; r++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2 - r * 0.6, 0.08, 16, 32), this.mat.brassGold);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = plinthY + 18.0 - r * 2.2;
      chandelier.add(ring);
    }
    const glowLight = new THREE.PointLight(0xfef08a, 1.2, 22);
    glowLight.position.set(6.5, plinthY + 15.0, 2.35);
    this.interiorLights.push(glowLight);
    chandelier.add(glowLight);
    f.add(chandelier);
  }

  buildPujaMandirInterior(plinthY) {
    const f = this.furnitureGroup;
    // White Makrana Marble Altar
    const altar = new THREE.Mesh(new THREE.BoxGeometry(4.5, 3.0, 2.0), this.mat.marbleFloor);
    altar.position.set(10.25, plinthY + 1.5, 9.2);
    f.add(altar);

    // Backlit Jali Panel
    const jali = new THREE.Mesh(new THREE.BoxGeometry(4.8, 6.0, 0.1), this.mat.brassGold);
    jali.position.set(10.25, plinthY + 4.5, 10.1);
    f.add(jali);

    // Puja Glow Light
    const pujaLight = new THREE.PointLight(0xfbbf24, 1.0, 10);
    pujaLight.position.set(10.25, plinthY + 4.0, 8.5);
    this.interiorLights.push(pujaLight);
    f.add(pujaLight);
  }

  buildDiningInterior(plinthY) {
    const f = this.furnitureGroup;
    // Solid Teak 6-Seater Table
    const table = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.3, 3.8), this.mat.teakWood);
    table.position.set(6.25, plinthY + 2.6, 14.55);
    f.add(table);

    // 4 Table Legs
    for (let dx of [-2.8, 2.8]) {
      for (let dz of [-1.5, 1.5]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.5), this.mat.teakWood);
        leg.position.set(6.25 + dx, plinthY + 1.25, 14.55 + dz);
        f.add(leg);
      }
    }

    // 6 Chairs
    for (let c = 0; c < 3; c++) {
      const chair1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 1.4), this.mat.accentTeak);
      chair1.position.set(4.25 + c * 2.0, plinthY + 1.6, 12.2);
      f.add(chair1);
      const chair2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 1.4), this.mat.accentTeak);
      chair2.position.set(4.25 + c * 2.0, plinthY + 1.6, 16.9);
      f.add(chair2);
    }
  }

  buildKitchenInterior(plinthY) {
    const f = this.furnitureGroup;
    // L-Shaped Black Granite Counter
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(11.0, 2.8, 2.2), this.mat.teakWood);
    c1.position.set(-6.75, plinthY + 1.4, 22.5);
    f.add(c1);
    const top1 = new THREE.Mesh(new THREE.BoxGeometry(11.2, 0.2, 2.4), this.mat.blackGranite);
    top1.position.set(-6.75, plinthY + 2.9, 22.5);
    f.add(top1);

    // Breakfast Counter facing Dining
    const bc = new THREE.Mesh(new THREE.BoxGeometry(2.0, 3.2, 6.0), this.mat.teakWood);
    bc.position.set(-1.0, plinthY + 1.6, 17.5);
    f.add(bc);
    const bcTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 6.2), this.mat.blackGranite);
    bcTop.position.set(-1.0, plinthY + 3.3, 17.5);
    f.add(bcTop);

    // 3-Burner Gas Stove
    const stove = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.15, 1.6), new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.8 }));
    stove.position.set(-8.5, plinthY + 3.05, 22.5);
    f.add(stove);

    // Stainless Steel Sink
    const sink = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.05, 1.6), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 }));
    sink.position.set(-4.5, plinthY + 3.02, 22.5);
    f.add(sink);

    // Overhead Teak Cupboards
    const cup = new THREE.Mesh(new THREE.BoxGeometry(11.0, 2.4, 1.4), this.mat.teakWood);
    cup.position.set(-6.75, plinthY + 7.5, 22.9);
    f.add(cup);
  }

  buildBedroomInterior(cx, baseY, cz, bedType = 'king') {
    const f = this.furnitureGroup;
    const w = bedType === 'king' ? 6.5 : 5.2;
    const d = 7.0;

    // Bed frame
    const bedFrame = new THREE.Mesh(new THREE.BoxGeometry(w, 1.2, d), this.mat.teakWood);
    bedFrame.position.set(cx, baseY + 0.6, cz);
    f.add(bedFrame);

    // Mattress
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(w - 0.2, 0.8, d - 0.2), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 }));
    mattress.position.set(cx, baseY + 1.4, cz);
    f.add(mattress);

    // Pillows
    for (let p of [-1.5, 1.5]) {
      const pillow = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.35, 1.2), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
      pillow.position.set(cx + p, baseY + 1.9, cz + 2.4);
      f.add(pillow);
    }

    // Full-height Cupboards along West Wall
    const cup = new THREE.Mesh(new THREE.BoxGeometry(1.8, 9.0, 8.5), this.mat.teakWood);
    cup.position.set(cx - 5.5, baseY + 4.5, cz);
    f.add(cup);
  }

  buildDuplexStaircase(cx, baseY, cz, totalH) {
    const g = this.groundGroup;
    const numSteps = 16;
    const stepH = totalH / numSteps;
    const stepW = 3.6;
    const stepD = 1.0;

    for (let i = 0; i < numSteps; i++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(stepW, 0.25, stepD), this.mat.teakWood);
      step.position.set(cx, baseY + (i + 1) * stepH, cz - 4.0 + i * stepD * 0.65);
      g.add(step);
    }
  }

  buildGroundWalls(plinthY, h) {
    const g = this.groundGroup;
    // Outer Walls: 28'-3" wide (X: -15.0 to 13.25), 51'-6" deep (Z: -24.5 to 27.0)
    this.addWall(g, -15.0, plinthY, -24.5, 0.75, h, 51.5, this.mat.extWhite, true);
    this.addWall(g, 12.5, plinthY, -12.0, 0.75, h, 39.0, this.mat.extWhite, true);
    this.addWall(g, -15.0, plinthY, 26.25, 28.25, h, 0.75, this.mat.extWhite, true);
    this.addWall(g, -15.0, plinthY, -12.0, 16.0, h, 0.75, this.mat.intWall, false);
    this.addWall(g, -2.0, plinthY, -5.5, 0.75, h, 11.5, this.mat.intWall, false);
  }

  buildSUV(x, y, z) {
    const car = new THREE.Group();
    // Body
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.8, roughness: 0.2 });
    const b = new THREE.Mesh(new THREE.BoxGeometry(6.2, 2.2, 14.0), bodyMat);
    b.position.set(x, y + 1.8, z);
    car.add(b);

    // Cabin Glass
    const cab = new THREE.Mesh(new THREE.BoxGeometry(5.8, 1.8, 8.0), this.mat.glass);
    cab.position.set(x, y + 3.4, z - 0.5);
    car.add(cab);

    // 4 Wheels
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9 });
    for (let dx of [-3.1, 3.1]) {
      for (let dz of [-4.2, 4.2]) {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.8, 24), tireMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x + dx, y + 1.2, z + dz);
        car.add(wheel);
      }
    }
    this.furnitureGroup.add(car);
  }

  // ==========================================================================
  // FIRST FLOOR FRONT SKY GARDEN BALCONY DECK (EMPTY OUTDOOR SOFA & SMALL TREES)
  // Replaces the front bedroom above Kirana & Car Parking with an open terrace!
  // ==========================================================================
  buildSkyGardenDeck() {
    const g = this.skyGardenGroup;
    const ffY = 13.0; // First floor level
    const deckW = 28.25; // 28'-3" full front width (X: -15.0 to 13.25)
    const deckD = 13.5;  // Depth from front glass railing to interior wall (Z: -27.5 to -14.0)

    // 1. Weathered Outdoor Teak Timber Decking Floor
    const deckFloor = new THREE.Mesh(new THREE.BoxGeometry(deckW, 0.35, deckD), this.mat.deckFloor);
    deckFloor.position.set(-0.875, ffY - 0.17, -20.75);
    deckFloor.receiveShadow = true;
    g.add(deckFloor);

    // 2. Frameless 12mm Tempered Safety Glass Balustrades
    // South Front Railing (Width 28.25 ft at Z = -27.5)
    this.buildGlassRailing(g, -15.0, ffY, -27.5, deckW, 3.8, 'x');
    // West Side Railing (X = -15.0)
    this.buildGlassRailing(g, -15.0, ffY, -27.5, deckD, 3.8, 'z');
    // East Side Railing (X = 13.25)
    this.buildGlassRailing(g, 13.25, ffY, -27.5, deckD, 3.8, 'z');

    // 3. Back Interior Connection Wall (Z = -14.0) with Wide 10' Sliding Glass Doors
    this.addWall(g, -15.0, ffY, -14.0, 7.0, 10.0, 0.75, this.mat.extWhite, true); // West section
    this.addWall(g, 2.0, ffY, -14.0, 11.25, 10.0, 0.75, this.mat.extWhite, true); // East section
    this.addWall(g, -8.0, ffY + 7.5, -14.0, 10.0, 2.5, 0.75, this.mat.extWhite, true); // Lintel beam

    // 10-Foot Wide Sliding Glass French Doors (X = -8 to +2)
    const frenchDoor1 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 7.3, 0.15), this.mat.glass);
    frenchDoor1.position.set(-5.5, ffY + 3.75, -14.0);
    g.add(frenchDoor1);

    const frenchDoor2 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 7.3, 0.15), this.mat.glass);
    frenchDoor2.position.set(-0.5, ffY + 3.75, -13.9);
    g.add(frenchDoor2);

    // Dark Powder Coated Door Frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(10.2, 7.5, 0.3), this.mat.darkMetal);
    frame.position.set(-3.0, ffY + 3.75, -14.0);
    g.add(frame);

    // 4. Outdoor Luxury Rattan Sectional Sofa (L-Shaped with Deep Cushions)
    const sofaBase1 = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.8, 3.4), this.mat.wicker);
    sofaBase1.position.set(-8.5, ffY + 0.4, -20.0);
    g.add(sofaBase1);

    const seatCushion1 = new THREE.Mesh(new THREE.BoxGeometry(8.1, 0.6, 3.0), this.mat.cushionCream);
    seatCushion1.position.set(-8.5, ffY + 0.9, -20.0);
    g.add(seatCushion1);

    const backCushion1 = new THREE.Mesh(new THREE.BoxGeometry(8.1, 1.8, 0.6), this.mat.cushionCream);
    backCushion1.position.set(-8.5, ffY + 1.8, -18.6);
    g.add(backCushion1);

    // L-Return Section
    const sofaBase2 = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.8, 5.0), this.mat.wicker);
    sofaBase2.position.set(-11.5, ffY + 0.4, -22.5);
    g.add(sofaBase2);

    const seatCushion2 = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.6, 4.6), this.mat.cushionCream);
    seatCushion2.position.set(-11.5, ffY + 0.9, -22.5);
    g.add(seatCushion2);

    // Decorative Accent Throw Pillows
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

    // 6. Realistic Small Potted Trees (Domestic Size ~3.5 ft, Never Oversized)
    // Small Areca Palm in White Ceramic Pot (South-West Corner)
    this.createPottedTree(g, -13.0, ffY, -25.5, 'palm', 3.6);

    // Small Ficus in Terracotta Pot (South-East Corner)
    this.createPottedTree(g, 11.5, ffY, -25.5, 'ficus', 3.4);

    // Small Potted Plants Flanking the Sliding Glass Doors
    this.createPottedTree(g, -9.5, ffY, -15.5, 'palm', 3.0);
    this.createPottedTree(g, 3.5, ffY, -15.5, 'ficus', 3.0);

    // Flower Planter Troughs along Front Railing with Pink Bougainvillea
    for (let x of [-3.0, 5.0]) {
      const trough = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.8, 0.8), this.mat.potWhite);
      trough.position.set(x, ffY + 0.4, -26.8);
      g.add(trough);

      const foliage = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.5, 0.7), this.mat.plantGreen);
      foliage.position.set(x, ffY + 0.9, -26.8);
      g.add(foliage);

      // Pink flowers
      const flowerMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.5 });
      for (let fx = -1.8; fx <= 1.8; fx += 0.9) {
        const flower = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), flowerMat);
        flower.position.set(x + fx, ffY + 1.2, -26.8);
        g.add(flower);
      }
    }

    // 7. Modern Overhead Pergola Timber Rafters (Partial Shading Over Sofa)
    for (let x = -14.0; x <= -2.0; x += 1.8) {
      const rafter = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 12.0), this.mat.teakWood);
      rafter.position.set(x, ffY + 10.0, -21.0);
      rafter.castShadow = true;
      g.add(rafter);
    }
  }

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

    // Trunk
    const trunkH = height * 0.45;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, trunkH, 8), this.mat.teakWood);
    trunk.position.set(x, y + potH + trunkH / 2, z);
    group.add(trunk);

    // Foliage (Small, domestic size ~3.5 ft)
    if (type === 'palm') {
      for (let i = 0; i < 5; i++) {
        const frond = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.8, 8), this.mat.plantGreen);
        const ang = (i / 5) * Math.PI * 2;
        frond.rotation.z = 0.55;
        frond.rotation.y = ang;
        frond.position.set(x + Math.sin(ang) * 0.4, y + potH + trunkH + 0.5, z + Math.cos(ang) * 0.4);
        group.add(frond);
      }
    } else {
      const crown = new THREE.Mesh(new THREE.DodecahedronGeometry(height * 0.4, 1), this.mat.plantGreen);
      crown.position.set(x, y + potH + trunkH + height * 0.3, z);
      crown.scale.set(1.1, 1.3, 1.1);
      group.add(crown);
    }
  }

  // ==========================================================================
  // FIRST FLOOR INTERIOR (DUPLEX, LOUNGE & REAR BEDROOMS)
  // ==========================================================================
  buildFirstFloorRemaining() {
    const ffY = 13.0;
    const floorH = 10.0;
    const f = this.firstGroup;

    // Floor Slab behind front deck (Z: -14.0 to +27.0)
    // Slab West (Master Bedroom, Passage, Rear Bed 02)
    const sWest = new THREE.Mesh(new THREE.BoxGeometry(15.0, 0.5, 41.0), this.mat.woodFloor);
    sWest.position.set(-7.5, ffY - 0.25, 6.5);
    f.add(sWest);

    // Slab East (Lounge & Study)
    const sEast = new THREE.Mesh(new THREE.BoxGeometry(13.25, 0.5, 23.5), this.mat.marbleFloor);
    sEast.position.set(6.625, ffY - 0.25, 15.25);
    f.add(sEast);

    // Duplex Glass Railing around 94.47 Sq.Ft. Cutout (Overlooking Living below)
    this.buildGlassRailing(f, 0.0, ffY, -5.5, 13.0, 3.5, 'x');
    this.buildGlassRailing(f, 0.0, ffY, 5.5, 13.0, 3.5, 'x');
    this.buildGlassRailing(f, 0.0, ffY, -5.5, 11.0, 3.5, 'z');

    // First Floor Upper Master (Bed 01)
    this.buildBedroomInterior(-8.5, ffY, 0.25, 'king');
    // Rear Bed 02
    this.buildBedroomInterior(-8.5, ffY, 19.5, 'queen');

    // Family Lounge Furniture (Overlooking internal stairs & deck)
    const lSofa = new THREE.Mesh(new THREE.BoxGeometry(7.0, 1.8, 3.0), new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 }));
    lSofa.position.set(6.5, ffY + 0.9, 10.5);
    f.add(lSofa);

    // Study Desk & Bookshelf
    const desk = new THREE.Mesh(new THREE.BoxGeometry(5.0, 2.5, 2.4), this.mat.teakWood);
    desk.position.set(9.0, ffY + 1.25, 20.0);
    f.add(desk);

    // Rear Balcony Railing (North)
    this.buildGlassRailing(f, -14.5, ffY, 26.5, 27.5, 3.5, 'x');

    // Outer Walls for First Floor Interior (Z: -14.0 to +27.0)
    this.addWall(f, -15.0, ffY, -14.0, 0.75, floorH, 41.0, this.mat.extWhite, true);
    this.addWall(f, 12.5, ffY, -14.0, 0.75, floorH, 41.0, this.mat.extWhite, true);
    this.addWall(f, -15.0, ffY, 26.25, 28.25, floorH, 0.75, this.mat.extWhite, true);
  }

  buildGlassRailing(group, x, y, z, len, h, axis = 'x') {
    const glassMat = this.mat.balustradeGlass;

    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(axis === 'x' ? len : 0.08, h - 0.4, axis === 'x' ? 0.08 : len),
      glassMat
    );
    glass.position.set(axis === 'x' ? x + len / 2 : x, y + h / 2, axis === 'x' ? z : z + len / 2);
    group.add(glass);

    // Top Handrail
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(axis === 'x' ? len : 0.25, 0.2, axis === 'x' ? 0.25 : len),
      this.mat.brassGold
    );
    rail.position.set(axis === 'x' ? x + len / 2 : x, y + h - 0.1, axis === 'x' ? z : z + len / 2);
    group.add(rail);
  }

  // ==========================================================================
  // ROOF TERRACE & HEAD ROOM (159.25 SQ.FT. SLAB)
  // Covers only the interior zone (Z: -14.0 to +27.0); Front Deck is open to sky!
  // ==========================================================================
  buildTerrace() {
    const tY = 23.5;
    const t = this.terraceGroup;

    // Roof Terrace Slab: 28'-3" × 41'-0" (Z: -14.0 to +27.0)
    this.roofSlab = new THREE.Mesh(new THREE.BoxGeometry(28.25, 0.6, 41.0), this.mat.terraceTile);
    this.roofSlab.position.set(-0.875, tY - 0.3, 6.5);
    t.add(this.roofSlab);

    // Staircase Head Room (Mumty): 13'-0" × 10'-0" (X: -15.0 to -2.0, Z: -12.0 to -2.0)
    const mumtyH = 9.5;
    this.addWall(t, -15.0, tY, -12.0, 13.0, mumtyH, 0.75, this.mat.extWhite, true);
    this.addWall(t, -15.0, tY, -2.0, 13.0, mumtyH, 0.75, this.mat.extWhite, true);
    this.addWall(t, -2.0, tY, -12.0, 0.75, mumtyH, 10.0, this.mat.extWhite, true);
    this.addDoorway(t, -2.0, tY, -7.0, 3.2, 7.0, 'z', 0.9);

    // Head Room Roof Slab (159.25 Sq.Ft.)
    this.mumtyRoof = new THREE.Mesh(new THREE.BoxGeometry(14.0, 0.5, 11.0), this.mat.extWhite);
    this.mumtyRoof.position.set(-8.5, tY + mumtyH + 0.25, -7.0);
    t.add(this.mumtyRoof);

    // Water Tank Tower (1000L Sintex on Mumty Roof)
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 4.0, 24), new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 }));
    tank.position.set(-8.5, tY + mumtyH + 2.5, -7.0);
    t.add(tank);

    // Parapet Walls (3'-6" High)
    const parH = 3.5;
    this.addWall(t, -15.0, tY, -14.0, 0.6, parH, 41.0, this.mat.extGrey, true);
    this.addWall(t, 12.65, tY, -14.0, 0.6, parH, 41.0, this.mat.extGrey, true);
    this.addWall(t, -15.0, tY, 26.4, 28.25, parH, 0.6, this.mat.extGrey, true);
    this.addWall(t, -15.0, tY, -14.0, 28.25, parH, 0.6, this.mat.extGrey, true);

    // Rooftop Pergola with Seating
    for (let p = 0; p < 5; p++) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(10.0, 0.3, 0.3), this.mat.accentTeak);
      beam.position.set(5.0, tY + 8.5, 8.0 + p * 2.2);
      t.add(beam);
    }
  }

  buildElevationFacade() {
    // Architectural Facade Louvers
    for (let i = 0; i < 7; i++) {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(0.2, 10.0, 0.4), this.mat.accentTeak);
      louver.position.set(-2.5 + i * 0.8, 18.0, -14.2);
      this.firstGroup.add(louver);
    }
  }

  buildNaturalGreenery() {
    const g = this.greeneryGroup;
    const coords = [
      { x: -14.0, y: 2.5, z: -27.5 },
      { x: 12.0, y: 2.5, z: -27.5 },
      { x: 8.0, y: 23.5, z: 12.0 }
    ];
    coords.forEach(pt => {
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.6, 1.4, 16), this.mat.darkMetal);
      pot.position.set(pt.x, pt.y + 0.7, pt.z);
      g.add(pot);

      const plant = new THREE.Mesh(new THREE.SphereGeometry(1.4, 12, 12), new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 }));
      plant.position.set(pt.x, pt.y + 2.2, pt.z);
      g.add(plant);
    });
  }

  // ==========================================================================
  // MINIMALIST 3D ROOM BADGES (REAL ESTATE LISTING STYLE)
  // ==========================================================================
  createRoomLabel(title, subtitle, x, y, z, width = 7.0, height = 2.4) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');

    // Rounded card pill
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.beginPath();
    ctx.roundRect(8, 8, 496, 144, 20);
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    // Room title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(title, 256, 52);

    // Dimensions
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 26px "JetBrains Mono", monospace';
    ctx.fillText(subtitle, 256, 108);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, y + 0.35, z);
    return mesh;
  }

  buildRoomLabels() {
    this.groundLabels = new THREE.Group();
    this.firstLabels = new THREE.Group();
    this.scene.add(this.groundLabels);
    this.scene.add(this.firstLabels);

    // Ground Floor Labels
    this.groundLabels.add(this.createRoomLabel('KIRANA GENERAL STORE', "16'-0\" × 12'-6\"", -7.0, 2.5, -18.25));
    this.groundLabels.add(this.createRoomLabel('CAR PARKING & PORTICO', "12'-3\" × 21'-6\"", 7.125, 0.25, -22.75));
    this.groundLabels.add(this.createRoomLabel('ENTRANCE LOBBY', "12'-3\" × 6'-6\"", 7.125, 2.5, -8.75));
    this.groundLabels.add(this.createRoomLabel('LIVING ROOM HALL', "13'-5\" × 15'-8\"", 6.5, 2.5, 2.35));
    this.groundLabels.add(this.createRoomLabel('PUJA MANDIR', "6'-0\" × 5'-0\"", 10.25, 2.5, 7.7, 5.2, 1.8));
    this.groundLabels.add(this.createRoomLabel('DINING HALL', "14'-0\" × 8'-8\"", 6.25, 2.5, 14.55));
    this.groundLabels.add(this.createRoomLabel('TRADITIONAL KITCHEN', "12'-0\" × 9'-0\"", -6.75, 2.5, 19.25));
    this.groundLabels.add(this.createRoomLabel('MASTER BEDROOM', "13'-0\" × 11'-6\"", -8.5, 2.5, 0.25));
    this.groundLabels.add(this.createRoomLabel('ATTACHED BATH', "4'-6\" × 8'-9\"", -12.75, 2.5, 10.375, 5.0, 1.8));
    this.groundLabels.add(this.createRoomLabel('DUPLEX STAIRS', "UP TO 1ST FLOOR", -5.375, 2.5, 10.375, 5.2, 1.8));
    this.groundLabels.add(this.createRoomLabel('REAR UTILITY', "5'-0\" WIDE", 0.0, 2.5, 24.5, 5.5, 1.8));

    // First Floor Labels (Featuring the open Sky Garden Balcony Deck)
    this.firstLabels.add(this.createRoomLabel('SKY GARDEN BALCONY DECK', "28'-3\" × 13'-6\" (380 Sq.Ft.)", -0.875, 13.0, -20.5, 9.0, 2.5));
    this.firstLabels.add(this.createRoomLabel('DUPLEX VOID CUTOUT', "94.47 SQ.FT. OPEN", 6.5, 13.0, 2.35));
    this.firstLabels.add(this.createRoomLabel('UPPER MASTER SUITE', "13'-0\" × 11'-6\"", -8.5, 13.0, 0.25));
    this.firstLabels.add(this.createRoomLabel('WALK-IN CLOSET', "4'-6\" × 4'-6\"", -12.75, 13.0, 4.5, 5.0, 1.8));
    this.firstLabels.add(this.createRoomLabel('FAMILY LOUNGE', "13'-0\" × 9'-6\"", 6.5, 13.0, 10.5));
    this.firstLabels.add(this.createRoomLabel('BEDROOM 02 (REAR)', "12'-6\" × 9'-0\"", -8.5, 13.0, 19.5));
    this.firstLabels.add(this.createRoomLabel('STUDY / OFFICE', "9'-0\" × 9'-4\"", 8.5, 13.0, 19.5));
    this.firstLabels.add(this.createRoomLabel('REAR BALCONY', "4'-0\" WIDE", 0.0, 13.0, 26.5));

    this.groundLabels.visible = true;
    this.firstLabels.visible = false;
  }

  // ==========================================================================
  // INTERACTIVE FLOOR HOTSPOTS (CLICK TO WALK)
  // ==========================================================================
  buildFloorHotspots() {
    this.hotspotMeshes = [];
    const ringGeo = new THREE.RingGeometry(0.8, 1.2, 32);
    ringGeo.rotateX(-Math.PI / 2);

    Object.keys(POV_DATA).forEach(key => {
      const data = POV_DATA[key];
      if (key === 'aerial-duplex' || key === 'south-facade') return;

      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(data.camPos.x, data.camPos.y - 4.5, data.camPos.z);
      ring.userData = { isHotspot: true, povKey: key };

      this.hotspotGroup.add(ring);
      this.hotspotMeshes.push(ring);
    });
  }

  // ==========================================================================
  // VIEWPOINT SWITCHING & CAMERA ANIMATION
  // ==========================================================================
  switchToPOV(povKey) {
    const data = POV_DATA[povKey];
    if (!data) return;

    this.currentPOVKey = povKey;

    // Update active state in room selector sidebar
    document.querySelectorAll('.room-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-pov') === povKey);
    });

    // Update HUD
    const hudRoom = document.getElementById('hud-current-room');
    if (hudRoom) hudRoom.textContent = data.name;

    // Update Floor Visibility based on POV level
    if (data.floorLevel === 'ground') {
      this.setMode('ground', false);
    } else if (data.floorLevel === 'first') {
      this.setMode('first', false);
    } else if (data.floorLevel === 'terrace') {
      this.setMode('terrace', false);
    }

    // Camera Smooth Transition with TWEEN
    new TWEEN.Tween(this.camera.position)
      .to({ x: data.camPos.x, y: data.camPos.y, z: data.camPos.z }, 900)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    new TWEEN.Tween(this.controls.target)
      .to({ x: data.camLook.x, y: data.camLook.y, z: data.camLook.z }, 900)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    this.updateMiniMap(data);
    this.displayRoomCard(data);

    // Auto-close mobile drawer on selection
    const sidebar = document.getElementById('left-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (window.innerWidth <= 960 && sidebar) {
      sidebar.classList.remove('open');
      backdrop?.classList.remove('active');
    }
  }

  nextPOV() {
    const keys = Object.keys(POV_DATA);
    const idx = keys.indexOf(this.currentPOVKey);
    const nextKey = keys[(idx + 1) % keys.length];
    this.switchToPOV(nextKey);
  }

  // ==========================================================================
  // 2D MINI-MAP DRAWING (MATCHING RAMNAGAR PLAN)
  // ==========================================================================
  updateMiniMap(pov) {
    const canvas = document.getElementById('minimap-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // Draw Plot Boundary (33' × 60')
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(15, 20, 130, 160);

    // Draw Rooms (Ramnagar Plan layout)
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;

    // Commercial Shutter (South-West)
    ctx.fillRect(15, 120, 65, 45);
    ctx.strokeRect(15, 120, 65, 45);

    // Car Parking (South-East)
    ctx.fillRect(80, 110, 65, 55);
    ctx.strokeRect(80, 110, 65, 55);

    // Living Room (Center East)
    ctx.fillRect(70, 65, 75, 45);
    ctx.strokeRect(70, 65, 75, 45);

    // Master Bedroom (Center West)
    ctx.fillRect(15, 65, 55, 40);
    ctx.strokeRect(15, 65, 55, 40);

    // Dining (Rear East)
    ctx.fillRect(70, 30, 75, 35);
    ctx.strokeRect(70, 30, 75, 35);

    // Kitchen (Rear West)
    ctx.fillRect(15, 30, 55, 35);
    ctx.strokeRect(15, 30, 55, 35);

    // Draw Player Dot & View Cone
    if (pov && pov.mapX !== undefined && pov.mapY !== undefined) {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(pov.mapX, pov.mapY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pov.mapX, pov.mapY, 8.0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // ==========================================================================
  // KEYBOARD & TOUCH NAVIGATION CONTROLS
  // ==========================================================================
  setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (k === 'w' || k === 'arrowup') this.moveState.fwd = true;
      if (k === 's' || k === 'arrowdown') this.moveState.bwd = true;
      if (k === 'a' || k === 'arrowleft') this.moveState.left = true;
      if (k === 'd' || k === 'arrowright') this.moveState.right = true;
      if (k === 'q') this.moveState.turnL = true;
      if (k === 'e') this.moveState.turnR = true;
      if (e.shiftKey) this.isSprinting = true;
    });

    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase();
      if (k === 'w' || k === 'arrowup') this.moveState.fwd = false;
      if (k === 's' || k === 'arrowdown') this.moveState.bwd = false;
      if (k === 'a' || k === 'arrowleft') this.moveState.left = false;
      if (k === 'd' || k === 'arrowright') this.moveState.right = false;
      if (k === 'q') this.moveState.turnL = false;
      if (k === 'e') this.moveState.turnR = false;
      if (!e.shiftKey) this.isSprinting = false;
    });
  }

  bindContinuousNav(btnId, actionFn) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    let active = false;
    let timer = null;

    const start = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (active) return;
      active = true;
      actionFn();
      timer = setInterval(actionFn, 60);
    };

    const stop = (e) => {
      if (!active) return;
      active = false;
      if (timer) clearInterval(timer);
    };

    btn.addEventListener('pointerdown', start);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
  }

  step(direction) {
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(forward, this.camera.up).normalize();

    const speed = (this.isSprinting ? 2.2 : 1.0) * 0.9;
    const move = new THREE.Vector3();

    if (direction === 'fwd') move.addScaledVector(forward, speed);
    if (direction === 'bwd') move.addScaledVector(forward, -speed);
    if (direction === 'left') move.addScaledVector(right, -speed);
    if (direction === 'right') move.addScaledVector(right, speed);

    this.camera.position.add(move);
    this.controls.target.add(move);
  }

  turn(angleRad) {
    const offset = new THREE.Vector3().subVectors(this.controls.target, this.camera.position);
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angleRad);
    this.controls.target.copy(this.camera.position).add(offset);
  }

  // ==========================================================================
  // UI & BUTTON BINDINGS (DESKTOP & MOBILE)
  // ==========================================================================
  setupUI() {
    // 1. Mobile Menu Drawer Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('left-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const closeBtn = document.getElementById('sidebar-close-btn');

    const openDrawer = () => {
      sidebar?.classList.add('open');
      backdrop?.classList.add('active');
    };
    const closeDrawer = () => {
      sidebar?.classList.remove('open');
      backdrop?.classList.remove('active');
    };

    mobileBtn?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer);

    // 2. Room Navigation Buttons
    document.querySelectorAll('.room-nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const povKey = btn.getAttribute('data-pov');
        this.switchToPOV(povKey);
      });
    });

    // 3. View Tabs (Floor Modes)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        this.setMode(mode, true);
      });
    });

    // 4. Lighting Modes
    document.getElementById('btn-listing')?.addEventListener('click', () => this.setLightingMode('listing'));
    document.getElementById('btn-day')?.addEventListener('click', () => this.setLightingMode('day'));
    document.getElementById('btn-sunset')?.addEventListener('click', () => this.setLightingMode('sunset'));
    document.getElementById('btn-night')?.addEventListener('click', () => this.setLightingMode('night'));

    // 5. Continuous D-Pad Touch Navigation
    this.bindContinuousNav('nav-step-fwd', () => this.step('fwd'));
    this.bindContinuousNav('nav-step-back', () => this.step('bwd'));
    this.bindContinuousNav('nav-step-left', () => this.step('left'));
    this.bindContinuousNav('nav-step-right', () => this.step('right'));
    document.getElementById('nav-next-pov')?.addEventListener('click', () => this.nextPOV());

    // 6. Mobile Quick Turn & Sprint Buttons
    this.bindContinuousNav('btn-turn-left', () => this.turn(0.08));
    this.bindContinuousNav('btn-turn-right', () => this.turn(-0.08));
    const sprintBtn = document.getElementById('btn-sprint-toggle');
    sprintBtn?.addEventListener('click', () => {
      this.isSprinting = !this.isSprinting;
      sprintBtn.classList.toggle('active', this.isSprinting);
    });

    // 7. Visual Options Toggles
    document.getElementById('toggle-roof')?.addEventListener('change', (e) => {
      this.terraceGroup.visible = e.target.checked;
    });
    document.getElementById('toggle-labels')?.addEventListener('change', (e) => {
      this.showLabels = e.target.checked;
      if (this.currentMode === 'ground' || this.currentMode === 'top2d') {
        this.groundLabels.visible = this.showLabels;
      } else if (this.currentMode === 'first') {
        this.firstLabels.visible = this.showLabels;
      }
    });
    document.getElementById('toggle-greenery')?.addEventListener('change', (e) => {
      this.greeneryGroup.visible = e.target.checked;
    });
    document.getElementById('toggle-hotspots')?.addEventListener('change', (e) => {
      this.hotspotGroup.visible = e.target.checked;
    });
    document.getElementById('toggle-furniture')?.addEventListener('change', (e) => {
      this.furnitureGroup.visible = e.target.checked;
      this.skyGardenGroup.visible = e.target.checked;
    });
    document.getElementById('toggle-walls-transparent')?.addEventListener('change', (e) => {
      const transparent = e.target.checked;
      this.allWalls.forEach(wall => {
        if (transparent) {
          wall.material = this.mat.glass;
        } else {
          wall.material = wall.userData.origMat;
        }
      });
    });
    document.getElementById('toggle-auto-rotate')?.addEventListener('change', (e) => {
      this.controls.autoRotate = e.target.checked;
      this.controls.autoRotateSpeed = 0.8;
    });

    // 8. Exit FPS Button
    document.getElementById('exit-fps-btn')?.addEventListener('click', () => {
      this.toggleFPSMode(false);
    });

    // 9. Close Room Details Card
    document.getElementById('close-card-btn')?.addEventListener('click', () => {
      document.getElementById('room-card')?.classList.add('hidden');
    });
    document.getElementById('card-teleport-btn')?.addEventListener('click', () => {
      this.switchToPOV(this.currentPOVKey);
    });
  }

  // ==========================================================================
  // FLOOR MODE SWITCHER (ELEVATED 3D DOLLHOUSE & 2D TOP VIEW)
  // ==========================================================================
  setMode(mode, updateCam = true) {
    this.currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    if (mode === 'fps') {
      this.toggleFPSMode(true);
      return;
    } else {
      this.toggleFPSMode(false);
    }

    if (mode === 'full') {
      // Full exterior villa 3D
      this.groundGroup.visible = true;
      this.skyGardenGroup.visible = true;
      this.firstGroup.visible = true;
      this.terraceGroup.visible = true;
      this.boundaryGroup.visible = true;
      this.groundLabels.visible = false;
      this.firstLabels.visible = false;
      if (updateCam) {
        new TWEEN.Tween(this.camera.position).to({ x: 26.0, y: 30.0, z: -40.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(this.controls.target).to({ x: 0.0, y: 10.0, z: 0.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
      }
    } else if (mode === 'ground') {
      // 3D Ground Plan Dollhouse View (Apartment Listing Style: 55° Angle, Unobstructed)
      this.groundGroup.visible = true;
      this.skyGardenGroup.visible = false;
      this.firstGroup.visible = false;
      this.terraceGroup.visible = false;
      this.boundaryGroup.visible = false; // Hide tall boundary walls for clean presentation!
      this.groundLabels.visible = this.showLabels;
      this.firstLabels.visible = false;
      if (updateCam) {
        new TWEEN.Tween(this.camera.position).to({ x: 0.0, y: 38.0, z: -26.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(this.controls.target).to({ x: -0.875, y: 2.5, z: 2.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
      }
    } else if (mode === 'first') {
      // 3D First Floor Duplex Cutaway (Showcases Open Front Sky Garden Deck & Duplex Void)
      this.groundGroup.visible = true;
      this.skyGardenGroup.visible = true;
      this.firstGroup.visible = true;
      this.terraceGroup.visible = false;
      this.boundaryGroup.visible = false;
      this.groundLabels.visible = false;
      this.firstLabels.visible = this.showLabels;
      if (updateCam) {
        new TWEEN.Tween(this.camera.position).to({ x: 0.0, y: 44.0, z: -24.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(this.controls.target).to({ x: -0.875, y: 13.0, z: 2.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
      }
    } else if (mode === 'top2d') {
      // Pure 2D Architectural Plan Top-Down View (Marketing Brochure Style)
      this.groundGroup.visible = true;
      this.skyGardenGroup.visible = false;
      this.firstGroup.visible = false;
      this.terraceGroup.visible = false;
      this.boundaryGroup.visible = false;
      this.groundLabels.visible = this.showLabels;
      this.firstLabels.visible = false;
      if (updateCam) {
        new TWEEN.Tween(this.camera.position).to({ x: -0.875, y: 56.0, z: 1.25 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(this.controls.target).to({ x: -0.875, y: 2.5, z: 1.25 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
      }
    } else if (mode === 'terrace') {
      // Roof Terrace Level
      this.groundGroup.visible = true;
      this.skyGardenGroup.visible = true;
      this.firstGroup.visible = true;
      this.terraceGroup.visible = true;
      this.boundaryGroup.visible = true;
      this.groundLabels.visible = false;
      this.firstLabels.visible = false;
      if (updateCam) {
        new TWEEN.Tween(this.camera.position).to({ x: 14.0, y: 36.0, z: 20.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
        new TWEEN.Tween(this.controls.target).to({ x: 0.0, y: 24.0, z: 0.0 }, 900).easing(TWEEN.Easing.Cubic.Out).start();
      }
    }
  }

  toggleFPSMode(enable) {
    this.isFPS = enable;
    const hud = document.getElementById('fps-hud');
    if (enable) {
      hud?.classList.remove('hidden');
      document.body.classList.add('walk-mode');
      const pov = POV_DATA[this.currentPOVKey];
      if (pov) {
        this.camera.position.set(pov.camPos.x, pov.camPos.y, pov.camPos.z);
        this.controls.target.set(pov.camLook.x, pov.camLook.y, pov.camLook.z);
      }
    } else {
      hud?.classList.add('hidden');
      document.body.classList.remove('walk-mode');
    }
  }

  displayRoomCard(data) {
    const card = document.getElementById('room-card');
    if (!card) return;
    card.classList.remove('hidden');
    document.getElementById('card-floor-badge').textContent = data.floor;
    document.getElementById('card-room-title').textContent = data.name;
    document.getElementById('card-dimensions').textContent = data.dims;
    document.getElementById('card-area').textContent = data.area;
    document.getElementById('card-vastu').textContent = data.vastu;
    document.getElementById('card-description').textContent = data.desc;
  }

  onMouseMove(e) {
    // Hover interactions if needed
  }

  onClick(e) {
    // Raycast on hotspots
    const mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    const hits = raycaster.intersectObjects(this.hotspotMeshes || []);
    if (hits.length > 0) {
      const hit = hits[0].object;
      if (hit.userData && hit.userData.povKey) {
        this.switchToPOV(hit.userData.povKey);
      }
    }
  }

  updateCompass() {
    const needle = document.getElementById('compass-needle');
    if (!needle) return;
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    const angle = Math.atan2(dir.x, -dir.z);
    needle.style.transform = `rotate(${angle}rad)`;
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    TWEEN.update();

    const dt = this.clock.getDelta();

    // Continuous keyboard motion
    if (this.moveState.fwd) this.step('fwd');
    if (this.moveState.bwd) this.step('bwd');
    if (this.moveState.left) this.step('left');
    if (this.moveState.right) this.step('right');
    if (this.moveState.turnL) this.turn(0.04);
    if (this.moveState.turnR) this.turn(-0.04);

    this.controls.update();
    this.updateCompass();
    this.renderer.render(this.scene, this.camera);
  }
}

// Instantiate App when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.viewerApp = new HouseViewerApp();
});
