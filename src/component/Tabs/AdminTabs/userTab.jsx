import React, { useState } from 'react'

const UserTab = () => {

    const userTabs = [
        { name: "User" },
        { name: "Change Password" },
        { name: "Logout" },
    ];

    return (
        <>
            {
                userTabs.map((usertab) => (
                    <div key={"Users"} className="text-gray-800 dark:text-gray-800">
                        <span className="font-medium">{usertab.name}</span>
                    </div>
                ))
            }
        </>
    );
}

export default UserTab;
