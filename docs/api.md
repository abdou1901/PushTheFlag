
### **Auth**  
- `POST /auth/github`  
- `POST /auth/refresh`  

### **Problems (Competitive Coding)**  
- `GET /problems?platform=CODEFORCES&difficulty=HARD`  
- `POST /problems`  
  ```json
  {
    "platform": "LEETCODE",
    "problemId": "LC-42",
    "title": "Trapping Rain Water",
    "difficulty": "HARD",
    "tags": ["array", "two-pointers"]
  }
  ```
- `PATCH /problems/:id` (update solution/aiAnalysis)  

### **AI Features**  
- `POST /problems/:id/ai` (generate analysis) *(rate-limited)*  
- `GET /ai/suggestions` (recommend similar problems)  

### **CTF**  
- `POST /ctf/writeups`  
  ```json
  {
    "challenge": "HTB-Pwnable",
    "category": "PWN",
    "content": "Exploited via buffer overflow...",
    "isPublic": true
  }
  ```
- `GET /ctf/writeups?category=WEB`  
