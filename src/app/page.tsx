"use client";

import { useState } from "react";
import { symptoms } from "@/data/symptoms";

export default function Home() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function toggleSymptom(symptom: string) {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  }

  async function handleSubmit() {
    if (selectedSymptoms.length === 0) {
      alert("Select at least one symptom");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: selectedSymptoms })
    });

    const data = await res.json();
    setResults(data);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-6 text-gray-200">
      <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur p-8 rounded-2xl shadow-2xl border border-slate-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-2">
          Symptom to Disease Predictor
        </h1>

        <p className="text-gray-400 mb-8">
          Select your symptoms to receive possible conditions, general
          medications, and nutrition suggestions.
        </p>

        {/* Symptoms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {symptoms.map(symptom => {
            const selected = selectedSymptoms.includes(symptom);

            return (
              <div
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`cursor-pointer rounded-xl p-4 transition-all border
                  ${
                    selected
                      ? "bg-teal-900/40 border-teal-400 shadow-lg shadow-teal-500/20"
                      : "bg-slate-800 border-slate-700 hover:border-teal-500"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition
                      ${
                        selected
                          ? "bg-teal-400 border-teal-400"
                          : "border-gray-500"
                      }`}
                  />
                  <span className="font-medium">{symptom}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-teal-500 text-slate-900 py-3 rounded-xl font-semibold
                     hover:bg-teal-400 transition disabled:opacity-50"
        >
          {loading ? "Analyzing symptoms..." : "Predict Condition"}
        </button>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-teal-300 mb-6">
              Possible Conditions
            </h2>

            <div className="space-y-6">
              {results.map((disease, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border-l-4 border-teal-400 p-6 rounded-xl shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-teal-300">
                      {disease.name}
                    </h3>
                    <span className="text-sm text-gray-400">
                      Confidence: {disease.confidence}
                    </span>
                  </div>

                  <p className="mb-2">
                    <span className="font-semibold text-gray-300">
                      Medications:
                    </span>{" "}
                    {disease.medications.join(", ")}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-300">
                      Nutrition:
                    </span>{" "}
                    {disease.nutrition.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-10 border-t border-slate-700 pt-4">
          ©️Kartik Shrivastava
        </p>
      </div>
    </main>
  );
}
