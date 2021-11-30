import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
export const SidebarData = [
    {
        title:'Home',
        icon:<AiIcons.AiFillHome />,
        subNav:[
            {
                subname:'Create Event',
                path:"/create-event"
            },
            {
                subname:'View Events',
                path:'/view-all-events'
            }
        ]
        
    },
    {
        title:'Events',
        icon:<BsIcons.BsFillCalendarEventFill />,
        subNav:[
            {
                subname:'Create Event',
                path:"/create-event"
            },
            {
                subname:'View Events',
                path:'/view-all-events'
            }
        ]
    },
    {
        title:'Projects',
        icon:<AiIcons.AiFillProject />,
        subNav:[
            {
                subname:'Create Project',
                path:'/dash-board/create-project'
            },
            {
                subname:'View Projects',
                path:"/dash-board/view-all-project"
            }
        ]
    },
    {
        title:'Team Members',
        icon : <IoIcons.IoIosPeople />,
        subNav:[
            {
                subname:"Add Team Member",
                path:'/dash-board/add-team-member'
            },
            {
                subname:"View Team Members",
                path:"/dash-board/view-all-team-members",
            }
        ]
    }
]