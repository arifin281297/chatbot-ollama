# Chatbot AI Sederhana

Project ini adalah chatbot AI sederhana menggunakan **Ollama (local AI)**.

---

# Teknologi yang digunakan

- Node.js
- Express.js
- Axios
- HTML, CSS, JavaScript
- Ollama (Local AI)
- Model: phi 

---

# Fitur

- Chat dengan AI secara lokal (tanpa API key)
- Respons cepat menggunakan model ringan
- Tidak membutuhkan internet untuk AI (setelah model di-download)
- UI sederhana dan ringan
- Full local development

---

# Requirement

Sebelum menjalankan project, pastikan sudah install:

## 1. Ollama
Download:
https://ollama.com

---

# Install Model AI

Gunakan model ringan **phi**:

```bash
ollama pull phi
```

Cek model sudah terinstall:

```bash
ollama list
```

---

# Cara Menjalankan Project

## 1. Jalankan Ollama (otomatis background)
Pastikan Ollama aktif:

cukup buka Ollama di PC (biasanya auto jalan)

---

## 2. Masuk ke folder project

```bash
cd chatbot-ollama
```

---

## 3. Install dependency

```bash
npm install
```

---

## 4. Jalankan server

```bash
node server.js
```

---

## 5. Buka di browser

```
http://localhost:4000
```

---

# 📁 Struktur Project

```
chatbot-ollama/
│
├── server.js
├── package.json
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

---

# Cara Kerja

```
User (Browser)
   ↓
Node.js (Express Server)
   ↓
Ollama API (localhost:11434)
   ↓
Model phi
   ↓
Response ke User
```

---

# Catatan

- Model **phi** sangat ringan dan cocok untuk laptop spek rendah
- Semua proses berjalan **100% lokal**
- Tidak ada API key

---

# Author

## Ahmad Zainul Arifin