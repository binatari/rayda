export const showInitials = (name) =>{
const iniitials = name?.split(' ').map((text)=>text.charAt(0)).join(' ')
return iniitials
}