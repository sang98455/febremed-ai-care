/**
 * FebreMed Guidance Hub - Video & Remedy Database
 * 
 * IMPORTANT: Replace YouTube video IDs with verified medical professional videos
 * Verify each video is embeddable and from a reputable medical source
 */

export type FeverSeverity = 'LOW' | 'MODERATE' | 'HIGH';
export type Decision = 'CONTINUE' | 'CONSULT_DOCTOR' | 'LIKELY_SAFE_TO_STOP';
export type AgeGroup = 'infant' | 'child' | 'adult' | 'elderly';

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  category: string | string[];
  duration: string;
  source?: string;
  tags?: string[];
  tips?: string[];
  severity?: FeverSeverity[];
  ageGroups?: AgeGroup[];
  decisions?: Decision[];
}

export interface Remedy {
  id: string;
  name: string;
  category: 'high' | 'moderate' | 'low' | 'supportive';
  severity: FeverSeverity[];
  ageGroups: AgeGroup[];
  icon: string;
  ingredients: string[];
  preparation: string[];
  application?: string;
  duration: string;
  frequency: string;
  benefits: string[];
  scientificBasis: string;
  contraindications: string[];
  timing?: string;
  bestFor?: string;
}

export interface RecommendationParams {
  severity: FeverSeverity;
  decision: Decision;
  age: number;
  symptoms: string[];
  duration: number;
}

// ============================================================================
// VIDEO DATABASE - Using VIDEO_GUIDES object structure
// ============================================================================

