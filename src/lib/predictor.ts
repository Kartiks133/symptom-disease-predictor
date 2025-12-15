import { symptomMap } from "@/data/mappings";
import { diseases } from "@/data/diseases";

export function predictDisease(selectedSymptoms: string[]) {
  const scores: Record<string, number> = {};

  selectedSymptoms.forEach(symptom => {
    const relatedDiseases = symptomMap[symptom];
    if (!relatedDiseases) return;

    relatedDiseases.forEach(disease => {
      scores[disease] = (scores[disease] || 0) + 1;
    });
  });

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score]) => ({
      ...diseases[key],
      confidence: score
    }));
}
