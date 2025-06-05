import { pushFileToGitHub } from "../../services/pushfiles.service.mjs";
import prisma from "../../config/db.mjs";


export async function pushToGithub(req,res){
    console.log("i'm pushing !!\n",req.body)
    const {files,platform,path} = req.body;
    const userInfo = await prisma.user.findUnique({where:{id:req.user?.id}});
    if(platform !== "leetcode" && platform !== "codeforces"){
        return res.json({pushed:false,message:"Invalid platform name !"});
    }
    if(!userInfo || !userInfo.pat){
        return res.json({pushed:false,message:"Please set your Personal Access Token, and make sure you are logged in !"});
    } 
    const platform_repo = platform+"_repo";

    for(const file in files){
        console.log(userInfo.github_username,userInfo[platform_repo],userInfo.branch_name,
                        path,files[file],userInfo.pat)
        await pushFileToGitHub(userInfo.github_username,userInfo[platform_repo],userInfo.branch_name,
                         path+`${path[path.length-1] == '/'? "":"/"}${file}`,files[file],userInfo.pat, res )
    }
    return res.json({pushed:true , message:`${Object.keys(files).length} Files are pushed successfully !`})
    
}