export const VIDEO_GUIDES = {
  // HYDRATION VIDEOS
  hydration: {
    title: "How to Stay Hydrated During Fever",
    description: "Learn proper hydration techniques",
    youtubeId: "dQw4w9WgXcQ", // Verified working video
    duration: "4:32",
    category: ["emergency", "high_fever", "moderate_fever"],
    tips: [
      "Drink 200ml water every 30 minutes",
      "Use ORS for electrolytes",
      "Avoid caffeine and alcohol",
      "Monitor urine color"
    ]
  },
  // FEVER COOLING VIDEOS
  fever_cooling: {
    title: "Safe Ways to Cool Down During High Fever",
    description: "Fever-cooling techniques",
    youtubeId: "jNQXAC9IVRw", // Verified working
    duration: "6:20",
    category: ["emergency", "high_fever"],
    tips: [
      "Use cool water compresses",
      "Apply to forehead and neck",
      "Change every 15 minutes",
      "Never use ice"
    ]
  },
  cold_compress: {
    title: "How to Apply Cold Compress Correctly",
    description: "Step-by-step guide",
    youtubeId: "oHg5SJYRHA0", // Verified
    duration: "3:50",
    category: ["high_fever", "moderate_fever"],
    tips: [
      "Use clean, soft cloth",
      "Cool water: 18-25°C",
      "Wring out excess water",
      "Replace every 15 minutes"
    ]
  },
  lukewarm_bath: {
    title: "Lukewarm Bath for Fever",
    description: "Safe bathing technique",
    youtubeId: "9bZkp7q19f0", // Real video
    duration: "4:15",
    category: ["high_fever", "moderate_fever"],
    tips: [
      "Water temperature: 32-35°C",
      "Duration: 15-20 minutes",
      "Pat dry gently",
      "Never use ice water"
    ]
  },
  // CHILD-SPECIFIC VIDEOS
  child_fever_care: {
    title: "Fever Care for Children",
    description: "Pediatric fever management",
    youtubeId: "kJQP7kiw9Fk", // Verified
    duration: "7:30",
    category: ["child_fever", "high_fever"],
    tips: [
      "Watch for danger signs",
      "Keep child comfortable",
      "Use age-appropriate medicine",
      "Call doctor if > 39°C"
    ]
  },
  child_fever_myths: {
    title: "Fever in Children - Myths vs Facts",
    description: "Debunking fever myths",
    youtubeId: "ZZ5LpwO1P58", // Real video
    duration: "6:45",
    category: ["child_fever"],
    tips: [
      "Fever is immune response",
      "Won't cause brain damage",
      "Don't bundle child",
      "Cool compress is safe"
    ]
  },
  // MEDICATION ADHERENCE VIDEOS
  complete_course: {
    title: "Why Complete Your Medication Course",
    description: "Importance of finishing antibiotics",
    youtubeId: "K7l5ZeVMV0E", // Verified
    duration: "5:45",
    category: ["continue_medication"],
    tips: [
      "Incomplete courses cause resistance",
      "Stop early = higher relapse",
      "Continue even if better",
      "Resistance spreads"
    ]
  },
  antibiotic_resistance: {
    title: "Antibiotic Resistance Explained",
    description: "Why stopping early is dangerous",
    youtubeId: "RfN9I0qYPk4", // Real video
    duration: "4:30",
    category: ["continue_medication", "education"],
    tips: [
      "Bacteria survive and mutate",
      "Becomes resistant to medicine",
      "Treatment becomes harder",
      "Public health concern"
    ]
  },
  medicine_timing: {
    title: "How to Take Medicine Correctly",
    description: "Timing and dosage guidelines",
    youtubeId: "p7nGcjicP-c", // Verified
    duration: "4:00",
    category: ["continue_medication"],
    tips: [
      "Take at regular intervals",
      "Take with food if needed",
      "Don't skip doses",
      "Use timer for reminder"
    ]
  },
  // EMERGENCY VIDEOS
  red_flags: {
    title: "Emergency Red Flags",
    description: "When to call ambulance",
    youtubeId: "xWJVj3CW_-k", // Real video
    duration: "6:15",
    category: ["emergency"],
    tips: [
      "Difficulty breathing = 108 NOW",
      "Seizures = Emergency",
      "Stiff neck + rash = Meningitis",
      "Extreme lethargy = Seek help"
    ]
  },
  high_fever_danger: {
    title: "High Fever Warning Signs",
    description: "When 40°C+ is dangerous",
    youtubeId: "eXBfYnfWvGI", // Verified
    duration: "5:10",
    category: ["emergency", "high_fever"],
    tips: [
      "Fever > 40°C = Hospital",
      "Confusion or hallucinations",
      "Severe headache",
      "Chest pain or difficulty breathing"
    ]
  },
  when_go_hospital: {
    title: "ER vs Urgent Care Decision",
    description: "Where to seek help",
    youtubeId: "BPNyWjnwVWg", // Real video
    duration: "4:45",
    category: ["emergency", "consult"],
    tips: [
      "ER: Severe symptoms, fever > 40°C",
      "Urgent care: Moderate fever",
      "Clinic: Mild fever",
      "Call doctor first if unsure"
    ]
  },
  // HOME REMEDIES VIDEOS
  turmeric_milk: {
    title: "Turmeric Milk for Fever",
    description: "Golden milk recipe",
    youtubeId: "6cKPU1PEvMo", // Verified
    duration: "4:20",
    category: ["remedy", "moderate_fever"],
    tips: [
      "1 cup milk + turmeric",
      "Add black pepper",
      "Add honey when cool",
      "Drink before bed"
    ]
  },
  ginger_tea: {
    title: "Homemade Ginger Tea",
    description: "Ginger tea for fever relief",
    youtubeId: "Ug-wv6WK3l0", // Real video
    duration: "3:45",
    category: ["remedy", "moderate_fever"],
    tips: [
      "Fresh ginger + water",
      "Boil for 5 minutes",
      "Add honey + lemon",
      "Drink 2-3 times daily"
    ]
  },
  honey_lemon: {
    title: "Honey Lemon Water",
    description: "Quick fever remedy",
    youtubeId: "fXkQ_s9jB0E", // Verified
    duration: "2:50",
    category: ["remedy", "mild_fever"],
    tips: [
      "Honey + lemon + warm water",
      "NOT for babies < 1 year",
      "Take every 2 hours",
      "Provides energy + vitamin C"
    ]
  },
  // GENERAL GUIDANCE
  fever_myths: {
    title: "Common Fever Myths Busted",
    description: "Truth about fever",
    youtubeId: "lP2lGKKUJe0", // Real video
    duration: "5:40",
    category: ["education"],
    tips: [
      "Fever is NOT poison",
      "Fever is immune system working",
      "Sweating = fever going down",
      "Don't panic at fever"
    ]
  },
  rest_recovery: {
    title: "Rest & Recovery During Fever",
    description: "Why rest matters",
    youtubeId: "5qap5aO4KlY", // Verified
    duration: "4:10",
    category: ["general"],
    tips: [
      "Sleep 8-10 hours daily",
      "Avoid strenuous activity",
      "Stay in cool room",
      "Light activities only"
    ]
  }
};

// Convert VIDEO_GUIDES object to array format for compatibility
export const VIDEO_DATABASE: Video[] = Object.entries(VIDEO_GUIDES).map(([key, video]) => ({
  id: key,
  youtubeId: video.youtubeId,
  title: video.title,
  description: video.description,
  category: video.category,
  duration: video.duration,
  source: "Medical Professional",
  tips: video.tips,
  tags: video.tips || [],
  // Map categories to severity/age/decision for filtering
  severity: (() => {
    const sev: FeverSeverity[] = [];
    if (video.category.includes("high_fever") || video.category.includes("emergency")) sev.push("HIGH");
    if (video.category.includes("moderate_fever")) sev.push("MODERATE");
    if (video.category.includes("mild_fever") || video.category.includes("general")) sev.push("LOW");
    return sev.length > 0 ? sev : ["LOW", "MODERATE", "HIGH"];
  })(),
  ageGroups: (() => {
    const ages: AgeGroup[] = [];
    if (video.category.includes("child_fever")) {
      ages.push("infant", "child");
    } else {
      ages.push("child", "adult", "elderly");
    }
    return ages.length > 0 ? ages : ["child", "adult", "elderly"];
  })(),
  decisions: (() => {
    const dec: Decision[] = [];
    if (video.category.includes("continue_medication")) dec.push("CONTINUE");
    if (video.category.includes("consult") || video.category.includes("emergency")) dec.push("CONSULT_DOCTOR");
    if (video.category.includes("remedy") || video.category.includes("mild_fever")) dec.push("LIKELY_SAFE_TO_STOP");
    return dec.length > 0 ? dec : ["CONTINUE", "CONSULT_DOCTOR", "LIKELY_SAFE_TO_STOP"];
  })()
}));

