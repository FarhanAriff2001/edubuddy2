import React, { useState } from 'react'

const NotificationTab = () => {

    const notificationTabs = [
        { name: "Notification" },
        { name: "Change Password" },
        { name: "Logout" },
    ];

    return (
        <>
            {
                notificationTabs.map((notificationtab) => (
                    <div key={"Users"} className="text-gray-800 dark:text-gray-800">
                        <span className="font-medium">{notificationtab.name}</span>
                    </div>
                ))
            }
        </>
    );
}

export default NotificationTab;
