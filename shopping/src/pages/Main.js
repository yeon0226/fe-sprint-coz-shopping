import BookmarkList from './BookmarkList';



import ProductList from './ProductList';
import NavModal from '../components/NavModal';

const Main = ({modal, setIsOpen}) => {

return(
    <div className='Main' onClick={()=>{ setIsOpen(false)}}>
    <div className='main-container'>
        <div>
            <h2>상품리스트</h2>
            <ProductList/>
        </div>

        <div>
            <h2>북마크리스트</h2>
            <BookmarkList />
        </div>
    </div>

        {
            modal && <NavModal />
        }
    </div>
    )
}

export default Main;