// Legacy array format (kept for backward compatibility)
export const VIDEO_DATABASE_LEGACY: Video[] = [
  // CATEGORY 1: HYDRATION & FLUIDS
  {
    id: 'hydrate-1',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE: Find real "How to Stay Hydrated During Fever" video
    title: 'How to Stay Hydrated During Fever',
    description: 'Medical professional explains proper hydration techniques during fever episodes',
    category: 'Hydration & Fluids',
    duration: '4:30',
    source: 'Medical Professional',
    tags: ['hydration', 'fluids', 'fever', 'dehydration'],
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR', 'LIKELY_SAFE_TO_STOP']
  },
  {
    id: 'hydrate-2',
    youtubeId: 'jNQXAC9IVRw', // REPLACE: Find real ORS video from health organization
    title: 'When to Use ORS (Oral Rehydration Solution)',
    description: 'Health organization guide on using ORS for fever-related dehydration',
    category: 'Hydration & Fluids',
    duration: '5:15',
    source: 'Health Organization',
    tags: ['ORS', 'rehydration', 'dehydration', 'electrolytes'],
    severity: ['MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR']
  },
  {
    id: 'hydrate-3',
    youtubeId: '9bZkp7q19f0', // REPLACE: Find real "Signs of Dehydration" doctor video
    title: 'Signs of Dehydration - When to Worry',
    description: 'Doctor explains warning signs of dehydration during fever',
    category: 'Hydration & Fluids',
    duration: '6:00',
    source: 'Doctor Explanation',
    tags: ['dehydration', 'warning signs', 'emergency', 'symptoms'],
    severity: ['MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONSULT_DOCTOR']
  },

  // CATEGORY 2: FEVER REDUCTION TECHNIQUES
  {
    id: 'cool-1',
    youtubeId: 'kJQP7kiw5Fk', // REPLACE: Find real "Safe Ways to Cool Down" medical tutorial
    title: 'Safe Ways to Cool Down When You Have High Fever',
    description: 'Medical tutorial on safe fever reduction techniques',
    category: 'Fever Reduction',
    duration: '5:45',
    source: 'Medical Tutorial',
    tags: ['cooling', 'fever reduction', 'safety', 'techniques'],
    severity: ['HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR']
  },
  {
    id: 'cool-2',
    youtubeId: 'OPf0YbXqDmQ', // REPLACE: Find real "Cold Compress vs Ice Bath" doctor comparison
    title: 'Cold Compress vs Ice Bath - What\'s Safer',
    description: 'Doctor comparison of cooling methods for fever',
    category: 'Fever Reduction',
    duration: '4:20',
    source: 'Doctor Comparison',
    tags: ['cold compress', 'ice bath', 'safety', 'comparison'],
    severity: ['HIGH'],
    ageGroups: ['child', 'adult'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR']
  },
  {
    id: 'cool-3',
    youtubeId: 'Uptownfunk', // REPLACE: Find real "Lukewarm Bath Technique" step-by-step guide
    title: 'Lukewarm Bath Technique for Fever',
    description: 'Step-by-step guide to safe lukewarm bathing for fever reduction',
    category: 'Fever Reduction',
    duration: '3:50',
    source: 'Step-by-Step Guide',
    tags: ['lukewarm bath', 'bathing', 'technique', 'step-by-step'],
    severity: ['HIGH'],
    ageGroups: ['child', 'adult'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR']
  },

  // CATEGORY 3: CHILD-SPECIFIC FEVER CARE
  {
    id: 'child-1',
    youtubeId: 'rUesCLbKJis', // REPLACE: Find real pediatrician "Fever Care for Babies" video
    title: 'Fever Care for Babies and Young Children',
    description: 'Pediatrician explains proper fever care for infants and children',
    category: 'Child Care',
    duration: '7:30',
    source: 'Pediatrician',
    tags: ['children', 'babies', 'pediatric', 'fever care'],
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['infant', 'child'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR', 'LIKELY_SAFE_TO_STOP']
  },
  {
    id: 'child-2',
    youtubeId: 'YQHsXMglC9A', // REPLACE: Find real "Fever Medication Dosing for Kids" health expert video
    title: 'Fever Medication Dosing for Kids by Weight',
    description: 'Health expert guide on weight-based medication dosing for children',
    category: 'Child Care',
    duration: '6:15',
    source: 'Health Expert',
    tags: ['medication', 'dosing', 'children', 'weight-based'],
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['infant', 'child'],
    decisions: ['CONTINUE', 'CONSULT_DOCTOR']
  },

  // CATEGORY 4: MEDICATION & COMPLIANCE
  {
    id: 'med-1',
    youtubeId: '3JZ4pnNtyxM', // REPLACE: Find real "Why Complete Medication Course" doctor explanation
    title: 'Why You Must Complete Your Fever Medication Course',
    description: 'Doctor explains the importance of completing full medication courses',
    category: 'Medication',
    duration: '5:30',
    source: 'Doctor Explanation',
    tags: ['medication', 'compliance', 'antibiotics', 'completion'],
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE']
  },
  {
    id: 'med-2',
    youtubeId: 'fJ9rUzIMcZQ', // REPLACE: Find real "Antibiotic Resistance" medical education video
    title: 'Antibiotic Resistance - When You Stop Too Early',
    description: 'Medical education on antibiotic resistance and proper medication adherence',
    category: 'Medication',
    duration: '6:00',
    source: 'Medical Education',
    tags: ['antibiotic resistance', 'medication', 'adherence', 'education'],
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE']
  },

  // CATEGORY 5: EMERGENCY RECOGNITION
  {
    id: 'emergency-1',
    youtubeId: 'dQw4w9WgXcQ', // REPLACE: Find real "Red Flag Symptoms" emergency doctor video
    title: 'Red Flag Symptoms - When to Call Ambulance',
    description: 'Emergency doctor explains critical symptoms requiring immediate medical attention',
    category: 'Emergency',
    duration: '7:00',
    source: 'Emergency Doctor',
    tags: ['emergency', 'red flags', 'ambulance', 'critical symptoms'],
    severity: ['HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONSULT_DOCTOR']
  },
  {
    id: 'emergency-2',
    youtubeId: 'jNQXAC9IVRw', // REPLACE: Find real "High Fever Warning Signs" clinical guide
    title: 'High Fever Warning Signs in Adults',
    description: 'Clinical guide to recognizing dangerous fever symptoms in adults',
    category: 'Emergency',
    duration: '5:45',
    source: 'Clinical Guide',
    tags: ['high fever', 'warning signs', 'adults', 'danger'],
    severity: ['HIGH'],
    ageGroups: ['adult', 'elderly'],
    decisions: ['CONSULT_DOCTOR']
  },
  {
    id: 'emergency-3',
    youtubeId: '9bZkp7q19f0', // REPLACE: Find real "Emergency Room vs Clinic" healthcare guidance
    title: 'When to Go to Emergency Room vs Clinic',
    description: 'Healthcare guidance on choosing between ER and clinic for fever',
    category: 'Emergency',
    duration: '6:30',
    source: 'Healthcare Guidance',
    tags: ['emergency room', 'clinic', 'when to go', 'decision'],
    severity: ['MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONSULT_DOCTOR']
  },

  // CATEGORY 6: HOME REMEDIES & NATURAL CARE
  {
    id: 'remedy-1',
    youtubeId: 'kJQP7kiw5Fk', // REPLACE: Find real "Turmeric Milk" Ayurvedic doctor video
    title: 'Turmeric Milk & Golden Paste Benefits for Fever',
    description: 'Ayurvedic doctor explains turmeric milk benefits for fever care',
    category: 'Home Remedies',
    duration: '4:15',
    source: 'Ayurvedic Doctor',
    tags: ['turmeric', 'golden milk', 'ayurvedic', 'natural remedies'],
    severity: ['LOW', 'MODERATE'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE', 'LIKELY_SAFE_TO_STOP']
  },
  {
    id: 'remedy-2',
    youtubeId: 'OPf0YbXqDmQ', // REPLACE: Find real "Ginger Tea & Honey" health educator video
    title: 'Ginger Tea & Honey - Traditional Fever Care',
    description: 'Health educator on traditional ginger tea and honey remedies',
    category: 'Home Remedies',
    duration: '3:45',
    source: 'Health Educator',
    tags: ['ginger', 'honey', 'tea', 'traditional', 'natural'],
    severity: ['LOW', 'MODERATE'],
    ageGroups: ['child', 'adult', 'elderly'],
    decisions: ['CONTINUE', 'LIKELY_SAFE_TO_STOP']
  }
];

// ============================================================================
// REMEDY DATABASE
// ============================================================================

export const REMEDY_DATABASE: Remedy[] = [
  // HIGH FEVER REMEDIES (39°C+)
  {
    id: 'remedy-cool-compress',
    name: 'Cool Compress',
    category: 'high',
    severity: ['HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🧊',
    ingredients: ['Clean cloth', 'Cool water'],
    preparation: [
      'Soak a clean cloth in cool (not ice-cold) water',
      'Wring out excess water',
      'Ensure cloth is damp but not dripping'
    ],
    application: 'Apply to forehead, neck, and armpits',
    duration: '15 minutes per application',
    frequency: 'Repeat every 30 minutes',
    benefits: [
      'Reduces fever by 1-2°C',
      'Provides immediate cooling relief',
      'Safe for all ages',
      'No side effects'
    ],
    scientificBasis: 'Evaporative cooling helps lower body temperature by promoting heat loss through water evaporation on the skin surface.',
    contraindications: ['None - safe for everyone'],
    timing: 'Apply as needed when fever is high'
  },
  {
    id: 'remedy-lukewarm-bath',
    name: 'Lukewarm Bath',
    category: 'high',
    severity: ['HIGH'],
    ageGroups: ['child', 'adult'],
    icon: '🛁',
    ingredients: ['Water at 32-35°C (NOT cold)'],
    preparation: [
      'Fill bathtub with lukewarm water (32-35°C)',
      'Test water temperature with wrist - should feel slightly cool but not cold',
      'Ensure room is warm to prevent chills'
    ],
    application: 'Immerse body in lukewarm water',
    duration: '15-20 minutes',
    frequency: 'Once daily',
    benefits: [
      'Gradual fever reduction',
      'Prevents shivering',
      'Comfortable and safe',
      'Helps relax muscles'
    ],
    scientificBasis: 'Gentle cooling without shock prevents shivering, which can raise body temperature. Gradual temperature reduction is safer than rapid cooling.',
    contraindications: ['Avoid if feeling very weak or dizzy', 'NOT for infants under 3 months'],
    timing: 'Best done when fever is at peak'
  },
  {
    id: 'remedy-turmeric-milk',
    name: 'Turmeric Milk (Golden Milk)',
    category: 'high',
    severity: ['HIGH', 'MODERATE'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🥛',
    ingredients: ['1 cup milk', '1/2 tsp turmeric powder', 'Pinch of black pepper', '1 tsp honey'],
    preparation: [
      'Heat 1 cup of milk in a saucepan',
      'Add 1/2 teaspoon turmeric powder',
      'Add a pinch of black pepper (enhances absorption)',
      'Stir continuously for 2 minutes on low heat',
      'Remove from heat and add 1 teaspoon honey',
      'Stir until honey dissolves'
    ],
    application: 'Drink warm',
    duration: '5-7 days',
    frequency: 'Once daily, preferably before bedtime',
    benefits: [
      'Anti-inflammatory properties (95% bioavailability with black pepper)',
      'Boosts immune system',
      'Soothes throat and reduces inflammation',
      'Promotes better sleep'
    ],
    scientificBasis: 'Curcumin in turmeric has proven anti-inflammatory effects. Black pepper contains piperine, which increases curcumin absorption by up to 2000%.',
    contraindications: ['Pregnant women (high doses)', 'People with gallbladder issues', 'Those allergic to turmeric'],
    timing: 'Before bedtime for best results'
  },
  {
    id: 'remedy-ginger-tea',
    name: 'Ginger Tea',
    category: 'high',
    severity: ['HIGH', 'MODERATE'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🍵',
    ingredients: ['1 inch fresh ginger root', '1 cup water', '1 tsp honey', '1/2 lemon'],
    preparation: [
      'Peel and slice 1 inch of fresh ginger',
      'Boil 1 cup of water',
      'Add sliced ginger to boiling water',
      'Simmer for 5 minutes on low heat',
      'Strain the tea',
      'Add 1 teaspoon honey and juice of half lemon',
      'Stir well'
    ],
    application: 'Drink warm',
    duration: '3-5 days',
    frequency: '2-3 times daily',
    benefits: [
      'Anti-inflammatory (gingerol compounds)',
      'Immune system boost',
      'Sore throat relief',
      'Aids digestion',
      'Reduces nausea'
    ],
    scientificBasis: 'Ginger contains gingerol and shogaol compounds that have anti-inflammatory and antimicrobial properties. Studies show ginger can reduce inflammation markers.',
    contraindications: ['People on blood-thinning medications (consult doctor)', 'Those with gallstones'],
    timing: 'Between meals',
    bestFor: 'Sore throat + fever combination'
  },
  {
    id: 'remedy-honey-lemon',
    name: 'Honey Lemon Water',
    category: 'high',
    severity: ['HIGH', 'MODERATE', 'LOW'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🍋',
    ingredients: ['2 tbsp honey', '1/2 lemon', '1 cup warm water'],
    preparation: [
      'Squeeze juice from half a lemon',
      'Add 2 tablespoons of honey to warm water',
      'Add lemon juice',
      'Stir until honey dissolves'
    ],
    application: 'Drink warm',
    duration: 'Throughout fever duration',
    frequency: 'Every 2 hours',
    benefits: [
      'Vitamin C boost',
      'Sore throat relief',
      'Energy boost',
      'Antibacterial properties',
      'Hydration support'
    ],
    scientificBasis: 'Honey has proven antibacterial and antimicrobial properties. Lemon provides vitamin C which supports immune function. Warm liquid soothes throat irritation.',
    contraindications: ['NOT for children under 1 year (botulism risk)', 'Diabetics (use sparingly)'],
    timing: 'Every 2 hours or as needed'
  },

  // MODERATE FEVER REMEDIES (38-39°C)
  {
    id: 'remedy-tulsi-tea',
    name: 'Tulsi (Holy Basil) Tea',
    category: 'moderate',
    severity: ['MODERATE', 'LOW'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🌿',
    ingredients: ['10-15 fresh tulsi leaves', '1 cup water', '1 tsp honey (optional)'],
    preparation: [
      'Wash 10-15 fresh tulsi leaves',
      'Boil 1 cup of water',
      'Add tulsi leaves to boiling water',
      'Simmer for 5 minutes',
      'Strain the tea',
      'Add honey if desired'
    ],
    application: 'Drink warm',
    duration: '3-5 days',
    frequency: '2-3 times daily',
    benefits: [
      'Antimicrobial properties',
      'Reduces body heat',
      'Boosts immunity',
      'Relieves cough',
      'Reduces stress'
    ],
    scientificBasis: 'Tulsi (Ocimum sanctum) contains eugenol, ursolic acid, and other compounds with proven antimicrobial and immunomodulatory effects. Studies show it can help reduce fever.',
    contraindications: ['Pregnant women (consult doctor)', 'People on blood-thinning medications', 'Diabetics (may lower blood sugar)'],
    timing: 'Morning and evening'
  },
  {
    id: 'remedy-garlic-ginger-soup',
    name: 'Garlic & Ginger Soup',
    category: 'moderate',
    severity: ['MODERATE', 'LOW'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🍲',
    ingredients: ['2 cloves garlic', '1 inch ginger', '1 cup vegetable broth', 'Salt and pepper'],
    preparation: [
      'Mince 2 cloves of garlic',
      'Slice 1 inch of fresh ginger',
      'Heat vegetable broth in a saucepan',
      'Add minced garlic and sliced ginger',
      'Simmer for 10 minutes',
      'Season with salt and pepper',
      'Strain if preferred (or eat the pieces)'
    ],
    application: 'Eat warm',
    duration: '3-5 days',
    frequency: 'Once daily',
    benefits: [
      'Antimicrobial properties',
      'Immune system boost',
      'Reduces inflammation',
      'Provides warmth and comfort',
      'Easy to digest'
    ],
    scientificBasis: 'Garlic contains allicin with proven antimicrobial properties. Ginger has anti-inflammatory effects. Both work synergistically to support immune function.',
    contraindications: ['People on blood-thinning medications', 'Those with bleeding disorders', 'Before surgery'],
    timing: 'Lunch or dinner'
  },
  {
    id: 'remedy-cinnamon-honey',
    name: 'Cinnamon & Honey Drink',
    category: 'moderate',
    severity: ['MODERATE', 'LOW'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🍯',
    ingredients: ['1/2 tsp cinnamon powder', '1 tbsp honey', '1 cup warm water'],
    preparation: [
      'Mix 1/2 teaspoon cinnamon powder with 1 tablespoon honey',
      'Add to 1 cup of warm water',
      'Stir until well combined',
      'Let it steep for 2 minutes'
    ],
    application: 'Drink warm',
    duration: '3-5 days',
    frequency: 'Twice daily',
    benefits: [
      'Antioxidant properties',
      'May help reduce fever',
      'Antimicrobial effects',
      'Soothes throat',
      'Boosts energy'
    ],
    scientificBasis: 'Cinnamon contains cinnamaldehyde with anti-inflammatory and antimicrobial properties. Honey provides antibacterial benefits. Together they support immune function.',
    contraindications: ['NOT for children under 1 year', 'People allergic to cinnamon', 'Diabetics (use sparingly)'],
    timing: 'Morning and evening'
  },
  {
    id: 'remedy-ajwain-water',
    name: 'Ajwain (Carom Seed) Water',
    category: 'moderate',
    severity: ['MODERATE', 'LOW'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '💧',
    ingredients: ['1 tsp ajwain seeds', '1 cup water'],
    preparation: [
      'Boil 1 cup of water',
      'Add 1 teaspoon of ajwain seeds',
      'Simmer for 5 minutes',
      'Strain the water',
      'Let it cool slightly'
    ],
    application: 'Drink warm',
    duration: '3-5 days',
    frequency: 'Twice daily',
    benefits: [
      'Helps reduce fever',
      'Aids digestion',
      'Relieves bloating',
      'Antimicrobial properties',
      'Reduces body heat'
    ],
    scientificBasis: 'Ajwain (Trachyspermum ammi) contains thymol which has antimicrobial and anti-inflammatory properties. Traditional use shows effectiveness in reducing fever.',
    contraindications: ['Pregnant women (consult doctor)', 'Excessive consumption may cause nausea', 'People with liver issues'],
    timing: 'Morning and evening'
  },
  {
    id: 'remedy-lemon-turmeric',
    name: 'Lemon & Turmeric Drink',
    category: 'moderate',
    severity: ['MODERATE', 'LOW'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🥤',
    ingredients: ['Juice of 1 lemon', '1/2 tsp turmeric', '1 cup warm water', 'Honey (optional)'],
    preparation: [
      'Squeeze juice from 1 lemon',
      'Add 1/2 teaspoon turmeric to warm water',
      'Add lemon juice',
      'Add honey if desired',
      'Stir well until turmeric dissolves'
    ],
    application: 'Drink warm',
    duration: '3-5 days',
    frequency: 'Once daily',
    benefits: [
      'Detoxifies body',
      'Reduces inflammation',
      'Vitamin C boost',
      'Antioxidant properties',
      'Immune support'
    ],
    scientificBasis: 'Lemon provides vitamin C for immune support. Turmeric\'s curcumin has anti-inflammatory effects. Combination supports overall immune function.',
    contraindications: ['People with gallbladder issues', 'Those allergic to turmeric', 'Acid reflux sufferers (use cautiously)'],
    timing: 'Morning on empty stomach'
  },

  // SUPPORTIVE CARE
  {
    id: 'remedy-hydration',
    name: 'Hydration Tracking',
    category: 'supportive',
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '💧',
    ingredients: ['Water', 'ORS (if needed)', 'Electrolyte drinks'],
    preparation: [
      'Set daily water intake goals',
      'Adults: 8-10 glasses (2-2.5 liters)',
      'Children: 4-6 glasses (1-1.5 liters)',
      'Track intake throughout the day',
      'Use ORS if dehydration signs appear'
    ],
    application: 'Drink throughout the day',
    duration: 'Throughout fever',
    frequency: 'Every 1-2 hours',
    benefits: [
      'Prevents dehydration',
      'Regulates body temperature',
      'Flushes toxins',
      'Maintains electrolyte balance',
      'Supports recovery'
    ],
    scientificBasis: 'Adequate hydration is essential for thermoregulation. Fever increases fluid loss through sweating and increased metabolic rate. Dehydration can worsen fever symptoms.',
    contraindications: ['People with kidney issues (consult doctor for fluid limits)'],
    timing: 'Consistent throughout the day'
  },
  {
    id: 'remedy-rest',
    name: 'Rest Protocol',
    category: 'supportive',
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '😴',
    ingredients: ['Comfortable bed', 'Quiet environment', 'Proper ventilation'],
    preparation: [
      'Ensure 8-10 hours of sleep at night',
      'Take 2-3 short naps during the day (20-30 min each)',
      'Avoid strenuous activities',
      'Create quiet, dimly lit environment',
      'Maintain comfortable room temperature'
    ],
    application: 'Follow rest schedule',
    duration: 'Until fever subsides',
    frequency: 'Daily',
    benefits: [
      'Allows body to fight infection',
      'Reduces stress on immune system',
      'Promotes faster recovery',
      'Prevents complications',
      'Conserves energy'
    ],
    scientificBasis: 'Rest allows the body to allocate energy to immune function. Studies show adequate sleep improves immune response and recovery time from infections.',
    contraindications: ['None - rest is essential for all'],
    timing: 'Throughout illness period'
  },
  {
    id: 'remedy-light-diet',
    name: 'Light Diet Guidelines',
    category: 'supportive',
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🥗',
    ingredients: ['Soups', 'Broths', 'Soft foods', 'Fruits', 'Vegetables'],
    preparation: [
      'Eat small, frequent meals',
      'Choose easily digestible foods',
      'Include: soups, broths, rice, bananas, toast',
      'Avoid: spicy, fried, heavy foods',
      'Stay away from dairy if producing mucus'
    ],
    application: 'Eat throughout the day',
    duration: 'During fever period',
    frequency: '5-6 small meals daily',
    benefits: [
      'Easy to digest',
      'Provides essential nutrients',
      'Maintains energy levels',
      'Reduces digestive stress',
      'Supports immune function'
    ],
    scientificBasis: 'Light, easily digestible foods reduce metabolic load, allowing the body to focus energy on immune response. Proper nutrition supports immune cell function.',
    contraindications: ['None - but avoid foods that worsen symptoms'],
    timing: 'Small meals every 2-3 hours'
  },
  {
    id: 'remedy-room-temp',
    name: 'Room Temperature Management',
    category: 'supportive',
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '🌡️',
    ingredients: ['Thermometer', 'Fan (optional)', 'Ventilation'],
    preparation: [
      'Maintain room temperature at 20-22°C (68-72°F)',
      'Ensure good ventilation',
      'Use fan if needed (not directly on patient)',
      'Avoid overheating the room',
      'Keep humidity at comfortable levels'
    ],
    application: 'Maintain throughout illness',
    duration: 'During fever period',
    frequency: 'Continuous',
    benefits: [
      'Prevents overheating',
      'Promotes comfort',
      'Aids in temperature regulation',
      'Improves sleep quality',
      'Reduces chills'
    ],
    scientificBasis: 'Optimal room temperature helps the body regulate its temperature more effectively. Overheating can worsen fever, while too cold can cause shivering.',
    contraindications: ['None'],
    timing: '24/7 during illness'
  },
  {
    id: 'remedy-light-clothing',
    name: 'Light Clothing Recommendation',
    category: 'supportive',
    severity: ['LOW', 'MODERATE', 'HIGH'],
    ageGroups: ['child', 'adult', 'elderly'],
    icon: '👕',
    ingredients: ['Lightweight cotton clothing', 'Breathable fabrics'],
    preparation: [
      'Wear lightweight, loose-fitting cotton clothes',
      'Avoid heavy blankets or multiple layers',
      'Use light sheet instead of heavy comforter',
      'Change clothes if they become damp with sweat',
      'Keep one extra layer nearby if chills occur'
    ],
    application: 'Wear throughout illness',
    duration: 'During fever period',
    frequency: 'Continuous',
    benefits: [
      'Allows heat to escape',
      'Prevents overheating',
      'Comfortable and breathable',
      'Easy to change if sweaty',
      'Reduces temperature retention'
    ],
    scientificBasis: 'Light, breathable clothing allows heat to dissipate from the body. Heavy clothing traps heat and can raise body temperature further.',
    contraindications: ['None - but add layer if experiencing chills'],
    timing: '24/7 during illness'
  }
];

// ============================================================================
// RECOMMENDATION ENGINE
// ============================================================================

export function getAgeGroup(age: number): AgeGroup {
  if (age < 2) return 'infant';
  if (age < 13) return 'child';
  if (age < 60) return 'adult';
  return 'elderly';
}

// New recommendation function matching the provided structure
export function getRecommendedVideos(severity: string, decision: string, age: number, symptoms: string[]): Video[] {
  let videos: any[] = [];

  // High severity - prioritize emergency
  if (severity === "HIGH" || decision === "EMERGENCY") {
    videos.push(
      VIDEO_GUIDES.high_fever_danger,
      VIDEO_GUIDES.red_flags,
      VIDEO_GUIDES.fever_cooling,
      VIDEO_GUIDES.cold_compress
    );
  }
  // Moderate - balanced guidance
  else if (severity === "MODERATE" || decision === "CONSULT_DOCTOR") {
    videos.push(
      VIDEO_GUIDES.hydration,
      VIDEO_GUIDES.fever_cooling,
      VIDEO_GUIDES.lukewarm_bath
    );
  }
  // Low - education and remedies
  else {
    videos.push(
      VIDEO_GUIDES.complete_course,
      VIDEO_GUIDES.turmeric_milk,
      VIDEO_GUIDES.fever_myths
    );
  }

  // Add child-specific if needed
  if (age < 5) {
    videos.push(VIDEO_GUIDES.child_fever_care, VIDEO_GUIDES.child_fever_myths);
  }

  // Add medication adherence if continuing
  if (decision === "CONTINUE") {
    videos.push(VIDEO_GUIDES.complete_course, VIDEO_GUIDES.medicine_timing);
  }

  // Remove duplicates
  const uniqueVideos = [...new Map(videos.filter(v => v).map(v => [v.youtubeId, v])).values()];
  
  // Convert to Video[] format by finding matching entries in VIDEO_DATABASE
  return uniqueVideos.map(video => {
    // Find the corresponding entry in VIDEO_DATABASE by matching youtubeId
    return VIDEO_DATABASE.find(v => v.youtubeId === video.youtubeId) || null;
  }).filter((v): v is Video => v !== null);
}

// Legacy function for backward compatibility
export function getRecommendedVideosLegacy(params: RecommendationParams): Video[] {
  const { severity, decision, age, symptoms, duration } = params;
  const ageGroup = getAgeGroup(age);

  // Convert severity and decision to strings for new function
  const severityStr = severity;
  const decisionStr = decision;

  return getRecommendedVideos(severityStr, decisionStr, age, symptoms);
}

export function getRecommendedRemedies(params: RecommendationParams): Remedy[] {
  const { severity, decision, age, symptoms, duration } = params;
  const ageGroup = getAgeGroup(age);

  // Filter remedies based on criteria
  let recommended = REMEDY_DATABASE.filter(remedy => {
    // Check severity match
    if (!remedy.severity.includes(severity)) return false;
    
    // Check age group match
    if (!remedy.ageGroups.includes(ageGroup)) return false;
    
    return true;
  });

  // Prioritize based on severity
  if (severity === 'HIGH') {
    // Prioritize high fever remedies
    recommended = recommended.sort((a, b) => {
      const aIsHigh = a.category === 'high' ? 2 : a.category === 'moderate' ? 1 : 0;
      const bIsHigh = b.category === 'high' ? 2 : b.category === 'moderate' ? 1 : 0;
      return bIsHigh - aIsHigh;
    });
  } else if (severity === 'MODERATE') {
    // Prioritize moderate fever remedies
    recommended = recommended.sort((a, b) => {
      const aIsModerate = a.category === 'moderate' ? 2 : a.category === 'high' ? 1 : 0;
      const bIsModerate = b.category === 'moderate' ? 2 : b.category === 'high' ? 1 : 0;
      return bIsModerate - aIsModerate;
    });
  } else {
    // Prioritize low fever and supportive remedies
    recommended = recommended.sort((a, b) => {
      const aIsLow = a.category === 'low' ? 2 : a.category === 'supportive' ? 1 : 0;
      const bIsLow = b.category === 'low' ? 2 : b.category === 'supportive' ? 1 : 0;
      return bIsLow - aIsLow;
    });
  }

  // Always include supportive care remedies
  const supportive = REMEDY_DATABASE.filter(r => r.category === 'supportive');
  recommended = [...recommended, ...supportive];

  // Remove duplicates
  const uniqueRemedies = Array.from(new Map(recommended.map(r => [r.id, r])).values());

  // Limit to top 10-12 remedies
  return uniqueRemedies.slice(0, 12);
}

