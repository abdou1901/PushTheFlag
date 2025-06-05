import { updateUser,deleteUser } from "../../services/store/user.store.mjs";


export async function saveUserInfo(req,res){
    const info = req.body;
    console.log(info)
    if(!info.pat){
        return res.json({error:"Missing personal access token!"})
    }
    const newInfo = await updateUser(req.user,info);
    return res.json({user:newInfo});
}

export async function DeleteAccountData(req,res){
    const user = req.user;
    deleteUser(user)
}