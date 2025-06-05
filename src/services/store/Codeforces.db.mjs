import prisma from '../../config/db.mjs'


export async function saveCodeforces({result , userId,language}){
    await prisma.solvedCodeforces.create({
        data:{
            userId:userId,
            contest_id: result.meta.contestId,
            index:result.meta.index,
            title:result.meta?.name,
            difficulty:result.meta?.rating,
            language:language,
            tags:result?.meta?.tags,
            files:result?.doc?.files,
        }
    })
}

export async function fetchCodeforcesById(problemId,userId){
    const res = await prisma.solvedCodeforces.findFirst({where: {id:Number(problemId),userId}})
    console.log(res)
    return res;
}

export async function fetchAllCodeforces(userId){
    const res= await prisma.solvedCodeforces.findMany({
        where: {userId},
        orderBy:{created_at:"desc"}
    });
    return res
}

export async function deleteProblemById(userId , problemId){
    console.log("user : ",userId,",problem id : ",problemId)
    await prisma.solvedCodeforces.delete({where:{id:parseInt(problemId),userId:userId}});
}

export async function updateProblemById(userId, problemId , newFiles){
    const result = await prisma.solvedCodeforces.update({
        where:{userId:userId,id:parseInt(problemId)},
        data:{files:newFiles}
    })
    return result;
}