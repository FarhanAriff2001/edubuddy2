import React, { useState } from 'react'

const DocumentTab = () => {

    const documentTabs = [
        { name: "Document" },
        { name: "Change Password" },
        { name: "Logout" },
    ];

    return (
        <>
            {
                documentTabs.map((documenttab) => (
                    <div key={"Documents"} className="text-gray-800 dark:text-gray-800">
                        <span className="font-medium">{documenttab.name}</span>
                    </div>
                ))
            }
        </>
    );
}

export default DocumentTab;
