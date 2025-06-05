import { Router } from "express";
import { generateLeetcodeDoc,getLeetcodeProblemById,
         getLeetcodeProblems,deleteLeetcodeProblem,
        updateLeetcodeProblem } from "../controllers/ai/LeetcodeAiController.mjs";
import { generateCodeforcesDoc ,getCodeforcesProblemById,getCodeforcesProblems,
         updateCodeforcesProblem,deleteCodeforcesProblem
        } from "../controllers/ai/CodeforecesAiController.mjs";
import { requireAuth } from "../middlware/auth/requireAuth.mjs";
import { pushToGithub } from "../controllers/ai/pushfiles.mjs";


const aiRoute = Router();

aiRoute.post('/leetcode/doc',generateLeetcodeDoc);
aiRoute.get('/leetcode/problem/:problemId', getLeetcodeProblemById)
aiRoute.get('/leetcode/problems',getLeetcodeProblems )
aiRoute.delete('/leetcode/problem/:problemId',deleteLeetcodeProblem);
aiRoute.put('/leetcode/problem/:problemId',updateLeetcodeProblem)

aiRoute.post('/codeforces/doc',generateCodeforcesDoc)
aiRoute.get('/codeforces/problem/:problemId', getCodeforcesProblemById)
aiRoute.get('/codeforces/problems',getCodeforcesProblems )
aiRoute.delete('/codeforces/problem/:problemId',deleteCodeforcesProblem);
aiRoute.put('/codeforces/problem/:problemId',updateCodeforcesProblem)


aiRoute.post('/push',requireAuth,pushToGithub)

export default aiRoute;