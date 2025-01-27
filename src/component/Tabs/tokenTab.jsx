import React, { useState } from 'react'

const TokenTab = () => {

    const tokenTabs = [
        { name: "Token" },
        { name: "Change Password" },
        { name: "Logout" },
    ];

    return (
        <>
            {
                tokenTabs.map((tokentab) => (
                    <div key={"Token"} className="text-gray-800 dark:text-gray-800">
                        <span className="font-medium">{tokentab.name}</span>
                    </div>
                ))
            }
        </>
    );
}

export default TokenTab;
