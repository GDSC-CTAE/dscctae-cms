import React from 'react';

export const SidebarData = [
    {
        title:'Home',
        subNav:[
            {
                title:'Create Event',
                path:"/create-event"
            },
            {
                title:'/View Events',
                path:'view-all-events'
            }
        ]
        
    },
    {
        title:'Events',
        subNav:[
            {
                title:'Create Event',
                path:"/create-event"
            },
            {
                title:'/View Events',
                path:'view-all-events'
            }
        ]
    },
    {
        title:'Projects',
        subNav:[
            {
                title:'Create Project',
                path:'/create-project'
            },
            {
                title:'/View Projects',
                path:"/view-all-projects"
            }
        ]
    },
    {
        title:'Team Members',
        subnav:[
            {
                title:"Add Team Member",
                path:"/add-team-member",
            },
            {
                title:"View Team Members",
                path:"/view-all-team-members",
            }
        ]
    }
]