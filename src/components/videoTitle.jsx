// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import InfoIcon from '@mui/icons-material/Info';

export function VideoTitle({ title, overview }) {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-white text-black rounded-lg p-4 px-14 w-fitcontent text-xl text-black hover:bg-opacity-80'>Play</button>
                <button className='bg-gray-500 text-white rounded-lg p-4 px-14 w-fitcontent text-xl bg-opacity-70 mx-2 hover:bg-opacity-80'>More Info</button>
            </div>
        </div>
    )
}
