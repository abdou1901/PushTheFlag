# **Full API Contract**  
*(GitHub OAuth2 + PKCE, JWT, Competitive Coding/CTF APIs)*  

## **🔐 Authentication Flow**  
### **1. Frontend Initiation**  
```bash
# Step 1: Frontend requests PKCE params from backend
GET /auth/github/init
```
**Response:**  
```json
{
  "authorizationUrl": "https://github.com/login/oauth/authorize?client_id=...&state=XYZ&code_challenge=ABC...",
  "state": "XYZ",  // CSRF token
  "codeVerifier": "ABC..."  // Store securely (HTTP-only cookie)
}
```

### **2. GitHub OAuth Redirect (Frontend → GitHub)**  
```bash
# Frontend redirects user to:
GET https://github.com/login/oauth/authorize?
  client_id=<CLIENT_ID>&
  redirect_uri=<CALLBACK_URL>&
  state=XYZ&
  code_challenge=ABC...&
  code_challenge_method=S256&
  scope=user:email
```

### **3. Callback Endpoint**  
```bash
# Step 3: GitHub redirects back to your backend
GET /auth/github/callback?
  code=AUTH_CODE&
  state=XYZ
```
**Headers:**  
```
Cookie: code_verifier=ABC...; oauth_state=XYZ
```

**Success Response:**  
- Sets HTTP-only cookies:  
  - `access_token` (JWT, 15min expiry)  
  - `refresh_token` (JWT, 7d expiry)  
- Redirects to frontend:  
  `302 Redirect → /dashboard?success=true`

**Error Responses:**  
| Code | Body                          |
|------|-------------------------------|
| 400  | `{ "error": "Invalid state" }`|
| 401  | `{ "error": "Code expired" }` |

---

## **🔄 Token Management**  
### **Refresh Tokens**  
```bash
POST /auth/refresh
Headers:
  Cookie: refresh_token=XYZ
```
**Response:**  
```json
{
  "access_token": "NEW_JWT",
  "refresh_token": "NEW_REFRESH_TOKEN"  // Rotated
}
```

### **Logout**  
```bash
POST /auth/logout
Headers:
  Cookie: refresh_token=XYZ
```
**Response:**  
- Clears all auth cookies  
- `204 No Content`

---

## **💻 Competitive Coding APIs**  
### **LeetCode Problems**  
| Endpoint                     | Method | Description                          | Protected |
|------------------------------|--------|--------------------------------------|-----------|
| `/leetcode/problems`          | GET    | List problems (paginated)            | Yes       |
| `/leetcode/problems`          | POST   | Add new problem                      | Yes       |
| `/leetcode/problems/:id`      | GET    | Get problem details                  | Yes       |
| `/leetcode/problems/:id`      | PUT    | Full update (solution, analysis)     | Yes       |

**Example POST Request:**  
```json
{
  "problemId": "42",
  "title": "Trapping Rain Water",
  "difficulty": "HARD",
  "topics": ["array", "two-pointers"],
  "isPremium": false
}
```

### **Codeforces Problems**  
| Endpoint                     | Method | Description                          |
|------------------------------|--------|--------------------------------------|
| `/codeforces/problems`       | GET    | Filter by `?minRating=1600`          |
| `/codeforces/problems`       | POST   | Add problem with contest ID          |

**Example POST Request:**  
```json
{
  "contestId": 1856,
  "index": "C",
  "title": "Heroes' Powers",
  "rating": 1800,
  "tags": ["greedy", "math"]
}
```

---

## **🛡️ CTF Writeups**  
| Endpoint                     | Method | Description                          |
|------------------------------|--------|--------------------------------------|
| `/ctf/writeups`              | GET    | Public writeups (`?category=WEB`)    |
| `/ctf/writeups`              | POST   | Submit writeup (Markdown supported)  |

**Example POST Request:**  
```json
{
  "platform": "HTB",
  "challengeId": "pwnable-123",
  "title": "Buffer Overflow Exploit",
  "category": "PWN",
  "content": "...exploit steps...",
  "isPublic": true
}
```

---

## **🤖 AI Services** *(Rate-Limited)*  
```bash
POST /ai/analyze
Headers:
  Authorization: Bearer <JWT>
Body:
{
  "problemId": "lc-42",
  "prompt": "Optimize time complexity"
}
```
**Response:**  
```json
{
  "analysis": "Use two pointers for O(n) time...",
  "complexity": "O(n)"
}
```

---

## **🔧 Error Handling**  
| Code | Scenario                      | Response Body                     |
|------|-------------------------------|-----------------------------------|
| 401  | Missing/invalid JWT           | `{ "error": "Unauthorized" }`     |
| 403  | Insufficient permissions      | `{ "error": "Premium feature" }`  |
| 429  | Rate limit exceeded           | `{ "error": "Too many requests" }`|

---

## **📜 Full OAuth2 Sequence**  
1. **Frontend** → `GET /auth/github/init` → Gets PKCE params  
2. **Frontend** → Redirect to GitHub with `state` + `code_challenge`  
3. **GitHub** → Redirects to `GET /auth/github/callback?code=XYZ&state=ABC`  
4. **Backend**:  
   - Validates `state` against cookie  
   - Exchanges `code` + `code_verifier` for GitHub `access_token`  
   - Fetches user profile/emails  
   - Issues JWT cookies  
