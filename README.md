# 🩺 Symptom to Disease Predictor

A full-stack web application that predicts possible diseases based on user-selected symptoms and provides general medication and nutrition suggestions.  
Built with modern web technologies and deployed on Vercel.

---

## 📌 Problem Statement

People often struggle to understand what a combination of symptoms might indicate and what basic steps they can take before consulting a medical professional.  
This project aims to provide **informational, non-diagnostic guidance** by mapping symptoms to possible conditions and suggesting general care options.

---

## 🎯 Features

- Select multiple symptoms through an intuitive UI
- Predicts top possible diseases using rule-based logic
- Suggests **general (non-prescription) medications**
- Provides nutrition and dietary recommendations
- Dark-themed, responsive, and user-friendly interface
- Deployed on Vercel for easy access

---

## 🛠️ Tech Stack

**Frontend**
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

**Backend**
- Next.js API Routes (Serverless)

**Deployment**
- Vercel

---

## ⚙️ How It Works

1. The user selects symptoms from a predefined list.
2. Each symptom maps to one or more diseases using a rule-based mapping.
3. Diseases are scored based on symptom overlap.
4. The top matching diseases are returned with:
   - Confidence score
   - General medication suggestions
   - Nutrition advice
5. Results are displayed in a clean, dark-themed UI.

This approach ensures the system is:
- Explainable
- Lightweight
- Suitable for serverless deployment

---

## ⚠️ Disclaimer

This application is intended **for informational purposes only**.  
It is **not a substitute for professional medical advice, diagnosis, or treatment**.  
Users are advised to consult a licensed medical professional if symptoms persist or worsen.

---

## 🚀 Live Demo

👉 *(Add your Vercel deployment link here)*  

---

## 📁 Project Structure



src/
├── app/
│ ├── api/predict/route.ts
│ └── page.tsx
├── data/
│ ├── symptoms.ts
│ ├── diseases.ts
│ └── mappings.ts
└── lib/
└── predictor.ts


---

## 🧪 Local Setup

```bash
git clone https://github.com/your-username/symptom-disease-predictor.git
cd symptom-disease-predictor
npm install
npm run dev


Open:

http://localhost:3000

📈 Future Enhancements

Age and severity-based weighting

Confidence percentage visualization

Larger symptom and disease dataset

Dark/light theme toggle

👨‍💻 Author

Kartik
B.Tech CSE Student
VIT Bhopal



