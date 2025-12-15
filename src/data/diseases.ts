export type DiseaseInfo = {
  name: string;
  medications: string[];
  nutrition: string[];
};

export const diseases: Record<string, DiseaseInfo> = {
  flu: {
    name: "Influenza",
    medications: ["Paracetamol", "Ibuprofen"],
    nutrition: ["Warm fluids", "Vitamin C", "Light soups"]
  },
  cold: {
    name: "Common Cold",
    medications: ["Antihistamines", "Paracetamol"],
    nutrition: ["Herbal tea", "Fruits", "Hydration"]
  },
  migraine: {
    name: "Migraine",
    medications: ["Ibuprofen", "Rest"],
    nutrition: ["Magnesium-rich foods", "Water"]
  }
};
