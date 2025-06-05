import prisma from '../../config/db.mjs'


export async function saveLeetcode({result , userID,language}){
    const res = await prisma.solvedLeetcode.create({
        data:{
            userId:userID,
            problem_id:result.meta?.id,
            title:result.meta?.title,
            difficulty:result.meta?.difficulty,
            language:language,
            tags:result?.meta?.tags,
            files:result?.doc?.files,
        }
    })
}

export async function fetchLeetcodeById(problemId,userId){
    const res = await prisma.solvedLeetcode.findFirst({where: {id:Number(problemId),userId}})
    console.log(res)
    return res;
}

export async function fetchAllLeetcode(userId){
    const res= await prisma.solvedLeetcode.findMany({
        where: {userId},
        orderBy:{created_at:"desc"}
    });
    console.log(res);
    return res
}

export async function deleteProblemById(userId , problemId){
    console.log("user : ",userId,",problem id : ",problemId)
    await prisma.solvedLeetcode.delete({where:{id:Number(problemId),userId:userId}});
}

export async function updateProblemById(userId, problemId , newFiles){
    const result = await prisma.solvedLeetcode.update({
        where:{userId:userId,id:parseInt(problemId)},
        data:{files:newFiles}
    })
    return result;
}