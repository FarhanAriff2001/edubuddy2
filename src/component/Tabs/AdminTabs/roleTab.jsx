import React, { useState } from 'react'

const RoleTab = () => {

    const roleTabs = [
        { name: "Role" },
        { name: "Change Password" },
        { name: "Give Role" },
    ];

    return (
        <>
            {
                roleTabs.map((roletab) => (
                    <div key={"Role"} className="text-gray-800 dark:text-gray-800">
                        <span className="font-medium">{roletab.name}</span>
                    </div>
                ))
            }
        </>
    );
}

export default RoleTab;
