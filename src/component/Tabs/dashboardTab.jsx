import React, { useState } from 'react'

const DashboardTab = () => {

    const dashboardTabs = [
        { name: "Dashboard" },
        { name: "Change Password" },
        { name: "Logout" },
    ];

    return (
        <>
            {
                dashboardTabs.map((dashboardtab) => (
                    <div key={"Dashboard"} className="text-gray-800 dark:text-gray-800">
                        <span className="font-medium">{dashboardtab.name}</span>
                    </div>
                ))
            }
        </>
    );
}

export default DashboardTab;
