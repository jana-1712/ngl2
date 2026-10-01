import {z} from 'zod'
export function vlidateBody(dto,body){
   const result= z.safeparse(dto,body);
   if (result.success===false){
const errMessages = result.error.issues.map(
    issue => `${issue.path[0]}: ${issue.message}`
);

throw new AppError(errMessages.join(', '), 400);
   }
   return result.data;
}