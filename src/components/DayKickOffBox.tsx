const DayKickOffBox = () => {
    return <div className="bg-pink-700 text-white p-2 text-md font-light">
        <div className="flex flex-row space-between">
            <img src="/src/assets/page1assets/LOS_TALK.jpg" alt="Los" className="w-1/3 object-center object-cover h-full" />

            <div className="mx-4">
                <p className="mb-3">Los (@downloadlos) tee’d us up with a
                    live-code demo where he rebuilt his
                    viral iOS AI-powered dating app in
                    Swift. After talks, hackers formed
                    teams and began building.</p>
                <p>Bellies were filled with hackersnacks,
                    coffee, & pizza at lunchtime. It was
                    primetime for collaboration as builders
                    learned new tools and helped to deploy
                    eachother’s projects
                </p>
            </div>
            <img src="src/assets/page1assets/Fractal_scene.jpeg" alt="Los" className="w-1/3 object-fit  max-h-full" />

        </div>
    </div>
}

export default DayKickOffBox;