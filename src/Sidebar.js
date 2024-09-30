import { AiOutlineHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdOutlineImportExport } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import { MdInsertPageBreak } from "react-icons/md";

export const sidebar = [
    {
        name:"Home",
        icon:<AiOutlineHome />,
        className:"sidebar",
        path:'/'
    },
    {
        name:"Search",
        icon:<CiSearch/>,
        className:"sidebar",
        path:'/search'
    },
    {
        name:"Members",
        icon:<MdOutlineGroups2 /> ,
        className:"sidebar",
        path:'/members'
    },
    {
        name:"Import/Export",
        icon:<MdOutlineImportExport />,
        className:"sidebar",
        path:'/importExport'
    },
    {
        name:"Summary",
        icon:< MdInsertPageBreak/>,
        className:"sidebar",
        path:'/summary'
    }
]