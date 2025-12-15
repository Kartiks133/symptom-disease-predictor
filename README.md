# 🩺 Symptom to Disease Predictor

A full-stack web application that predicts possible diseases based on user-selected symptoms and provides general medication and nutrition recommendations.  
The project is designed for informational use and is deployed live on Vercel.

---

## 📌 Problem Statement

Many individuals find it difficult to interpret what a combination of symptoms may indicate and what basic steps they can take before seeking medical attention.  
This project addresses that gap by offering **non-diagnostic, informational guidance** through symptom-based disease prediction and general care suggestions.

---

## 🎯 Features

- Multi-symptom selection through an intuitive user interface  
- Prediction of possible diseases using rule-based logic  
- Suggestions for **general, non-prescription medications**  
- Nutrition and dietary recommendations for supportive care  
- Fully responsive dark-themed UI  
- Live deployment on Vercel  

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes (Serverless)

### Deployment
- Vercel

---

## ⚙️ How It Works

1. Users select symptoms from a predefined list.
2. Each symptom maps to one or more possible diseases.
3. Diseases are scored based on symptom overlap.
4. The top matching conditions are returned along with:
   - A confidence score
   - General medication suggestions
   - Nutrition recommendations
5. Results are displayed in a clean, dark-themed interface.

This approach ensures the system is:
- Explainable
- Lightweight
- Suitable for serverless deployment

---

## ⚠️ Disclaimer

This application is intended **for informational purposes only**.  
It does **not** provide medical diagnosis or treatment advice.  
Users should consult a licensed medical professional if symptoms persist or worsen.

---

## 🚀 Live Demo

👉 **Live Application:**  
https://symptom-disease-predictor.vercel.app/

---

## 📁 Project Structure

src/
├── app/
│ ├── api/
│ │ └── predict/
│ │ └── route.ts
│ └── page.tsx
├── data/
│ ├── symptoms.ts
│ ├── diseases.ts
│ └── mappings.ts
└── lib/
└── predictor.ts


---

## 🧪 Local Setup

Clone the repository and run the project locally:

```bash
git clone https://github.com/Kartiks133/symptom-disease-predictor.git
cd symptom-disease-predictor
npm install
npm run dev
http://localhost:3000


📈 Future Enhancements

Age and severity-based weighting

Confidence percentage visualization

Expanded symptom and disease dataset

Dark / light theme toggle

👨‍💻 Author

Kartik Shrivastava
B.Tech CSE Student
VIT Bhopal
