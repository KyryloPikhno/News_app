import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {newsActions} from "../../redux";
import {NewsCard} from "../NewsCard/NewsCard";
import css from './News.module.css';


const News = () => {
    const {news} = useSelector(state => state.newsReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.news}>
            {news && news.map(oneNews =><NewsCard key={oneNews.id} oneNews={oneNews}/>)}
        </div>
    );
};

export {News};
