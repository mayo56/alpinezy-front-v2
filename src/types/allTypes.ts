
export type UserMe = {
    user_id:string, username:string, user_code:string;
    flags_list: Flags[] | string[]; 
}

export type Flags = {
    flag_id: string; flag_name: string;
    svg_path: Array<string>; svg_fill: Array<string>;
};