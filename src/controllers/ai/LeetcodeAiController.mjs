import { generateDocumentationLeetcode } from "../../services/LeetcodeApiDoc.mjs";
import { saveLeetcode, fetchLeetcodeById,fetchAllLeetcode,
    deleteProblemById,updateProblemById} from "../../services/store/Leetcode.db.mjs";

export async function generateLeetcodeDoc(req,res) {
    console.log("received : generating documentation")
    try{
        const {url,language,code,userPrefs} = req.body;
        if(!url || !language || !code || !userPrefs){
            return res.status(401).json({error:"Missing required fileds : URL / Code / Language / User Preferences "});
        }
        const result = await generateDocumentationLeetcode({url,code,language , userPrefs});
        if(!result?.needsClarification){
            await saveLeetcode({result:result,userID:req.user?.id,language});
        }
        return res.json({result});
    } catch (err){
        return res.status(500).json({error:err})
    }
}

export async function getLeetcodeProblemById(req,res){
    try {
        const {problemId} = req.params;
        const userId = req.user.id
        console.log(userId, problemId)
        const result = await fetchLeetcodeById(problemId,userId);
        console.log("from the main function ",res)
        if(!result){
            return res.status(404).json({error : "Problem with that ID does not exist !"});
        }
        return res.json(result);
    }catch (err){
        console.log(err.message)
        res.json({error:"Unexpected error happened !"})
    }
    
}

export async function getLeetcodeProblems(req,res){
    try {
        const userId = req.user.id;
        const result = await fetchAllLeetcode(userId);
        return res.json(result);
    } catch (err){
        console.log(err.message)
        res.json({error:"Unexpected error happened !"})
    }
}

export async function deleteLeetcodeProblem(req,res){
    try{
        const {problemId} = req.params 
        await deleteProblemById(req.user?.id,problemId);
        res.json({message:"Problem Deleted successfully!"});
    } catch(err){
        res.json({message:"Unexpected error happened !"});
    }
}

export async function updateLeetcodeProblem(req,res){
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