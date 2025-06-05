import prisma from "../../config/db.mjs";

export async function getUser(user){
    console.log(user)
    let userDB = await prisma.user.findUnique({where:{github_id:user.githubId}});
    if(!userDB){
        userDB = await prisma.user.create({
            data:{
                github_id:user.githubId,
                username:user.username,
                github_username:user.username,
            }
        })
    }
    return userDB;
}

export async function fetchUserInfo(userId){
    let userDB = await prisma.user.findUnique({where:{id:userId}})
    return userDB
}

export async function updateUser(user,info){
    console.log(user);
    try {
        let userDB = await prisma.user.findUnique({where:{id:user.id}});
        if(!userDB){
            throw new Error("You're not authorized");
        }   
        userDB = await prisma.user.update({
            where:{id:user.id},
            data:{
                username:info.username,
                email:info.email,
                pat:info.pat,
                branch_name:info.branch,
                leetcode_repo:info.leetcode_repo,
                codeforces_repo:info.codeforces_repo,
                ctf_repo:info.ctf_repo
            }
        });
        return userDB;
    } catch(err){
        throw err;
    }
}

export async function deleteUser(user){
    await prisma.user.delete({where:{id:user.id}});
    await prisma.solvedCodeforces.deleteMany({where:{userId:user.id}});
    await prisma.solvedLeetcode.deleteMany({where:{userId:user.id}});
    await prisma.ctfWriteup.deleteMany({where:{userId:user.id}})
}