import { generateDocumentationCodeforces } from "../../services/CodeforcesApiDoc.mjs";
import { saveCodeforces, fetchCodeforcesById, fetchAllCodeforces,
    updateProblemById,deleteProblemById
 } from "../../services/store/Codeforces.db.mjs";

export async function generateCodeforcesDoc(req,res) {
    console.log("received : generating documentation for Codeforeces ")
    try{
        const {url,language,code,userPrefs} = req.body;
        if(!url || !language || !code || !userPrefs){
            return res.status(401).json({error:"Missing required fileds : URL / Code / Language / User Preferences "});
        }
        const result = await generateDocumentationCodeforces({url,code,language , userPrefs});
        if(!result.needsClarification){
            await saveCodeforces({result:result, userId: req.user?.id, language})
        }
        return res.json({result});
    } catch (err){
        console.log("error :",err)
        return res.status(500).json({error:err})
    }
}

export async function getCodeforcesProblemById(req,res){
    try {
        const {problemId} = req.params;
        const userId = req.user.id
        console.log(userId, problemId)
        const result = await fetchCodeforcesById(problemId,userId);
        if(!result){
            return res.status(404).json({error : "Problem with that ID does not exist !"});
        }
        return res.json(result);
    }catch (err){
        console.log(err.message)
        res.json({error:"Unexpected error happened !"})
    }
    
}

export async function getCodeforcesProblems(req,res){
    try {
        const userId = req.user.id;
        const result = await fetchAllCodeforces(userId);
        return res.json(result);
    } catch (err){
        res.json({error:err})
    }
}

export async function deleteCodeforcesProblem(req,res){
    try{
        const {problemId} = req.params 
        await deleteProblemById(req.user?.id,problemId);
        res.json({message:"Problem Deleted successfully!"});
    } catch(err){
        res.json({message:"Unexpected error happened !"});
    }
}

export async function updateCodeforcesProblem(req,res){
    const {newFiles} = req.body
    const {problemId} = req.params
    if(!problemId || !newFiles) return res.json({message:"Missing problme Id or new files object !"});
    try {
        const result =await updateProblemById(req.user?.id,problemId,newFiles);
        console.log(result)
        res.json({message:"Problem Updated Successfully !",data:result})
    } catch (err){
        console.log(err.message);
        res.json({message:"Unexpected error happened"})
    }
}