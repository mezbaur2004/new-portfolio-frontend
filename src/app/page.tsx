import React from 'react';
import Overview from "@/component/main/Overview";
import Education from "@/component/main/Education";
import Experience from "@/component/main/Experience";
import Publication from "@/component/main/Publication";
import Achievement from "@/component/main/Achievement";
import Media from "@/component/main/Media";

const Page = () => {
    return (
        <div>
            <Overview/>
            <Education/>
            <Experience/>
            <Publication/>
            <Achievement/>
            <Media/>
        </div>
    );
};

export default Page;