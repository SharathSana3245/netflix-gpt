import Dialog from '@mui/material/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { toggleMoviePage, addMoviePageDetail } from '../utils/moviePageSlice';
import { IMG_CDN_URl } from '../utils/constants';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export function MoviePage(props) {
    const dispatch = useDispatch();
    const { movieDetail, moviePage } = useSelector(store => store.moviePage)
    const handleClose = () => {
        dispatch(toggleMoviePage());
        dispatch(addMoviePageDetail(null))
    }
    if(!movieDetail) return null
    return (
        <div>
            <Dialog open={moviePage} onClose={handleClose} maxWidth="md" fullWidth>
                <div className='w-fit-content absolute right-1 bg-black-200'>
                    <IconButton
                        onClick={handleClose}
                        aria-label="close"
                        style={{ color: 'white' }}>
                        <CloseIcon className='cursor-pointer' />
                    </IconButton>
                </div>
                <div className='absolute top-[15%] text-white bg-gradient-to-r from-black m-6 mt-15 p-4 bg-opacity-55 flex flex-col gap-10 rounded-md'>
                    <p className='font-bold text-5xl'>{movieDetail?.title}</p>
                    <p className='w-3/4 italic'>{movieDetail?.overview}</p>
                    <p> {`Released Date - ${movieDetail?.release_date}`}</p>
                    {true?<FavoriteBorderIcon/>: <FavoriteIcon/>}
                   
                </div>
                <img className="" src={`${IMG_CDN_URl}/${movieDetail?.backdrop_path}`} />
            </Dialog>
        </div>
    )
}
