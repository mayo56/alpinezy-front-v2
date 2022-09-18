
export type UserMe = {
    username: string; user_id: string; user_code: string;
    system: boolean;
    avatar_url: string; avatar_id: string;
    banner_url: string; banner_id: string;
    server_list:string, friends_list:string;
    flags_list: Array<Flags>;
}

export type Flags = {
    flag_id: string; flag_name: string;
    svg_path: Array<string>; svg_fill: Array<string>;
};